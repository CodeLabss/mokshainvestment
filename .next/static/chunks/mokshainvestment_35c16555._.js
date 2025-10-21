(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/mokshainvestment/utils/supabase/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// import { createBrowserClient } from "@supabase/ssr";
// export function createClient() {
//   return createBrowserClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL as string,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
//   );
// }
// import { createClient as createSupabaseClient } from "@supabase/supabase-js";
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
// const supabase = createSupabaseClient(supabaseUrl, supabaseAnonKey);
// export default supabase;
// utils/supabase/client.ts
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/mokshainvestment/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/mokshainvestment/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://fouathcllogchmgagguq.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvdWF0aGNsbG9nY2htZ2FnZ3VxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcyMzIzMTEsImV4cCI6MjA3MjgwODMxMX0.y9rOlWdVGnA-vCflrTys4IEROvp9v18qBd46wRwg2oM");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
const __TURBOPACK__default__export__ = supabase;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mokshainvestment/app/admin/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// // app/admin/page.tsx
// "use client";
// import React, { useState } from "react";
// import LeadsTable from "@/components/admin/LeadsTable";
// import NFOManager from "@/components/admin/NFOManager";
// import BondsManager from "@/components/admin/BondsManager";
// export default function AdminPage() {
//   const [tab, setTab] = useState<"leads" | "nfo" | "bonds">("leads");
//   return (
//     <section className="max-w-7xl mx-auto">
//       <div className="mb-6 flex items-center justify-between">
//         <h1 className="text-2xl md:text-3xl font-extrabold text-amber-400">Admin Panel</h1>
//         <div className="flex gap-2">
//           <button onClick={() => setTab("leads")} className={`px-4 py-2 rounded ${tab==="leads" ? "bg-amber-400 text-slate-900" : "border border-white/10"}`}>Leads</button>
//           <button onClick={() => setTab("nfo")} className={`px-4 py-2 rounded ${tab==="nfo" ? "bg-amber-400 text-slate-900" : "border border-white/10"}`}>Upcoming NFO</button>
//           <button onClick={() => setTab("bonds")} className={`px-4 py-2 rounded ${tab==="bonds" ? "bg-amber-400 text-slate-900" : "border border-white/10"}`}>Bonds</button>
//         </div>
//       </div>
//       <div>
//         {tab === "leads" && <LeadsTable />}
//         {tab === "nfo" && <NFOManager />}
//         {tab === "bonds" && <BondsManager />}
//       </div>
//     </section>
//   );
// }
__turbopack_context__.s([
    "default",
    ()=>AdminDashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mokshainvestment/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mokshainvestment/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// import { supabase } from "@/lib/supabase/client"; // Updated import
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mokshainvestment/utils/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AdminDashboardPage() {
    _s();
    const [leads, setLeads] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminDashboardPage.useEffect": ()=>{
            fetchLeads();
        }
    }["AdminDashboardPage.useEffect"], []);
    async function fetchLeads() {
        try {
            setLoading(true);
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from('leads').select('*').order('created_at', {
                ascending: false
            });
            if (error) {
                console.error('Error fetching leads:', error);
            } else {
                setLeads(data || []);
            }
        } catch (error) {
            console.error('Error in fetchLeads:', error);
        } finally{
            setLoading(false);
        }
    }
    async function handleSignOut() {
        await __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].auth.signOut();
        // Reload the page to let the middleware handle the redirect to login
        window.location.reload();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            className: "max-w-7xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-bold text-amber-400",
                                        children: "Leads Dashboard"
                                    }, void 0, false, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-300 mt-1",
                                        children: "Manage your customer leads"
                                    }, void 0, false, {
                                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSignOut,
                                className: "px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors text-slate-300",
                                children: "Sign Out"
                            }, void 0, false, {
                                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-300",
                        children: "Loading leads..."
                    }, void 0, false, {
                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                        lineNumber: 104,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-300",
                        children: [
                            leads.length,
                            " leads found."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                        lineNumber: 106,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/mokshainvestment/app/admin/page.tsx",
                lineNumber: 88,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/mokshainvestment/app/admin/page.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/mokshainvestment/app/admin/page.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_s(AdminDashboardPage, "0gMOxoyvO6IW0wGpEUIlpC9WwiY=");
_c = AdminDashboardPage;
var _c;
__turbopack_context__.k.register(_c, "AdminDashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=mokshainvestment_35c16555._.js.map