import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

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
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItemIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [items.length]);
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
        <div className="flex h-screen flex-row items-center justify-center">
          <div
            className="mb-16 flex min-w-max rounded-none bg-slate-800 p-4 text-slate-100 shadow"
            style={{ marginTop: "4px" }}
          >
            <h3 className="text-lg font-bold">Emad Dehnavi</h3>
          </div>

          <div className="flex w-24 min-w-max">
            <ul className="relative list-none">
              {items.map((item, index) => (
                <li
                  key={index}
                  className={`absolute w-full text-center transition-all duration-500 ${
                    index === currentItemIndex
                      ? "top-0 opacity-100"
                      : "opacity-0"
                  }`}
                  style={{
                    transform: `translateY(${
                      index === currentItemIndex ? "-100%" : "100%"
                    })`,
                  }}
                >
                  <div className="flex w-fit min-w-max rounded-lg rounded-l-none bg-slate-700 p-4 text-slate-100 shadow">
                    <h3 className="text-lg font-bold"> {item}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
