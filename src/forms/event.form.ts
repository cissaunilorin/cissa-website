import { Event } from '@prisma/client';
import * as z from 'zod';

export type IEventForm = {
  date: string;
  title: string;
  imageUrl: string;
  price: string;
  link: string;
  venue: string;
};

export const EventSchema = z
  .object({
    date: z.string(),
    venue: z.string(),
    title: z.string(),
    price: z.string(),
    link: z.string(),
  })
  .required();
