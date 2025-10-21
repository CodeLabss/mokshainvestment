module.exports = [
"[project]/mokshainvestment/.next-internal/server/app/admin/login/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/mokshainvestment/app/favicon.ico.mjs { IMAGE => \"[project]/mokshainvestment/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/mokshainvestment/app/favicon.ico.mjs { IMAGE => \"[project]/mokshainvestment/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/mokshainvestment/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/mokshainvestment/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/mokshainvestment/app/admin/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/mokshainvestment/app/admin/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/mokshainvestment/app/admin/login/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// "use client";
// import React, { useState } from "react";
// import { supabase } from "@/lib/supabaseClient";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// export default function AdminLoginPage() {
//   const [email, setEmail] = useState(process.env.NEXT_PUBLIC_ADMIN_EMAIL || "");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter();
//   async function onSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     try {
//       console.log("🟡 Attempting Supabase login with:", email);
//       const { data, error } = await supabase.auth.signInWithPassword({
//         email,
//         password,
//       });
//       console.log("🟢 Supabase login response:", data, error);
//       if (error) {
//         console.warn("Supabase error:", error.message);
//       }
//       if (data?.session) {
//         console.log("✅ Session created:", data.session);
//         await router.push("/admin/dashboard");
//         return;
//       }
//       console.log("🟠 No Supabase session, trying fallback...");
//       const res = await fetch("/api/admin/auth-fallback", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });
//       if (res.ok) {
//         const result = await res.json();
//         console.log("🟢 Fallback result:", result);
//         if (result.success) {
//           await router.push("/admin/dashboard");
//           return;
//         }
//       }
//       setError("Invalid credentials");
//     } catch (err: any) {
//       console.error("🔴 Login error:", err);
//       setError(err.message || "Unexpected error");
//     } finally {
//       setLoading(false);
//     }
//   }
//   return (
//     <section className="max-w-xl mx-auto mt-12">
//       <motion.div
//         initial={{ opacity: 0, y: 8 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="bg-white/6 backdrop-blur-lg border border-white/10 rounded-2xl p-8"
//       >
//         <h2 className="text-2xl font-extrabold text-amber-400 mb-2">Admin Sign In</h2>
//         <p className="text-slate-300 mb-4">
//           Use your admin credentials to access the dashboard
//         </p>
//         <form onSubmit={onSubmit} className="space-y-4">
//           <input
//             type="email"
//             placeholder="admin@admin.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white"
//           />
//           <input
//             type="password"
//             placeholder="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white"
//           />
//           {error && <div className="text-rose-400 text-sm">{error}</div>}
//           <div className="flex gap-3">
//             <button
//               disabled={loading}
//               className="px-4 py-2 rounded-lg bg-amber-400 text-slate-900 font-semibold"
//             >
//               {loading ? "Signing..." : "Sign In"}
//             </button>
//             <button
//               type="button"
//               onClick={() => {
//                 setEmail(process.env.NEXT_PUBLIC_ADMIN_EMAIL || "");
//                 setPassword(process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "");
//               }}
//               className="px-4 py-2 rounded-lg border border-white/10"
//             >
//               Fill env
//             </button>
//           </div>
//         </form>
//       </motion.div>
//     </section>
//   );
// }
}),
"[project]/mokshainvestment/app/admin/login/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/mokshainvestment/app/admin/login/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__14593555._.js.map