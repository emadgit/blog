import { api } from "../utils/api";
import { FaEdit, FaTrash } from "react-icons/fa";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Post } from "@prisma/client";

export const LatestPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const {
    data,
    refetch,
    isLoading: isPostsLoading,
  } = api.blog.listBlogPosts.useQuery();

  const { mutate, isLoading: isPostDeleteLoading } =
    api.blog.deleteBlogPost.useMutation();
  const fetchPosts = async () => {
      const { data: refetchedData } = await refetch();
      if (refetchedData) {
        setPosts(refetchedData);
      }
  };

  useEffect(()=>{
    if(data){
      setPosts(data)
    }
  },[data])

  useEffect(() => {
    fetchPosts()
      .then()
      .catch((e) => console.error(e));
  }, [isPostDeleteLoading, isPostsLoading]);

  const handleDeletePost = (id: string) => {
    mutate({ postId: id });
    fetchPosts()
      .then()
      .catch((e) => console.error(e));
  };

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
          <div className="flex-1">Edit</div>
          <div className="flex-1">Delete</div>
        </div>
        {posts?.map((post) => (
          <div
            key={post.id}
            className="ml-4 mr-4 flex flex-row justify-center bg-white p-2 text-center"
          >
            <div className="flex-1">{post.title}</div>
            <div className="flex-1">{format(post.updatedAt, "PP")}</div>
            <div className="flex-1">0</div>
            <div className="flex flex-1 justify-center">
              <FaEdit />
            </div>
            <div className="flex flex-1 justify-center">
              <FaTrash onClick={() => handleDeletePost(post.id)} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LatestPosts;
