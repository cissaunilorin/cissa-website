import { User as PrismaUSer } from '@prisma/client';
import 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: Omit<PrismaUSer, 'password'>;
  }

  export interface JWT extends Omit<PrismaUSer, 'password'> {}

  type User = Omit<PrismaUSer, 'password'>;
}
