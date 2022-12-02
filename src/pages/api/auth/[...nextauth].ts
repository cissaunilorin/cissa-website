// @ts-nocheck
import NextAuth from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import { correctPassword } from '../../../utils/authHandler';
import { pattern } from '../../../utils/homeHandler';
import { prisma } from '../../../lib/prisma';

export default NextAuth({
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 7,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/login',
  },
  providers: [
    CredentialProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        if (!email || !password)
          throw new Error('please input email/username and password');
        if (!pattern.test(email)) throw new Error('invalid email');

        const user = await prisma.user.findFirst({ where: { email } });

        // 2) Check if user exists && password is correct
        if (!user || !(await correctPassword(password, user.password)))
          throw new Error('incorrect email/username or password');

        delete user.password;
        return user;
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token = { ...token, ...user };
        delete token.picture; // might have to add it back
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.user.id = token.sub;
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.role = token.role;
      }

      return session;
    },
  },
});
