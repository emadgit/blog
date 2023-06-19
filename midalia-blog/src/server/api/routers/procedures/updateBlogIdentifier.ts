import { protectedProcedure } from "~/server/api/trpc";
import { z } from "zod";
import type { AnyProcedure } from "@trpc/server";

export const updateBlogIdentifier: AnyProcedure = protectedProcedure
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
  });
