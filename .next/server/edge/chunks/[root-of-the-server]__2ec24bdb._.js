(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__2ec24bdb._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/mokshainvestment/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
async function middleware(req) {
// const res = NextResponse.next()
// // List all cookie names your app might use for Supabase
// const cookieNames = ['sb-access-token', 'sb-refresh-token']
// const cookiesObj: Record<string, string> = {}
// cookieNames.forEach((name) => {
//   const value = req.cookies.get(name)
//   if (value) cookiesObj[name] = value
// })
// const supabase = createServerClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//   {
//     cookies: {
//       getAll: () => cookiesObj,
//       setAll: (cookies: Record<string, string>) => {
//         Object.entries(cookies).forEach(([name, value]) => {
//           res.cookies.set(name, value, { path: '/' })
//         })
//       },
//     },
//   }
// )
// const { data: { user } } = await supabase.auth.getUser()
// const { pathname } = req.nextUrl
// if (!user && pathname === '/admin') {
//   return NextResponse.redirect(new URL('/admin/login', req.url))
// }
// if (user && pathname === '/admin/login') {
//   return NextResponse.redirect(new URL('/admin', req.url))
// }
// return res
}
const config = {
    matcher: [
        '/admin',
        '/admin/login'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__2ec24bdb._.js.map