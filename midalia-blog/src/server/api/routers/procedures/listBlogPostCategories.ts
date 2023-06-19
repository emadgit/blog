import { protectedProcedure } from "~/server/api/trpc";
import type { AnyProcedure } from "@trpc/server";

export const listBlogPostCategories: AnyProcedure = protectedProcedure.query(
  async ({ ctx }) => {
    const { prisma, session } = ctx;

    const blogPostCategories = await prisma.category.findMany({
      where: {
        authorId: session.user.id,
      },
    });

    return blogPostCategories;
  }
);
