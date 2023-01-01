import { z } from 'zod';

import { router, publicProcedure, adminProcedure } from '../trpc';

export const eventsRouter = router({
  getAllEvents: publicProcedure.query(async ({ ctx }) => {
    const events = await ctx.prisma.event.findMany();
    return events;
  }),
  createEvent: adminProcedure
    .input(
      z.object({
        date: z.date(),
        venue: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const event = await ctx.prisma.event.create({
        data: {
          date: input.date,
          venue: input.venue,
        },
      });

      return event;
    }),
  updateEvent: adminProcedure
    .input(
      z.object({
        id: z.string(),
        date: z.date(),
        venue: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const event = await ctx.prisma.event.update({
        where: {
          id: input.id,
        },
        data: {
          date: input.date,
          venue: input.venue,
        },
      });

      return event;
    }),
  deleteEvent: adminProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      await ctx.prisma.event.delete({
        where: {
          id: input.id,
        },
      });

      return `done`;
    }),
});
