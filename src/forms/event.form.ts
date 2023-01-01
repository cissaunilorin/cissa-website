import { Event } from '@prisma/client';
import * as z from 'zod';

export type IEventForm = Event;

export const EventSchema = z
  .object({
    date: z.date(),
    venue: z
      .string()
      .min(8, { message: 'event venue must contain at least 8 character(s)' }),    
  })
  .required();
