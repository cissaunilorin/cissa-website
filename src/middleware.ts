// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth(
  function middleware(req) {
    // console.log(req.nextauth.token);
    if (req.nextauth.token) {
      if (req.nextauth.token.role === 'EDITOR') {
        const url = req.nextUrl.clone();

        if (req.url.includes('/admin')) {
          url.pathname = '/author';
          return NextResponse.redirect(url);
        }
      }
    }
  },
  {
    callbacks: {
      authorized({ req, token }) {
        if (req.nextUrl.pathname.includes('/admin'))
          return token?.role === 'ADMIN' || token?.role === 'EDITOR';

        if (req.nextUrl.pathname.includes('/write'))
          return token?.role === 'ADMIN' || token?.role === 'EDITOR';

        if (req.nextUrl.pathname.includes('/author'))
          return token?.role === 'ADMIN' || token?.role === 'EDITOR';

        return true;
      },
    },
  }
);

export const config = {
  matcher: ['/admin', '/admin/(.*)', '/write/(.*)', '/author'],
};
