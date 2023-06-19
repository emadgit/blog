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
  editBlogPost,
  findBlogPost,
} from "./procedures";

export const blogRouter = createTRPCRouter({
  createBlogPost,
  deleteBlogPost,
  listBlogPosts,
  listBlogPostCategories,
  listBlogPostsPublic,
  createBlogPostCategory,
  deleteBlogPostCategory,
  updateBlogIdentifier,
  editBlogPost,
  findBlogPost,
});
