import { router } from '../trpc';
import { authRouter } from './auth';
import { departmentRouter } from './department';

export const appRouter = router({
  department: departmentRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
