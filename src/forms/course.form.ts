import { Course } from '@prisma/client';
import * as z from 'zod';

export type ICourseForm = Course;

export const courseSchema = z
  .object({
    code: z.string().max(7, { message: 'code can be only 7 characters' }),
    title: z
      .string()
      .min(8, { message: 'course title must contain at least 8 character(s)' }),
    credit: z
      .number()
      .max(4, { message: 'credit can be only 1 digit from 1 upwards' }),
    status: z.string(),
    departmentId: z.string(),
  })
  .required();
