import * as z from 'zod';

export type IContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const contactSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    subject: z.string(),
    message: z.string(),
  })
  .required();
