import { NextResponse } from 'next/server'
import { auth } from '@/auth'

export async function middleware(request) {
  const session = await auth()
  const url = request.nextUrl.clone()

  // console.log(session)
  // console.log(request.nextUrl.pathname)

  if (!session) {
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  if (
    url.pathname.startsWith('/login') ||
    url.pathname.startsWith('/createAccount')
  ) {
    url.pathname = '/'
    // 요청 url이 Login이거나 createAccount일 경우 && 토큰값이 있다면
    // 로그인된 상태로 인지, Home 으로 redirect
    if (session) return NextResponse.redirect(url)
  }
}

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/'],
}
