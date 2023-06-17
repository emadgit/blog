import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { customAlphabet } from "nanoid";
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

      await prisma.post.create({
        data: {
          title: input.postTitle,
          content: input.post,
          categories: {
            connect: {
              id: category.id,
            },
          },
          published: true,
          authorId: session.user.id,
        },
      });

      return { msg: "New Post is created.", status: "ok" };
    }),
  listBlogPosts: protectedProcedure.query(({ ctx }) => {
    const { prisma, session } = ctx;
    const blogPosts = prisma.post.findMany({
      where: {
        authorId: session.user.id,
      },
    });

    return blogPosts;
  }),
  listBlogPostCategories: protectedProcedure.query(({ ctx }) => {
    const { prisma, session } = ctx;

    const blogPostCategories = prisma.category.findMany({
      where: {
        authorId: session.user.id,
      },
    });

    return blogPostCategories;
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
    updateBlogIdentifier: protectedProcedure.input(z.object( { blogIdentifer: z.optional(z.string())})).mutation(async({ctx, input}) => {
        const { prisma, session } = ctx;
        const user = await prisma.user.findFirst({
            where: {
              id: session.user.id
            }
          });
          if(!user) {
            return;
          }

          if(!input.blogIdentifer) {
            if(!user?.blogIdentifer) {
                const nanoid = customAlphabet('1234567890abcdefghizy', 6);
                const blogIdentiferPostFix = nanoid();
                const emailUserName = user.email?.substring(0, user.email?.indexOf("@"));
                if(blogIdentiferPostFix && typeof blogIdentiferPostFix === "string") {
                  await prisma.user.update({
                    where: {
                      id: user.id
                    },
                    data: {
                      blogIdentifer: emailUserName ? emailUserName + blogIdentiferPostFix : blogIdentiferPostFix
                    }
                  })
                  return "Default Blog Identifier is set"
                }
                return "Something went wrong while setting the default blog identifer"
              } else {
                return "Alles ist gut, noting to do here ;)"
              }
          } else {

            const isBlogIdentiferUsed = await prisma.user.findFirst({
                where: {
                  blogIdentifer: input.blogIdentifer
                }
              });

              if(isBlogIdentiferUsed) {
                return "Can't use this blog identifer"
              }

              await prisma.user.update({
                where: {
                  id: user.id
                },
                data: {
                  blogIdentifer: input.blogIdentifer
                }
              })

              return "Blog identifer is updated"
          }
          
        
    })
});
