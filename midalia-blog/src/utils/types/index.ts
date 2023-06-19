import { Post } from "@prisma/client";

export interface BlogPost extends Post {
  category: string;
}
