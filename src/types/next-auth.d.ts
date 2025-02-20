import { User as PrismaUSer } from './types';
import NextAuth from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: Omit<PrismaUSer, 'password'>;
  }

  type User = Omit<PrismaUSer, 'password'>;
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  export interface JWT extends Omit<PrismaUSer, 'password'> {}
}
