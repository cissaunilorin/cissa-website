import { z } from 'zod';

import { router, publicProcedure, adminProcedure } from '../trpc';

export const coursesRouter = router({
    getAllCourses: publicProcedure.query(async ({ ctx }) => {
        const course = await ctx.prisma.course.findMany();

        return course;
    }),
    createCourses: adminProcedure
        .input(
            z.object({
                code: z.string(),   
                title: z.string(),
                credit: z.string(),
                status: z.string(),
                department: z.string(),                
            })
        )
        .mutation(async ({ input, ctx }) => {
            const course = await ctx.prisma.course.create({
                data: {
                    code: input.code,
                    title: input.title,
                    credit: input.credit,
                    status: input.status,
                    department: input.department,
                },
            });

            return course;
        }),
    updateCourses: adminProcedure
        .input(
            z.object({
                code: z.string(),
                title: z.string(),
                credit: z.string(),
                status: z.string(),
                department: z.string(), 
            })
        )
        .mutation(async ({ input, ctx }) => {
            const course = await ctx.prisma.course.update({
                where: {
                    code: input.code,
                },
                data: {
                    title: input.title,
                    credit: input.credit,
                    status: input.status,
                    department: input.department,
                },
            });

            return course;
        }),
    deleteCourses: adminProcedure
        .input(
            z.object({
                code: z.string(),
            })
        )
        .mutation(async ({ input, ctx }) => {
            await ctx.prisma.course.delete({
                where: {
                    code: input.code,
                },
            });

            return `done`;
        }),
});
