import { initTRPC, TRPCError } from '@trpc/server';
import superjson from 'superjson';

import { type Context } from './context';

const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});

export const router = t.router;

/**
 * Unprotected procedure
 **/
export const publicProcedure = t.procedure;

/**
 * Reusable middleware to ensure
 * users are logged in
 */
const isAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return next({
    ctx: {
      // infers the `session` as non-nullable
      session: { ...ctx.session, user: ctx.session.user },
    },
  });
});

/**
 * Reusable middleware to ensure
 * users are is authorized
 */
const isAdmin = t.middleware(async ({ ctx, next }) => {
  if (!ctx.session || ctx.session.user.role !== 'ADMIN') {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return next({
    ctx: {
      // infers the `session` as non-nullable
      session: { ...ctx.session, user: ctx.session.user },
    },
  });
});

/**
 * Reusable middleware to ensure
 * users are is authorized
 */
const isAuthor = t.middleware(async ({ ctx, next }) => {
  if (
    !ctx.session ||
    (ctx.session.user.role !== 'ADMIN' && ctx.session.user.role !== 'EDITOR')
  ) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return next({
    ctx: {
      // infers the `session` as non-nullable
      session: { ...ctx.session, user: ctx.session.user },
    },
  });
});

/**
 * Protected procedure
 **/
export const protectedProcedure = t.procedure.use(isAuthed);

export const adminProcedure = t.procedure.use(isAdmin);

export const editorProcedure = t.procedure.use(isAuthor);
