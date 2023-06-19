import { protectedProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const editBlogPost = protectedProcedure
  .input(
    z.object({
      postId: z.string(),
      postTitle: z.optional(z.string()),
      post: z.optional(z.string()),
      category: z.optional(z.string()),
    })
  )
  .mutation(async ({ ctx, input }) => {
    if (!input.category && !input.post && !input.postTitle) {
      return "Nothing to update";
    }

    const { prisma, session } = ctx;
    const user = await prisma.user.findFirst({
      where: {
        id: session.user.id,
      },
    });

    if (!user) {
      return "Forbidden!";
    }

    if (input.post || input.postTitle) {
      await prisma.post.update({
        where: {
          id: input.postId,
        },
        data: {
          title: input.postTitle,
          content: input.post,
        },
      });
    }

    if (input.category) {
      const category = await prisma.category.findFirst({
        where: {
          name: input.category,
        },
      });

      if (!category) {
        return "Selected category does not exist!";
      }

      const postCategory = await prisma.postCategory.findFirst({
        where: {
          postId: input.postId,
        },
      });

      await prisma.postCategory.update({
        where: {
          id: postCategory?.id,
        },
        data: {
          categoryId: category.id,
        },
      });
    }
  });
