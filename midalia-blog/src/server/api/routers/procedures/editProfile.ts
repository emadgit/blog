import { protectedProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const editProfile = protectedProcedure
  .input(
    z.object({
      firstName: z.optional(z.string()),
      lastName: z.optional(z.string()),
      jobTitle: z.optional(z.string()),
      bio: z.optional(z.string()),
      contactContent: z.optional(z.string()),
      githubProfile: z.optional(z.string()),
      linkedinProfile: z.optional(z.string()),
      stackoverflowProfile: z.optional(z.string()),
      mediumProfile: z.optional(z.string()),
      twitterProfile: z.optional(z.string()),
      skills: z.optional(z.string()),
    })
  )
  .mutation(async ({ ctx, input }) => {
    if (
      !input.firstName &&
      !input.lastName &&
      !input.jobTitle &&
      !input.bio &&
      !input.contactContent &&
      !input.githubProfile &&
      !input.linkedinProfile &&
      !input.stackoverflowProfile &&
      !input.mediumProfile &&
      !input.twitterProfile &&
      !input.skills
    ) {
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

    const profile = await prisma.profile.upsert({
      where: {
        ownerId: user.id,
      },
      update: {
        firstName: input.firstName,
        lastName: input.lastName,
        jobTitle: input.jobTitle,
        bio: input.bio,
        contactContent: input.contactContent,
        githubProfile: input.githubProfile,
        stackoverflowProfile: input.stackoverflowProfile,
        linkedinProfile: input.linkedinProfile,
        mediumProfile: input.mediumProfile,
        twitterProfile: input.twitterProfile,
        skills: input.skills,
      },
      create: {
        ownerId: user.id,
        firstName: input.firstName,
        lastName: input.lastName,
        jobTitle: input.jobTitle,
        bio: input.bio,
        contactContent: input.contactContent,
        githubProfile: input.githubProfile,
        stackoverflowProfile: input.stackoverflowProfile,
        linkedinProfile: input.linkedinProfile,
        mediumProfile: input.mediumProfile,
        twitterProfile: input.twitterProfile,
        skills: input.skills,
      },
    });

    return profile;
  });
