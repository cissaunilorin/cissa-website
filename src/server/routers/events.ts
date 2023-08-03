import { z } from 'zod';
import { Event } from '../../types/types';

import { router, publicProcedure, adminProcedure } from '../trpc';
import { AxiosResponse } from 'axios';
import axiosInstance from '../../utils/axiosConfig';

export const eventsRouter = router({
  getAllEvents: publicProcedure.query(async ({ ctx }) => {
    const res: AxiosResponse<{ event: Event[] }, any> = await axiosInstance.get(
      `/api/event/`
    );
    const events = res.data.event;

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
      const res: AxiosResponse<{ event: Event }, any> =
        await axiosInstance.post(`/api/event/`, {
          date: new Date(input.date),
          venue: input.venue,
          imageUrl: input.imageUrl,
          link: input.link,
          price: input.price,
          title: input.title,
        });
      const event = res.data.event;

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
      const res: AxiosResponse<{ event: Event }, any> =
        await axiosInstance.patch(`/api/event/${input.id}`, {
          date: new Date(input.date),
          venue: input.venue,
          imageUrl: input.imageUrl,
          link: input.link,
          price: input.price,
          title: input.title,
        });
      const event = res.data.event;

      return event;
    }),
  deleteEvent: adminProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      await axiosInstance.delete(`/api/event/${input.id}`);

      return `done`;
    }),
});
