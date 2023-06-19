import { createTRPCRouter } from "~/server/api/trpc";

import {
  createBlogPost,
  deleteBlogPost,
  listBlogPosts,
  listBlogPostCategories,
  listBlogPostsPublic,
  createBlogPostCategory,
  deleteBlogPostCategory,
  updateBlogIdentifier,
} from "./modules";

export const blogRouter = createTRPCRouter({
  createBlogPost,
  deleteBlogPost,
  listBlogPosts,
  listBlogPostCategories,
  listBlogPostsPublic,
  createBlogPostCategory,
  deleteBlogPostCategory,
  updateBlogIdentifier,
});
