import * as z from 'zod';
import { Department } from '../types/types';

export type IDepartmentForm = Omit<Department, 'id'>;

export const departmentSchema = z
  .object({
    shortName: z
      .string()
      .max(3, { message: 'short name can be only 3 chracters' }),
    name: z
      .string()
      .min(8, { message: 'name must contain at least 8 character(s)' }),
    matric: z
      .string()
      .max(4, { message: 'matric name can be only 4 chracters' }),
    HOD: z.string(),
    about: z.string(),
  })
  .required();
