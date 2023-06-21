import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { ParsedUrlQuery } from "querystring";
import BlogNavbar from "../../../components/BlogNavbar";
import PageHead from "../../../components/PageHead";

interface FeedbackProps extends ParsedUrlQuery  { 
    feedback: string;
}

const Feedback: NextPage = () => {
  const router = useRouter();
  const { data: sessionData } = useSession();
  const [feedback, setFeedback] = useState<string>("");
  useEffect(()=> {
    const redirectUser = async () => {
      if (sessionData) {
        await router.replace('/blog-dashboard/feedback');
        const query = router.query as FeedbackProps;
        if(query){
            setFeedback(query.feedback)
        }
      } else {
        await router.replace('/login');
      }
    };
  
    redirectUser().catch((error) => {
      console.error(error);
    });
  },[sessionData, router]);
  
  return (
    sessionData &&  <>
      <PageHead />
      <main className="h-screen w-screen overflow-auto bg-gradient-to-b from-[#ffffff] to-[#ffffff]">
        <div className="flex h-full flex-col-reverse bg-gray-300 sm:h-full sm:flex-row">
          <BlogNavbar />
          <div className="flex flex-1 flex-col bg-white h-fit sm:h-full w-full justify-center items-center">
          
            <div className="flex bg-green-200 w-fit p-4">
                {feedback || "O Captain! my Captain! our fearful trip is done!" }
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Feedback;
