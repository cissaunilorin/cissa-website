import { z } from 'zod';

import {
  router,
  publicProcedure,
  adminProcedure,
  editorProcedure,
} from '../trpc';
import slugify from 'slugify';
import uniqid from 'uniqid';
import { AxiosResponse } from 'axios';
import { Blog, Tag } from '../../types/types';
import axiosInstance from '../../utils/axiosConfig';

export const blogRouter = router({
  getAllblogs: publicProcedure.query(async ({ ctx }) => {
    const res: AxiosResponse<{ blog: Blog[] }, any> = await axiosInstance.get(
      `/api/blog/`
    );
    const blog = res.data.blog;

    return blog;
  }),
  getAllTags: editorProcedure.query(async ({ ctx }) => {
    const res: AxiosResponse<{ tag: Tag[] }, any> = await axiosInstance.get(
      `/api/tag/`
    );
    const tag = res.data.tag;

    return tag;
  }),
  createTag: editorProcedure
    .input(
      z.object({
        title: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const res: AxiosResponse<{ tag: Tag }, any> = await axiosInstance.post(
        `/api/tag/`,
        { title: input.title }
      );
      const tag = res.data.tag;

      return tag;
    }),
  createBlogPost: editorProcedure.mutation(async ({ ctx }) => {
    const res: AxiosResponse<{ blog: Blog }, any> = await axiosInstance.post(
      `/api/blog/`,
      {
        imageUrl: '',
        heading: '',
        content: '',
        slug: uniqid(),
        draft: false,
        published: false,
        authorId: ctx.session.user.id,
      }
    );
    const blog = res.data.blog;

    return blog;
  }),
  updateBlogPost: editorProcedure
    .input(
      z.object({
        id: z.string(),
        heading: z.string(),
        content: z.string(),
        imageUrl: z.string(),
        draft: z.boolean(),
        tags: z.string().array().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const res: AxiosResponse<{ blog: Blog }, any> = await axiosInstance.patch(
        `/api/blog/${input.id}`,
        {
          imageUrl: input.imageUrl,
          heading: input.heading,
          content: input.content,
          draft: input.draft,
          published: false,
          slug: `${slugify(input.heading)}-${uniqid()}`,
        }
      );
      const blog = res.data.blog;

      if (input.tags && input.tags.length > 0) {
        const blogTag = input.tags.map((cur) => ({
          blogId: blog.id,
          tagId: cur,
        }));

        await axiosInstance.post(`/api/blog/blog-tag`, {
          tag: blogTag,
        });
      }

      return blog;
    }),
  pubBlogPost: adminProcedure
    .input(
      z.object({
        id: z.string(),
        published: z.boolean(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const res: AxiosResponse<{ blog: Blog }, any> = await axiosInstance.patch(
        `/api/blog/${input.id}`,
        {
          published: input.published,
        }
      );
      const blog = res.data.blog;

      return blog;
    }),
});
