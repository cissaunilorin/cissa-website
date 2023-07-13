import { type GetServerSidePropsContext } from 'next';
import { Session } from 'next-auth';
import { getServerSession } from 'next-auth/next';

import { authOptions } from '../../pages/api/auth/[...nextauth]';

/**
 * Wrapper for unstable_getServerSession https://next-auth.js.org/configuration/nextjs
 * See example usage in trpc createContext or the restricted API route
 */
export const getServerAuthSession = async (ctx: {
  req: GetServerSidePropsContext['req'];
  res: GetServerSidePropsContext['res'];
}) => {
  const session: Session | null = await getServerSession(
    ctx.req,
    ctx.res,
    authOptions
  );
  return session;
};
