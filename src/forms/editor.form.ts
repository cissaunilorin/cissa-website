import { User } from '@prisma/client';
import * as z from 'zod';

export type IEditorForm = {
  name: string;
  email: string;
};

export const editorSchema = z
  .object({
    name: z.string(),
    email: z.string(),
  })
  .required();
