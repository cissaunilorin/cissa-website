import { z } from 'zod';
import { hashPassword } from '../../utils/authHandler';
import { router, publicProcedure, adminProcedure } from '../trpc';
import { ExcoType, Executive, Role, User } from '../../types/types';
import { AxiosResponse } from 'axios';
import axiosInstance from '../../utils/axiosConfig';

export const excoRouter = router({
  getExcos: publicProcedure
    .input(
      z.object({
        type: z.string(),
      })
    )
    .query(async ({ input, ctx }) => {
      const res: AxiosResponse<{ exco: Executive[] }, any> =
        await axiosInstance.get(`/api/user/executive/${input.type}`);
      const exco = res.data.exco;

      return exco;
    }),
  getAllExco: publicProcedure.query(async ({ ctx }) => {
    const res: AxiosResponse<{ exco: Executive[] }, any> =
      await axiosInstance.get(`/api/user/executive`);
    const exco = res.data.exco;

    return exco;
  }),
  createExco: adminProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string(),
        imageUrl: z.string(),
        position: z.string(),
        description: z.string(),
        order: z.string(),
        type: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const password = await hashPassword('admin1234$');

      const res: AxiosResponse<{ exco: User }, any> = await axiosInstance.post(
        `/api/user/executive`,
        {
          user: {
            name: input.name,
            email: input.email,
            password,
          },
          exco: {
            imageUrl: input.imageUrl,
            position: input.position,
            type: input.type,
            description: input.description,
            order: +input.order,
          },
        }
      );
      const exco = res.data.exco;

      return exco;
    }),
  createEditor: adminProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const password = await hashPassword('editor1234$');

      const res: AxiosResponse<{ user: User }, any> = await axiosInstance.post(
        `/api/user/`,
        { name: input.name, email: input.email, password, role: 'EDITOR' }
      );

      const editor = res.data.user;

      return editor;
    }),
  updateExco: adminProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
        email: z.string(),
        position: z.string(),
        description: z.string(),
        order: z.string(),
        imageUrl: z.string(),
        type: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const res: AxiosResponse<{ exco: Executive }, any> =
        await axiosInstance.patch(`/api/user/executive/${input.id}`, {
          user: { name: input.name, email: input.email },
          exco: {
            position: input.position,
            description: input.description,
            type: input.type,
            order: +input.order,
            imageUrl: input.imageUrl,
          },
        });
      const exco = res.data.exco;

      return exco;
    }),
  deleteExco: adminProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      await axiosInstance.patch(`/api/user/${input.id}`, {
        isActive: false,
      });

      return `done`;
    }),
  activateEditor: adminProcedure
    .input(
      z.object({
        id: z.string(),
        isActive: z.boolean(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const res: AxiosResponse<{ user: User }, any> = await axiosInstance.patch(
        `/api/user/${input.id}`,
        {
          isActive: input.isActive,
        }
      );
      const user = res.data.user;

      return user.isActive;
    }),
});
