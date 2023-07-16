import { ExcoType } from '@prisma/client';
import * as z from 'zod';

export type IExcoForm = {
  name: string;
  email: string;
  imageUrl: string;
  position: string;
  description: string;
  order: string;
  type: ExcoType;
};

export const excoSchema = z
  .object({
    name: z.string(),
    email: z.string(),
    imageUrl: z.string(),
    position: z.string(),
    description: z.string(),
    order: z.string(),
    type: z.nativeEnum(ExcoType),
  })
  .required();
