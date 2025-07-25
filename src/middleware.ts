import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function middleware(_req) {
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
)

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/inventory/:path*',
    '/suppliers/:path*',
    '/orders/:path*',
    '/reports/:path*',
    '/settings/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 