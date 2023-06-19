import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

import { Post, Category } from "@prisma/client";

interface BlogPost extends Post {
  category: string;
}

import { z } from "zod";
export const blogRouter = createTRPCRouter({
  createBlogPost: protectedProcedure
    .input(
      z.object({
        postTitle: z.string(),
        post: z.string(),
        category: z.optional(z.string()),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { prisma, session } = ctx;

      let category = await prisma.category.findFirst({
        where: {
          name: input.category ? input.category : "Uncategorized",
        },
      });
      // If there is no category yet, it means it's the first blog post
      // So we create a category, set to Uncategorized if user didn't pick one.
      if (!category) {
        category = await prisma.category.create({
          data: {
            name: input.category ? input.category : "Uncategorized",
            authorId: session.user.id,
          },
        });
      }

      const post = await prisma.post.create({
        data: {
          title: input.postTitle,
          content: input.post,
          postCategories: {},
          published: true,
          authorId: session.user.id,
        },
      });

      await prisma.postCategory.create({
        data: {
          categoryId: category.id,
          postId: post.id,
        },
      });

      return { msg: "New Post is created.", status: "ok" };
    }),
  deleteBlogPost: protectedProcedure
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
    }),
  listBlogPosts: protectedProcedure.query(async ({ ctx }) => {
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
  }),
  listBlogPostCategories: protectedProcedure.query(async ({ ctx }) => {
    const { prisma, session } = ctx;

    const blogPostCategories = await prisma.category.findMany({
      where: {
        authorId: session.user.id,
      },
    });

    return blogPostCategories;
  }),
  listBlogPostsPublic: publicProcedure
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
    }),
  createBlogPostCategory: protectedProcedure
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
    }),
  deleteBlogPostCategory: protectedProcedure
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
    }),
  updateBlogIdentifier: protectedProcedure
    .input(
      z.object({ blogIdentifer: z.optional(z.string()), urlPath: z.string() })
    )
    .mutation(async ({ ctx, input }) => {
      const { prisma, session } = ctx;
      const user = await prisma.user.findFirst({
        where: {
          id: session.user.id,
        },
      });
      if (!user) {
        return;
      }
      if (!input.blogIdentifer) {
        if (!user?.blogIdentifer) {
          await prisma.user.update({
            where: {
              id: user.id,
            },
            data: {
              blogIdentifer: input.urlPath,
            },
          });
          return "Default Blog Identifier is set";
        } else {
          return "Alles ist gut, noting to do here ;)";
        }
      } else {
        const isBlogIdentiferUsed = await prisma.user.findFirst({
          where: {
            blogIdentifer: input.blogIdentifer,
          },
        });

        if (isBlogIdentiferUsed) {
          return "Can't use this blog identifer";
        }

        await prisma.user.update({
          where: {
            id: user.id,
          },
          data: {
            blogIdentifer: input.blogIdentifer,
          },
        });

        return "Blog identifer is updated";
      }
    }),
});
