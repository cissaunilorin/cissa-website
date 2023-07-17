import { router } from '../trpc';
import { authRouter } from './auth';
import { departmentRouter } from './department';
import { coursesRouter } from './courses';
import { excoRouter } from './executive';
import { eventsRouter } from './events';
import { blogRouter } from './blog';
import { contactRouter } from './contact';

export const appRouter = router({
  department: departmentRouter,
  auth: authRouter,
  course: coursesRouter,
  exco: excoRouter,
  events: eventsRouter,
  blog: blogRouter,
  contact: contactRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
