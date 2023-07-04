import { z } from 'zod';

import {
  router,
  publicProcedure,
  adminProcedure,
  editorProcedure,
} from '../trpc';

export const blogRouter = router({
  getAllblogs: publicProcedure.query(async ({ ctx }) => {
    const blog = await ctx.prisma.blog.findMany();

    return blog;
  }),
  createBlogPost: editorProcedure
    .input(
      z.object({
        heading: z.string(),
        content: z.string(),
        imageUrl: z.string(),
        draft: z.boolean(),
        // tags: z.string().array(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const blog = await ctx.prisma.blog.create({
        data: {
          imageUrl: input.imageUrl,
          heading: input.heading,
          content: input.content,
          draft: input.draft,
          slug: '',
          authorId: ctx.session.user.id,
        },
      });

      // const blogTag = input.tags.map((cur) => ({
      //   blogId: blog.id,
      //   tagId: cur,
      // }));

      // await ctx.prisma.blogTag.createMany({
      //   data: blogTag,
      // });

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
        // tags: z.string().array(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const blog = await ctx.prisma.blog.update({
        where: {
          id: input.id,
        },
        data: {
          imageUrl: input.imageUrl,
          heading: input.heading,
          content: input.content,
          draft: input.draft,
        },
      });

      // const blogTag = input.tags.map((cur) => ({
      //   blogId: blog.id,
      //   tagId: cur,
      // }));

      // await ctx.prisma.blogTag.createMany({
      //   data: blogTag,
      // });

      return blog;
    }),
});
