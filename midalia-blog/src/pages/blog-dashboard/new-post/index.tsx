import { type NextPage } from "next";
import BlogNavbar from "../../../components/BlogNavbar";

import PageHead from "../../../components/PageHead";
import CreatePost from "../../../components/CreatePost";

const NewPost: NextPage = () => {
  return (
    <>
      <PageHead />
      <main className="h-screen w-screen overflow-auto bg-gradient-to-b from-[#ffffff] to-[#ffffff]">
        <div className="flex h-full flex-col-reverse bg-gray-300 sm:h-full sm:flex-row">
          <BlogNavbar />
          <div className="flex flex-1 flex-col bg-white h-fit sm:h-full">
           <CreatePost />
          </div>
        </div>
      </main>
    </>
  );
};

export default NewPost;