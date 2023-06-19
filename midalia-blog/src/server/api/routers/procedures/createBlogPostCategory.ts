import { protectedProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const createBlogPostCategory = protectedProcedure
  .input(z.object({ categoryName: z.string() }))
  .mutation(async ({ ctx, input }) => {
    const { prisma, session } = ctx;

    const newCategory = prisma.category.create({
      data: {
        name: input.categoryName,
        authorId: session.user.id,
      },
    });

    return newCategory;
  });
