import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'

import BlogNavbar from "../../../components/BlogNavbar";
import PageHead from "../../../components/PageHead";
import EditPostComponent from "../../../components/EditPost";

const EditPost: NextPage = () => {
  const router = useRouter();
  const { data: sessionData } = useSession();
  const [postId, setPostId] = useState<string>("");
  const searchParams = useSearchParams()

  useEffect(()=> {
    const redirectUser = async () => {
      const id = searchParams.get("id");
      if(id) { 
        setPostId(id);
      }
      if (!sessionData) {
        await router.replace('/login');
      }
    };
  
    redirectUser().then().catch((error) => {
      console.error(error);
    });
  },[sessionData, router]);
  
  return (
    sessionData &&  <>
      <PageHead />
      <main className="h-screen w-screen overflow-auto bg-gradient-to-b from-[#ffffff] to-[#ffffff]">
        <div className="flex h-full flex-col-reverse bg-gray-300 sm:h-full sm:flex-row">
          <BlogNavbar />
          <div className="flex flex-1 flex-col bg-white h-fit sm:h-full overflow-auto w-full">
            { postId && <EditPostComponent postId={postId} /> }
          </div>
        </div>
      </main>
    </>
  );
};

export default EditPost;
