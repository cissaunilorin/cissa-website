import { z } from 'zod';

import {
  router,
  publicProcedure,
  adminProcedure,
  editorProcedure,
} from '../trpc';

export const blogRouter = router({
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
        HOD: z.string(),
        about: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const department = await ctx.prisma.department.create({
        data: {
          name: input.name,
          shortName: input.shortName,
          matric: input.matric,
          HOD: input.HOD,
          about: input.about,
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
        about: z.string(),
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
          about: input.about,
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
