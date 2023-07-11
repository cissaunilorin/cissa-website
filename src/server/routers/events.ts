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
        date: z.string(),
        venue: z.string(),
        title: z.string(),
        price: z.string(),
        link: z.string(),
        imageUrl: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const event = await ctx.prisma.event.create({
        data: {
          date: new Date(input.date),
          venue: input.venue,
          imageUrl: input.imageUrl,
          link: input.link,
          price: input.price,
          title: input.title,
        },
      });

      return event;
    }),
  updateEvent: adminProcedure
    .input(
      z.object({
        id: z.string(),
        date: z.string(),
        venue: z.string(),
        title: z.string(),
        price: z.string(),
        link: z.string(),
        imageUrl: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const event = await ctx.prisma.event.update({
        where: {
          id: input.id,
        },
        data: {
          date: new Date(input.date),
          venue: input.venue,
          imageUrl: input.imageUrl,
          link: input.link,
          price: input.price,
          title: input.title,
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
