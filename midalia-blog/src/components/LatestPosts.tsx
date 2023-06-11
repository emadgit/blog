import { api } from "../utils/api";
import { useEffect } from "react";

export const LatestPosts: React.FC = () => {
  const blogPosts = api.blog.listBlogPosts.useQuery();

  return (
    <>
      <div className="turncate m-8 flex h-fit flex-1 flex-col rounded bg-stone-100 pb-4 text-black sm:flex-initial">
        <div className="p-4 text-2xl">
          <h2>Latest posts</h2>
        </div>
        <div className="ml-4 mr-4 flex flex-row justify-center border-b-2 border-black bg-white text-center">
          <div className="flex-1">Title</div>
          <div className="flex-1">Last update</div>
          <div className="flex-1">Comments</div>
        </div>
        {blogPosts?.data?.map((post) => (
          <div key={post.id} className="ml-4 mr-4 flex flex-row justify-center bg-white p-2 text-center">
            <div className="flex-1">{post.title}</div>
            <div className="flex-1">{post.updatedAt.toDateString()}</div>
            <div className="flex-1">0</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LatestPosts;
