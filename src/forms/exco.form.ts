import { ExcoType } from '@prisma/client';
import * as z from 'zod';

export type IExcoForm = {
  name: string;
  email: string;
  position: string;
  description: string;
  order: number;
  type: ExcoType;
};

export const excoSchema = z
  .object({
    name: z.string(),
    email: z.string(),
    position: z.string(),
    description: z.string(),
    order: z.number(),
    type: z.nativeEnum(ExcoType),
  })
  .required();
