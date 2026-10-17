(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Header(param) {
    let { title = "SILICON QUEST", subtitle = "ACM USAR" } = param;
    _s();
    const tapCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const tapTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Check for ?admin=true in URL on load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const params = new URLSearchParams(window.location.search);
                if (params.get("admin") === "true") {
                    window.dispatchEvent(new Event("open-admin-portal"));
                }
            }
        }
    }["Header.useEffect"], []);
    // Secret 5-tap gesture to unlock Admin Portal without public buttons
    const handleSecretTap = ()=>{
        tapCountRef.current += 1;
        if (tapTimerRef.current) clearTimeout(tapTimerRef.current);
        if (tapCountRef.current >= 5) {
            tapCountRef.current = 0;
            if ("TURBOPACK compile-time truthy", 1) {
                window.dispatchEvent(new Event("open-admin-portal"));
            }
        } else {
            tapTimerRef.current = setTimeout(()=>{
                tapCountRef.current = 0;
            }, 1500);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "relative w-full bg-black/90 border border-orange-500/30 rounded-2xl px-4 py-3 backdrop-blur-md shadow-lg shadow-orange-500/5 select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent"
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: handleSecretTap,
                        className: "flex items-center gap-2 cursor-default active:opacity-80 transition-opacity",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2 h-2 rounded-full bg-orange-500 animate-pulse-fast shadow-md shadow-orange-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-white font-black tracking-wider text-sm sm:text-base flex items-center gap-1.5 font-mono",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-orange-500 font-bold px-1.5 py-0.2 bg-orange-500/10 border border-orange-500/40 rounded",
                                            children: "HUNTER OS"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[11px] font-mono text-zinc-400 font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800",
                            children: subtitle
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Header.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(Header, "un0GSV6jH3gaBYfz5ZBAAJJr8C0=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Pokeball.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Pokeball
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Pokeball(param) {
    let { onClick, isExploding } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center my-4 select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: onClick,
                className: "relative group cursor-pointer flex items-center justify-center p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 rounded-full bg-gradient-to-tr from-orange-600 via-orange-500 to-amber-400 blur-2xl transition-all duration-500 ".concat(isExploding ? "opacity-100 scale-150 animate-pulse-fast" : "opacity-35 group-hover:opacity-70 group-hover:scale-110")
                    }, void 0, false, {
                        fileName: "[project]/src/components/Pokeball.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute w-32 h-32 rounded-full border border-dashed border-orange-500/40 animate-radar pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Pokeball.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute w-36 h-36 rounded-full border border-orange-500/20 pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Pokeball.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-black bg-black shadow-2xl shadow-orange-500/40 overflow-hidden transition-all duration-300 transform ".concat(isExploding ? "animate-explode opacity-0 pointer-events-none" : "group-hover:scale-105 active:scale-95 group-hover:border-orange-500"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-1/2 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 relative overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-1 left-3 right-3 h-3 bg-white/40 rounded-full blur-[1px]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Pokeball.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Pokeball.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-1/2 bg-gradient-to-b from-white via-zinc-100 to-zinc-200"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Pokeball.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-1/2 left-0 right-0 h-3 -translate-y-1/2 bg-black border-y border-black"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Pokeball.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black border-2 border-orange-500 flex items-center justify-center shadow-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-5 h-5 rounded-full bg-white border border-zinc-300 flex items-center justify-center transition-transform duration-300 group-hover:scale-110",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2.5 h-2.5 rounded-full bg-orange-500 shadow-sm shadow-orange-500 animate-pulse-fast"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Pokeball.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Pokeball.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Pokeball.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Pokeball.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Pokeball.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClick,
                type: "button",
                disabled: isExploding,
                className: "mt-2 group/btn relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/90 border-2 border-orange-500/70 text-white font-mono text-xs font-black tracking-widest uppercase hover:border-orange-400 hover:bg-orange-600 hover:text-black transition-all duration-300 shadow-lg shadow-orange-500/20 active:scale-95",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-2 h-2 rounded-full bg-orange-500 group-hover/btn:bg-black animate-pulse-fast"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Pokeball.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "TAP TO SCAN CARD"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Pokeball.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-orange-400 group-hover/btn:text-black font-bold",
                        children: "⚡"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Pokeball.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Pokeball.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Pokeball.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = Pokeball;
var _c;
__turbopack_context__.k.register(_c, "Pokeball");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/firestore.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// Re-export all database operations from the unified API service
// for 100% backwards compatibility with existing components
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/quizCooldown.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Quiz Cooldown Manager
 * Manages progressive cooldown periods for wrong quiz answers
 * - First wrong answer: 60 seconds cooldown
 * - Each subsequent wrong answer for the same question: +30 seconds
 * - Cooldowns are question-specific (don't carry over to other questions)
 */ __turbopack_context__.s([
    "cleanupExpiredCooldowns",
    ()=>cleanupExpiredCooldowns,
    "clearCooldown",
    ()=>clearCooldown,
    "formatCooldownTime",
    ()=>formatCooldownTime,
    "getCooldownRemaining",
    ()=>getCooldownRemaining,
    "setWrongAnswerCooldown",
    ()=>setWrongAnswerCooldown
]);
const STORAGE_KEY = 'quiz_cooldowns';
const INITIAL_COOLDOWN = 60; // 60 seconds
const COOLDOWN_INCREMENT = 30; // 30 seconds
/**
 * Get all cooldown data from localStorage
 */ function getCooldownData() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : {};
    } catch (error) {
        console.error('Error reading cooldown data:', error);
        return {};
    }
}
/**
 * Save cooldown data to localStorage
 */ function saveCooldownData(data) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
        console.error('Error saving cooldown data:', error);
    }
}
function getCooldownRemaining(characterId) {
    const data = getCooldownData();
    const cooldown = data[characterId];
    if (!cooldown) return null;
    const now = Date.now();
    if (now >= cooldown.expiresAt) {
        // Cooldown expired, clean it up
        delete data[characterId];
        saveCooldownData(data);
        return null;
    }
    return Math.ceil((cooldown.expiresAt - now) / 1000);
}
function setWrongAnswerCooldown(characterId) {
    const data = getCooldownData();
    const existing = data[characterId];
    // Calculate attempts (start at 0 if first wrong answer)
    const attempts = (existing === null || existing === void 0 ? void 0 : existing.attempts) || 0;
    const newAttempts = attempts + 1;
    // Calculate cooldown duration: 60s for first, +30s for each additional
    const cooldownSeconds = INITIAL_COOLDOWN + attempts * COOLDOWN_INCREMENT;
    const expiresAt = Date.now() + cooldownSeconds * 1000;
    data[characterId] = {
        expiresAt,
        attempts: newAttempts
    };
    saveCooldownData(data);
    return cooldownSeconds;
}
function clearCooldown(characterId) {
    const data = getCooldownData();
    delete data[characterId];
    saveCooldownData(data);
}
function cleanupExpiredCooldowns() {
    const data = getCooldownData();
    const now = Date.now();
    let hasChanges = false;
    Object.keys(data).forEach((characterId)=>{
        if (now >= data[characterId].expiresAt) {
            delete data[characterId];
            hasChanges = true;
        }
    });
    if (hasChanges) {
        saveCooldownData(data);
    }
}
function formatCooldownTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return "".concat(mins, ":").concat(secs.toString().padStart(2, '0'));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ar-camera/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TIER_CONFIG",
    ()=>TIER_CONFIG,
    "getCharacterIdFromTierAndIndex",
    ()=>getCharacterIdFromTierAndIndex,
    "getTargetIndexFromId",
    ()=>getTargetIndexFromId,
    "getTierFromValue",
    ()=>getTierFromValue
]);
const getTierFromValue = (value)=>{
    if (value >= 50) return "Legendary";
    if (value >= 20) return "Rare";
    return "Common";
};
const TIER_CONFIG = {
    Common: {
        mindFile: "common.mind",
        prefix: "c3",
        color: "#94a3b8"
    },
    Rare: {
        mindFile: "rare.mind",
        prefix: "c2",
        color: "#3b82f6"
    },
    Legendary: {
        mindFile: "legendary.mind",
        prefix: "c1",
        color: "#facc15"
    }
};
const getTargetIndexFromId = (characterId)=>{
    const numericPart = characterId.replace(/^c[123]0?/, "");
    return parseInt(numericPart, 10) - 1; // MindAR uses 0-based indexing
};
const getCharacterIdFromTierAndIndex = (tier, targetIndex)=>{
    const prefix = TIER_CONFIG[tier].prefix;
    const sequence = String(targetIndex + 1).padStart(2, "0");
    return "".concat(prefix).concat(sequence);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ar-camera/hooks/useARCharacters.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useARCharacters",
    ()=>useARCharacters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$firestore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/services/firestore.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ar-camera/types.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
const loggedMissingCharacterIds = new Set();
const validateCharacter = (char)=>{
    if (!char || typeof char !== "object") {
        return false;
    }
    const requiredFields = [
        "id",
        "name",
        "question",
        "options",
        "correctAnswer",
        "value",
        "isCaught",
        "caughtByTeam"
    ];
    const missingFields = requiredFields.filter((field)=>{
        const value = char[field];
        if (field === "options") {
            return !Array.isArray(value) || value.length === 0;
        }
        return value === undefined || value === null;
    });
    if (missingFields.length > 0) {
        const charObj = char;
        var _charObj_id, _ref;
        const identifier = String((_ref = (_charObj_id = charObj.id) !== null && _charObj_id !== void 0 ? _charObj_id : charObj.name) !== null && _ref !== void 0 ? _ref : JSON.stringify(char));
        if (!loggedMissingCharacterIds.has(identifier)) {
            loggedMissingCharacterIds.add(identifier);
            console.warn("Character ".concat(charObj.name || charObj.id || "(unknown)", " is missing required fields:"), missingFields.join(", "));
        }
        return false;
    }
    return true;
};
const useARCharacters = ()=>{
    _s();
    const [charactersByTier, setCharactersByTier] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        Common: [],
        Rare: [],
        Legendary: []
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchCharacters = async ()=>{
        try {
            setLoading(true);
            setError(null);
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getARCharacters"])();
            // Filter out invalid characters
            const validCharacters = data.filter(validateCharacter);
            if (validCharacters.length === 0 && data.length > 0) {
                setError("No valid AR characters found. Please check Firestore schema. " + "See FIRESTORE_SCHEMA.md for required fields.");
            } else if (validCharacters.length < data.length) {
                console.warn("".concat(data.length - validCharacters.length, " character(s) skipped due to missing fields"));
            }
            // Group characters by tier
            const grouped = {
                Common: [],
                Rare: [],
                Legendary: []
            };
            validCharacters.forEach((char)=>{
                const tier = char.tier || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTierFromValue"])(char.value);
                if (tier in grouped) {
                    grouped[tier].push(char);
                }
            });
            // Sort each tier by targetIndex if available, falling back to ID
            Object.keys(grouped).forEach((tier)=>{
                grouped[tier].sort((a, b)=>{
                    const aIndex = typeof a.targetIndex === "number" ? a.targetIndex : Infinity;
                    const bIndex = typeof b.targetIndex === "number" ? b.targetIndex : Infinity;
                    if (aIndex !== bIndex) {
                        return aIndex - bIndex;
                    }
                    return a.id.localeCompare(b.id);
                });
            });
            setCharactersByTier(grouped);
        } catch (err) {
            console.error("Error fetching AR characters:", err);
            setError("Failed to load characters");
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useARCharacters.useEffect": ()=>{
            fetchCharacters();
        }
    }["useARCharacters.useEffect"], []);
    return {
        charactersByTier,
        loading,
        error,
        refetch: fetchCharacters
    };
};
_s(useARCharacters, "VTgCqAfSopv7brCMkiHyq97Gqa8=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ar-camera/hooks/useMindARInlineStyles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMindARInlineStyles",
    ()=>useMindARInlineStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useMindARInlineStyles = (scriptsLoaded)=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMindARInlineStyles.useEffect": ()=>{
            if (!scriptsLoaded || typeof document === "undefined") return;
            if (document.getElementById("mindar-inline-style")) return;
            const style = document.createElement("style");
            style.id = "mindar-inline-style";
            style.innerHTML = "\n      .mindar-scene {\n        width: 100%;\n        height: 100%;\n      }\n\n      .mindar-ui-overlay {\n        display: none !important;\n      }\n    ";
            document.head.appendChild(style);
        }
    }["useMindARInlineStyles.useEffect"], [
        scriptsLoaded
    ]);
};
_s(useMindARInlineStyles, "OD7bBpZva5O2jO+Puf00hKivP7c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ar-camera/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SCRIPT_RESOURCES",
    ()=>SCRIPT_RESOURCES
]);
const SCRIPT_RESOURCES = [
    {
        src: "https://aframe.io/releases/1.5.0/aframe.min.js"
    },
    {
        src: "https://cdn.jsdelivr.net/npm/mind-ar@1.2.5/dist/mindar-image-aframe.prod.js"
    }
]; // Dynamic TARGET_SRC - will be selected based on detected character's mindFile
 // Each character in Firestore has a mindFile field (e.g., "/ar-targets/mewtwo.mind")
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ar-camera/utils/scriptLoader.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadScriptResource",
    ()=>loadScriptResource
]);
const loadedScripts = new Set();
const loadScript = (src)=>new Promise((resolve, reject)=>{
        if (typeof document === "undefined") {
            resolve();
            return;
        }
        if (loadedScripts.has(src)) {
            resolve();
            return;
        }
        const existing = document.querySelector('script[src="'.concat(src, '"]'));
        if (existing) {
            if (existing.dataset.loaded === "true") {
                loadedScripts.add(src);
                resolve();
            } else {
                existing.addEventListener("load", ()=>{
                    loadedScripts.add(src);
                    resolve();
                }, {
                    once: true
                });
                existing.addEventListener("error", ()=>reject(new Error("Failed loading script ".concat(src))), {
                    once: true
                });
            }
            return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.dataset.loaded = "false";
        script.onload = ()=>{
            script.dataset.loaded = "true";
            loadedScripts.add(src);
            resolve();
        };
        script.onerror = ()=>reject(new Error("Failed loading script ".concat(src)));
        document.head.appendChild(script);
    });
const loadScriptResource = async (resource)=>{
    var _resource_fallbacks;
    const attempts = [
        resource.src,
        ...(_resource_fallbacks = resource.fallbacks) !== null && _resource_fallbacks !== void 0 ? _resource_fallbacks : []
    ];
    let lastError = null;
    for (const attempt of attempts){
        try {
            await loadScript(attempt);
            if (attempt !== resource.src) {
                console.warn("[MindAR] Loaded fallback script for ".concat(resource.src, " from ").concat(attempt));
            }
            return true;
        } catch (error) {
            lastError = error;
            console.error("[MindAR] Failed loading script ".concat(attempt), error);
        }
    }
    if (resource.optional) {
        console.warn("[MindAR] Optional script ".concat(resource.src, " could not be loaded. Continuing without it."));
        return false;
    }
    throw lastError !== null && lastError !== void 0 ? lastError : new Error("Failed loading script ".concat(resource.src));
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ar-camera/hooks/useMindARScripts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMindARScripts",
    ()=>useMindARScripts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ar-camera/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$utils$2f$scriptLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ar-camera/utils/scriptLoader.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
const useMindARScripts = ()=>{
    _s();
    const [scriptsLoaded, setScriptsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [animationMixerAvailable, setAnimationMixerAvailable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [arError, setARError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMindARScripts.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            let isActive = true;
            const loadMindAR = {
                "useMindARScripts.useEffect.loadMindAR": async ()=>{
                    try {
                        const mindarWindow = window;
                        if (mindarWindow.__mindarScriptsLoaded) {
                            if (isActive) setScriptsLoaded(true);
                            return;
                        }
                        if (!mindarWindow.__mindarScriptsPromise) {
                            mindarWindow.__mindarScriptsPromise = ({
                                "useMindARScripts.useEffect.loadMindAR": async ()=>{
                                    let animationMixerSuccess = true;
                                    for (const resource of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCRIPT_RESOURCES"]){
                                        const success = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$utils$2f$scriptLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadScriptResource"])(resource);
                                        if (resource.key === "animation-mixer") {
                                            animationMixerSuccess = success;
                                        }
                                    }
                                    mindarWindow.__mindarAnimationMixerAvailable = animationMixerSuccess;
                                    mindarWindow.__mindarScriptsLoaded = true;
                                }
                            })["useMindARScripts.useEffect.loadMindAR"]();
                        }
                        await mindarWindow.__mindarScriptsPromise;
                        if (isActive) {
                            const mixerAvailable = mindarWindow.__mindarAnimationMixerAvailable !== false;
                            setAnimationMixerAvailable(mixerAvailable);
                            setScriptsLoaded(true);
                            setARError(null);
                        }
                    } catch (error) {
                        console.error("Failed to load MindAR scripts", error);
                        if (isActive) {
                            setARError("Unable to load AR libraries. Please refresh and try again.");
                        }
                    }
                }
            }["useMindARScripts.useEffect.loadMindAR"];
            loadMindAR();
            return ({
                "useMindARScripts.useEffect": ()=>{
                    isActive = false;
                }
            })["useMindARScripts.useEffect"];
        }
    }["useMindARScripts.useEffect"], []);
    return {
        scriptsLoaded,
        animationMixerAvailable,
        arError,
        setARError
    };
};
_s(useMindARScripts, "VBifrHbuD+TuCnmafAQqGxxWKUY=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ar-camera/hooks/useSceneLifecycle.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSceneLifecycle",
    ()=>useSceneLifecycle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useSceneLifecycle = (sceneRef, scriptsLoaded, onReady, onError)=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSceneLifecycle.useEffect": ()=>{
            if (!scriptsLoaded) return;
            const sceneEl = sceneRef.current;
            if (!sceneEl) return;
            const disableInteractionComponents = {
                "useSceneLifecycle.useEffect.disableInteractionComponents": ()=>{
                    if (!sceneEl) return;
                    sceneEl.removeAttribute("xr-mode-ui");
                    const cameraEl = sceneEl.querySelector("[camera]");
                    cameraEl === null || cameraEl === void 0 ? void 0 : cameraEl.removeAttribute("look-controls");
                    cameraEl === null || cameraEl === void 0 ? void 0 : cameraEl.removeAttribute("wasd-controls");
                }
            }["useSceneLifecycle.useEffect.disableInteractionComponents"];
            const assignCamera = {
                "useSceneLifecycle.useEffect.assignCamera": (cameraEl)=>{
                    var _getObject3D, _this;
                    if (!cameraEl) return;
                    const objectCamera = (_this = cameraEl) === null || _this === void 0 ? void 0 : (_getObject3D = _this.getObject3D) === null || _getObject3D === void 0 ? void 0 : _getObject3D.call(_this, "camera");
                    if (objectCamera) {
                        sceneEl.camera = objectCamera;
                    }
                }
            }["useSceneLifecycle.useEffect.assignCamera"];
            const handleLoaded = {
                "useSceneLifecycle.useEffect.handleLoaded": ()=>{
                    disableInteractionComponents();
                    assignCamera(sceneEl.querySelector("[camera]"));
                    onReady();
                }
            }["useSceneLifecycle.useEffect.handleLoaded"];
            const handleArReady = {
                "useSceneLifecycle.useEffect.handleArReady": ()=>{
                    disableInteractionComponents();
                    assignCamera(sceneEl.querySelector("[camera]"));
                    onReady();
                }
            }["useSceneLifecycle.useEffect.handleArReady"];
            const handleArError = {
                "useSceneLifecycle.useEffect.handleArError": (event)=>{
                    console.error("MindAR arError", event);
                    onError("AR session couldn't start. Please check camera permissions and try again.");
                }
            }["useSceneLifecycle.useEffect.handleArError"];
            const handleCameraSetActive = {
                "useSceneLifecycle.useEffect.handleCameraSetActive": (event)=>{
                    const detail = event.detail;
                    if (detail === null || detail === void 0 ? void 0 : detail.cameraEl) {
                        assignCamera(detail.cameraEl);
                        disableInteractionComponents();
                    }
                }
            }["useSceneLifecycle.useEffect.handleCameraSetActive"];
            sceneEl.addEventListener("loaded", handleLoaded);
            sceneEl.addEventListener("arReady", handleArReady);
            sceneEl.addEventListener("arError", handleArError);
            sceneEl.addEventListener("camera-set-active", handleCameraSetActive);
            return ({
                "useSceneLifecycle.useEffect": ()=>{
                    sceneEl.removeEventListener("loaded", handleLoaded);
                    sceneEl.removeEventListener("arReady", handleArReady);
                    sceneEl.removeEventListener("arError", handleArError);
                    sceneEl.removeEventListener("camera-set-active", handleCameraSetActive);
                }
            })["useSceneLifecycle.useEffect"];
        }
    }["useSceneLifecycle.useEffect"], [
        scriptsLoaded,
        sceneRef,
        onReady,
        onError
    ]);
};
_s(useSceneLifecycle, "OD7bBpZva5O2jO+Puf00hKivP7c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ar-camera/ui/ARErrorOverlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ARErrorOverlay",
    ()=>ARErrorOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const ARErrorOverlay = (param)=>{
    let { message, onClose } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 flex flex-col items-center justify-center bg-slate-950 gap-4 p-6 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-400 text-base font-semibold",
                children: message
            }, void 0, false, {
                fileName: "[project]/src/components/ar-camera/ui/ARErrorOverlay.tsx",
                lineNumber: 8,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                className: "px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-colors",
                children: "Go Back"
            }, void 0, false, {
                fileName: "[project]/src/components/ar-camera/ui/ARErrorOverlay.tsx",
                lineNumber: 9,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ar-camera/ui/ARErrorOverlay.tsx",
        lineNumber: 7,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ARErrorOverlay;
var _c;
__turbopack_context__.k.register(_c, "ARErrorOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/imageUtils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Utility to determine if a string is a valid image URL
 * @param url - The string to check
 * @returns true if it's a valid image URL, false otherwise
 */ __turbopack_context__.s([
    "getImageSrc",
    ()=>getImageSrc,
    "isValidImageUrl",
    ()=>isValidImageUrl,
    "shouldDisplayAsText",
    ()=>shouldDisplayAsText
]);
function isValidImageUrl(url) {
    if (!url || typeof url !== 'string') return false;
    const trimmedUrl = url.trim();
    // Empty string
    if (trimmedUrl.length === 0) return false;
    // Check if it's a valid URL format (http/https or relative path starting with /)
    const isUrl = trimmedUrl.startsWith('http://') || trimmedUrl.startsWith('https://') || trimmedUrl.startsWith('/');
    if (!isUrl) return false;
    // Check if it has a valid image extension
    const hasImageExtension = /\.(jpg|jpeg|png|gif|webp|svg|bmp|ico)(\?.*)?$/i.test(trimmedUrl);
    return hasImageExtension;
}
function getImageSrc(image) {
    if (!image) return null;
    const trimmedImage = image.trim();
    if (!isValidImageUrl(trimmedImage)) return null;
    // If it's a full URL (starts with http), use it as-is
    if (trimmedImage.startsWith('http://') || trimmedImage.startsWith('https://')) {
        return trimmedImage;
    }
    // If it's a relative path starting with /, use it as-is
    if (trimmedImage.startsWith('/')) {
        return trimmedImage;
    }
    return null;
}
function shouldDisplayAsText(image) {
    if (!image) return false;
    const trimmedImage = image.trim();
    // If it's empty, don't display as text
    if (trimmedImage.length === 0) return false;
    // If it's a valid image URL, don't display as text
    if (isValidImageUrl(trimmedImage)) return false;
    // Otherwise, it should be displayed as text (emoji, character name, etc.)
    return true;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ar-camera/utils/tierStyles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTierBorder",
    ()=>getTierBorder,
    "getTierButtonGradient",
    ()=>getTierButtonGradient,
    "getTierColor",
    ()=>getTierColor,
    "getTierFrameColor",
    ()=>getTierFrameColor,
    "getTierThemeColor",
    ()=>getTierThemeColor
]);
const getTierColor = (tier)=>{
    switch(tier){
        case "Legendary":
            return "from-amber-400 to-orange-500";
        case "Rare":
            return "from-purple-400 to-pink-500";
        case "Common":
            return "from-slate-400 to-slate-500";
        default:
            return "from-slate-400 to-slate-500";
    }
};
const getTierBorder = (tier)=>{
    switch(tier){
        case "Legendary":
            return "border-amber-400 shadow-amber-500/50";
        case "Rare":
            return "border-purple-400 shadow-purple-500/50";
        case "Common":
            return "border-slate-400 shadow-slate-500/50";
        default:
            return "border-slate-400 shadow-slate-500/50";
    }
};
const getTierFrameColor = (tier)=>{
    switch(tier){
        case "Legendary":
            return "#FFD700"; // Golden
        case "Rare":
            return "#C0C0C0"; // Silver
        case "Common":
            return "#8b5cf6"; // Purple
        default:
            return "#8b5cf6";
    }
};
const getTierThemeColor = (tier)=>{
    switch(tier){
        case "Legendary":
            return {
                primary: "amber-400",
                secondary: "orange-500",
                glow: "amber-500/50",
                hex: "#FFD700"
            };
        case "Rare":
            return {
                primary: "gray-300",
                secondary: "gray-400",
                glow: "gray-400/50",
                hex: "#C0C0C0"
            };
        case "Common":
            return {
                primary: "purple-400",
                secondary: "purple-500",
                glow: "purple-500/50",
                hex: "#8b5cf6"
            };
        default:
            return {
                primary: "purple-400",
                secondary: "purple-500",
                glow: "purple-500/50",
                hex: "#8b5cf6"
            };
    }
};
const getTierButtonGradient = (tier)=>{
    switch(tier){
        case "Legendary":
            return "bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600";
        case "Rare":
            return "bg-gradient-to-r from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500";
        case "Common":
            return "bg-gradient-to-r from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600";
        default:
            return "bg-gradient-to-r from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600";
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ar-camera/ui/DetectedCharacterOverlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DetectedCharacterOverlay",
    ()=>DetectedCharacterOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$quizCooldown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/quizCooldown.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$imageUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/imageUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ar-camera/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$utils$2f$tierStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ar-camera/utils/tierStyles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const DetectedCharacterOverlay = (param)=>{
    let { character, onCollect, isCaught, cooldownSeconds = null } = param;
    var _character_image;
    _s();
    const tier = character.tier || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTierFromValue"])(character.value);
    const themeColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$utils$2f$tierStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTierThemeColor"])(tier);
    const isLegendary = tier === "Legendary";
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!isLegendary);
    const [isMinimized, setIsMinimized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Auto-expand legendary cards after 5 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DetectedCharacterOverlay.useEffect": ()=>{
            if (isLegendary) {
                const timer = setTimeout({
                    "DetectedCharacterOverlay.useEffect.timer": ()=>{
                        setIsExpanded(true);
                    }
                }["DetectedCharacterOverlay.useEffect.timer"], 5000);
                return ({
                    "DetectedCharacterOverlay.useEffect": ()=>clearTimeout(timer)
                })["DetectedCharacterOverlay.useEffect"];
            }
        }
    }["DetectedCharacterOverlay.useEffect"], [
        isLegendary
    ]);
    const imageSrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$imageUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageSrc"])(character.image);
    const displayAsText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$imageUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldDisplayAsText"])(character.image);
    const hasContent = imageSrc || displayAsText;
    const toggleMinimize = ()=>{
        setIsMinimized(!isMinimized);
    };
    // Compact view for legendary characters (first 5 seconds) OR when manually minimized
    if (isLegendary && !isExpanded || isMinimized) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 flex items-center justify-center p-4 z-40",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative bg-slate-900/60 backdrop-blur-md border-2 border-".concat(themeColor.primary, "/70 rounded-2xl px-8 py-4 shadow-2xl shadow-").concat(themeColor.glow, " animate-scaleIn transition-all duration-500"),
                children: [
                    isMinimized && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: toggleMinimize,
                        className: "absolute -top-3 -right-3 w-8 h-8 bg-slate-800 hover:bg-slate-700 text-white rounded-full flex items-center justify-center border-2 border-slate-600 transition-all duration-200 z-10",
                        "aria-label": "Expand",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-5 w-5",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fillRule: "evenodd",
                                d: "M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z",
                                clipRule: "evenodd"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ar-camera/ui/DetectedCharacterOverlay.tsx",
                                lineNumber: 70,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ar-camera/ui/DetectedCharacterOverlay.tsx",
                            lineNumber: 64,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ar-camera/ui/DetectedCharacterOverlay.tsx",
                        lineNumber: 59,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onCollect,
                        disabled: isCaught || cooldownSeconds !== null && cooldownSeconds > 0,
                        className: "py-3 px-8 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 ".concat(isCaught || cooldownSeconds !== null && cooldownSeconds > 0 ? "bg-slate-700 text-slate-500 cursor-not-allowed" : "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$utils$2f$tierStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTierButtonGradient"])(tier), " text-white")),
                        children: isCaught ? "Already Caught" : cooldownSeconds && cooldownSeconds > 0 ? "Cooldown: ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$quizCooldown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCooldownTime"])(cooldownSeconds)) : "Collect Character"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ar-camera/ui/DetectedCharacterOverlay.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ar-camera/ui/DetectedCharacterOverlay.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ar-camera/ui/DetectedCharacterOverlay.tsx",
            lineNumber: 53,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Full view (for Common/Rare always, and Legendary after 5 seconds)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 flex items-center justify-center p-4 z-40",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative bg-slate-900/30 backdrop-blur-md border-2 border-".concat(themeColor.primary, "/70 rounded-2xl p-6 max-w-sm w-full shadow-2xl shadow-").concat(themeColor.glow, " ").concat(isLegendary ? "animate-expandIn" : "animate-scaleIn"),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: toggleMinimize,
                    className: "absolute -top-3 -right-3 w-8 h-8 bg-slate-800 hover:bg-slate-700 text-white rounded-full flex items-center justify-center border-2 border-slate-600 transition-all duration-200 z-10",
                    "aria-label": "Minimize",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-5 w-5",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            d: "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",
                            clipRule: "evenodd"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ar-camera/ui/DetectedCharacterOverlay.tsx",
                            lineNumber: 123,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ar-camera/ui/DetectedCharacterOverlay.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ar-camera/ui/DetectedCharacterOverlay.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "absolute top-2.5 z-[100] left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$utils$2f$tierStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTierColor"])(tier), " text-white text-xs font-bold shadow-lg"),
                    children: tier
                }, void 0, false, {
                    fileName: "[project]/src/components/ar-camera/ui/DetectedCharacterOverlay.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-4",
                    children: [
                        hasContent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-48 h-64 rounded-2xl overflow-hidden border-2 border-".concat(themeColor.primary, "/40 shadow-lg shadow-").concat(themeColor.glow, " bg-slate-800/80 flex items-center justify-center"),
                            children: [
                                imageSrc ? // eslint-disable-next-line @next/next/no-img-element
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: imageSrc,
                                    alt: character.name,
                                    className: "w-full h-full object-cover",
                                    draggable: false,
                                    onError: (e)=>{
                                        // Fallback if image fails to load
                                        e.currentTarget.style.display = "none";
                                        const textSpan = e.currentTarget.nextElementSibling;
                                        if (textSpan && textSpan.classList.contains("fallback-text")) {
                                            textSpan.classList.remove("hidden");
                                        }
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ar-camera/ui/DetectedCharacterOverlay.tsx",
                                    lineNumber: 144,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)) : null,
                                displayAsText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-6xl ".concat(imageSrc ? "hidden fallback-text" : ""),
                                    "aria-hidden": "true",
                                    children: (_character_image = character.image) === null || _character_image === void 0 ? void 0 : _character_image.trim()
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ar-camera/ui/DetectedCharacterOverlay.tsx",
                                    lineNumber: 163,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ar-camera/ui/DetectedCharacterOverlay.tsx",
                            lineNumber: 139,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-48 h-64 rounded-2xl border-2 border-dashed border-".concat(themeColor.primary, "/40 bg-slate-800/60 flex items-center justify-center text-").concat(themeColor.primary, " text-sm text-center px-6"),
                            children: [
                                "Card art coming soon",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$utils$2f$tierStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTierColor"])(tier), " text-white text-xs font-bold shadow-lg"),
                                    children: tier
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ar-camera/ui/DetectedCharacterOverlay.tsx",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ar-camera/ui/DetectedCharacterOverlay.tsx",
                            lineNumber: 174,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-extrabold text-".concat(themeColor.primary, " drop-shadow mb-2"),
                                    children: character.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ar-camera/ui/DetectedCharacterOverlay.tsx",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-".concat(themeColor.primary, " text-sm"),
                                    children: isCaught ? "Already caught!" : cooldownSeconds && cooldownSeconds > 0 ? "On cooldown" : "Character detected!"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ar-camera/ui/DetectedCharacterOverlay.tsx",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                isCaught && character.caughtByTeam && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-400 text-xs mt-1",
                                    children: [
                                        "Caught by: ",
                                        character.caughtByTeam
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ar-camera/ui/DetectedCharacterOverlay.tsx",
                                    lineNumber: 202,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                !isCaught && cooldownSeconds && cooldownSeconds > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-amber-400 text-sm font-bold mt-2 animate-pulse",
                                    children: [
                                        "Wait ",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$quizCooldown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCooldownTime"])(cooldownSeconds)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ar-camera/ui/DetectedCharacterOverlay.tsx",
                                    lineNumber: 207,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ar-camera/ui/DetectedCharacterOverlay.tsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ar-camera/ui/DetectedCharacterOverlay.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onCollect,
                    disabled: isCaught || cooldownSeconds !== null && cooldownSeconds > 0,
                    className: "mt-6 w-full py-3 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 ".concat(isCaught || cooldownSeconds !== null && cooldownSeconds > 0 ? "bg-slate-700 text-slate-500 cursor-not-allowed" : "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$utils$2f$tierStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTierButtonGradient"])(tier), " text-white")),
                    children: isCaught ? "Already Caught" : cooldownSeconds && cooldownSeconds > 0 ? "Cooldown: ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$quizCooldown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCooldownTime"])(cooldownSeconds)) : "Collect Character"
                }, void 0, false, {
                    fileName: "[project]/src/components/ar-camera/ui/DetectedCharacterOverlay.tsx",
                    lineNumber: 214,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ar-camera/ui/DetectedCharacterOverlay.tsx",
            lineNumber: 104,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ar-camera/ui/DetectedCharacterOverlay.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DetectedCharacterOverlay, "lwB7J/AhbP/oFiZFTZ8lVaaK5yU=");
