import { type NextPage } from "next";
import Head from "next/head";
import Link from 'next/link';

const Projects: NextPage = () => {  
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
      <main className="h-screen w-screen overflow-auto">
          <div
            className="bg-gradient-to-b from-[#393864] to-[#cf6565]  sm:h-fit md:h-full lg:h-full"
            style={{ marginTop: "4px" }}
          >
            <div className="flex w-full flex-col content-center items-center text-white">
              <div className="bg-slate-0 flex w-3/4 content-center items-center">
                <div className="justify-left mt-24 flex w-full flex-col">
                  <h1 className="w-fit flex-1 text-4xl font-bold">Projects</h1>
                  <div className="flex w-full flex-1  flex-row justify-end gap-x-2 text-right">
                    <Link href="/" className="text-l font-bold text-slate-100/70">
                      About
                    </Link>
                    <Link href="/posts" className="text-l font-bold text-slate-100/70">
                      Posts
                    </Link>
                    <Link href="/projects" className="text-l font-bold border-b-4">
                      Projects
                    </Link>
                  </div>
                 
                  <p className="mt-8 flex w-full flex-1 break-all text-justify text-xl">
                    Coming soon!
                  </p>
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

export default Projects;
