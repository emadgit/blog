import { protectedProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const deleteBlogPost = protectedProcedure
  .input(z.object({ postId: z.string() }))
  .mutation(async ({ ctx, input }) => {
    const { prisma, session } = ctx;

    const post = await prisma.post.findFirst({
      where: {
        authorId: session.user.id,
        id: input.postId,
      },
    });

    if (post) {
      const postCategory = await prisma.postCategory.findFirst({
        where: {
          postId: post.id,
        },
      });

      if (postCategory) {
        await prisma.postCategory.delete({
          where: {
            id: postCategory.id,
          },
        });
      }

      await prisma.post.delete({
        where: {
          id: input.postId,
        },
      });
      return "Blog post deleted.";
    }
    return "This post can not be deleted";
  });
