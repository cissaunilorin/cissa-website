import * as z from 'zod';
import { ExcoType } from '../types/types';

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
    type: z.string(),
  })
  .required();
