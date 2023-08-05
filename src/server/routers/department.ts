import { z } from 'zod';

import { router, publicProcedure, adminProcedure } from '../trpc';
import { AxiosResponse } from 'axios';
import axiosInstance from '../../utils/axiosConfig';
import { Department } from '../../types/types';

export const departmentRouter = router({
  getAllDepartments: publicProcedure.query(async ({ ctx }) => {
    const res: AxiosResponse<{ department: Department[] }, any> =
      await axiosInstance.get(`/api/department/`);
    const department = res.data.department;

    return department;
  }),
  createDepartment: adminProcedure
    .input(
      z.object({
        name: z.string(),
        shortName: z.string(),
        matric: z.string(),
        HOD: z.string(),
        about: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const res: AxiosResponse<{ department: Department }, any> =
        await axiosInstance.post(`/api/department/`, {
          name: input.name,
          shortName: input.shortName,
          matric: input.matric,
          HOD: input.HOD,
          about: input.about,
        });
      const department = res.data.department;

      return department;
    }),
  updateDepartment: adminProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
        shortName: z.string(),
        matric: z.string(),
        HOD: z.string(),
        about: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const res: AxiosResponse<{ department: Department }, any> =
        await axiosInstance.patch(`/api/department/${input.id}`, {
          name: input.name,
          shortName: input.shortName,
          matric: input.matric,
          HOD: input.HOD,
          about: input.about,
        });
      const department = res.data.department;

      return department;
    }),
  deleteDepartment: adminProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      await axiosInstance.delete(`/api/department/${input.id}`);

      return `done`;
    }),
});
