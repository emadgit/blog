import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Skills } from '../components/Skills'
const Home: NextPage = () => {
  const items = [
    "TypeScript",
    "Next.js",
    "tRPC",
    "GraphQL",
    "Prisma",
    "React",
    "React Native",
    "Tailwind CSS",
    "Node.js",
    "AWS",
    "Auth0",
    "NextAuth",
  ];
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
    };

    const handleTouchStart = () => {
      setIsScrolling(true);
    };

    window.addEventListener("click", handleScroll);
    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchstart", handleTouchStart);

    return () => {
      window.removeEventListener("click", handleScroll);
      window.removeEventListener("wheel", handleScroll);

      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);
  return (
    <>
      <Head>
        <title>Emad Dehnavi</title>
        <meta
          name="description"
          content="Emad Dehnavi - Senior Software Engineer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#000000] to-[#000000]">
        <>
          {!isScrolling ? <Skills skills={items} /> : <div
                className="mb-16 flex min-w-max rounded-none bg-slate-800 p-4 text-slate-100 shadow"
                style={{ marginTop: "4px" }}
              >
                <h3 className="text-lg font-bold">Alright alright alright... it coming soon!</h3>
              </div>}
        </>
      </main>
    </>
  );
};

export default Home;
