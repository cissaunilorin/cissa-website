import { z } from 'zod';
import { router, publicProcedure, adminProcedure } from '../trpc';
import { Course, CourseStatus } from '../../types/types';
import { AxiosResponse } from 'axios';
import axiosInstance from '../../utils/axiosConfig';

export const coursesRouter = router({
  getAllCourses: publicProcedure.query(async ({ ctx }) => {
    const res: AxiosResponse<{ course: Course[] }, any> =
      await axiosInstance.get(`/api/course/`);
    const course = res.data.course;

    return course;
  }),
  createCourse: adminProcedure
    .input(
      z.object({
        code: z.string(),
        title: z.string(),
        credit: z.number(),
        status: z.string(),
        departmentId: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const res: AxiosResponse<{ course: Course }, any> =
        await axiosInstance.post(`/api/course/`, {
          code: input.code,
          title: input.title,
          credit: +input.credit,
          status: CourseStatus[input.status],
          departmentId: input.departmentId,
        });
      const course = res.data.course;

      return course;
    }),
  updateCourse: adminProcedure
    .input(
      z.object({
        code: z.string(),
        title: z.string(),
        credit: z.number(),
        status: z.string(),
        departmentId: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const res: AxiosResponse<{ course: Course }, any> =
        await axiosInstance.patch(`/api/course/${input.code}`, {
          title: input.title,
          credit: +input.credit,
          status: CourseStatus[input.status],
          departmentId: input.departmentId,
        });
      const course = res.data.course;

      return course;
    }),
  deleteCourse: adminProcedure
    .input(
      z.object({
        code: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      await axiosInstance.delete(`/api/course/${input.code}`);

      return `done`;
    }),
});
