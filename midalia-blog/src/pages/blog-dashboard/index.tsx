import { type NextPage } from "next";
import { MdOutlineAddBox } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import Head from "next/head";

const BlogDashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Emad Dehnavi - Blog Dashboard</title>
        <meta
          name="description"
          content="Emad Dehnavi - Senior Software Engineer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen w-screen overflow-auto bg-gradient-to-b from-[#ffffff] to-[#ffffff]">
        <div className="flex h-full flex-col-reverse bg-gray-300 sm:h-full sm:flex-row">
          <div className="turncate flex h-fit flex-1 flex-col gap-2 bg-neutral-900 p-4 text-slate-200 sm:h-full sm:w-64 sm:flex-initial">
            <button className="w-full rounded border-2 bg-transparent py-2 font-bold text-white hover:bg-neutral-700">
              <span className="flex flex-row justify-center gap-2">
                <div className="flex flex-row">
                  <MdOutlineAddBox className="text-2xl" />
                </div>{" "}
                <div className="flex flex-row">New Post</div>
              </span>
            </button>
            <button className="w-full rounded bg-transparent py-2 font-bold text-white hover:bg-neutral-700">
              Posts History
            </button>
            <button className="w-full rounded bg-transparent py-2 font-bold text-white hover:bg-neutral-700">
              Categories
            </button>
            <button className="w-full rounded bg-transparent py-2 font-bold text-white hover:bg-neutral-700">
              Comments
            </button>
            <div className="flex h-fit flex-col-reverse bg-gray-300 sm:h-full sm:flex-row">
              <div className="turncate flex h-fit flex-1 flex-col gap-2 bg-neutral-900 text-slate-200 sm:h-full sm:w-64 sm:flex-initial sm:flex-col-reverse">
                <button className="w-full rounded bg-transparent py-2 font-bold text-white hover:bg-neutral-700">
                  Logout
                </button>
                <button className="w-full rounded border-2 bg-transparent py-2 font-bold text-white hover:bg-neutral-700">
                  <span className="flex flex-row justify-center gap-2">
                    <div className="flex flex-row">
                      <FaUserEdit className="text-2xl" />
                    </div>{" "}
                    <div className="flex flex-row">Edit Profile</div>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col bg-white h-fit sm:h-full">
            <div className="turncate m-8 flex h-fit flex-1 flex-col rounded bg-stone-100 pb-4 text-black sm:flex-initial">
              <div className="p-4 text-2xl">
                <h2>Latest posts</h2>
              </div>
              <div className="ml-4 mr-4 flex flex-row justify-center bg-slate-50 text-center">
                <div className="flex-1">Title</div>
                <div className="flex-1">Created at</div>
                <div className="flex-1">Comments</div>
              </div>
              <div className="ml-4 mr-4 flex flex-row justify-center bg-slate-100 text-center">
                <div className="flex-1">-</div>
                <div className="flex-1">-</div>
                <div className="flex-1">0</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogDashboard;
