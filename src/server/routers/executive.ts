import { z } from 'zod';
import { hashPassword } from '../../utils/authHandler';
import { router, publicProcedure, adminProcedure } from '../trpc';
import { ExcoType, Role } from '../../types/types';

export const excoRouter = router({
  getExcos: publicProcedure
    .input(
      z.object({
        type: z.nativeEnum(ExcoType),
      })
    )
    .query(async ({ input, ctx }) => {
      const exco = await ctx.prisma.executive.findMany({
        include: { user: true },
        where: { type: input.type },
        orderBy: [{ order: 'asc' }],
      });

      return exco;
    }),
  getAllExco: publicProcedure.query(async ({ ctx }) => {
    const exco = await ctx.prisma.executive.findMany({
      include: { user: true },
    });

    return exco;
  }),
  createExco: adminProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string(),
        imageUrl: z.string(),
        position: z.string(),
        description: z.string(),
        order: z.string(),
        type: z.nativeEnum(ExcoType),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const password = await hashPassword('admin1234$');

      const exco = await ctx.prisma.user.create({
        data: {
          name: input.name,
          email: input.email,
          password,
          executive: {
            create: {
              imageUrl: input.imageUrl,
              position: input.position,
              type: input.type,
              description: input.description,
              order: +input.order,
            },
          },
        },
      });

      return exco;
    }),
  createEditor: adminProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const password = await hashPassword('editor1234$');

      const editor = await ctx.prisma.user.create({
        data: {
          name: input.name,
          email: input.email,
          password,
          role: Role.EDITOR,
        },
      });

      return editor;
    }),
  updateExco: adminProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
        email: z.string(),
        position: z.string(),
        description: z.string(),
        order: z.string(),
        imageUrl: z.string(),
        type: z.nativeEnum(ExcoType),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const exco = await ctx.prisma.executive.update({
        where: {
          id: input.id,
        },
        data: {
          position: input.position,
          description: input.description,
          type: input.type,
          order: +input.order,
          imageUrl: input.imageUrl,
          user: {
            update: {
              name: input.name,
              email: input.email,
            },
          },
        },
      });

      return exco;
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
  activateEditor: adminProcedure
    .input(
      z.object({
        id: z.string(),
        isActive: z.boolean(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const editor = await ctx.prisma.user.update({
        where: {
          id: input.id,
        },
        data: {
          isActive: input.isActive,
        },
      });

      return editor.isActive;
    }),
});
