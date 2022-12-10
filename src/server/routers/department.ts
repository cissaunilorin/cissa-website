import { z } from 'zod';

import { router, publicProcedure, adminProcedure } from '../trpc';

export const departmentRouter = router({
  getAllDepartments: publicProcedure.query(async ({ ctx }) => {
    const department = await ctx.prisma.department.findMany();

    return department;
  }),
  createDepartment: adminProcedure
    .input(
      z.object({
        name: z.string(),
        shortName: z.string(),
        matric: z.string(),
        subDeanName: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const department = await ctx.prisma.department.create({
        data: {
          name: input.name,
          shortName: input.shortName,
          matric: input.matric,
          subDeanName: input.subDeanName,
        },
      });

      return department;
    }),
  updateDepartment: adminProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
        shortName: z.string(),
        matric: z.string(),
        subDeanName: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const department = await ctx.prisma.department.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
          shortName: input.shortName,
          matric: input.matric,
          subDeanName: input.subDeanName,
        },
      });

      return department;
    }),
  deleteDepartment: adminProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      await ctx.prisma.department.delete({
        where: {
          id: input.id,
        },
      });

      return `done`;
    }),
});
