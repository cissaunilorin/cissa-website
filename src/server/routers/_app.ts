import { router } from '../trpc';
import { authRouter } from './auth';
import { departmentRouter } from './department';
import { coursesRouter } from './courses';
import { excoRouter } from './executive';
import { eventsRouter } from './events';

export const appRouter = router({
  department: departmentRouter,
  auth: authRouter,
  course: coursesRouter,
  exco: excoRouter,
  events: eventsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
