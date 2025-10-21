(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/mokshainvestment/lib/supabaseClient.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/supabaseClient.ts
__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/mokshainvestment/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/mokshainvestment/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
"use client";
;
const URL = ("TURBOPACK compile-time value", "https://fouathcllogchmgagguq.supabase.co");
const ANON = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvdWF0aGNsbG9nY2htZ2FnZ3VxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcyMzIzMTEsImV4cCI6MjA3MjgwODMxMX0.y9rOlWdVGnA-vCflrTys4IEROvp9v18qBd46wRwg2oM");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(URL, ANON, {
    auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: false
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mokshainvestment/app/admin/login/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminLoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mokshainvestment/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mokshainvestment/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mokshainvestment/lib/supabaseClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AdminLoginPage() {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    async function onSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            console.log("🟡 Attempting Supabase login with:", email);
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithPassword({
                email: email.trim(),
                password
            });
            if (error) {
                console.error("Supabase error:", error.message);
                setError(error.message);
                setLoading(false); // Stop loading on error
                return;
            }
            if (data === null || data === void 0 ? void 0 : data.session) {
                console.log("✅ Session created. Reloading page to trigger middleware redirect...");
                // Instead of a hard redirect, reload the page.
                // The middleware will see the new session and redirect correctly.
                window.location.reload();
                return;
            }
            // This case handles invalid credentials specifically
            if (!data.session) {
                setError("Invalid credentials. Please try again.");
            }
        } catch (err) {
            console.error("🔴 Login error:", err);
            setError(err.message || "An unexpected error occurred.");
        } finally{
            setLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "max-w-xl mx-auto mt-12 px-4",
        children: [
            "      ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 8
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "bg-white/6 backdrop-blur-lg border border-white/10 rounded-2xl p-8",
                children: [
                    "        ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-extrabold text-amber-400 mb-2",
                        children: "Admin Sign In"
                    }, void 0, false, {
                        fileName: "[project]/mokshainvestment/app/admin/login/page.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    "        ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-300 mb-6",
                        children: "          Use your admin credentials to access the dashboard         "
                    }, void 0, false, {
                        fileName: "[project]/mokshainvestment/app/admin/login/page.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    "        ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: onSubmit,
                        className: "space-y-4",
                        children: [
                            "          ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    "            ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-slate-300 text-sm font-medium mb-1 block",
                                        children: "Email"
                                    }, void 0, false, {
                                        fileName: "[project]/mokshainvestment/app/admin/login/page.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this),
                                    "            ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        placeholder: "admin@admin.com",
                                        value: email,
                                        onChange: (e)=>setEmail(e.target.value),
                                        required: true,
                                        className: "w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/mokshainvestment/app/admin/login/page.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this),
                                    "          "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mokshainvestment/app/admin/login/page.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            "                    ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    "            ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-slate-300 text-sm font-medium mb-1 block",
                                        children: "Password"
                                    }, void 0, false, {
                                        fileName: "[project]/mokshainvestment/app/admin/login/page.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this),
                                    "            ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "password",
                                        placeholder: "Enter your password",
                                        value: password,
                                        onChange: (e)=>setPassword(e.target.value),
                                        required: true,
                                        className: "w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/mokshainvestment/app/admin/login/page.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this),
                                    "          "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mokshainvestment/app/admin/login/page.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            "                    ",
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm",
                                children: [
                                    "              ",
                                    error,
                                    "            "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mokshainvestment/app/admin/login/page.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this),
                            "                    ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: loading,
                                className: "w-full px-4 py-3 rounded-lg bg-amber-400 text-slate-900 font-semibold hover:bg-amber-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                children: [
                                    "            ",
                                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center",
                                        children: [
                                            "                ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "animate-spin rounded-full h-4 w-4 border-b-2 border-slate-900 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/mokshainvestment/app/admin/login/page.tsx",
                                                lineNumber: 103,
                                                columnNumber: 17
                                            }, this),
                                            "                Signing in...               "
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mokshainvestment/app/admin/login/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this) : "Sign In",
                                    "          "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mokshainvestment/app/admin/login/page.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            "        "
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mokshainvestment/app/admin/login/page.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    "        ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 p-4 bg-white/5 rounded-lg border border-white/10",
                        children: [
                            "          ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-400 text-sm text-center",
                                children: "            Use your Supabase admin credentials           "
                            }, void 0, false, {
                                fileName: "[project]/mokshainvestment/app/admin/login/page.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            "        "
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mokshainvestment/app/admin/login/page.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    "      "
                ]
            }, void 0, true, {
                fileName: "[project]/mokshainvestment/app/admin/login/page.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            "    "
        ]
    }, void 0, true, {
        fileName: "[project]/mokshainvestment/app/admin/login/page.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(AdminLoginPage, "DQMkLzgr019TSFpIeybKF66BVd8=");
_c = AdminLoginPage;
var _c;
__turbopack_context__.k.register(_c, "AdminLoginPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=mokshainvestment_8d9dc0b9._.js.map