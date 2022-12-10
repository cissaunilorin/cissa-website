import { withAuth } from 'next-auth/middleware';

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      return token?.role === 'ADMIN';
    },
  },
});

// export { default } from 'next-auth/middleware';

export const config = { matcher: ['/admin', '/admin/(.*)'] };
