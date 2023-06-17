import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/router';
import { useEffect } from "react";

import PageHead from "../../components/PageHead";
import LatestPosts from "../../components/LatestPosts";
import BlogNavbar from "../../components/BlogNavbar";
import { api } from "../../utils/api";

const BlogDashboard: NextPage = () => {
  const router = useRouter();
  const { data: sessionData } = useSession();
  const mutation = api.blog.updateBlogIdentifier.useMutation();

  useEffect(()=> {
    const redirectUser = async () => {
      if (sessionData) {
        if (typeof window !== 'undefined') {
          const hostname = window.location.hostname;
          mutation.mutate({urlPath: hostname}); // to hanlde blog identifer
       }
       
        await router.replace('/blog-dashboard');
      } else {
        await router.replace('/login');
      }
    };
  
    redirectUser().catch((error) => {
      console.error(error);
    });
  },[sessionData]);

  return (
    sessionData && <>
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
