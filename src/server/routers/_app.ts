import { router } from '../trpc';
import { authRouter } from './auth';
import { departmentRouter } from './department';
import { coursesRouter } from './courses';

export const appRouter = router({
  department: departmentRouter,
  auth: authRouter,
  course: coursesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
