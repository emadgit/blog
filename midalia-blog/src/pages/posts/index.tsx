import { type NextPage } from "next";
import Link from "next/link";

import PageHead from "../../components/PageHead";
import { api } from "../../utils/api";

let hostName = "";
if (typeof window !== "undefined") {
  hostName = window.location.hostname;
}

const Posts: NextPage = () => {
  const blogPosts = api.blog.listBlogPostsPublic.useQuery({ hostName });

  return (
    <>
      <PageHead />
      <main className="h-screen w-screen overflow-auto bg-gradient-to-b from-[#393864] to-[#cf6565]">
        <div className="h-full" style={{ marginTop: "4px" }}>
          <div className="flex w-full flex-col content-center items-center text-white">
            <div className="bg-slate-0 flex w-3/4 content-center items-center">
              <div className="justify-left mt-24 flex w-full flex-col">
                <h1 className="w-fit flex-1 text-4xl font-bold">Posts</h1>
                <div className="flex w-full flex-1  flex-row justify-end gap-x-2 text-right">
                  <Link href="/" className="text-l font-bold text-slate-100/70">
                    About
                  </Link>
                  <Link href="/posts" className="text-l border-b-4 font-bold">
                    Posts
                  </Link>
                  <Link
                    href="/projects"
                    className="text-l font-bold text-slate-100/70"
                  >
                    Projects
                  </Link>
                </div>

                <>
                  {blogPosts?.data?.map((post) => (
                    <div>{post.title}</div>
                  ))}
                </>
                {!blogPosts ||
                  (blogPosts?.data?.length === 0 && (
                    <p className="mt-8 flex w-full flex-1 text-center text-xl sm:text-justify">
                      There&apos;s no post yet, stay tuned!
                    </p>
                  ))}

                <h5 className="mb-2 mt-8 w-fit flex-1 text-xs font-bold">
                  2023 © Emad Dehnavi
                </h5>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Posts;
