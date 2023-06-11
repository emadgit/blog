import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/router';
import { useEffect } from "react";

import BlogNavbar from "../../../components/BlogNavbar";
import PageHead from "../../../components/PageHead";
import CreateCategory from '../../../components/CreateCategory';
const NewPost: NextPage = () => {
  const router = useRouter();
  const { data: sessionData } = useSession();

  useEffect(()=> {
    const redirectUser = async () => {
      if (sessionData) {
        await router.replace('/blog-dashboard/new-category');
      } else {
        await router.replace('/login');
      }
    };
  
    redirectUser().catch((error) => {
      console.error(error);
    });
  },[sessionData]);
  
  return (
    sessionData &&  <>
      <PageHead />
      <main className="h-screen w-screen overflow-auto bg-gradient-to-b from-[#ffffff] to-[#ffffff]">
        <div className="flex h-full flex-col-reverse bg-gray-300 sm:h-full sm:flex-row">
          <BlogNavbar />
          <div className="flex flex-1 flex-col bg-white h-fit sm:h-full overflow-auto">
           <CreateCategory />
          </div>
        </div>
      </main>
    </>
  );
};

export default NewPost;
