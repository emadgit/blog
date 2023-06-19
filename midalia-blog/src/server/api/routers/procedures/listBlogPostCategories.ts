import { protectedProcedure } from "~/server/api/trpc";

export const listBlogPostCategories = protectedProcedure.query(
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
