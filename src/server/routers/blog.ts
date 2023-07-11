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
  createBlogPost: editorProcedure.mutation(async ({ ctx }) => {
    const blog = await ctx.prisma.blog.create({
      data: {
        imageUrl: '',
        heading: '',
        content: '',
        // slug: '',
        draft: false,
        published: false,
        authorId: ctx.session.user.id,
      },
    });

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
          published: false,
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
  // draftBlogPost: editorProcedure
  //   .input(
  //     z.object({
  //       id: z.string(),
  //       heading: z.string(),
  //       content: z.string(),
  //       imageUrl: z.string(),
  //     })
  //   )
  //   .mutation(async ({ input, ctx }) => {
  //     const blog = await ctx.prisma.blog.update({
  //       where: {
  //         id: input.id,
  //       },
  //       data: {
  //         imageUrl: input.imageUrl,
  //         heading: input.heading,
  //         content: input.content,
  //         draft: true,
  //         published: false,
  //       },
  //     });

  //     return blog;
  //   }),
  pubBlogPost: adminProcedure
    .input(
      z.object({
        id: z.string(),
        published: z.boolean(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const blog = await ctx.prisma.blog.update({
        where: {
          id: input.id,
        },
        data: {
          published: input.published,
        },
      });

      return blog;
    }),
});
