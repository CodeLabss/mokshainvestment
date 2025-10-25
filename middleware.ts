import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
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

export const config = {
  matcher: ['/admin', '/admin/login'],
}
