import { protectedProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { BlogPost } from "../../../../utils/types";

export const findBlogPost = protectedProcedure
  .input(z.object({ postId: z.string() }))
  .query(async ({ ctx, input }) => {
    const { prisma, session } = ctx;
    const blogPost = await prisma.post.findFirst({
      where: {
        authorId: session.user.id,
        id: input.postId,
      },
    });

    if (!blogPost) {
      return "blog post does not exits.";
    }

    const postCategory = await prisma.postCategory.findFirst({
      where: { postId: blogPost.id },
    });

    const category = await prisma.category.findFirst({
      where: { id: postCategory?.categoryId },
    });

    let blogPostWithCategory: BlogPost = {
      ...blogPost,
      category: "",
    };

    if (category) {
      blogPostWithCategory.category = category.name;
    }

    return blogPostWithCategory;
  });
