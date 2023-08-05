import * as z from 'zod';

export type IEditorForm = {
  name: string;
  email: string;
};

export interface IEdForm extends IEditorForm {
  password: string;
}

export const editorSchema = z
  .object({
    name: z.string(),
    email: z.string(),
  })
  .required();
export const edSchema = z
  .object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
  })
  .required();
