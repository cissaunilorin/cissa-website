import { z } from 'zod';

import { router, publicProcedure, protectedProcedure } from '../trpc';

export const departmentRouter = router({
  // hello: publicProcedure
  //   .input(z.object({ text: z.string().nullish() }).nullish())
  //   .query(({ input }) => {
  //     return {
  //       greeting: `Hello ${input?.text ?? 'world'}`,
  //     };
  //   }),
  // getAll: publicProcedure.query(({ ctx }) => {
  //   // return ctx.prisma.example.findMany();
  //   return ctx.session?.user;
  // }),
  createDepartment: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        matric: z.string(),
        subDeanName: z.string(),
      })
    )
    .mutation(({ input, ctx }) => {
      const department = ctx.prisma.department.create({
        data: {
          name: input.name,
          matric: input.matric,
          subDeanName: input.subDeanName,
        },
      });

      return department;
    }),
});
