import { type NextPage } from "next";
import { MdOutlineAddBox } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import Head from "next/head";

import PageHead from "../../components/PageHead";
import LatestPosts from "../../components/LatestPosts";
import BlogNavbar from "../../components/BlogNavbar";

const BlogDashboard: NextPage = () => {
  return (
    <>
      <PageHead />
      <main className="h-screen w-screen overflow-auto bg-gradient-to-b from-[#ffffff] to-[#ffffff]">
        <div className="flex h-full flex-col-reverse bg-gray-300 sm:h-full sm:flex-row">
          <BlogNavbar />
          <div className="flex flex-1 flex-col bg-white h-fit sm:h-full">
           <LatestPosts />
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogDashboard;
