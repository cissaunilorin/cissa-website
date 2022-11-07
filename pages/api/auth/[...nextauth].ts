import NextAuth, { Awaitable, User } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import { correctPassword } from '../../../utils/authHandler';
import { pattern } from '../../../utils/homeHandler';
import { prisma } from '../../../lib/prisma';
// import { User } from '@prisma/client';

export default NextAuth({
  session: {
    maxAge: 60 * 60 * 24 * 7,
  },
  secret: process.env.SECRET,
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

        return {
          ...user,
        };
      },
    }),
  ],
  // callbacks: {
  //   session({ session, token, user }) {
  //     console.log(user, session.user);
  //     return session;
  //   },
  //   jwt({ token, account, isNewUser, profile, user }) {
  //     return token;
  //   },
  // },
});