_c = DetectedCharacterOverlay;
var _c;
__turbopack_context__.k.register(_c, "DetectedCharacterOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ar-camera/ui/FrameOverlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FrameOverlay",
    ()=>FrameOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$utils$2f$tierStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ar-camera/utils/tierStyles.ts [app-client] (ecmascript)");
;
;
const FrameOverlay = (param)=>{
    let { tier = "Common" } = param;
    const frameColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$utils$2f$tierStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTierFrameColor"])(tier);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 pointer-events-none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-full h-full",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "5",
                    y1: "5",
                    x2: "20",
                    y2: "5",
                    stroke: frameColor,
                    strokeWidth: "3"
                }, void 0, false, {
                    fileName: "[project]/src/components/ar-camera/ui/FrameOverlay.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "5",
                    y1: "5",
                    x2: "5",
                    y2: "20",
                    stroke: frameColor,
                    strokeWidth: "3"
                }, void 0, false, {
                    fileName: "[project]/src/components/ar-camera/ui/FrameOverlay.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "95",
                    y1: "5",
                    x2: "80",
                    y2: "5",
                    stroke: frameColor,
                    strokeWidth: "3"
                }, void 0, false, {
                    fileName: "[project]/src/components/ar-camera/ui/FrameOverlay.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "95",
                    y1: "5",
                    x2: "95",
                    y2: "20",
                    stroke: frameColor,
                    strokeWidth: "3"
                }, void 0, false, {
                    fileName: "[project]/src/components/ar-camera/ui/FrameOverlay.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "5",
                    y1: "95",
                    x2: "20",
                    y2: "95",
                    stroke: frameColor,
                    strokeWidth: "3"
                }, void 0, false, {
                    fileName: "[project]/src/components/ar-camera/ui/FrameOverlay.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "5",
                    y1: "95",
                    x2: "5",
                    y2: "80",
                    stroke: frameColor,
                    strokeWidth: "3"
                }, void 0, false, {
                    fileName: "[project]/src/components/ar-camera/ui/FrameOverlay.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "95",
                    y1: "95",
                    x2: "80",
                    y2: "95",
                    stroke: frameColor,
                    strokeWidth: "3"
                }, void 0, false, {
                    fileName: "[project]/src/components/ar-camera/ui/FrameOverlay.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "95",
                    y1: "95",
                    x2: "95",
                    y2: "80",
                    stroke: frameColor,
                    strokeWidth: "3"
                }, void 0, false, {
                    fileName: "[project]/src/components/ar-camera/ui/FrameOverlay.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ar-camera/ui/FrameOverlay.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ar-camera/ui/FrameOverlay.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = FrameOverlay;
var _c;
__turbopack_context__.k.register(_c, "FrameOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ar-camera/ui/HeaderOverlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeaderOverlay",
    ()=>HeaderOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const HeaderOverlay = (param)=>{
    let { teamName, onClose, mindFiles, activeMindFile, onMindFileChange } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                className: "absolute top-4 right-4 w-10 h-10 rounded-full bg-black/80 border-2 border-zinc-700 flex items-center justify-center text-zinc-300 hover:text-white hover:border-orange-500 hover:bg-orange-500/20 transition-all z-[60] shadow-xl",
                "aria-label": "Close AR camera",
                children: "✕"
            }, void 0, false, {
                fileName: "[project]/src/components/ar-camera/ui/HeaderOverlay.tsx",
                lineNumber: 18,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black via-black/80 to-transparent z-20 pointer-events-none select-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-2.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pointer-events-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-white font-mono font-black text-base sm:text-lg flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-2 h-2 rounded-full bg-orange-500 animate-pulse-fast"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ar-camera/ui/HeaderOverlay.tsx",
                                                    lineNumber: 31,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "HUNTER SCANNER"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ar-camera/ui/HeaderOverlay.tsx",
                                                    lineNumber: 32,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ar-camera/ui/HeaderOverlay.tsx",
                                            lineNumber: 30,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-orange-400 font-mono text-xs font-bold",
                                            children: [
                                                "SQUAD: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white",
                                                    children: teamName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ar-camera/ui/HeaderOverlay.tsx",
                                                    lineNumber: 35,
                                                    columnNumber: 22
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ar-camera/ui/HeaderOverlay.tsx",
                                            lineNumber: 34,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ar-camera/ui/HeaderOverlay.tsx",
                                    lineNumber: 29,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ar-camera/ui/HeaderOverlay.tsx",
                                    lineNumber: 39,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ar-camera/ui/HeaderOverlay.tsx",
                            lineNumber: 28,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        mindFiles && mindFiles.length > 1 && onMindFileChange && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-1 pointer-events-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-mono uppercase tracking-wider text-zinc-400",
                                    children: "TARGET TIER"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ar-camera/ui/HeaderOverlay.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-1.5",
                                    children: mindFiles.map((option)=>{
                                        const isActive = option.value === activeMindFile;
                                        var _option_label;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onMindFileChange(option.value),
                                            className: "px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all border ".concat(isActive ? "bg-orange-500 border-orange-400 text-black shadow-md shadow-orange-500/30" : "bg-black/80 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600"),
                                            children: (_option_label = option.label) !== null && _option_label !== void 0 ? _option_label : option.value
                                        }, option.value, false, {
                                            fileName: "[project]/src/components/ar-camera/ui/HeaderOverlay.tsx",
                                            lineNumber: 51,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0));
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ar-camera/ui/HeaderOverlay.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ar-camera/ui/HeaderOverlay.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ar-camera/ui/HeaderOverlay.tsx",
                    lineNumber: 27,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ar-camera/ui/HeaderOverlay.tsx",
                lineNumber: 26,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_c = HeaderOverlay;
var _c;
__turbopack_context__.k.register(_c, "HeaderOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ar-camera/ui/LoadingOverlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoadingOverlay",
    ()=>LoadingOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const LoadingOverlay = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 flex flex-col items-center justify-center bg-slate-950 gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"
            }, void 0, false, {
                fileName: "[project]/src/components/ar-camera/ui/LoadingOverlay.tsx",
                lineNumber: 3,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-purple-300 text-sm",
                children: "Loading AR engine..."
            }, void 0, false, {
                fileName: "[project]/src/components/ar-camera/ui/LoadingOverlay.tsx",
                lineNumber: 4,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ar-camera/ui/LoadingOverlay.tsx",
        lineNumber: 2,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = LoadingOverlay;
var _c;
__turbopack_context__.k.register(_c, "LoadingOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ar-camera/ui/MindARScene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MindARScene",
    ()=>MindARScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ar-camera/types.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const MindARScene = (param)=>{
    let { sceneRef, characters, // animationMixerAvailable, // Currently unused but kept for future animation features
    registerTargetRef, selectedTier } = param;
    _s();
    // Get the .mind file for the selected tier (support remote or local URL)
    const targetSrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MindARScene.useMemo[targetSrc]": ()=>{
            const rawFile = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIER_CONFIG"][selectedTier].mindFile;
            if (rawFile.startsWith("http://") || rawFile.startsWith("https://")) {
                return rawFile;
            }
            const baseStorage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_AR_STORAGE_URL;
            if (baseStorage) {
                return "".concat(baseStorage.replace(/\/$/, ""), "/").concat(rawFile.replace(/^\//, ""));
            }
            return rawFile.startsWith("/") ? rawFile : "/ar-targets/".concat(rawFile);
        }
    }["MindARScene.useMemo[targetSrc]"], [
        selectedTier
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("a-scene", {
        ref: sceneRef,
        // MindAR automatically accesses device camera when mindar-image is initialized
        "mindar-image": "imageTargetSrc: ".concat(targetSrc, "; filterMinCF:0.0001; filterBeta: 10"),
        "color-space": "sRGB",
        renderer: "colorManagement: true, physicallyCorrectLights: true, legacyLights: false",
        "vr-mode-ui": "enabled: false",
        "device-orientation-permission-ui": "enabled: false",
        embedded: true,
        className: "mindar-scene w-full h-full"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("a-assets", null, characters.filter((character)=>!!character.modelUrl).map((character)=>character.modelUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("a-asset-item", {
            key: "asset-".concat(character.id),
            id: "character-model-".concat(character.id),
            src: character.modelUrl
        }))), // a-camera element renders the AR camera view
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("a-camera", {
        position: "0 0 0"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("a-entity", {
        light: "type: ambient; intensity: 1"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("a-entity", {
        light: "type: directional; intensity: 0.8",
        position: "0 1 0"
    }), // Render a target entity for each character in the selected tier
    characters.length > 0 && characters.filter((character)=>typeof character.targetIndex === "number" && character.targetIndex >= 0).map((character)=>{
        const targetIndex = character.targetIndex;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("a-entity", {
            key: character.id,
            ref: registerTargetRef(character.id, targetIndex),
            "mindar-image-target": "targetIndex: ".concat(targetIndex)
        }, character.modelUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("a-gltf-model", {
            src: "#character-model-".concat(character.id),
            position: "0 0 0",
            rotation: "60 0 0",
            scale: "1 1 1",
            "animation-mixer": "clip: pm0149_00_00_20001_battlewait01_loop; loop: repeat"
        }));
    }));
};
_s(MindARScene, "/MRGA4WzghehxAkNXr8P+A3NCuA=");
_c = MindARScene;
var _c;
__turbopack_context__.k.register(_c, "MindARScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ar-camera/ui/QuizModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuizModal",
    ()=>QuizModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$imageUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/imageUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ar-camera/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$utils$2f$tierStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ar-camera/utils/tierStyles.ts [app-client] (ecmascript)");
;
;
;
;
const QuizModal = (param)=>{
    let { character, selectedAnswer, quizResult, onAnswerSelect, onSubmit, onClose } = param;
    var _character_image;
    const tier = character.tier || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTierFromValue"])(character.value);
    const themeColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$utils$2f$tierStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTierThemeColor"])(tier);
    const imageSrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$imageUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageSrc"])(character.image);
    const displayAsText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$imageUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldDisplayAsText"])(character.image);
    const hasContent = imageSrc || displayAsText;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md overflow-y-auto z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative bg-slate-900/30 backdrop-blur-xl border-2 border-".concat(themeColor.primary, "/50 rounded-xl p-6 max-w-lg w-full shadow-2xl shadow-").concat(themeColor.glow, " animate-scaleIn my-auto max-h-[90vh] overflow-y-auto"),
            onContextMenu: (e)=>e.preventDefault(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "sticky -top-3 -right-3 w-10 h-10 bg-slate-800 hover:bg-slate-700 text-white rounded-full flex items-center justify-center border-2 border-slate-600 transition-all duration-200 z-[100] shadow-lg",
                    "aria-label": "Close quiz",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-6 w-6",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        strokeWidth: 2,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M6 18L18 6M6 6l12 12"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ar-camera/ui/QuizModal.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ar-camera/ui/QuizModal.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ar-camera/ui/QuizModal.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-".concat(themeColor.primary, " to-").concat(themeColor.secondary, " mb-6"),
                    children: "Let's start hunting"
                }, void 0, false, {
                    fileName: "[project]/src/components/ar-camera/ui/QuizModal.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-3 ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$utils$2f$tierStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTierBorder"])(tier), " rounded-2xl p-6 mb-6 bg-slate-800/60 shadow-xl"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-[8.25rem] z-[120] px-3 py-1 rounded-full bg-gradient-to-r ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$utils$2f$tierStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTierColor"])(tier), " text-white text-xs font-bold shadow-md"),
                                    children: tier
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ar-camera/ui/QuizModal.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                hasContent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-28 h-36 rounded-2xl overflow-hidden border-2 border-".concat(themeColor.primary, "/40 shadow-lg shadow-").concat(themeColor.glow, " bg-slate-800/80 flex items-center justify-center"),
                                    children: [
                                        imageSrc ? // eslint-disable-next-line @next/next/no-img-element
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: imageSrc,
                                            alt: character.name,
                                            className: "w-full h-full object-cover",
                                            draggable: false,
                                            onError: (e)=>{
                                                // Fallback if image fails to load
                                                e.currentTarget.style.display = "none";
                                                const textSpan = e.currentTarget.nextElementSibling;
                                                if (textSpan && textSpan.classList.contains("fallback-text")) {
                                                    textSpan.classList.remove("hidden");
                                                }
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ar-camera/ui/QuizModal.tsx",
                                            lineNumber: 86,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)) : null,
                                        displayAsText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-5xl ".concat(imageSrc ? "hidden fallback-text" : ""),
                                            "aria-hidden": "true",
                                            children: (_character_image = character.image) === null || _character_image === void 0 ? void 0 : _character_image.trim()
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ar-camera/ui/QuizModal.tsx",
                                            lineNumber: 105,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ar-camera/ui/QuizModal.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-28 h-36 rounded-2xl border-2 border-dashed border-".concat(themeColor.primary, "/40 bg-slate-800/60 flex items-center justify-center text-").concat(themeColor.primary, " text-xs text-center px-4"),
                                    children: [
                                        "Card art coming soon",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -top-2 -right-2 px-3 py-1 rounded-full bg-gradient-to-r ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$utils$2f$tierStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTierColor"])(tier), " text-white text-xs font-bold shadow-md"),
                                            children: tier
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ar-camera/ui/QuizModal.tsx",
                                            lineNumber: 120,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ar-camera/ui/QuizModal.tsx",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ar-camera/ui/QuizModal.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-md text-".concat(themeColor.primary, " mb-4 text-center select-none"),
                            children: character.question
                        }, void 0, false, {
                            fileName: "[project]/src/components/ar-camera/ui/QuizModal.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 text-sm select-none",
                            children: character.options.map((option, index)=>{
                                const isSelected = selectedAnswer === index;
                                const isCorrect = quizResult === "correct" && isSelected;
                                const isIncorrect = quizResult === "incorrect" && isSelected;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onAnswerSelect(index),
                                    disabled: quizResult !== null,
                                    className: "w-full p-3 rounded-xl border-2 text-left transition-all duration-300 ".concat(isSelected ? isCorrect ? "bg-green-600/30 border-green-500 text-green-300" : isIncorrect ? "bg-red-600/30 border-red-500 text-red-300" : "bg-".concat(themeColor.primary, "/30 border-").concat(themeColor.primary, " text-").concat(themeColor.primary) : "bg-slate-700/30 border-slate-600 text-slate-300 hover:border-".concat(themeColor.primary, "/50 hover:bg-slate-700/50"), " ").concat(quizResult !== null ? "cursor-not-allowed" : "cursor-pointer"),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: [
                                            index + 1,
                                            ". ",
                                            option
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ar-camera/ui/QuizModal.tsx",
                                        lineNumber: 162,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, index, false, {
                                    fileName: "[project]/src/components/ar-camera/ui/QuizModal.tsx",
                                    lineNumber: 144,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/ar-camera/ui/QuizModal.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ar-camera/ui/QuizModal.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onSubmit,
                    disabled: selectedAnswer === null || quizResult !== null,
                    className: "w-full py-3 rounded-xl font-bold transition-all duration-300 ".concat(selectedAnswer === null || quizResult !== null ? "bg-slate-700 text-slate-500 cursor-not-allowed" : "bg-gradient-to-r from-".concat(themeColor.primary, " to-").concat(themeColor.secondary, " hover:from-").concat(themeColor.primary, " hover:to-").concat(themeColor.secondary, " text-white transform hover:scale-105")),
                    children: quizResult === "correct" ? "✓ Correct! Collecting..." : quizResult === "incorrect" ? "✗ Try Again" : "Submit"
                }, void 0, false, {
                    fileName: "[project]/src/components/ar-camera/ui/QuizModal.tsx",
                    lineNumber: 171,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                quizResult === "incorrect" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-400 text-center text-sm mt-3 animate-shake",
                    children: "Incorrect answer. Please try again!"
                }, void 0, false, {
                    fileName: "[project]/src/components/ar-camera/ui/QuizModal.tsx",
                    lineNumber: 188,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ar-camera/ui/QuizModal.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ar-camera/ui/QuizModal.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = QuizModal;
var _c;
__turbopack_context__.k.register(_c, "QuizModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ar-camera/ui/ScanHint.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScanHint",
    ()=>ScanHint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const ScanHint = (param)=>{
    let { visible } = param;
    if (!visible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute bottom-24 left-0 right-0 text-center animate-pulse z-30",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-purple-300 text-sm font-medium",
                children: "Point your camera at a character poster"
            }, void 0, false, {
                fileName: "[project]/src/components/ar-camera/ui/ScanHint.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-slate-400 text-xs mt-1",
                children: "Scanning for characters..."
            }, void 0, false, {
                fileName: "[project]/src/components/ar-camera/ui/ScanHint.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ar-camera/ui/ScanHint.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ScanHint;
var _c;
__turbopack_context__.k.register(_c, "ScanHint");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ARCamera.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ARCamera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$firestore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/services/firestore.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$quizCooldown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/quizCooldown.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$hooks$2f$useARCharacters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ar-camera/hooks/useARCharacters.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$hooks$2f$useMindARInlineStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ar-camera/hooks/useMindARInlineStyles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$hooks$2f$useMindARScripts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ar-camera/hooks/useMindARScripts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$hooks$2f$useSceneLifecycle$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ar-camera/hooks/useSceneLifecycle.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$ui$2f$ARErrorOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ar-camera/ui/ARErrorOverlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$ui$2f$DetectedCharacterOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ar-camera/ui/DetectedCharacterOverlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$ui$2f$FrameOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ar-camera/ui/FrameOverlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$ui$2f$HeaderOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ar-camera/ui/HeaderOverlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$ui$2f$LoadingOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ar-camera/ui/LoadingOverlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$ui$2f$MindARScene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ar-camera/ui/MindARScene.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$ui$2f$QuizModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ar-camera/ui/QuizModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$ui$2f$ScanHint$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ar-camera/ui/ScanHint.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ar-camera/types.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function ARCamera(param) {
    let { teamName, teamId, onClose, onCharacterCollected } = param;
    _s();
    const { charactersByTier, loading: loadingCharacters, error: charactersError, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$hooks$2f$useARCharacters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useARCharacters"])();
    const sceneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const targetRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const targetListenersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const charactersMapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const [detectedCharacter, setDetectedCharacter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showQuiz, setShowQuiz] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedAnswer, setSelectedAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [quizResult, setQuizResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSceneReady, setIsSceneReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCatching, setIsCatching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedTier, setSelectedTier] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Common");
    const [cooldownSeconds, setCooldownSeconds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const cooldownIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const showQuizRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const activeTargetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scriptsLoaded, animationMixerAvailable, arError, setARError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$hooks$2f$useMindARScripts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMindARScripts"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$hooks$2f$useMindARInlineStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMindARInlineStyles"])(scriptsLoaded);
    // Update character map whenever tier data changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ARCamera.useEffect": ()=>{
            const newMap = new Map();
            Object.values(charactersByTier).flat().forEach({
                "ARCamera.useEffect": (char)=>{
                    newMap.set(char.id, char);
                }
            }["ARCamera.useEffect"]);
            charactersMapRef.current = newMap;
        }
    }["ARCamera.useEffect"], [
        charactersByTier
    ]);
    // Show error if characters failed to load or have missing fields
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ARCamera.useEffect": ()=>{
            if (charactersError) {
                setARError(charactersError);
            } else if (!loadingCharacters) {
                const totalCharacters = Object.values(charactersByTier).flat().length;
                if (totalCharacters === 0) {
                    setARError("No AR characters configured. Please add required fields to Firestore documents. " + "See FIRESTORE_SCHEMA.md for details.");
                }
            }
        }
    }["ARCamera.useEffect"], [
        charactersError,
        loadingCharacters,
        charactersByTier,
        setARError
    ]);
    // Auto-select tier with characters on load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ARCamera.useEffect": ()=>{
            if (!loadingCharacters) {
                var _charactersByTier_selectedTier;
                var _charactersByTier_selectedTier_length;
                if (((_charactersByTier_selectedTier_length = (_charactersByTier_selectedTier = charactersByTier[selectedTier]) === null || _charactersByTier_selectedTier === void 0 ? void 0 : _charactersByTier_selectedTier.length) !== null && _charactersByTier_selectedTier_length !== void 0 ? _charactersByTier_selectedTier_length : 0) === 0) {
                    const availableTier = [
                        "Legendary",
                        "Rare",
                        "Common"
                    ].find({
                        "ARCamera.useEffect.availableTier": (tier)=>{
                            var _charactersByTier_tier;
                            var _charactersByTier_tier_length;
                            return ((_charactersByTier_tier_length = (_charactersByTier_tier = charactersByTier[tier]) === null || _charactersByTier_tier === void 0 ? void 0 : _charactersByTier_tier.length) !== null && _charactersByTier_tier_length !== void 0 ? _charactersByTier_tier_length : 0) > 0;
                        }
                    }["ARCamera.useEffect.availableTier"]);
                    if (availableTier) {
                        setSelectedTier(availableTier);
                    }
                }
            }
        }
    }["ARCamera.useEffect"], [
        loadingCharacters,
        charactersByTier,
        selectedTier
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ARCamera.useEffect": ()=>{
            showQuizRef.current = showQuiz;
        }
    }["ARCamera.useEffect"], [
        showQuiz
    ]);
    const stopMindAR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ARCamera.useCallback[stopMindAR]": ()=>{
            const sceneEl = sceneRef.current;
            if (!sceneEl) return;
            try {
                var _sceneEl_components;
                const mindarComponent = (_sceneEl_components = sceneEl.components) === null || _sceneEl_components === void 0 ? void 0 : _sceneEl_components["mindar-image-system"];
                if (mindarComponent && typeof mindarComponent.stop === "function") {
                    mindarComponent.stop();
                }
            } catch (error) {
                console.warn("MindAR stop error", error);
            }
        }
    }["ARCamera.useCallback[stopMindAR]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ARCamera.useEffect": ()=>stopMindAR
    }["ARCamera.useEffect"], [
        stopMindAR
    ]);
    // Cooldown timer management
    const startCooldownTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ARCamera.useCallback[startCooldownTimer]": (characterId)=>{
            if (cooldownIntervalRef.current) {
                clearInterval(cooldownIntervalRef.current);
                cooldownIntervalRef.current = null;
            }
            const updateCooldown = {
                "ARCamera.useCallback[startCooldownTimer].updateCooldown": ()=>{
                    const remaining = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$quizCooldown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCooldownRemaining"])(characterId);
                    if (remaining === null) {
                        setCooldownSeconds(null);
                        if (cooldownIntervalRef.current) {
                            clearInterval(cooldownIntervalRef.current);
                            cooldownIntervalRef.current = null;
                        }
                    } else {
                        setCooldownSeconds(remaining);
                    }
                }
            }["ARCamera.useCallback[startCooldownTimer].updateCooldown"];
            // Update immediately
            updateCooldown();
            // Then update every second
            cooldownIntervalRef.current = setInterval(updateCooldown, 1000);
        }
    }["ARCamera.useCallback[startCooldownTimer]"], []);
    const clearCooldownTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ARCamera.useCallback[clearCooldownTimer]": ()=>{
            if (cooldownIntervalRef.current) {
                clearInterval(cooldownIntervalRef.current);
                cooldownIntervalRef.current = null;
            }
            setCooldownSeconds(null);
        }
    }["ARCamera.useCallback[clearCooldownTimer]"], []);
    // Cleanup cooldown timer on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ARCamera.useEffect": ()=>{
            return ({
                "ARCamera.useEffect": ()=>{
                    if (cooldownIntervalRef.current) {
                        clearInterval(cooldownIntervalRef.current);
                    }
                }
            })["ARCamera.useEffect"];
        }
    }["ARCamera.useEffect"], []);
    // Reset detection state when tier changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ARCamera.useEffect": ()=>{
            activeTargetRef.current = null;
            setDetectedCharacter(null);
            setShowQuiz(false);
            setSelectedAnswer(null);
            setQuizResult(null);
            clearCooldownTimer();
            stopMindAR();
        }
    }["ARCamera.useEffect"], [
        selectedTier,
        stopMindAR,
        clearCooldownTimer
    ]);
    const handleSceneReady = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ARCamera.useCallback[handleSceneReady]": ()=>{
            setIsSceneReady(true);
            setARError(null);
        }
    }["ARCamera.useCallback[handleSceneReady]"], [
        setARError
    ]);
    const handleSceneError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ARCamera.useCallback[handleSceneError]": (message)=>{
            setARError(message);
        }
    }["ARCamera.useCallback[handleSceneError]"], [
        setARError
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$hooks$2f$useSceneLifecycle$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSceneLifecycle"])(sceneRef, scriptsLoaded, handleSceneReady, handleSceneError);
    const registerTargetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ARCamera.useCallback[registerTargetRef]": (characterId, targetIndex)=>{
            return ({
                "ARCamera.useCallback[registerTargetRef]": (el)=>{
                    const key = "".concat(characterId, "-").concat(targetIndex);
                    const existingListeners = targetListenersRef.current[key];
                    const existingElement = targetRefs.current[key];
                    if (existingListeners && existingElement) {
                        existingElement.removeEventListener("targetFound", existingListeners.onFound);
                        existingElement.removeEventListener("targetLost", existingListeners.onLost);
                        delete targetListenersRef.current[key];
                    }
                    if (el) {
                        targetRefs.current[key] = el;
                        const onFound = {
                            "ARCamera.useCallback[registerTargetRef].onFound": ()=>{
                                const character = charactersMapRef.current.get(characterId);
                                if (!character) return;
                                // Check if character is on cooldown
                                const cooldown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$quizCooldown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCooldownRemaining"])(characterId);
                                if (cooldown !== null) {
                                    setCooldownSeconds(cooldown);
                                    startCooldownTimer(characterId);
                                }
                                activeTargetRef.current = {
                                    characterId,
                                    targetIndex
                                };
                                setDetectedCharacter(character);
                                setSelectedAnswer(null);
                                setQuizResult(null);
                                // If not caught and not on cooldown, open quiz modal immediately
                                if (!character.isCaught && (!cooldown || cooldown <= 0)) {
                                    setShowQuiz(true);
                                } else {
                                    setShowQuiz(false);
                                }
                            }
                        }["ARCamera.useCallback[registerTargetRef].onFound"];
                        const onLost = {
                            "ARCamera.useCallback[registerTargetRef].onLost": ()=>{
                                var _activeTargetRef_current, _activeTargetRef_current1;
                                if (((_activeTargetRef_current = activeTargetRef.current) === null || _activeTargetRef_current === void 0 ? void 0 : _activeTargetRef_current.characterId) === characterId && ((_activeTargetRef_current1 = activeTargetRef.current) === null || _activeTargetRef_current1 === void 0 ? void 0 : _activeTargetRef_current1.targetIndex) === targetIndex && !showQuizRef.current) {
                                    activeTargetRef.current = null;
                                    setDetectedCharacter({
                                        "ARCamera.useCallback[registerTargetRef].onLost": (current)=>(current === null || current === void 0 ? void 0 : current.id) === characterId ? null : current
                                    }["ARCamera.useCallback[registerTargetRef].onLost"]);
                                    // Clear cooldown timer when target is lost
                                    clearCooldownTimer();
                                }
                            }
                        }["ARCamera.useCallback[registerTargetRef].onLost"];
                        el.addEventListener("targetFound", onFound);
                        el.addEventListener("targetLost", onLost);
                        targetListenersRef.current[key] = {
                            onFound,
                            onLost
                        };
                    } else {
                        delete targetRefs.current[key];
                    }
                }
            })["ARCamera.useCallback[registerTargetRef]"];
        }
    }["ARCamera.useCallback[registerTargetRef]"], [
        clearCooldownTimer,
        startCooldownTimer
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ARCamera.useEffect": ()=>{
            return ({
                "ARCamera.useEffect": ()=>{
                    Object.entries(targetListenersRef.current).forEach({
                        "ARCamera.useEffect": (param)=>{
                            let [id, listeners] = param;
                            const element = targetRefs.current[id];
                            if (element) {
                                element.removeEventListener("targetFound", listeners.onFound);
                                element.removeEventListener("targetLost", listeners.onLost);
                            }
                        }
                    }["ARCamera.useEffect"]);
                    targetListenersRef.current = {};
                    targetRefs.current = {};
                }
            })["ARCamera.useEffect"];
        }
    }["ARCamera.useEffect"], []);
    const handleCollectClick = ()=>{
        if (detectedCharacter === null || detectedCharacter === void 0 ? void 0 : detectedCharacter.isCaught) return;
        // Don't allow starting quiz if on cooldown
        if (cooldownSeconds !== null && cooldownSeconds > 0) return;
        setShowQuiz(true);
    };
    const handleAnswerSelect = (index)=>{
        if (quizResult === null) {
            setSelectedAnswer(index);
        }
    };
    const handleSubmitQuiz = async ()=>{
        if (selectedAnswer === null || !detectedCharacter || isCatching) return;
        if (selectedAnswer === detectedCharacter.correctAnswer) {
            setQuizResult("correct");
            setIsCatching(true);
            try {
                // Clear cooldown on correct answer
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$quizCooldown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearCooldown"])(detectedCharacter.id);
                clearCooldownTimer();
                // Update Firestore: mark character as caught and update team
                // This uses a transaction to prevent race conditions
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["catchCharacter"])(detectedCharacter.id, teamId, detectedCharacter.value);
                // Check if the character was already caught by another team
                if (!result.success && result.alreadyCaught) {
                    console.log("Character already caught by team: ".concat(result.caughtByTeam));
                    // Fetch the fresh character data from Firestore to get the updated caught status
                    const freshCharacter = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCharacterById"])(detectedCharacter.id);
                    console.log("Fresh character data:", freshCharacter);
                    if (freshCharacter) {
                        // Update the detected character state with fresh data
                        setDetectedCharacter(freshCharacter);
                    }
                    // Reset quiz state
                    setQuizResult(null);
                    setIsCatching(false);
                    setShowQuiz(false);
                    // Show error message after a brief delay to let the UI update
                    setTimeout(()=>{
                        setARError("This character was just caught by another team!");
                    }, 300);
                    // Also refresh the full character list
                    refetch();
                    return;
                }
                // Notify parent component and close AR camera
                setTimeout(()=>{
                    onCharacterCollected({
                        id: detectedCharacter.id,
                        name: detectedCharacter.name,
                        image: detectedCharacter.image,
                        tier: detectedCharacter.tier || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTierFromValue"])(detectedCharacter.value),
                        value: detectedCharacter.value
                    });
                    // Refresh character list to reflect caught status
                    refetch();
                    // Close AR camera and return to home page
                    handleClose();
                }, 1200);
            } catch (error) {
                console.error("Error catching character:", error);
                setQuizResult(null);
                setIsCatching(false);
                setARError("Failed to catch character. Please try again.");
            }
        } else {
            setQuizResult("incorrect");
            // Set progressive cooldown for wrong answer
            const cooldownDuration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$quizCooldown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setWrongAnswerCooldown"])(detectedCharacter.id);
            console.log("Wrong answer! Cooldown set for ".concat(cooldownDuration, " seconds"));
            setTimeout(()=>{
                setQuizResult(null);
                setSelectedAnswer(null);
                setShowQuiz(false);
                // Start cooldown timer
                startCooldownTimer(detectedCharacter.id);
            }, 1500);
        }
    };
    const handleClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ARCamera.useCallback[handleClose]": ()=>{
            stopMindAR();
            clearCooldownTimer();
            activeTargetRef.current = null;
            setDetectedCharacter(null);
            setShowQuiz(false);
            setSelectedAnswer(null);
            setQuizResult(null);
            onClose();
        }
    }["ARCamera.useCallback[handleClose]"], [
        onClose,
        stopMindAR,
        clearCooldownTimer
    ]);
    const currentTierCharacters = charactersByTier[selectedTier];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black z-50 flex flex-col",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex-1 overflow-hidden",
            children: [
                (!scriptsLoaded || loadingCharacters) && !arError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$ui$2f$LoadingOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingOverlay"], {}, void 0, false, {
                    fileName: "[project]/src/components/ARCamera.tsx",
                    lineNumber: 421,
                    columnNumber: 11
                }, this),
                arError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$ui$2f$ARErrorOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ARErrorOverlay"], {
                    message: arError,
                    onClose: handleClose
                }, void 0, false, {
                    fileName: "[project]/src/components/ARCamera.tsx",
                    lineNumber: 424,
                    columnNumber: 21
                }, this),
                scriptsLoaded && !arError && !loadingCharacters && currentTierCharacters.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 w-full h-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$ui$2f$MindARScene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MindARScene"], {
                        sceneRef: sceneRef,
                        characters: currentTierCharacters,
                        animationMixerAvailable: animationMixerAvailable,
                        registerTargetRef: registerTargetRef,
                        selectedTier: selectedTier
                    }, selectedTier, false, {
                        fileName: "[project]/src/components/ARCamera.tsx",
                        lineNumber: 431,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ARCamera.tsx",
                    lineNumber: 430,
                    columnNumber: 13
                }, this),
                scriptsLoaded && !arError && !loadingCharacters && currentTierCharacters.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 flex items-center justify-center p-6 text-center z-10 pointer-events-none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-black/90 border border-orange-500/40 rounded-2xl p-5 max-w-xs shadow-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-orange-400 font-mono font-bold text-sm mb-1",
                                children: [
                                    "NO ",
                                    selectedTier.toUpperCase(),
                                    " TARGETS"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ARCamera.tsx",
                                lineNumber: 448,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-zinc-400 text-xs font-mono",
                                children: "There are no cards in this tier. Use the top bar to switch to another tier."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ARCamera.tsx",
                                lineNumber: 451,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ARCamera.tsx",
                        lineNumber: 447,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ARCamera.tsx",
                    lineNumber: 446,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$ui$2f$HeaderOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeaderOverlay"], {
                    teamName: teamName,
                    onClose: handleClose,
                    mindFiles: [
                        {
                            value: "Common",
                            label: "Common"
                        },
                        {
                            value: "Rare",
                            label: "Rare"
                        },
                        {
                            value: "Legendary",
                            label: "Legendary"
                        }
                    ],
                    activeMindFile: selectedTier,
                    onMindFileChange: (tier)=>setSelectedTier(tier)
                }, void 0, false, {
                    fileName: "[project]/src/components/ARCamera.tsx",
                    lineNumber: 458,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$ui$2f$FrameOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FrameOverlay"], {
                    tier: selectedTier
                }, void 0, false, {
                    fileName: "[project]/src/components/ARCamera.tsx",
                    lineNumber: 469,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$ui$2f$ScanHint$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScanHint"], {
                    visible: !detectedCharacter && isSceneReady && !showQuiz
                }, void 0, false, {
                    fileName: "[project]/src/components/ARCamera.tsx",
                    lineNumber: 470,
                    columnNumber: 9
                }, this),
                detectedCharacter && !showQuiz && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$ui$2f$DetectedCharacterOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DetectedCharacterOverlay"], {
                    character: detectedCharacter,
                    onCollect: handleCollectClick,
                    isCaught: detectedCharacter.isCaught,
                    cooldownSeconds: cooldownSeconds
                }, void 0, false, {
                    fileName: "[project]/src/components/ARCamera.tsx",
                    lineNumber: 473,
                    columnNumber: 11
                }, this),
                showQuiz && detectedCharacter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$ui$2f$QuizModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuizModal"], {
                    character: detectedCharacter,
                    selectedAnswer: selectedAnswer,
                    quizResult: quizResult,
                    onAnswerSelect: handleAnswerSelect,
                    onSubmit: handleSubmitQuiz,
                    onClose: ()=>{
                        setShowQuiz(false);
                        setSelectedAnswer(null);
                        setQuizResult(null);
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/ARCamera.tsx",
                    lineNumber: 482,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ARCamera.tsx",
            lineNumber: 419,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ARCamera.tsx",
        lineNumber: 418,
        columnNumber: 5
    }, this);
}
_s(ARCamera, "vrAcEj2Gi5YKbhAxjhisRZmQA68=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$hooks$2f$useARCharacters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useARCharacters"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$hooks$2f$useMindARScripts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMindARScripts"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$hooks$2f$useMindARInlineStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMindARInlineStyles"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ar$2d$camera$2f$hooks$2f$useSceneLifecycle$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSceneLifecycle"]
    ];
});
_c = ARCamera;
var _c;
__turbopack_context__.k.register(_c, "ARCamera");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Leaderboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Leaderboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Leaderboard(param) {
    let { teams, selectedTeamId, onTeamSelect, isSelectable = false } = param;
    _s();
    const leaderboardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const selectedTeamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Scroll to selected team when it changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Leaderboard.useEffect": ()=>{
            if (selectedTeamId && selectedTeamRef.current && leaderboardRef.current) {
                setTimeout({
                    "Leaderboard.useEffect": ()=>{
                        var _selectedTeamRef_current;
                        (_selectedTeamRef_current = selectedTeamRef.current) === null || _selectedTeamRef_current === void 0 ? void 0 : _selectedTeamRef_current.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });
                    }
                }["Leaderboard.useEffect"], 100);
            }
        }
    }["Leaderboard.useEffect"], [
        selectedTeamId
    ]);
    const handleTeamClick = (teamId)=>{
        if (isSelectable && onTeamSelect) {
            onTeamSelect(teamId);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: leaderboardRef,
            className: "space-y-2 max-h-72 sm:max-h-80 overflow-y-auto pr-1 scrollbar-none",
            children: teams.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-8 bg-zinc-950/50 border border-zinc-900 rounded-2xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-zinc-500 text-sm font-mono",
                    children: "No teams registered yet"
                }, void 0, false, {
                    fileName: "[project]/src/components/Leaderboard.tsx",
                    lineNumber: 48,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Leaderboard.tsx",
                lineNumber: 47,
                columnNumber: 11
            }, this) : teams.map((team, index)=>{
                const isSelected = team.id === selectedTeamId;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: isSelected ? selectedTeamRef : null,
                    onClick: ()=>handleTeamClick(team.id),
                    className: "relative rounded-xl p-3 sm:p-3.5 transition-all duration-300 border ".concat(isSelectable ? "cursor-pointer hover:border-orange-500/60 hover:bg-zinc-900" : "", " ").concat(isSelected ? "bg-zinc-900/90 border-orange-500 shadow-lg shadow-orange-500/20 scale-[1.01]" : "bg-black/70 border-zinc-800/80 hover:border-zinc-700"),
                    children: [
                        isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-6 bg-orange-500 rounded-r"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Leaderboard.tsx",
                            lineNumber: 70,
                            columnNumber: 19
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center font-mono font-black text-xs sm:text-sm flex-shrink-0 ".concat(index === 0 ? "bg-orange-500 text-black shadow-md shadow-orange-500/40" : index === 1 ? "bg-white text-black shadow-md shadow-white/20" : index === 2 ? "bg-zinc-700 text-orange-300 border border-orange-500/30" : "bg-zinc-900 text-zinc-400 border border-zinc-800"),
                                    children: [
                                        "#",
                                        index + 1
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Leaderboard.tsx",
                                    lineNumber: 75,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-mono text-sm truncate font-bold ".concat(isSelected ? "text-orange-400" : "text-white"),
                                                    children: team.teamName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Leaderboard.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1 ml-2 flex-shrink-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-orange-500 text-xs font-bold font-mono",
                                                            children: "⚡"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Leaderboard.tsx",
                                                            lineNumber: 100,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white font-mono font-black text-sm",
                                                            children: team.score
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Leaderboard.tsx",
                                                            lineNumber: 101,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-zinc-500 font-mono",
                                                            children: "PTS"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Leaderboard.tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Leaderboard.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Leaderboard.tsx",
                                            lineNumber: 91,
                                            columnNumber: 21
                                        }, this),
                                        isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] font-mono text-orange-400 font-semibold tracking-wider mt-0.5",
                                            children: "YOUR SQUAD"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Leaderboard.tsx",
                                            lineNumber: 109,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Leaderboard.tsx",
                                    lineNumber: 90,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Leaderboard.tsx",
                            lineNumber: 73,
                            columnNumber: 17
                        }, this)
                    ]
                }, team.id, true, {
                    fileName: "[project]/src/components/Leaderboard.tsx",
                    lineNumber: 54,
                    columnNumber: 15
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/components/Leaderboard.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Leaderboard.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(Leaderboard, "sANKSsgIDSzB9bClYqM9a/jaH2M=");
_c = Leaderboard;
var _c;
__turbopack_context__.k.register(_c, "Leaderboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/UncaughtCharacters.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UncaughtCharacters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$firestore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/services/firestore.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$imageUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/imageUtils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function UncaughtCharacters(param) {
    let { isOpen, onClose, onCountChange } = param;
    _s();
    const [uncaughtCards, setUncaughtCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchUncaughtCards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UncaughtCharacters.useCallback[fetchUncaughtCards]": async ()=>{
            try {
                setLoading(true);
                setError(null);
                const cards = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUncaughtCards"])();
                setUncaughtCards(cards);
                onCountChange === null || onCountChange === void 0 ? void 0 : onCountChange(cards.length);
            } catch (err) {
                console.error("Error fetching uncaught cards:", err);
                setError("Failed to load uncaught targets");
            } finally{
                setLoading(false);
            }
        }
    }["UncaughtCharacters.useCallback[fetchUncaughtCards]"], [
        onCountChange
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UncaughtCharacters.useEffect": ()=>{
            if (isOpen) {
                fetchUncaughtCards();
            }
        }
    }["UncaughtCharacters.useEffect"], [
        isOpen,
        fetchUncaughtCards
    ]);
    const getTierBadge = (tier)=>{
        switch(tier){
            case "Legendary":
                return {
                    label: "SSR",
                    style: "bg-orange-500 text-black font-black border-orange-400",
                    border: "border-orange-500 shadow-orange-500/20"
                };
            case "Rare":
                return {
                    label: "SR",
                    style: "bg-white text-black font-bold border-zinc-200",
                    border: "border-zinc-400 shadow-white/10"
                };
            default:
                return {
                    label: "R",
                    style: "bg-zinc-800 text-zinc-300 font-medium border-zinc-700",
                    border: "border-zinc-800"
                };
        }
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fadeIn select-none",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-zinc-950 border-2 border-orange-500/40 rounded-3xl w-full max-w-lg p-5 shadow-2xl shadow-orange-500/10 animate-scaleIn max-h-[85vh] flex flex-col",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center pb-4 border-b border-zinc-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-white font-mono font-black text-lg sm:text-xl tracking-wider flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-orange-500",
                                            children: "CODEX //"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UncaughtCharacters.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "UNCAUGHT"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UncaughtCharacters.tsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/UncaughtCharacters.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-zinc-400 text-xs font-mono mt-0.5",
                                    children: [
                                        uncaughtCards.length,
                                        " targets currently active in the field"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/UncaughtCharacters.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/UncaughtCharacters.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-orange-500 transition-colors",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/src/components/UncaughtCharacters.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/UncaughtCharacters.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto py-4 space-y-3 pr-1 scrollbar-none",
                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center py-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 border-2 border-orange-500 border-t-transparent rounded-full animate-spin mb-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/UncaughtCharacters.tsx",
                                lineNumber: 101,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-zinc-400 text-xs font-mono",
                                children: "Syncing field radar..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/UncaughtCharacters.tsx",
                                lineNumber: 102,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UncaughtCharacters.tsx",
                        lineNumber: 100,
                        columnNumber: 13
                    }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-400 text-sm font-mono",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/components/UncaughtCharacters.tsx",
                            lineNumber: 106,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/UncaughtCharacters.tsx",
                        lineNumber: 105,
                        columnNumber: 13
                    }, this) : uncaughtCards.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-12 bg-zinc-900/50 rounded-2xl border border-zinc-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-orange-400 font-mono font-bold text-base",
                                children: "ALL TARGETS CAPTURED!"
                            }, void 0, false, {
                                fileName: "[project]/src/components/UncaughtCharacters.tsx",
                                lineNumber: 110,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-zinc-400 text-xs font-mono mt-1",
                                children: "Every character has been successfully caught."
                            }, void 0, false, {
                                fileName: "[project]/src/components/UncaughtCharacters.tsx",
                                lineNumber: 111,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UncaughtCharacters.tsx",
                        lineNumber: 109,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 sm:grid-cols-3 gap-2.5",
                        children: uncaughtCards.map((card)=>{
                            var _card_image;
                            const tierInfo = getTierBadge(card.tier);
                            const imageSrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$imageUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageSrc"])(card.image);
                            const displayAsText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$imageUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldDisplayAsText"])(card.image);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-zinc-900/80 rounded-xl border ".concat(tierInfo.border, " p-2 flex flex-col items-center relative overflow-hidden transition-all duration-200 hover:scale-[1.02]"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute top-1.5 left-1.5 text-[9px] px-1.5 py-0.2 rounded border font-mono ".concat(tierInfo.style),
                                        children: tierInfo.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UncaughtCharacters.tsx",
                                        lineNumber: 126,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-14 h-14 sm:w-16 sm:h-16 my-1 rounded-lg overflow-hidden bg-black/60 flex items-center justify-center border border-zinc-800",
                                        children: imageSrc ? // eslint-disable-next-line @next/next/no-img-element
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: imageSrc,
                                            alt: card.name,
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UncaughtCharacters.tsx",
                                            lineNumber: 136,
                                            columnNumber: 25
                                        }, this) : displayAsText ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl",
                                            children: (_card_image = card.image) === null || _card_image === void 0 ? void 0 : _card_image.trim()
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UncaughtCharacters.tsx",
                                            lineNumber: 142,
                                            columnNumber: 25
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xl text-zinc-600 font-mono",
                                            children: "?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UncaughtCharacters.tsx",
                                            lineNumber: 144,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UncaughtCharacters.tsx",
                                        lineNumber: 133,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full text-center mt-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-white text-xs font-mono font-bold truncate",
                                                children: card.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/UncaughtCharacters.tsx",
                                                lineNumber: 150,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-orange-400 text-[11px] font-mono font-black",
                                                children: [
                                                    "+",
                                                    card.value,
                                                    " PTS"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/UncaughtCharacters.tsx",
                                                lineNumber: 153,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/UncaughtCharacters.tsx",
                                        lineNumber: 149,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, card.id, true, {
                                fileName: "[project]/src/components/UncaughtCharacters.tsx",
                                lineNumber: 121,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/UncaughtCharacters.tsx",
                        lineNumber: 114,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/UncaughtCharacters.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-3 border-t border-zinc-800 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] font-mono text-zinc-500",
                        children: "Find and scan these cards with your AR Camera to score points"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UncaughtCharacters.tsx",
                        lineNumber: 166,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/UncaughtCharacters.tsx",
                    lineNumber: 165,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/UncaughtCharacters.tsx",
            lineNumber: 74,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/UncaughtCharacters.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(UncaughtCharacters, "MAM+LCQMeE9mRNWTTmt413Pg3CY=");
_c = UncaughtCharacters;
var _c;
__turbopack_context__.k.register(_c, "UncaughtCharacters");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Pokeball$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Pokeball.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ARCamera$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ARCamera.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Leaderboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Leaderboard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UncaughtCharacters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UncaughtCharacters.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$firestore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/services/firestore.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$imageUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/imageUtils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const [selectedTeamId, setSelectedTeamId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [teams, setTeams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoadingTeams, setIsLoadingTeams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [charactersCaught, setCharactersCaught] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoadingCaught, setIsLoadingCaught] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isARActive, setIsARActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPokeballExploding, setIsPokeballExploding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showUncaughtModal, setShowUncaughtModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uncaughtCount, setUncaughtCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [teamSearchQuery, setTeamSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeBottomTab, setActiveBottomTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("collection");
    // Load teams
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const fetchTeams = {
                "Home.useEffect.fetchTeams": async ()=>{
                    try {
                        setIsLoadingTeams(true);
                        const teamsData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTeams"])();
                        setTeams(teamsData);
                    } catch (error) {
                        console.error("Error loading teams:", error);
                    } finally{
                        setIsLoadingTeams(false);
                    }
                }
            }["Home.useEffect.fetchTeams"];
            fetchTeams();
        }
    }["Home.useEffect"], []);
    // Load selected team from localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const storedTeamId = localStorage.getItem("selectedTeamId");
            if (storedTeamId) {
                setSelectedTeamId(storedTeamId);
            }
        }
    }["Home.useEffect"], []);
    const fetchCaughtCharacters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[fetchCaughtCharacters]": async (teamId)=>{
            try {
                setIsLoadingCaught(true);
                const caughtCards = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCardsCaughtByTeam"])(teamId);
                setCharactersCaught(caughtCards);
            } catch (error) {
                console.error("Error loading caught characters:", error);
                setCharactersCaught([]);
            } finally{
                setIsLoadingCaught(false);
            }
        }
    }["Home.useCallback[fetchCaughtCharacters]"], []);
    const loadUncaughtCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[loadUncaughtCount]": async ()=>{
            try {
                const cards = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUncaughtCards"])();
                setUncaughtCount(cards.length);
            } catch (error) {
                console.error("Error loading uncaught characters count:", error);
            }
        }
    }["Home.useCallback[loadUncaughtCount]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            loadUncaughtCount();
        }
    }["Home.useEffect"], [
        loadUncaughtCount
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (selectedTeamId) {
                fetchCaughtCharacters(selectedTeamId);
            } else {
                setCharactersCaught([]);
            }
        }
    }["Home.useEffect"], [
        selectedTeamId,
        fetchCaughtCharacters
    ]);
    const handleTeamSelect = (teamId)=>{
        setSelectedTeamId(teamId);
        localStorage.setItem("selectedTeamId", teamId);
    };
    const handlePokeballClick = ()=>{
        if (!selectedTeam) return;
        setIsPokeballExploding(true);
        setTimeout(()=>{
            setIsARActive(true);
            setIsPokeballExploding(false);
        }, 550);
    };
    const handleARClose = ()=>{
        setIsARActive(false);
    };
    const handleCharacterCollected = ()=>{
        if (selectedTeamId) {
            fetchCaughtCharacters(selectedTeamId);
            // Re-fetch teams to get updated team score for the leaderboard
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTeams"])().then(setTeams).catch(console.error);
        }
        setUncaughtCount((prev)=>typeof prev === "number" ? Math.max(prev - 1, 0) : prev);
    };
    const handleUncaughtCountChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleUncaughtCountChange]": (count)=>{
            setUncaughtCount(count);
        }
    }["Home.useCallback[handleUncaughtCountChange]"], []);
    const handleChangeTeam = ()=>{
        setSelectedTeamId(null);
        localStorage.removeItem("selectedTeamId");
        setCharactersCaught([]);
        setIsARActive(false);
        setTeamSearchQuery("");
    };
    const selectedTeam = teams.find((t)=>t.id === selectedTeamId);
    const filteredTeams = teams.filter((team)=>team.teamName.toLowerCase().includes(teamSearchQuery.toLowerCase()));
    if (isLoadingTeams) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-black flex flex-col items-center justify-center anime-grid-bg p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-12 h-12 border-3 border-orange-500 border-t-transparent rounded-full animate-spin mb-3"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 142,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-white font-mono text-xs uppercase tracking-widest animate-pulse-fast",
                    children: "INITIALIZING HUNTER OS..."
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 141,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#070707] text-white anime-grid-bg flex flex-col items-center justify-start p-3 sm:p-5 select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-md flex flex-col gap-4 animate-fadeIn",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    !selectedTeam ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4 animate-slideUp",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-zinc-950/90 border-2 border-orange-500/40 rounded-2xl p-4 sm:p-5 shadow-xl shadow-orange-500/5 relative overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-3 pb-2 border-b border-zinc-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse-fast"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "font-mono font-black text-sm tracking-wider text-white",
                                                        children: "SELECT YOUR SQUAD"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 166,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-mono text-orange-400 bg-orange-500/10 border border-orange-500/30 px-2 py-0.5 rounded",
                                                children: [
                                                    teams.length,
                                                    " SQUADS ACTIVE"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 172,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 165,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: teamSearchQuery,
                                                onChange: (e)=>setTeamSearchQuery(e.target.value),
                                                placeholder: "Search squad name...",
                                                className: "w-full px-3.5 py-2 pl-9 bg-black border border-zinc-800 rounded-xl text-white font-mono text-xs placeholder-zinc-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 179,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 186,
                                                columnNumber: 17
                                            }, this),
                                            teamSearchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setTeamSearchQuery(""),
                                                className: "absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white",
                                                children: "✕"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 200,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 max-h-60 overflow-y-auto pr-1 scrollbar-none",
                                        children: filteredTeams.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center py-6 bg-black/60 rounded-xl border border-zinc-900",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-zinc-500 font-mono text-xs",
                                                children: [
                                                    'No squads found matching "',
                                                    teamSearchQuery,
                                                    '"'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 213,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 212,
                                            columnNumber: 19
                                        }, this) : filteredTeams.map((team)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>handleTeamSelect(team.id),
                                                className: "group flex items-center justify-between p-3 rounded-xl bg-black/70 border border-zinc-800 hover:border-orange-500 hover:bg-zinc-900/90 transition-all duration-200 cursor-pointer active:scale-[0.99]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs font-mono font-bold text-white group-hover:border-orange-500 group-hover:text-orange-400",
                                                                children: "⚡"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 225,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono text-xs sm:text-sm font-bold text-zinc-200 group-hover:text-white transition-colors",
                                                                children: team.teamName
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 228,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono text-xs font-black text-orange-400",
                                                                children: [
                                                                    team.score,
                                                                    " PTS"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 233,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-zinc-500 group-hover:text-orange-400 group-hover:translate-x-0.5 transition-all",
                                                                children: "→"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 236,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, team.id, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 219,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-zinc-950/80 border border-zinc-800 rounded-2xl p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-3 pb-2 border-b border-zinc-800/80",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-mono font-black text-xs tracking-wider text-zinc-400 uppercase",
                                                children: "TOURNAMENT RANKINGS"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 249,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-mono text-zinc-500",
                                                children: "LIVE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 252,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 248,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Leaderboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        teams: teams,
                                        selectedTeamId: selectedTeamId
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 254,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 247,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 160,
                        columnNumber: 11
                    }, this) : /* ============================================================== */ /* PHASE 2: HUNTER COCKPIT HUD (When team is selected)           */ /* ============================================================== */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3.5 animate-slideUp",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-black/90 border border-orange-500/40 rounded-2xl p-3.5 shadow-lg shadow-orange-500/5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/50 flex items-center justify-center font-mono font-bold text-sm text-orange-400",
                                                    children: "⚡"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                    className: "text-white font-mono font-black text-sm tracking-wide truncate max-w-[130px] sm:max-w-[180px]",
                                                                    children: selectedTeam.teamName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 272,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: handleChangeTeam,
                                                                    className: "text-[10px] font-mono text-zinc-400 hover:text-orange-400 transition-colors uppercase px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800",
                                                                    children: "⇄ SWITCH"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 275,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 271,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] font-mono font-black text-orange-400",
                                                            children: [
                                                                selectedTeam.score,
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-zinc-500 font-normal",
                                                                    children: "POINTS"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 283,
                                                                    columnNumber: 44
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 282,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 266,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowUncaughtModal(true),
                                            className: "flex flex-col items-end px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-orange-500/40 hover:border-orange-400 hover:bg-orange-500/10 transition-all group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] font-mono text-zinc-400 uppercase tracking-wider group-hover:text-orange-400",
                                                    children: "CODEX"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1 font-mono font-black text-xs text-white",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse-fast"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 297,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                typeof uncaughtCount === "number" ? uncaughtCount : "--",
                                                                " LEFT"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 298,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 289,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 264,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 263,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative bg-black/85 border border-zinc-800/90 rounded-3xl p-4 flex flex-col items-center justify-center overflow-hidden shadow-2xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-orange-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 309,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-orange-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 310,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-orange-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 311,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-orange-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 312,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Pokeball$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        onClick: handlePokeballClick,
                                        isExploding: isPokeballExploding
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 314,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 307,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 p-1 bg-black/90 border border-zinc-800 rounded-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setActiveBottomTab("collection"),
                                                className: "py-2 rounded-lg font-mono text-xs font-black tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-1.5 ".concat(activeBottomTab === "collection" ? "bg-orange-500 text-black shadow-md shadow-orange-500/30" : "text-zinc-400 hover:text-white"),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: " SQUAD CARDS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] px-1.5 py-0.2 rounded-full ".concat(activeBottomTab === "collection" ? "bg-black text-orange-400" : "bg-zinc-800 text-zinc-300"),
                                                        children: charactersCaught.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 333,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 323,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setActiveBottomTab("leaderboard"),
                                                className: "py-2 rounded-lg font-mono text-xs font-black tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-1.5 ".concat(activeBottomTab === "leaderboard" ? "bg-orange-500 text-black shadow-md shadow-orange-500/30" : "text-zinc-400 hover:text-white"),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "RANKINGS"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 353,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 344,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 322,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-zinc-950/90 border border-zinc-800 rounded-2xl p-3.5 min-h-[200px]",
                                        children: activeBottomTab === "collection" ? /* TAB 1: SQUAD CAUGHT CARDS */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: isLoadingCaught ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center justify-center py-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin mb-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 364,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-zinc-500 text-xs font-mono",
                                                        children: "Loading squad cards..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 365,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 363,
                                                columnNumber: 23
                                            }, this) : charactersCaught.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center justify-center text-center py-8 px-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xl mb-2 text-zinc-500",
                                                        children: "🎴"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 369,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white text-xs font-mono font-bold",
                                                        children: "NO CARDS CAUGHT YET"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 372,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-zinc-500 text-[11px] font-mono mt-1 max-w-xs",
                                                        children: "Point the AR Scanner at character cards to catch them and score points for your squad!"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 375,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 368,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2.5 overflow-x-auto pb-2 pt-1 scrollbar-none scroll-smooth",
                                                children: charactersCaught.map((character)=>{
                                                    var _character_image;
                                                    const imageSrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$imageUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageSrc"])(character.image);
                                                    const displayAsText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$imageUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldDisplayAsText"])(character.image);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-shrink-0 w-28 bg-black rounded-xl border-2 border-orange-500/50 p-2 flex flex-col items-center relative overflow-hidden transition-all duration-300 hover:scale-105 hover:border-orange-400 shadow-md shadow-orange-500/10",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "absolute top-1 right-1 text-[8px] font-mono font-black bg-orange-500 text-black px-1.5 py-0.2 rounded",
                                                                children: character.tier === "Legendary" ? "SSR" : character.tier === "Rare" ? "SR" : "R"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 391,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-20 h-24 my-1 rounded-lg overflow-hidden bg-zinc-900 flex items-center justify-center border border-zinc-800",
                                                                children: imageSrc ? // eslint-disable-next-line @next/next/no-img-element
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: imageSrc,
                                                                    alt: character.name,
                                                                    className: "w-full h-full object-cover"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 399,
                                                                    columnNumber: 35
                                                                }, this) : displayAsText ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-3xl",
                                                                    children: (_character_image = character.image) === null || _character_image === void 0 ? void 0 : _character_image.trim()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 405,
                                                                    columnNumber: 35
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-2xl text-zinc-600 font-mono",
                                                                    children: "?"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 407,
                                                                    columnNumber: 35
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 396,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-full text-center mt-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "text-white text-[11px] font-mono font-bold truncate",
                                                                        children: character.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 413,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-orange-400 text-[10px] font-mono font-black",
                                                                        children: [
                                                                            "+",
                                                                            character.value,
                                                                            " PTS"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 416,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 412,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, character.id, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 386,
                                                        columnNumber: 29
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 380,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 361,
                                            columnNumber: 19
                                        }, this) : /* TAB 2: TOURNAMENT LEADERBOARD */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Leaderboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                teams: teams,
                                                selectedTeamId: selectedTeamId
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 429,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 428,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 358,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 321,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 261,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            isARActive && selectedTeam && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ARCamera$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                teamName: selectedTeam.teamName,
                teamId: selectedTeam.id,
                onClose: handleARClose,
                onCharacterCollected: handleCharacterCollected
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 440,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UncaughtCharacters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showUncaughtModal,
                onClose: ()=>setShowUncaughtModal(false),
                onCountChange: handleUncaughtCountChange
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 449,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 151,
        columnNumber: 5
    }, this);
}
_s(Home, "Rzn+fPVzlrF9ZOkxsxKgHOBVHtw=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_f2289197._.js.map