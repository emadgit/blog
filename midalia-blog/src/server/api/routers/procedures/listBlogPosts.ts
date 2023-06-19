import { protectedProcedure } from "~/server/api/trpc";
import { BlogPost } from "../../../../utils/types";

export const listBlogPosts = protectedProcedure.query(async ({ ctx }) => {
  const { prisma, session } = ctx;
  const blogPosts = await prisma.post.findMany({
    where: {
      authorId: session.user.id,
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
