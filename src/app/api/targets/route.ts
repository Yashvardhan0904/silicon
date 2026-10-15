import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// POST /api/targets - Save compiled .mind file
export async function POST(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const tier = searchParams.get('tier') || 'legendary';
    const filename = searchParams.get('filename') || `${tier.toLowerCase()}.mind`;

    // Ensure filename ends with .mind and has no directory traversal
    const safeFilename = path.basename(filename).endsWith('.mind')
      ? path.basename(filename)
      : `${path.basename(filename)}.mind`;

    const arrayBuffer = await request.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    if (buffer.length === 0) {
      return NextResponse.json({ error: 'Empty file buffer' }, { status: 400 });
    }

    const targetDir = path.join(process.cwd(), 'public', 'ar-targets');
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const filePath = path.join(targetDir, safeFilename);
    fs.writeFileSync(filePath, buffer);

    console.log(`Successfully saved target file to ${filePath} (${buffer.length} bytes)`);

    return NextResponse.json({
      success: true,
      filename: safeFilename,
      path: `/ar-targets/${safeFilename}`,
      size: buffer.length,
    });
  } catch (error) {
    console.error('Error saving target file:', error);
    return NextResponse.json(
      { error: 'Failed to save target file' },
      { status: 500 }
    );
  }
}
