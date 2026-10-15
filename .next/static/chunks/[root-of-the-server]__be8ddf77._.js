(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[next]/internal/font/google/geist_9c1fd2b9.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "geist_9c1fd2b9-module__We3PEq__className",
  "variable": "geist_9c1fd2b9-module__We3PEq__variable",
});
}),
"[next]/internal/font/google/geist_9c1fd2b9.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_9c1fd2b9$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_9c1fd2b9.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_9c1fd2b9$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Geist', 'Geist Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_9c1fd2b9$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_9c1fd2b9$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/src/services/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addCharacterToTeam",
    ()=>addCharacterToTeam,
    "catchCharacter",
    ()=>catchCharacter,
    "checkCounters",
    ()=>checkCounters,
    "createCard",
    ()=>createCard,
    "createDatabaseSnapshot",
    ()=>createDatabaseSnapshot,
    "createTeam",
    ()=>createTeam,
    "deleteCard",
    ()=>deleteCard,
    "deleteTeam",
    ()=>deleteTeam,
    "getARCharacters",
    ()=>getARCharacters,
    "getCards",
    ()=>getCards,
    "getCardsCaughtByTeam",
    ()=>getCardsCaughtByTeam,
    "getCharacterById",
    ()=>getCharacterById,
    "getCharacters",
    ()=>getCharacters,
    "getTeamById",
    ()=>getTeamById,
    "getTeams",
    ()=>getTeams,
    "getUncaughtCards",
    ()=>getUncaughtCards,
    "initializeFirestoreCounters",
    ()=>initializeFirestoreCounters,
    "isCharacterCaught",
    ()=>isCharacterCaught,
    "markCardAsCaught",
    ()=>markCardAsCaught,
    "resetDatabase",
    ()=>resetDatabase,
    "restoreDatabaseFromSnapshot",
    ()=>restoreDatabaseFromSnapshot,
    "updateCard",
    ()=>updateCard,
    "updateTeam",
    ()=>updateTeam
]);
async function getTeams() {
    const res = await fetch('/api/teams', {
        cache: 'no-store'
    });
    if (!res.ok) throw new Error('Failed to fetch teams');
    return res.json();
}
async function getTeamById(teamId) {
    const res = await fetch("/api/teams/".concat(encodeURIComponent(teamId)), {
        cache: 'no-store'
    });
    if (res.status === 404) return null;
    if (!res.ok) throw new Error('Failed to fetch team');
    return res.json();
}
async function addCharacterToTeam(teamId, characterId) {
    const team = await getTeamById(teamId);
    if (!team) throw new Error('Team not found');
    const cardsCaught = team.cardsCaught || [];
    if (!cardsCaught.includes(characterId)) {
        cardsCaught.push(characterId);
    }
    const res = await fetch("/api/teams/".concat(encodeURIComponent(teamId)), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            cardsCaught,
            score: team.score + 1
        })
    });
    if (!res.ok) throw new Error('Failed to add character to team');
}
async function getCharacters() {
    return getARCharacters();
}
async function getCards() {
    const res = await fetch('/api/cards', {
        cache: 'no-store'
    });
    if (!res.ok) throw new Error('Failed to fetch cards');
    return res.json();
}
async function getUncaughtCards() {
    const res = await fetch('/api/cards?uncaught=true', {
        cache: 'no-store'
    });
    if (!res.ok) throw new Error('Failed to fetch uncaught cards');
    return res.json();
}
async function getCardsCaughtByTeam(teamId) {
    const res = await fetch("/api/cards?caughtByTeam=".concat(encodeURIComponent(teamId)), {
        cache: 'no-store'
    });
    if (!res.ok) throw new Error('Failed to fetch cards caught by team');
    return res.json();
}
async function markCardAsCaught(cardId, teamId) {
    const res = await fetch("/api/cards/".concat(encodeURIComponent(cardId)), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            isCaught: true,
            caughtByTeam: teamId
        })
    });
    if (!res.ok) throw new Error('Failed to mark card as caught');
}
async function getARCharacters() {
    const res = await fetch('/api/cards?ar=true', {
        cache: 'no-store'
    });
    if (!res.ok) throw new Error('Failed to fetch AR characters');
    return res.json();
}
async function getCharacterById(characterId) {
    const res = await fetch("/api/cards/".concat(encodeURIComponent(characterId)), {
        cache: 'no-store'
    });
    if (res.status === 404) return null;
    if (!res.ok) throw new Error('Failed to fetch character by ID');
    return res.json();
}
async function catchCharacter(characterId, teamId, characterValue) {
    const res = await fetch("/api/cards/".concat(encodeURIComponent(characterId), "/catch"), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            teamId,
            characterValue
        })
    });
    const data = await res.json();
    return data;
}
async function isCharacterCaught(characterId) {
    const card = await getCharacterById(characterId);
    return (card === null || card === void 0 ? void 0 : card.isCaught) === true;
}
async function createTeam(teamName) {
    const res = await fetch('/api/teams', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            teamName
        })
    });
    if (!res.ok) throw new Error('Failed to create team');
    return res.json();
}
async function updateTeam(teamId, teamName) {
    const res = await fetch("/api/teams/".concat(encodeURIComponent(teamId)), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            teamName
        })
    });
    if (!res.ok) throw new Error('Failed to update team');
    return res.json();
}
async function deleteTeam(teamId) {
    const res = await fetch("/api/teams/".concat(encodeURIComponent(teamId)), {
        method: 'DELETE'
    });
    if (!res.ok) throw new Error('Failed to delete team');
}
async function createCard(cardData) {
    const res = await fetch('/api/cards', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cardData)
    });
    if (!res.ok) throw new Error('Failed to create card');
    return res.json();
}
async function updateCard(cardId, cardData) {
    const res = await fetch("/api/cards/".concat(encodeURIComponent(cardId)), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cardData)
    });
    if (!res.ok) throw new Error('Failed to update card');
    return res.json();
}
async function deleteCard(cardId) {
    const res = await fetch("/api/cards/".concat(encodeURIComponent(cardId)), {
        method: 'DELETE'
    });
    if (!res.ok) throw new Error('Failed to delete card');
}
async function resetDatabase() {
    const res = await fetch('/api/admin/reset', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            action: 'reset'
        })
    });
    if (!res.ok) throw new Error('Failed to reset database');
}
async function createDatabaseSnapshot() {
    const res = await fetch('/api/admin/reset', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            action: 'snapshot'
        })
    });
    if (!res.ok) throw new Error('Failed to create snapshot');
    return res.json();
}
async function restoreDatabaseFromSnapshot(snapshot) {
    const res = await fetch('/api/admin/reset', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            action: 'restore',
            snapshot
        })
    });
    if (!res.ok) throw new Error('Failed to restore database from snapshot');
}
async function checkCounters() {
    const res = await fetch('/api/admin/setup', {
        cache: 'no-store'
    });
    if (!res.ok) throw new Error('Failed to check counters');
    return res.json();
}
async function initializeFirestoreCounters() {
    const res = await fetch('/api/admin/setup', {
        method: 'POST'
    });
    if (!res.ok) throw new Error('Failed to initialize counters');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/admin/hooks/useAdminData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAdminData",
    ()=>useAdminData,
    "useResetDatabase",
    ()=>useResetDatabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
const useAdminData = ()=>{
    _s();
    const [teams, setTeams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cards, setCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleteConfirm, setDeleteConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchTeams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAdminData.useCallback[fetchTeams]": async ()=>{
            setIsLoading(true);
            try {
                const teamsData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTeams"])();
                setTeams(teamsData);
            } catch (err) {
                console.error("Error fetching teams:", err);
            } finally{
                setIsLoading(false);
            }
        }
    }["useAdminData.useCallback[fetchTeams]"], []);
    const fetchCards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAdminData.useCallback[fetchCards]": async ()=>{
            setIsLoading(true);
            try {
                const cardsData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCards"])();
                setCards(cardsData.map({
                    "useAdminData.useCallback[fetchCards]": (c)=>{
                        var _c_correctAnswer;
                        return {
                            id: c.id,
                            name: c.name,
                            question: c.question || "",
                            options: c.options || [],
                            correctAnswer: (_c_correctAnswer = c.correctAnswer) !== null && _c_correctAnswer !== void 0 ? _c_correctAnswer : 0,
                            image: c.image || "",
                            mindFile: c.mindFile || "",
                            modelUrl: c.modelUrl || "",
                            isCaught: c.isCaught,
                            caughtByTeam: c.caughtByTeam || ""
                        };
                    }
                }["useAdminData.useCallback[fetchCards]"]));
            } catch (err) {
                console.error("Error fetching cards:", err);
            } finally{
                setIsLoading(false);
            }
        }
    }["useAdminData.useCallback[fetchCards]"], []);
    const handleDeleteTeam = async (teamId)=>{
        if (deleteConfirm !== teamId) {
            setDeleteConfirm(teamId);
            return;
        }
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteTeam"])(teamId);
            setTeams(teams.filter((team)=>team.id !== teamId));
            setDeleteConfirm(null);
        } catch (err) {
            console.error("Error deleting team:", err);
        }
    };
    const handleDeleteCard = async (cardId)=>{
        if (deleteConfirm !== cardId) {
            setDeleteConfirm(cardId);
            return;
        }
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteCard"])(cardId);
            setCards(cards.filter((card)=>card.id !== cardId));
            setDeleteConfirm(null);
        } catch (err) {
            console.error("Error deleting card:", err);
        }
    };
    return {
        teams,
        cards,
        isLoading,
        deleteConfirm,
        fetchTeams,
        fetchCards,
        handleDeleteTeam,
        handleDeleteCard,
        setDeleteConfirm
    };
};
_s(useAdminData, "yMZJA52oVuHNDgRFXfEqRg5Gw+8=");
const useResetDatabase = (fetchTeams, fetchCards)=>{
    _s1();
    const [showResetModal, setShowResetModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [resetPassword, setResetPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [resetError, setResetError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isResetting, setIsResetting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastSnapshot, setLastSnapshot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleResetDatabase = async (adminPassword)=>{
        if (resetPassword !== adminPassword) {
            setResetError("Invalid password");
            return;
        }
        setIsResetting(true);
        setResetError("");
        try {
            const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDatabaseSnapshot"])();
            setLastSnapshot({
                teams: snapshot.teams,
                cards: snapshot.cards,
                timestamp: Date.now()
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetDatabase"])();
            await fetchTeams();
            await fetchCards();
            setShowResetModal(false);
            setResetPassword("");
            alert("Database reset successfully! You can undo this action if needed.");
        } catch (err) {
            console.error("Error resetting database:", err);
            setResetError("Failed to reset database. Please try again.");
        } finally{
            setIsResetting(false);
        }
    };
    const handleUndoLastAction = async ()=>{
        if (!lastSnapshot) {
            alert("No action to undo");
            return;
        }
        const fiveMinutes = 5 * 60 * 1000;
        if (Date.now() - lastSnapshot.timestamp > fiveMinutes) {
            alert("Undo window expired (5 minutes). Cannot undo this action.");
            setLastSnapshot(null);
            return;
        }
        if (!confirm("Are you sure you want to undo the last database reset?")) {
            return;
        }
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["restoreDatabaseFromSnapshot"])({
                teams: lastSnapshot.teams,
                cards: lastSnapshot.cards
            });
            await fetchTeams();
            await fetchCards();
            setLastSnapshot(null);
            alert("Last action undone successfully!");
        } catch (err) {
            console.error("Error undoing last action:", err);
            alert("Failed to undo last action. Please try again.");
        }
    };
    return {
        showResetModal,
        setShowResetModal,
        resetPassword,
        setResetPassword,
        resetError,
        setResetError,
        isResetting,
        lastSnapshot,
        handleResetDatabase,
        handleUndoLastAction
    };
};
_s1(useResetDatabase, "mtT33eEsz+EsQ/6NndHVDWn2T5U=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/admin/LoginForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoginForm",
    ()=>LoginForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const LoginForm = (param)=>{
    let { username, password, error, onUsernameChange, onPasswordChange, onSubmit } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: onSubmit,
        className: "space-y-4 max-w-md mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "username",
                        className: "block text-sm font-medium text-gray-200 mb-1",
                        children: "Username"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/LoginForm.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "username",
                        type: "text",
                        value: username,
                        onChange: (e)=>onUsernameChange(e.target.value),
                        className: "w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400",
                        placeholder: "Enter username",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/LoginForm.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/LoginForm.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "password",
                        className: "block text-sm font-medium text-gray-200 mb-1",
                        children: "Password"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/LoginForm.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "password",
                        type: "password",
                        value: password,
                        onChange: (e)=>onPasswordChange(e.target.value),
                        className: "w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400",
                        placeholder: "Enter password",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/LoginForm.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/LoginForm.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-900/30 border border-red-500/50 rounded-md p-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-300 text-sm",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/LoginForm.tsx",
                    lineNumber: 64,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/admin/LoginForm.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-lg shadow-indigo-500/20",
                children: "Login"
            }, void 0, false, {
                fileName: "[project]/src/components/admin/LoginForm.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/LoginForm.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = LoginForm;
var _c;
__turbopack_context__.k.register(_c, "LoginForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/admin/SetupScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SetupScreen",
    ()=>SetupScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const SetupScreen = (param)=>{
    let { isInitializing, error, onInitialize } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl font-semibold text-white mb-4",
                children: "First-Time Setup Required"
            }, void 0, false, {
                fileName: "[project]/src/components/admin/SetupScreen.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-400 mb-6",
                children: "The admin portal needs to initialize some required documents in Firestore."
            }, void 0, false, {
                fileName: "[project]/src/components/admin/SetupScreen.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onInitialize,
                className: "px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700  transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500  focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50",
                disabled: isInitializing,
                children: isInitializing ? "Initializing..." : "Initialize Admin Portal"
            }, void 0, false, {
                fileName: "[project]/src/components/admin/SetupScreen.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-red-400 text-sm",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/admin/SetupScreen.tsx",
                lineNumber: 30,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/SetupScreen.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SetupScreen;
var _c;
__turbopack_context__.k.register(_c, "SetupScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/admin/ActionButtons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActionButtons",
    ()=>ActionButtons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const ActionButtons = (param)=>{
    let { currentView, onViewChange, onResetClick, onUndoClick, lastSnapshot, isLoading } = param;
    const getRemainingMinutes = ()=>{
        if (!lastSnapshot) return 0;
        const fiveMinutes = 5 * 60 * 1000;
        return Math.max(0, Math.ceil((fiveMinutes - (Date.now() - lastSnapshot.timestamp)) / 60000));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-4 mb-6 flex-wrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onViewChange("teams"),
                className: "px-4 py-2 rounded-md transition-colors ".concat(currentView === "teams" ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20" : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"),
                children: "Manage Teams"
            }, void 0, false, {
                fileName: "[project]/src/components/admin/ActionButtons.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onViewChange("cards"),
                className: "px-4 py-2 rounded-md transition-colors ".concat(currentView === "cards" ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20" : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"),
                children: "Manage Cards"
            }, void 0, false, {
                fileName: "[project]/src/components/admin/ActionButtons.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-grow"
            }, void 0, false, {
                fileName: "[project]/src/components/admin/ActionButtons.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            lastSnapshot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onUndoClick,
                disabled: isLoading,
                className: "px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-md  transition-colors shadow-lg shadow-yellow-500/20 disabled:opacity-50 flex items-center gap-2",
                title: "Undo last reset (expires in ".concat(getRemainingMinutes(), " min)"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-5 w-5",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            d: "M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                            clipRule: "evenodd"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/ActionButtons.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ActionButtons.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    "Undo Last Reset"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/ActionButtons.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onResetClick,
                className: "px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md  transition-colors shadow-lg shadow-red-500/20 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-5 w-5",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            d: "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",
                            clipRule: "evenodd"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/ActionButtons.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ActionButtons.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    "Reset Database"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/ActionButtons.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/ActionButtons.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ActionButtons;
var _c;
__turbopack_context__.k.register(_c, "ActionButtons");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/admin/TeamsManagement.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TeamsManagement",
    ()=>TeamsManagement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const TeamsManagement = (param)=>{
    let { teams, isLoading, deleteConfirm, onAddTeam, onEditTeam, onDeleteTeam, onCancelDelete } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold text-white",
                        children: "Teams"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/TeamsManagement.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onAddTeam,
                        className: "bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md  transition-colors shadow-lg shadow-indigo-500/20",
                        children: "Add New Team"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/TeamsManagement.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/TeamsManagement.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/TeamsManagement.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-gray-400",
                        children: "Loading teams..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/TeamsManagement.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/TeamsManagement.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : teams.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400",
                    children: "No teams found. Create one to get started!"
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/TeamsManagement.tsx",
                    lineNumber: 46,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/admin/TeamsManagement.tsx",
                lineNumber: 45,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-3",
                children: teams.map((team)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-800 rounded-lg p-4 flex justify-between items-center hover:bg-gray-750 transition-colors border border-gray-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-semibold text-white",
                                        children: team.teamName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/TeamsManagement.tsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-400",
                                        children: [
                                            "Score: ",
                                            team.score
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/TeamsManagement.tsx",
                                        lineNumber: 60,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/TeamsManagement.tsx",
                                lineNumber: 58,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onEditTeam(team),
                                        className: "px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors text-sm",
                                        children: "Edit"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/TeamsManagement.tsx",
                                        lineNumber: 63,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            if (deleteConfirm === team.id) {
                                                onDeleteTeam(team.id);
                                            } else {
                                                onDeleteTeam(team.id);
                                            }
                                        },
                                        onMouseLeave: onCancelDelete,
                                        className: "px-3 py-1 rounded transition-colors text-sm ".concat(deleteConfirm === team.id ? "bg-red-700 hover:bg-red-800 text-white" : "bg-red-600 hover:bg-red-700 text-white"),
                                        children: deleteConfirm === team.id ? "Confirm?" : "Delete"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/TeamsManagement.tsx",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/TeamsManagement.tsx",
                                lineNumber: 62,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, team.id, true, {
                        fileName: "[project]/src/components/admin/TeamsManagement.tsx",
                        lineNumber: 53,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/admin/TeamsManagement.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/TeamsManagement.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = TeamsManagement;
var _c;
__turbopack_context__.k.register(_c, "TeamsManagement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/admin/CardsManagement.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardsManagement",
    ()=>CardsManagement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const CardsManagement = (param)=>{
    let { cards, isLoading, deleteConfirm, onAddCard, onEditCard, onDeleteCard, onCancelDelete } = param;
    _s();
    const [compilingCardId, setCompilingCardId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [compileStatus, setCompileStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const getTierBadge = (card)=>{
        const cardId = card.id.toLowerCase();
        let tierColor = "bg-purple-600";
        let tierName = "Common";
        if (cardId.startsWith("c1")) {
            tierColor = "bg-yellow-600";
            tierName = "Legendary";
        } else if (cardId.startsWith("c2")) {
            tierColor = "bg-gray-400";
            tierName = "Rare";
        } else if (cardId.startsWith("c3")) {
            tierColor = "bg-purple-600";
            tierName = "Common";
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "".concat(tierColor, " text-white text-xs px-2 py-1 rounded-full"),
            children: tierName
        }, void 0, false, {
            fileName: "[project]/src/components/admin/CardsManagement.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    const handleCompileCard = async (card)=>{
        if (!card.image) {
            alert("This card does not have an image URL to compile!");
            return;
        }
        try {
            var _MINDAR_IMAGE, _MINDAR;
            setCompilingCardId(card.id);
            setCompileStatus("Loading compiler...");
            // Ensure compiler script is loaded
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (!((_MINDAR = window.MINDAR) === null || _MINDAR === void 0 ? void 0 : (_MINDAR_IMAGE = _MINDAR.IMAGE) === null || _MINDAR_IMAGE === void 0 ? void 0 : _MINDAR_IMAGE.Compiler)) {
                await new Promise((resolve, reject)=>{
                    const script = document.createElement("script");
                    script.src = "https://cdn.jsdelivr.net/npm/mind-ar@1.2.5/dist/mindar-image.prod.js";
                    script.onload = ()=>resolve();
                    script.onerror = ()=>reject(new Error("Failed to load MindAR compiler library"));
                    document.head.appendChild(script);
                });
            }
            setCompileStatus("Loading image...");
            const img = new Image();
            img.crossOrigin = "anonymous";
            img.src = card.image;
            await new Promise((resolve, reject)=>{
                img.onload = ()=>resolve();
                img.onerror = ()=>reject(new Error("Failed to load card image from URL"));
            });
            setCompileStatus("Compiling...");
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const compiler = new window.MINDAR.IMAGE.Compiler();
            await compiler.compileImageTargets([
                img
            ], (progress)=>{
                setCompileStatus("Compiling: ".concat(Math.round(progress * 100), "%"));
            });
            setCompileStatus("Exporting...");
            const exportedBuffer = await compiler.exportData();
            setCompileStatus("Saving...");
            let tier = "common";
            if (card.id.toLowerCase().startsWith("c1")) tier = "legendary";
            else if (card.id.toLowerCase().startsWith("c2")) tier = "rare";
            const res = await fetch("/api/targets?tier=".concat(tier, "&filename=").concat(tier, ".mind"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/octet-stream"
                },
                body: exportedBuffer
            });
            if (!res.ok) throw new Error("Failed to save target on server");
            setCompileStatus("Done!");
            alert('Success! Card "'.concat(card.name, '" compiled and saved to ').concat(tier, ".mind!"));
        } catch (err) {
            console.error("Compile error:", err);
            const message = err instanceof Error ? err.message : String(err);
            alert("Error compiling AR target: ".concat(message));
        } finally{
            setCompilingCardId(null);
            setCompileStatus(null);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-semibold text-white",
                                children: "Cards"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/CardsManagement.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            compileStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-orange-400 font-mono animate-pulse",
                                children: compileStatus
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/CardsManagement.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/CardsManagement.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onAddCard,
                        className: "bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md  transition-colors shadow-lg shadow-indigo-500/20",
                        children: "Add New Card"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/CardsManagement.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/CardsManagement.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/CardsManagement.tsx",
                        lineNumber: 157,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-gray-400",
                        children: "Loading cards..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/CardsManagement.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/CardsManagement.tsx",
                lineNumber: 156,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : cards.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400",
                    children: "No cards found. Create one to get started!"
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/CardsManagement.tsx",
                    lineNumber: 162,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/admin/CardsManagement.tsx",
                lineNumber: 161,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full border-collapse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "bg-gray-800 border-b border-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-left px-4 py-3 text-sm font-semibold text-gray-300",
                                        children: "ID"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/CardsManagement.tsx",
                                        lineNumber: 171,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-left px-4 py-3 text-sm font-semibold text-gray-300",
                                        children: "Name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/CardsManagement.tsx",
                                        lineNumber: 174,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-left px-4 py-3 text-sm font-semibold text-gray-300",
                                        children: "Question"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/CardsManagement.tsx",
                                        lineNumber: 177,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-left px-4 py-3 text-sm font-semibold text-gray-300",
                                        children: "Tier"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/CardsManagement.tsx",
                                        lineNumber: 180,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-left px-4 py-3 text-sm font-semibold text-gray-300",
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/CardsManagement.tsx",
                                        lineNumber: 183,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-left px-4 py-3 text-sm font-semibold text-gray-300",
                                        children: "Caught By"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/CardsManagement.tsx",
                                        lineNumber: 186,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-right px-4 py-3 text-sm font-semibold text-gray-300",
                                        children: "Actions"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/CardsManagement.tsx",
                                        lineNumber: 189,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/CardsManagement.tsx",
                                lineNumber: 170,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/CardsManagement.tsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: cards.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "border-b border-gray-800 hover:bg-gray-800/50 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3 text-xs font-mono text-gray-400",
                                            children: card.id
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/CardsManagement.tsx",
                                            lineNumber: 200,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3 text-sm text-white font-medium",
                                            children: card.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/CardsManagement.tsx",
                                            lineNumber: 203,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3 text-sm text-gray-400 max-w-md",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "line-clamp-2 break-words",
                                                children: card.question
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/CardsManagement.tsx",
                                                lineNumber: 207,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/CardsManagement.tsx",
                                            lineNumber: 206,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3",
                                            children: getTierBadge(card)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/CardsManagement.tsx",
                                            lineNumber: 211,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3",
                                            children: card.isCaught ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-1 bg-green-900/30 text-green-400 text-xs px-2 py-1 rounded-full border border-green-500/30",
                                                children: "Caught"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/CardsManagement.tsx",
                                                lineNumber: 214,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-1 bg-blue-900/30 text-blue-400 text-xs px-2 py-1 rounded-full border border-blue-500/30",
                                                children: "Available"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/CardsManagement.tsx",
                                                lineNumber: 218,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/CardsManagement.tsx",
                                            lineNumber: 212,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3 text-sm text-gray-400",
                                            children: card.isCaught && card.caughtByTeam ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300",
                                                children: card.caughtByTeam
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/CardsManagement.tsx",
                                                lineNumber: 225,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-600",
                                                children: "—"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/CardsManagement.tsx",
                                                lineNumber: 227,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/CardsManagement.tsx",
                                            lineNumber: 223,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-3 text-right",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2 justify-end",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleCompileCard(card),
                                                        disabled: compilingCardId === card.id,
                                                        className: "px-2.5 py-1 bg-orange-600 hover:bg-orange-500 text-white rounded transition-colors text-xs whitespace-nowrap font-mono font-bold",
                                                        title: "Compile card image into .mind file",
                                                        children: compilingCardId === card.id ? compileStatus || "Compiling..." : "⚡ Compile AR"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/CardsManagement.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onEditCard(card),
                                                        className: "px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors text-sm whitespace-nowrap",
                                                        children: "Edit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/CardsManagement.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            if (deleteConfirm === card.id) {
                                                                onDeleteCard(card.id);
                                                            } else {
                                                                onDeleteCard(card.id);
                                                            }
                                                        },
                                                        onMouseLeave: onCancelDelete,
                                                        className: "px-3 py-1 rounded transition-colors text-sm whitespace-nowrap ".concat(deleteConfirm === card.id ? "bg-red-700 hover:bg-red-800 text-white" : "bg-red-600 hover:bg-red-700 text-white"),
                                                        children: deleteConfirm === card.id ? "Confirm?" : "Delete"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/CardsManagement.tsx",
                                                        lineNumber: 250,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/CardsManagement.tsx",
                                                lineNumber: 231,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/CardsManagement.tsx",
                                            lineNumber: 230,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, card.id, true, {
                                    fileName: "[project]/src/components/admin/CardsManagement.tsx",
                                    lineNumber: 196,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/CardsManagement.tsx",
                            lineNumber: 194,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/CardsManagement.tsx",
                    lineNumber: 168,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/admin/CardsManagement.tsx",
                lineNumber: 167,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/CardsManagement.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CardsManagement, "7mX01eV/+4mCH3sb+zN/oTopuS0=");
_c = CardsManagement;
var _c;
__turbopack_context__.k.register(_c, "CardsManagement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/admin/ResetDatabaseModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResetDatabaseModal",
    ()=>ResetDatabaseModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const ResetDatabaseModal = (param)=>{
    let { isOpen, password, error, isResetting, onPasswordChange, onConfirm, onCancel } = param;
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-900 rounded-lg shadow-2xl w-full max-w-md border-2 border-red-500",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-red-600 px-6 py-4 rounded-t-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-white flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-6 w-6",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fillRule: "evenodd",
                                    d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                                    clipRule: "evenodd"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/ResetDatabaseModal.tsx",
                                    lineNumber: 33,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/ResetDatabaseModal.tsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Critical Action: Reset Database"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/ResetDatabaseModal.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/ResetDatabaseModal.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-red-900/30 border border-red-500/50 rounded-lg p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-200 text-sm font-semibold mb-2",
                                    children: "⚠️ Warning: This action will:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/ResetDatabaseModal.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "text-red-300 text-sm space-y-1 ml-4 list-disc",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                "Mark all cards as ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "uncaught"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/ResetDatabaseModal.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 35
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/ResetDatabaseModal.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                "Clear all team's ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "caught cards"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/ResetDatabaseModal.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 39
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/ResetDatabaseModal.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                "Reset all team ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "scores to 0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/ResetDatabaseModal.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 32
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/ResetDatabaseModal.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "This action can be undone within 5 minutes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/ResetDatabaseModal.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/ResetDatabaseModal.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/ResetDatabaseModal.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "reset-password",
                                    className: "block text-sm font-medium text-gray-200 mb-2",
                                    children: "Enter Admin Password to Confirm"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/ResetDatabaseModal.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "reset-password",
                                    type: "password",
                                    value: password,
                                    onChange: (e)=>onPasswordChange(e.target.value),
                                    className: "w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-white placeholder-gray-400",
                                    placeholder: "Enter admin password",
                                    disabled: isResetting
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/ResetDatabaseModal.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-red-400 text-sm",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/ResetDatabaseModal.tsx",
                                    lineNumber: 80,
                                    columnNumber: 23
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/ResetDatabaseModal.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 pt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onCancel,
                                    className: "flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md  transition-colors",
                                    disabled: isResetting,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/ResetDatabaseModal.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onConfirm,
                                    className: "flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md  transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed",
                                    disabled: isResetting || !password,
                                    children: isResetting ? "Resetting..." : "Reset Database"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/ResetDatabaseModal.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/ResetDatabaseModal.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/ResetDatabaseModal.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/ResetDatabaseModal.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/admin/ResetDatabaseModal.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ResetDatabaseModal;
var _c;
__turbopack_context__.k.register(_c, "ResetDatabaseModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TeamForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TeamForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function TeamForm(param) {
    let { isOpen, onClose, teamToEdit } = param;
    _s();
    const [teamName, setTeamName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TeamForm.useEffect": ()=>{
            if (teamToEdit) {
                setTeamName(teamToEdit.teamName);
            } else {
                setTeamName('');
            }
            setError('');
        }
    }["TeamForm.useEffect"], [
        teamToEdit,
        isOpen
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!teamName.trim()) {
            setError('Team name is required');
            return;
        }
        setIsSubmitting(true);
        setError('');
        try {
            if (teamToEdit) {
                // Update existing team
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateTeam"])(teamToEdit.id, teamName.trim());
            } else {
                // Create new team
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTeam"])(teamName.trim());
            }
            onClose();
        } catch (err) {
            console.error('Error saving team:', err);
            setError('Failed to save team. Please try again.');
        } finally{
            setIsSubmitting(false);
        }
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg p-6 max-w-md w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-bold mb-4",
                    children: teamToEdit ? 'Edit Team' : 'Add New Team'
                }, void 0, false, {
                    fileName: "[project]/src/components/TeamForm.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "teamName",
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Team Name"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TeamForm.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    id: "teamName",
                                    value: teamName,
                                    onChange: (e)=>setTeamName(e.target.value),
                                    className: "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                    placeholder: "Enter team name",
                                    disabled: isSubmitting
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TeamForm.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-sm text-red-600",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TeamForm.tsx",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TeamForm.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "px-4 py-2 text-gray-600 hover:text-gray-800",
                                    disabled: isSubmitting,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TeamForm.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50",
                                    disabled: isSubmitting,
                                    children: isSubmitting ? 'Saving...' : teamToEdit ? 'Update Team' : 'Add Team'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TeamForm.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TeamForm.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TeamForm.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TeamForm.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/TeamForm.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(TeamForm, "bapDrYcZUwzNi7OZBBDVUHXsINM=");
_c = TeamForm;
var _c;
__turbopack_context__.k.register(_c, "TeamForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CardForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CardForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function CardForm(param) {
    let { isOpen, onClose, cardToEdit } = param;
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        question: "",
        options: [
            "",
            "",
            "",
            ""
        ],
        correctAnswer: 0,
        image: "",
        mindFile: "",
        modelUrl: "",
        value: 50
    });
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CardForm.useEffect": ()=>{
            if (cardToEdit) {
                setFormData({
                    name: cardToEdit.name,
                    question: cardToEdit.question,
                    options: cardToEdit.options,
                    correctAnswer: cardToEdit.correctAnswer,
                    image: cardToEdit.image,
                    mindFile: cardToEdit.mindFile,
                    modelUrl: cardToEdit.modelUrl,
                    value: "value" in cardToEdit && typeof cardToEdit.value === "number" ? cardToEdit.value : 50
                });
            } else {
                setFormData({
                    name: "",
                    question: "",
                    options: [
                        "",
                        "",
                        "",
                        ""
                    ],
                    correctAnswer: 0,
                    image: "",
                    mindFile: "",
                    modelUrl: "",
                    value: 50
                });
            }
            setError("");
        }
    }["CardForm.useEffect"], [
        cardToEdit,
        isOpen
    ]);
    // Auto-populate mindFile based on value tier
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CardForm.useEffect": ()=>{
            const getMindFileFromValue = {
                "CardForm.useEffect.getMindFileFromValue": (value)=>{
                    switch(value){
                        case 50:
                            return "/ar-targets/legendary.mind";
                        case 20:
                            return "/ar-targets/rare.mind";
                        case 8:
                            return "/ar-targets/common.mind";
                        default:
                            return "/ar-targets/common.mind";
                    }
                }
            }["CardForm.useEffect.getMindFileFromValue"];
            setFormData({
                "CardForm.useEffect": (prev)=>({
                        ...prev,
                        mindFile: getMindFileFromValue(prev.value)
                    })
            }["CardForm.useEffect"]);
        }
    }["CardForm.useEffect"], [
        formData.value
    ]);
    const validateForm = ()=>{
        if (!formData.name.trim()) {
            setError("Name is required");
            return false;
        }
        if (!formData.question.trim()) {
            setError("Question is required");
            return false;
        }
        if (formData.options.some((opt)=>!opt.trim())) {
            setError("All options must be filled");
            return false;
        }
        return true;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!validateForm()) return;
        setIsSubmitting(true);
        setError("");
        try {
            if (cardToEdit) {
                // Update existing card
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateCard"])(cardToEdit.id, {
                    ...formData,
                    options: formData.options.map((opt)=>opt.trim())
                });
            } else {
                // Create new card (API automatically generates sequential ID and assigns tier)
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCard"])({
                    ...formData,
                    options: formData.options.map((opt)=>opt.trim())
                });
            }
            onClose();
        } catch (err) {
            console.error("Error saving card:", err);
            setError("Failed to save card. Please try again.");
        } finally{
            setIsSubmitting(false);
        }
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-800 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-bold text-white mb-4",
                    children: cardToEdit ? "Edit Card" : "Add New Card"
                }, void 0, false, {
                    fileName: "[project]/src/components/CardForm.tsx",
                    lineNumber: 142,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-300 mb-1",
                                    children: "Name"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CardForm.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: formData.name,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            name: e.target.value
                                        }),
                                    className: "w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                    placeholder: "Enter card name",
                                    disabled: isSubmitting
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CardForm.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CardForm.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-300 mb-1",
                                    children: "Card Value (Tier)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CardForm.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: formData.value,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            value: Number(e.target.value)
                                        }),
                                    className: "w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                    disabled: isSubmitting || !!cardToEdit,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: 50,
                                            children: "50 - Legendary (ID: c1xx)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CardForm.tsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: 20,
                                            children: "20 - Rare (ID: c2xx)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CardForm.tsx",
                                            lineNumber: 182,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: 8,
                                            children: "8 - Common (ID: c3xx)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CardForm.tsx",
                                            lineNumber: 183,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CardForm.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, this),
                                cardToEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-400 mt-1",
                                    children: "Card tier cannot be changed after creation"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CardForm.tsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CardForm.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-300 mb-1",
                                    children: "Question"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CardForm.tsx",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: formData.question,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            question: e.target.value
                                        }),
                                    className: "w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                    placeholder: "Enter question",
                                    rows: 3,
                                    disabled: isSubmitting
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CardForm.tsx",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CardForm.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-300",
                                    children: "Options"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CardForm.tsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this),
                                formData.options.map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: option,
                                                onChange: (e)=>{
                                                    const newOptions = [
                                                        ...formData.options
                                                    ];
                                                    newOptions[index] = e.target.value;
                                                    setFormData({
                                                        ...formData,
                                                        options: newOptions
                                                    });
                                                },
                                                className: "flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                                placeholder: "Option ".concat(index + 1),
                                                disabled: isSubmitting
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CardForm.tsx",
                                                lineNumber: 218,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-20",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "radio",
                                                        name: "correctAnswer",
                                                        checked: formData.correctAnswer === index,
                                                        onChange: ()=>setFormData({
                                                                ...formData,
                                                                correctAnswer: index
                                                            }),
                                                        className: "mr-2",
                                                        disabled: isSubmitting
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CardForm.tsx",
                                                        lineNumber: 233,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-300 text-sm",
                                                        children: "Correct"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CardForm.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CardForm.tsx",
                                                lineNumber: 232,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/components/CardForm.tsx",
                                        lineNumber: 217,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CardForm.tsx",
                            lineNumber: 212,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-300 mb-1",
                                            children: "Image URL"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CardForm.tsx",
                                            lineNumber: 252,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: formData.image,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    image: e.target.value
                                                }),
                                            className: "w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                            placeholder: "Enter image URL",
                                            disabled: isSubmitting
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CardForm.tsx",
                                            lineNumber: 255,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CardForm.tsx",
                                    lineNumber: 251,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-300 mb-1",
                                            children: "Mind File URL (Auto-set by tier)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CardForm.tsx",
                                            lineNumber: 269,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: formData.mindFile,
                                            className: "w-full px-3 py-2 bg-gray-600 border border-gray-600 rounded-md text-gray-400 cursor-not-allowed",
                                            disabled: true,
                                            readOnly: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CardForm.tsx",
                                            lineNumber: 272,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CardForm.tsx",
                                    lineNumber: 268,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-300 mb-1",
                                            children: "Model URL"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CardForm.tsx",
                                            lineNumber: 282,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: formData.modelUrl,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    modelUrl: e.target.value
                                                }),
                                            className: "w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                            placeholder: "Enter model URL",
                                            disabled: isSubmitting
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CardForm.tsx",
                                            lineNumber: 285,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CardForm.tsx",
                                    lineNumber: 281,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CardForm.tsx",
                            lineNumber: 250,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-400 text-sm mt-2",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/components/CardForm.tsx",
                            lineNumber: 300,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-3 mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "px-4 py-2 text-gray-300 hover:text-white transition-colors",
                                    disabled: isSubmitting,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CardForm.tsx",
                                    lineNumber: 303,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50",
                                    disabled: isSubmitting,
                                    children: isSubmitting ? "Saving..." : cardToEdit ? "Update Card" : "Add Card"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CardForm.tsx",
                                    lineNumber: 311,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CardForm.tsx",
                            lineNumber: 302,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CardForm.tsx",
                    lineNumber: 146,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CardForm.tsx",
            lineNumber: 141,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/CardForm.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, this);
}
_s(CardForm, "KDaCw2zvvDKXvQ73nSvPbc63xP8=");
_c = CardForm;
var _c;
__turbopack_context__.k.register(_c, "CardForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/AdminPortal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPortal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$hooks$2f$useAdminData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/hooks/useAdminData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$LoginForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/LoginForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$SetupScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/SetupScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$ActionButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/ActionButtons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$TeamsManagement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/TeamsManagement.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$CardsManagement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/CardsManagement.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$ResetDatabaseModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/ResetDatabaseModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TeamForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TeamForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CardForm.tsx [app-client] (ecmascript)");
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
function AdminPortal(param) {
    let { onClose } = param;
    _s();
    // Authentication state
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoggedIn, setIsLoggedIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Setup state
    const [initializingCounters, setInitializingCounters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [setupRequired, setSetupRequired] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // View state
    const [currentView, setCurrentView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("teams");
    // Form state
    const [isTeamFormOpen, setIsTeamFormOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [teamToEdit, setTeamToEdit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCardFormOpen, setIsCardFormOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cardToEdit, setCardToEdit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Custom hooks for data management
    const { teams, cards, isLoading, deleteConfirm, fetchTeams, fetchCards, handleDeleteTeam, handleDeleteCard, setDeleteConfirm } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$hooks$2f$useAdminData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdminData"])();
    const { showResetModal, setShowResetModal, resetPassword, setResetPassword, resetError, setResetError, isResetting, lastSnapshot, handleResetDatabase, handleUndoLastAction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$hooks$2f$useAdminData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResetDatabase"])(fetchTeams, fetchCards);
    // Check setup on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminPortal.useEffect": ()=>{
            const checkSetup = {
                "AdminPortal.useEffect.checkSetup": async ()=>{
                    try {
                        const countersExist = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkCounters"])();
                        setSetupRequired(!countersExist);
                    } catch (err) {
                        console.error("Error checking counters:", err);
                        setSetupRequired(true);
                    }
                }
            }["AdminPortal.useEffect.checkSetup"];
            if (isLoggedIn) {
                checkSetup();
                fetchTeams();
                fetchCards();
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["AdminPortal.useEffect"], [
        isLoggedIn
    ]); // Only run when isLoggedIn changes, not when fetch functions change
    const handleLogin = (e)=>{
        e.preventDefault();
        if (username === ("TURBOPACK compile-time value", "acm@usar") && password === ("TURBOPACK compile-time value", "acm@2020")) {
            setIsLoggedIn(true);
            setError("");
        } else {
            setError("Invalid credentials");
        }
    };
    const handleInitializeSetup = async ()=>{
        setInitializingCounters(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeFirestoreCounters"])();
            setSetupRequired(false);
        } catch (err) {
            console.error("Error initializing counters:", err);
            setError("Failed to initialize counters. Please try again.");
        } finally{
            setInitializingCounters(false);
        }
    };
    const handleResetClick = ()=>{
        setShowResetModal(true);
    };
    const handleResetCancel = ()=>{
        setShowResetModal(false);
        setResetPassword("");
        setResetError("");
    };
    const handleResetConfirm = async ()=>{
        await handleResetDatabase(("TURBOPACK compile-time value", "acm@2020") || "");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/80 z-40 flex items-center justify-center p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-900 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky top-0 bg-gray-900 border-b border-gray-800 px-6 py-4 flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-semibold text-white",
                                children: "Admin Portal"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AdminPortal.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "text-gray-400 hover:text-gray-200 transition-colors",
                                "aria-label": "Close",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M6 18L18 6M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminPortal.tsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminPortal.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/AdminPortal.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AdminPortal.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6",
                        children: !isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$LoginForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoginForm"], {
                            username: username,
                            password: password,
                            error: error,
                            onUsernameChange: setUsername,
                            onPasswordChange: setPassword,
                            onSubmit: handleLogin
                        }, void 0, false, {
                            fileName: "[project]/src/components/AdminPortal.tsx",
                            lineNumber: 175,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-gray-200",
                            children: setupRequired ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$SetupScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SetupScreen"], {
                                isInitializing: initializingCounters,
                                error: error,
                                onInitialize: handleInitializeSetup
                            }, void 0, false, {
                                fileName: "[project]/src/components/AdminPortal.tsx",
                                lineNumber: 186,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$ActionButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionButtons"], {
                                        currentView: currentView,
                                        onViewChange: setCurrentView,
                                        onResetClick: handleResetClick,
                                        onUndoClick: handleUndoLastAction,
                                        lastSnapshot: lastSnapshot,
                                        isLoading: isLoading
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminPortal.tsx",
                                        lineNumber: 193,
                                        columnNumber: 19
                                    }, this),
                                    currentView === "teams" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$TeamsManagement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TeamsManagement"], {
                                        teams: teams,
                                        isLoading: isLoading,
                                        deleteConfirm: deleteConfirm,
                                        onAddTeam: ()=>{
                                            setTeamToEdit(null);
                                            setIsTeamFormOpen(true);
                                        },
                                        onEditTeam: (team)=>{
                                            setTeamToEdit(team);
                                            setIsTeamFormOpen(true);
                                        },
                                        onDeleteTeam: handleDeleteTeam,
                                        onCancelDelete: ()=>setDeleteConfirm(null)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminPortal.tsx",
                                        lineNumber: 203,
                                        columnNumber: 21
                                    }, this),
                                    currentView === "cards" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$CardsManagement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardsManagement"], {
                                        cards: cards,
                                        isLoading: isLoading,
                                        deleteConfirm: deleteConfirm,
                                        onAddCard: ()=>{
                                            setCardToEdit(null);
                                            setIsCardFormOpen(true);
                                        },
                                        onEditCard: (card)=>{
                                            setCardToEdit(card);
                                            setIsCardFormOpen(true);
                                        },
                                        onDeleteCard: handleDeleteCard,
                                        onCancelDelete: ()=>setDeleteConfirm(null)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminPortal.tsx",
                                        lineNumber: 221,
                                        columnNumber: 21
                                    }, this),
                                    isTeamFormOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TeamForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            isOpen: isTeamFormOpen,
                                            onClose: ()=>{
                                                setIsTeamFormOpen(false);
                                                setTeamToEdit(null);
                                                fetchTeams();
                                            },
                                            teamToEdit: teamToEdit || undefined
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminPortal.tsx",
                                            lineNumber: 241,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminPortal.tsx",
                                        lineNumber: 240,
                                        columnNumber: 21
                                    }, this),
                                    isCardFormOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            isOpen: isCardFormOpen,
                                            onClose: ()=>{
                                                setIsCardFormOpen(false);
                                                setCardToEdit(null);
                                                fetchCards();
                                            },
                                            cardToEdit: cardToEdit || undefined
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminPortal.tsx",
                                            lineNumber: 256,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AdminPortal.tsx",
                                        lineNumber: 255,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/src/components/AdminPortal.tsx",
                            lineNumber: 184,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/AdminPortal.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AdminPortal.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$ResetDatabaseModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResetDatabaseModal"], {
                isOpen: showResetModal,
                password: resetPassword,
                error: resetError,
                isResetting: isResetting,
                onPasswordChange: (value)=>{
                    setResetPassword(value);
                    setResetError("");
                },
                onConfirm: handleResetConfirm,
                onCancel: handleResetCancel
            }, void 0, false, {
                fileName: "[project]/src/components/AdminPortal.tsx",
                lineNumber: 275,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AdminPortal.tsx",
        lineNumber: 146,
        columnNumber: 5
    }, this);
}
_s(AdminPortal, "I1W02VOsxvpj7np+vRHF7mocbH8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$hooks$2f$useAdminData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdminData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$hooks$2f$useAdminData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResetDatabase"]
    ];
});
_c = AdminPortal;
var _c;
__turbopack_context__.k.register(_c, "AdminPortal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_9c1fd2b9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_9c1fd2b9.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AdminPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AdminPortal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function RootLayout(param) {
    let { children } = param;
    _s();
    const [isPortalOpen, setIsPortalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RootLayout.useEffect": ()=>{
            const handleOpenPortal = {
                "RootLayout.useEffect.handleOpenPortal": ()=>setIsPortalOpen(true)
            }["RootLayout.useEffect.handleOpenPortal"];
            window.addEventListener("open-admin-portal", handleOpenPortal);
            return ({
                "RootLayout.useEffect": ()=>{
                    window.removeEventListener("open-admin-portal", handleOpenPortal);
                }
            })["RootLayout.useEffect"];
        }
    }["RootLayout.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        className: "dark",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: "".concat(__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_9c1fd2b9$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].variable, " antialiased"),
            children: [
                isPortalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AdminPortal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onClose: ()=>setIsPortalOpen(false)
                }, void 0, false, {
                    fileName: "[project]/src/app/layout.tsx",
                    lineNumber: 35,
                    columnNumber: 26
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(RootLayout, "tI9oQVsdi8NzNlYvhJXn8/jR6SA=");
_c = RootLayout;
var _c;
__turbopack_context__.k.register(_c, "RootLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__be8ddf77._.js.map