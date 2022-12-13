import * as z from 'zod';

export interface ILoginForm {
  email: string;
  password: string;
}

export const loginSchema = z.object({
  email: z.string().email({ message: 'input a valid email address' }).min(2),
  password: z
    .string()
    .min(8, { message: 'Password must contain at least 8 character(s)' }),
});
