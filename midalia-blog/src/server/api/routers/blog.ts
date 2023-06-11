import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";
import { z } from "zod";

export const blogRouter = createTRPCRouter({
  createBlogPost: protectedProcedure.input(z.object({ postTitle: z.string(), post: z.string(), category: z.optional(z.string()) })).mutation(async ({ctx, input}) => {
    const { prisma, session } = ctx;

    let category = await prisma.category.findFirst({
        where: {
            name: input.category ? input.category : "Uncategorized"
        }
    });
    // If there is no category yet, it means it's the first blog post
    // So we create a category, set to Uncategorized if user didn't pick one.
    if(!category) {
        category = await prisma.category.create({
            data: {
                name: input.category ? input.category : "Uncategorized",
                authorId: session.user.id
            }
        })
    }

    await prisma.post.create({
        data: {
            title: input.postTitle,
            content: input.post,
            categories: {
                connect: {
                    id: category.id
                },
            },
            published: true,
            authorId: session.user.id
        }
    });

    return { msg: "New Post is created.", status: "ok"}
  }),
  listBlogPosts: protectedProcedure.query(({ ctx }) => {
    const { prisma, session } = ctx;
    const blogPosts = prisma.post.findMany({
        where: {
            authorId: session.user.id
        }
    });

    return blogPosts;
  })
});
