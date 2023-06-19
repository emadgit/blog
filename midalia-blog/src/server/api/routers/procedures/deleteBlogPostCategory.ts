import { protectedProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const deleteBlogPostCategory = protectedProcedure
  .input(z.object({ categoryid: z.string() }))
  .mutation(async ({ ctx, input }) => {
    const { prisma, session } = ctx;

    const category = await prisma.category.findFirst({
      where: {
        id: input.categoryid,
        authorId: session.user.id,
      },
    });

    if (category) {
      await prisma.category.delete({
        where: {
          id: input.categoryid,
        },
      });
      return "Category deleted.";
    }

    return "Category can not be deleted.";
  });
