import { z } from 'zod';
import { router, publicProcedure } from '../trpc';
import Email from '../../utils/email';

export const contactRouter = router({
  sendMessage: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string(),
        subject: z.string(),
        message: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const email = new Email();

      await email.send(input.subject, input.message, input.name, input.email);

      return `success`;
    }),
});
