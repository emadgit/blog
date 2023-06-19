import { publicProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { BlogPost } from "../../../../utils/types";

export const listBlogPostsPublic = publicProcedure
  .input(z.object({ hostName: z.string() }))
  .query(async ({ ctx, input }) => {
    const { prisma } = ctx;
    const userByBlogIdentifer = await prisma.user.findFirst({
      where: {
        blogIdentifer: input.hostName,
      },
    });
    if (!userByBlogIdentifer) {
      return [];
    }
    const blogPosts = await prisma.post.findMany({
      where: {
        authorId: userByBlogIdentifer.id,
      },
    });

    const blogPostsResult: BlogPost[] = [];

    for await (const blogPost of blogPosts) {
      const postCategory = await prisma.postCategory.findFirst({
        where: { postId: blogPost.id },
      });

      const category = await prisma.category.findFirst({
        where: { id: postCategory?.categoryId },
      });

      if (category) {
        blogPostsResult.push({ ...blogPost, category: category.name });
      }
    }

    return blogPostsResult;
  });
