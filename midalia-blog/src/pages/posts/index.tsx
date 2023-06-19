import { type NextPage } from "next";
import Link from "next/link";
import { Chakra_Petch } from 'next/font/google'

import PageHead from "../../components/PageHead";
import { api } from "../../utils/api";
import { format } from 'date-fns'
import ReactHtmlParser from "react-html-parser";

let hostName = "";
if (typeof window !== "undefined") {
  hostName = window.location.hostname;
}

const ChakraPatch = Chakra_Petch({
  subsets: ['latin'],
  variable: '--font-chakra-patch',
  weight: "600"
})

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
                    <div key={post.id} className="flex flex-col w-full bg-slate-50 mt-4 text-black p-8 shadow-md shadow-black">
                      <div className={`text-3xl ${ChakraPatch.variable} font-sans font-bold`}>{post.title}</div>
                      <div className={`text-l ${ChakraPatch.variable} font-sans font-bold text-slate-600`}>{format(post.updatedAt, "PP")}</div>
                      <div className="`text-l ${ChakraPatch.variable} font-sans font-bold text-slate-600 pt-2 pb-2">{ReactHtmlParser(post.content)}</div>
                      <div className="`flex flex-1 text-sm ${ChakraPatch.variable} font-sans font-bold pt-2 pb-2 bg-sky-100 w-fit p-2 rounded-xl" style={{color: "#37afc0"}}>{post.category}</div>

                    </div>
                    
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
