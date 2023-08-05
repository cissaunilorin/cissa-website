// @ts-nocheck
import NextAuth from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import { correctPassword } from '../../../utils/authHandler';
import { pattern } from '../../../utils/homeHandler';
import axiosInstance from '../../../utils/axiosConfig';

export const authOptions: NextAuthOptions = {
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
      async authorize(credentials) {
        const { email, password } = credentials;

        if (!email || !password)
          throw new Error('please input email/username and password');
        if (!pattern.test(email)) throw new Error('invalid email');

        const res = await axiosInstance.get(`/api/user/${email}`);
        const user = res.data.user;

        // 2) Check if user exists && password is correct
        if (!user || !(await correctPassword(password, user.password)))
          throw new Error('incorrect email/username or password');

        if (!user.isActive)
          throw new Error(
            'your account has been deactivated, please reach out to the admin'
          );

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
        session.user.isActive = token.isActive;
      }

      return session;
    },
  },
};

export default NextAuth(authOptions);
