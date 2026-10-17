import fs from 'fs';
import path from 'path';

function unpack(buffer, offset = 0) {
  const b = buffer[offset++];
  if (b <= 0x7f) return [b, offset];
  if (b >= 0xe0) return [b - 0x100, offset];
  if (b >= 0x80 && b <= 0x8f) {
    const len = b & 0x0f;
    const obj = {};
    for (let i = 0; i < len; i++) {
      const [k, off1] = unpack(buffer, offset);
      const [v, off2] = unpack(buffer, off1);
      obj[k] = v;
      offset = off2;
    }
    return [obj, offset];
  }
  if (b >= 0x90 && b <= 0x9f) {
    const len = b & 0x0f;
    const arr = [];
    for (let i = 0; i < len; i++) {
      const [v, off] = unpack(buffer, offset);
      arr.push(v);
      offset = off;
    }
    return [arr, offset];
  }
  if (b >= 0xa0 && b <= 0xbf) {
    const len = b & 0x1f;
    return [buffer.subarray(offset, offset + len).toString('utf8'), offset + len];
  }
  if (b === 0xc0) return [null, offset];
  if (b === 0xc2) return [false, offset];
  if (b === 0xc3) return [true, offset];
  if (b === 0xca) return [buffer.readFloatBE(offset), offset + 4];
  if (b === 0xcb) return [buffer.readDoubleBE(offset), offset + 8];
  if (b === 0xcc) return [buffer.readUInt8(offset), offset + 1];
  if (b === 0xcd) return [buffer.readUInt16BE(offset), offset + 2];
  if (b === 0xce) return [buffer.readUInt32BE(offset), offset + 4];
  if (b === 0xd0) return [buffer.readInt8(offset), offset + 1];
  if (b === 0xd1) return [buffer.readInt16BE(offset), offset + 2];
  if (b === 0xd2) return [buffer.readInt32BE(offset), offset + 4];
  if (b === 0xd9) {
    const len = buffer.readUInt8(offset);
    return [buffer.subarray(offset + 1, offset + 1 + len).toString('utf8'), offset + 1 + len];
  }
  if (b === 0xdc) {
    const len = buffer.readUInt16BE(offset);
    offset += 2;
    const arr = [];
    for (let i = 0; i < len; i++) {
      const [v, off] = unpack(buffer, offset);
      arr.push(v);
      offset = off;
    }
    return [arr, offset];
  }
  if (b === 0xc4) {
    const len = buffer.readUInt8(offset);
    return [buffer.subarray(offset + 1, offset + 1 + len), offset + 1 + len];
  }
  if (b === 0xc5) {
    const len = buffer.readUInt16BE(offset);
    return [buffer.subarray(offset + 2, offset + 2 + len), offset + 2 + len];
  }
  if (b === 0xc6) {
    const len = buffer.readUInt32BE(offset);
    return [buffer.subarray(offset + 4, offset + 4 + len), offset + 4 + len];
  }
  throw new Error('Unhandled byte 0x' + b.toString(16) + ' at ' + (offset - 1));
}

function saveBmp(w, h, pixels, outPath) {
  const rowSize = Math.floor((w * 3 + 3) / 4) * 4;
  const fileSize = 54 + rowSize * h;
  const bmp = Buffer.alloc(fileSize);
  bmp.write('BM', 0);
  bmp.writeUInt32LE(fileSize, 2);
  bmp.writeUInt32LE(54, 10);
  bmp.writeUInt32LE(40, 14);
  bmp.writeInt32LE(w, 18);
  bmp.writeInt32LE(h, 22);
  bmp.writeUInt16LE(1, 26);
  bmp.writeUInt16LE(24, 28);
  bmp.writeUInt32LE(0, 30);
  bmp.writeUInt32LE(rowSize * h, 34);

  for (let y = 0; y < h; y++) {
    const srcRow = h - 1 - y;
    const destOffset = 54 + y * rowSize;
    for (let x = 0; x < w; x++) {
      const val = pixels[srcRow * w + x];
      bmp[destOffset + x * 3 + 0] = val;
      bmp[destOffset + x * 3 + 1] = val;
      bmp[destOffset + x * 3 + 2] = val;
    }
  }
  fs.writeFileSync(outPath, bmp);
}

const TIERS = [
  { name: 'Common', file: 'common.mind' },
  { name: 'Rare', file: 'rare.mind' },
  { name: 'Legendary', file: 'legendary.mind' },
];

const clientDir = path.resolve(process.cwd(), 'client');
const publicDir = path.join(clientDir, 'public', 'ar-targets');
const previewsBaseDir = path.join(publicDir, 'previews');
const dataDir = path.join(clientDir, 'src', 'data');

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const catalog = {};

for (const tier of TIERS) {
  const mindFilePath = path.join(publicDir, tier.file);
  if (!fs.existsSync(mindFilePath)) {
    console.warn(`File ${mindFilePath} does not exist, skipping`);
    continue;
  }

  const tierPreviewDir = path.join(previewsBaseDir, tier.name.toLowerCase());
  if (!fs.existsSync(tierPreviewDir)) {
    fs.mkdirSync(tierPreviewDir, { recursive: true });
  }

  console.log(`Processing ${tier.name} from ${tier.file}...`);
  const buf = fs.readFileSync(mindFilePath);
  const [data] = unpack(buf);
  const total = data.dataList.length;
  console.log(`Found ${total} targets in ${tier.file}`);

  catalog[tier.name] = [];

  for (let idx = 0; idx < total; idx++) {
    const item = data.dataList[idx];
    const td = item.trackingData?.[0];
    if (!td || !td.data) continue;

    const bmpFilename = `${idx}.bmp`;
    const bmpPath = path.join(tierPreviewDir, bmpFilename);
    saveBmp(td.width, td.height, td.data, bmpPath);

    catalog[tier.name].push({
      targetIndex: idx,
      previewUrl: `/ar-targets/previews/${tier.name.toLowerCase()}/${bmpFilename}`,
      width: item.targetImage?.width || td.width,
      height: item.targetImage?.height || td.height,
    });
  }
}

const catalogPath = path.join(dataDir, 'mindTargets.json');
fs.writeFileSync(catalogPath, JSON.stringify(catalog, null, 2));
console.log(`Successfully generated target catalog at ${catalogPath}!`);
