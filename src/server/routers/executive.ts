import { z } from 'zod';

import { router, publicProcedure, adminProcedure } from '../trpc';

export const excoRouter = router({
  getAllDepartments: publicProcedure.query(async ({ ctx }) => {
    const department = await ctx.prisma.department.findMany();

    return department;
  }),
  createExco: adminProcedure
    .input(
      z.object({
        name: z.string(),
        shortName: z.string(),
        matric: z.string(),
        HOD: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const department = await ctx.prisma.department.create({
        data: {
          name: input.name,
          shortName: input.shortName,
          matric: input.matric,
          HOD: input.HOD,
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
        HOD: z.string(),
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
          HOD: input.HOD,
        },
      });

      return department;
    }),
  deleteExco: adminProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      await ctx.prisma.user.update({
        where: {
          id: input.id,
        },
        data: {
          isActive: false,
        },
      });

      return `done`;
    }),
});
