import { z } from 'zod';

import { router, publicProcedure, protectedProcedure } from '../trpc';

export const departmentRouter = router({
  getAllDepartments: publicProcedure.query(async ({ ctx }) => {
    const department = await ctx.prisma.department.findMany();

    return department;
  }),
  createDepartment: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        shortName: z.string(),
        matric: z.string(),
        subDeanName: z.string(),
      })
    )
    .mutation(({ input, ctx }) => {
      const department = ctx.prisma.department.create({
        data: {
          name: input.name,
          shortName: input.shortName,
          matric: input.matric,
          subDeanName: input.subDeanName,
        },
      });

      return department;
    }),
});
