import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/router';
import { useEffect } from "react";

import { api } from "~/utils/api";
import PageHead from "../../components/PageHead";

const Home: NextPage = () => {
  const router = useRouter();
  const { data: sessionData } = useSession();

  useEffect(()=> {
    const redirectUser = async () => {
      if (sessionData) {
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
    <>
    {!sessionData &&
      <>
      <PageHead />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#004208] to-[#000000]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            <span className="text-[hsl(0, 0%, 0%)]">Midal</span> Blog
          </h1>
          <div className="flex flex-col items-center gap-2">
            <AuthShowcase />
          </div>
        </div>
      </main>
      </>
      }
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
