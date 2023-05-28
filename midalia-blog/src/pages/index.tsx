import { type NextPage } from "next";
import Image from "next/image";
import Link from 'next/link';

import PageHead from "../components/PageHead";

const Home: NextPage = () => {  
  return (
    <>
      <PageHead />
      <main className="h-screen w-screen overflow-auto bg-gradient-to-b from-[#393864] to-[#cf6565]">
          <div
            className="h-fit sm:h-full"
            style={{ marginTop: "4px" }}
          >
            <div className="flex w-full flex-col content-center items-center text-white">
              <div className="bg-slate-0 flex w-3/4 content-center items-center">
                <div className="justify-left mt-24 flex w-full flex-col">
                  <h1 className="w-fit flex-1 text-4xl font-bold">About</h1>
                  <div className="flex w-full flex-1  flex-row justify-end gap-x-2 text-right">
                    <Link className="text-l border-b-4 font-bold" href="/">
                      About
                    </Link>
                    <Link className="text-l font-bold text-slate-100/70" href="/posts">
                      Posts
                    </Link>
                    <Link className="text-l font-bold text-slate-100/70" href="/projects">
                      Projects
                    </Link>
                  </div>
                  <div className="flex w-full flex-1 flex-col justify-center">
                    <Image
                      src="/emad.png"
                      className="h-32 w-32 rounded-full"
                      alt="Emad Dehnavi"
                      width={100}
                      height={100}
                    />
                  </div>
                  <p className="mt-8 flex w-full flex-1 text-center sm:text-justify text-xl">
                    Hi there! I&apos;m Emad, a Senior Software Engineer with a
                    passion for Web & Mobile developments with collaboration,
                    pair programming, and teaching. Here are some of the
                    technologies I&apos;m currently working with:
                  </p>
                  <div className="mt-8 flex flex-row justify-center gap-2">
                    <div className="flex-1">
                      <Image
                        src="/assets/typescript.svg"
                        className="h-10 w-10"
                        alt="TypeScript"
                        title="TypeScript"
                        width={2}
                        height={2}
                      />
                    </div>
                    <div className="flex-1">
                      <Image
                        src="/assets/nextjs.svg"
                        className="h-10 w-10"
                        alt="Next.js"
                        title="Next.js"
                        width={2}
                        height={2}
                      />
                    </div>
                    <div className="flex-1">
                      <Image
                        src="/assets/javascript.svg"
                        className="h-10 w-10"
                        alt="Javascript"
                        title="Javascript"
                        width={2}
                        height={2}
                      />
                    </div>
                    <div className="flex-1">
                      <Image
                        src="/assets/auth0.svg"
                        className="h-10 w-10"
                        alt="Auth0 - authentication and authorization services"
                        title="Auth0 - authentication and authorization services"
                        width={2}
                        height={2}
                      />
                    </div>
                    <div className="flex-1">
                      <Image
                        src="/assets/graphql.svg"
                        className="h-10 w-10"
                        alt="Graphql API"
                        title="Graphql API"
                        width={2}
                        height={2}
                      />
                    </div>
                    <div className="flex-1">
                      <Image
                        src="/assets/prisma.svg"
                        className="h-10 w-10"
                        alt="Prisma ORM"
                        title="Prisma ORM"
                        width={2}
                        height={2}
                      />
                    </div>
                    <div className="flex-1">
                      <Image
                        src="/assets/tailwindcss.svg"
                        className="h-10 w-10"
                        alt="Tailwind CSS"
                        title="Tailwind CSS"
                        width={2}
                        height={2}
                      />
                    </div>
                    <div className="flex-1">
                      <Image
                        src="/assets/react.svg"
                        className="h-10 w-10"
                        alt="React"
                        title="React"
                        width={2}
                        height={2}
                      />
                    </div>
                    <div className="flex-1">
                      <Image
                        src="/assets/aws.svg"
                        className="h-10 w-10"
                        alt="AWS services"
                        title="AWS services"
                        width={2}
                        height={2}
                      />
                    </div>
                  </div>
                  <p className="mt-8 flex w-full flex-1 text-center sm:text-justify text-xl">
                    I&apos;m excited to connect with you and discuss how we can build
                    the future together. Feel free to reach out :)
                  </p>
                  <h1 className="mt-8 w-fit flex-1 text-4xl font-bold">
                    Socials
                  </h1>
                  <div className="justify-left mt-8 flex flex-row gap-2">
                    <a
                      href="https://www.linkedin.com/in/emad-dehnavi-75454312b/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src="/assets/linkedin.svg"
                        className="h-10 w-10"
                        alt="Linkedin"
                        title="Linkedin"
                        width={2}
                        height={2}
                      />
                    </a>
                    <a
                      href="https://github.com/emadgit"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src="/assets/github.svg"
                        className="h-10 w-10"
                        alt="Github"
                        title="Github"
                        width={2}
                        height={2}
                      />
                    </a>
                    <a
                      href="https://emaddehnavi.medium.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src="/assets/medium.svg"
                        className="h-10 w-10"
                        alt="Medium"
                        title="Medium"
                        width={2}
                        height={2}
                      />
                    </a>
                    <a
                      href="https://stackoverflow.com/users/6876418/emad-dehnavi"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src="/assets/stack.svg"
                        className="h-10 w-10"
                        alt="Stack Overflow"
                        title="Stack Overflow"
                        width={2}
                        height={2}
                      />
                    </a>
                  </div>
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

export default Home;
