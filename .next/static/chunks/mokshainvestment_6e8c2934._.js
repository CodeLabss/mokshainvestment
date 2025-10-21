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
"[project]/mokshainvestment/app/admin/companies/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mokshainvestment/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mokshainvestment/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mokshainvestment/utils/supabase/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const CompaniesAdmin = ()=>{
    _s();
    const [companies, setCompanies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [subcategories, setSubcategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        category_id: "",
        subcategory_id: "",
        logo_url: ""
    });
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CompaniesAdmin.useEffect": ()=>{
            fetchCategories();
            fetchCompanies();
        }
    }["CompaniesAdmin.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CompaniesAdmin.useEffect": ()=>{
            if (form.category_id) fetchSubcategories(form.category_id);
            else setSubcategories([]);
        }
    }["CompaniesAdmin.useEffect"], [
        form.category_id
    ]);
    const fetchCategories = async ()=>{
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from("insurance_categories").select("*").eq("is_active", true);
        if (error) return console.error(error.message);
        setCategories(data);
    };
    const fetchSubcategories = async (category_id)=>{
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from("insurance_subcategories").select("*").eq("category_id", category_id).eq("is_active", true);
        if (error) return console.error(error.message);
        setSubcategories(data);
    };
    const fetchCompanies = async ()=>{
        setLoading(true);
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from("insurance_companies").select("*, category:insurance_categories(id,name), subcategory:insurance_subcategories(id,name)").eq("is_active", true).order("created_at", {
            ascending: false
        });
        if (error) {
            console.error(error.message);
            setLoading(false);
            return;
        }
        setCompanies(data);
        setLoading(false);
    };
    const handleFileUpload = async (file)=>{
        const fileName = "".concat(Date.now(), "_").concat(file.name);
        // Upload file
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].storage.from("company-logos").upload(fileName, file);
        if (error) {
            alert("Upload failed: " + error.message);
            return;
        }
        // Get public URL (⚡ fixed destructuring)
        const { data, error: urlError } = __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].storage.from("company-logos").getPublicUrl(fileName);
        if (urlError) {
            alert("URL fetch failed: " + urlError.message);
            return;
        }
        setForm({
            ...form,
            logo_url: data.publicUrl
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!form.name || !form.category_id) return alert("Name and Category are required");
        if (editing && form.id) {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from("insurance_companies").update({
                name: form.name,
                category_id: form.category_id,
                subcategory_id: form.subcategory_id,
                logo_url: form.logo_url
            }).eq("id", form.id);
            if (error) return alert(error.message);
        } else {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from("insurance_companies").insert({
                name: form.name,
                category_id: form.category_id,
                subcategory_id: form.subcategory_id,
                logo_url: form.logo_url,
                is_active: true
            });
            if (error) return alert(error.message);
        }
        setForm({
            name: "",
            category_id: "",
            subcategory_id: "",
            logo_url: ""
        });
        setEditing(false);
        fetchCompanies();
    };
    const handleEdit = (company)=>{
        setForm({
            ...company
        });
        setEditing(true);
    };
    const handleDelete = async (id)=>{
        if (!confirm("Are you sure you want to delete this company?")) return;
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from("insurance_companies").update({
            is_active: false
        }).eq("id", id);
        if (error) return alert(error.message);
        fetchCompanies();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4",
                children: "Manage Companies"
            }, void 0, false, {
                fileName: "[project]/mokshainvestment/app/admin/companies/page.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "mb-6 p-4 border rounded-lg bg-white shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row gap-4 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Company Name",
                                value: form.name || "",
                                onChange: (e)=>setForm({
                                        ...form,
                                        name: e.target.value
                                    }),
                                className: "border px-3 py-2 rounded w-full"
                            }, void 0, false, {
                                fileName: "[project]/mokshainvestment/app/admin/companies/page.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: form.category_id || "",
                                onChange: (e)=>setForm({
                                        ...form,
                                        category_id: e.target.value,
                                        subcategory_id: ""
                                    }),
                                className: "border px-3 py-2 rounded w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Select Category"
                                    }, void 0, false, {
                                        fileName: "[project]/mokshainvestment/app/admin/companies/page.tsx",
                                        lineNumber: 191,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: cat.id,
                                            children: cat.name
                                        }, cat.id, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/companies/page.tsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mokshainvestment/app/admin/companies/page.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: form.subcategory_id || "",
                                onChange: (e)=>setForm({
                                        ...form,
                                        subcategory_id: e.target.value
                                    }),
                                className: "border px-3 py-2 rounded w-full",
                                disabled: !subcategories.length,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Select Subcategory"
                                    }, void 0, false, {
                                        fileName: "[project]/mokshainvestment/app/admin/companies/page.tsx",
                                        lineNumber: 205,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    subcategories.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: sub.id,
                                            children: sub.name
                                        }, sub.id, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/companies/page.tsx",
                                            lineNumber: 207,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mokshainvestment/app/admin/companies/page.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                accept: "image/*",
                                onChange: (e)=>{
                                    var _e_target_files;
                                    return ((_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0]) && handleFileUpload(e.target.files[0]);
                                },
                                className: "border px-3 py-2 rounded w-full"
                            }, void 0, false, {
                                fileName: "[project]/mokshainvestment/app/admin/companies/page.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "bg-indigo-600 text-white px-4 py-2 rounded",
                                children: editing ? "Update" : "Add"
                            }, void 0, false, {
                                fileName: "[project]/mokshainvestment/app/admin/companies/page.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mokshainvestment/app/admin/companies/page.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    form.logo_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: form.logo_url,
                        alt: "Preview",
                        className: "mt-2 w-32 h-32 object-cover border rounded"
                    }, void 0, false, {
                        fileName: "[project]/mokshainvestment/app/admin/companies/page.tsx",
                        lineNumber: 231,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/mokshainvestment/app/admin/companies/page.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Loading companies..."
            }, void 0, false, {
                fileName: "[project]/mokshainvestment/app/admin/companies/page.tsx",
                lineNumber: 240,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full border-collapse",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "bg-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "border px-3 py-2 text-left",
                                    children: "Name"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/companies/page.tsx",
                                    lineNumber: 245,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "border px-3 py-2 text-left",
                                    children: "Category"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/companies/page.tsx",
                                    lineNumber: 246,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "border px-3 py-2 text-left",
                                    children: "Subcategory"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/companies/page.tsx",
                                    lineNumber: 247,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "border px-3 py-2 text-left",
                                    children: "Logo"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/companies/page.tsx",
                                    lineNumber: 248,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "border px-3 py-2",
                                    children: "Actions"
                                }, void 0, false, {
                                    fileName: "[project]/mokshainvestment/app/admin/companies/page.tsx",
                                    lineNumber: 249,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mokshainvestment/app/admin/companies/page.tsx",
                            lineNumber: 244,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/mokshainvestment/app/admin/companies/page.tsx",
                        lineNumber: 243,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: companies.map((c)=>{
                            var _c_category, _c_subcategory;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "hover:bg-gray-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "border px-3 py-2",
                                        children: c.name
                                    }, void 0, false, {
                                        fileName: "[project]/mokshainvestment/app/admin/companies/page.tsx",
                                        lineNumber: 255,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "border px-3 py-2",
                                        children: (_c_category = c.category) === null || _c_category === void 0 ? void 0 : _c_category.name
                                    }, void 0, false, {
                                        fileName: "[project]/mokshainvestment/app/admin/companies/page.tsx",
                                        lineNumber: 256,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "border px-3 py-2",
                                        children: (_c_subcategory = c.subcategory) === null || _c_subcategory === void 0 ? void 0 : _c_subcategory.name
                                    }, void 0, false, {
                                        fileName: "[project]/mokshainvestment/app/admin/companies/page.tsx",
                                        lineNumber: 257,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "border px-3 py-2",
                                        children: c.logo_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: c.logo_url,
                                            alt: c.name,
                                            className: "w-20 h-20 object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/mokshainvestment/app/admin/companies/page.tsx",
                                            lineNumber: 260,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/mokshainvestment/app/admin/companies/page.tsx",
                                        lineNumber: 258,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "border px-3 py-2 flex gap-2 justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleEdit(c),
                                                className: "bg-yellow-400 text-white px-2 py-1 rounded",
                                                children: "Edit"
                                            }, void 0, false, {
                                                fileName: "[project]/mokshainvestment/app/admin/companies/page.tsx",
                                                lineNumber: 268,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mokshainvestment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleDelete(c.id),
                                                className: "bg-red-500 text-white px-2 py-1 rounded",
                                                children: "Delete"
                                            }, void 0, false, {
                                                fileName: "[project]/mokshainvestment/app/admin/companies/page.tsx",
                                                lineNumber: 274,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mokshainvestment/app/admin/companies/page.tsx",
                                        lineNumber: 267,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, c.id, true, {
                                fileName: "[project]/mokshainvestment/app/admin/companies/page.tsx",
                                lineNumber: 254,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/mokshainvestment/app/admin/companies/page.tsx",
                        lineNumber: 252,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/mokshainvestment/app/admin/companies/page.tsx",
                lineNumber: 242,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/mokshainvestment/app/admin/companies/page.tsx",
        lineNumber: 165,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CompaniesAdmin, "qRjPm4eW346WGkW04NEe9gePUS0=");
_c = CompaniesAdmin;
const __TURBOPACK__default__export__ = CompaniesAdmin;
var _c;
__turbopack_context__.k.register(_c, "CompaniesAdmin");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=mokshainvestment_6e8c2934._.js.map