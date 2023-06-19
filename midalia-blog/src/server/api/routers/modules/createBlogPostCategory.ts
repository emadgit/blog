import { protectedProcedure } from "~/server/api/trpc";
import type { AnyProcedure } from "@trpc/server";
import { z } from "zod";

export const createBlogPostCategory: AnyProcedure = protectedProcedure
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
