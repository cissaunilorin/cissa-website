import { withAuth } from 'next-auth/middleware';

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      if (req.nextUrl.pathname.includes('/admin'))
        return token?.role === 'ADMIN';

      if (req.nextUrl.pathname.includes('/write'))
        return token?.role === 'ADMIN' || token?.role === 'EDITOR';

      return true;
    },
  },
});

// export { default } from 'next-auth/middleware';

export const config = { matcher: ['/admin', '/admin/(.*)', '/write'] };
