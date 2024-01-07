import { type NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import PageHead from "../../components/PageHead";

const Projects: NextPage = () => {
  return (
    <>
      <PageHead />
      <main className="h-screen w-screen overflow-auto bg-gradient-to-b from-[#393864] to-[#cf6565] ">
        <div className="h-full" style={{ marginTop: "4px" }}>
          <div className="flex w-full flex-col content-center items-center text-white">
            <div className="bg-slate-0 flex w-3/4 content-center items-center">
              <div className="justify-left mt-24 flex w-full flex-col">
                <h1 className="w-fit flex-1 text-4xl font-bold">Projects</h1>
                <div className="flex w-full flex-1  flex-row justify-end gap-x-2 text-right">
                  <Link href="/" className="text-l font-bold text-slate-100/70">
                    About
                  </Link>
                  <Link
                    href="/posts"
                    className="text-l font-bold text-slate-100/70"
                  >
                    Posts
                  </Link>
                  <Link
                    href="/projects"
                    className="text-l border-b-4 font-bold"
                  >
                    Projects
                  </Link>
                </div>


                <div className="mx-auto max-w-sm md:max-w-2xl overflow-hidden pt-4 shadow-lg">
                  <img
                    className="w-full"
                    src={"/projects/QuizzyWiz.png"}
                    alt={"Quizzy Wiz"}
                  />
                  <div className="px-6 py-4">
                    <div className="mb-2 text-xl font-bold">
                      Quizzy Wiz
                    </div>
                    <div className="text-md mb-2 mt-2 font-normal">
                    The ultimate trivia quiz app that challenges and delights knowledge seekers of all kinds! With an array of exciting categories including History, Sport, Music, Movies, and the World, Quizzy Wiz is your passport to an enthralling world of facts and fun.
                    </div>
                    <div className="mb-4 flex">
                      <a
                        href={"https://quizzy-wiz.vercel.app/"}
                        className="mr-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Web
                      </a>
                      <a
                        href={"https://play.google.com/store/apps/details?id=com.midalia.QuizzyWiz"}
                        className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Android
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mx-auto max-w-sm md:max-w-2xl overflow-hidden pt-4 shadow-lg">
                  <img
                    className="w-full"
                    src={"/projects/food-fact-finder.png"}
                    alt={"Food Fact Finder"}
                  />
                  <div className="px-6 py-4">
                    <div className="mb-2 text-xl font-bold">
                      Food Fact Finder
                    </div>
                    <div className="text-md mb-2 mt-2 font-normal">
                      Cultivate a healthier lifestyle with our app! Instantly
                      access comprehensive nutrition facts for a vast array of
                      foods, empowering you to make informed and nutritious
                      choices effortlessly.
                    </div>
                    <div className="mb-4 flex">
                      <a
                        href={"https://midalia-nutrient.vercel.app/"}
                        className="mr-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Web
                      </a>
                      <a
                        href={"https://play.google.com/store/apps/details?id=com.midalia.FoodFactsFinder"}
                        className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Android
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mx-auto max-w-sm md:max-w-2xl overflow-hidden pt-4 shadow-lg">
                  <img
                    className="w-full"
                    src={"/projects/funny-jokes.png"}
                    alt={"Food Fact Finder"}
                  />
                  <div className="px-6 py-4">
                    <div className="mb-2 text-xl font-bold">
                      Funny English jokes
                    </div>
                    <div className="text-md mb-2 mt-2 font-normal">
                    Funny English Jokes to laugh is here, Get ready for a rib-tickling experience with our brand-new app! Unleash a world of humor at your fingertips as we deliver fresh and hilarious jokes daily. Whether you're in need of a quick pick-me-up or seeking a mood boost, we will leave you grinning from ear to ear. Dive into a laughter-filled journey with our carefully curated collection of witty quips, puns, and one-liners. Get ready turn every moment into a joyous celebration of laughter!
                    </div>
                    <div className="mb-4 flex">
                      <a
                        href={"https://midalia-joker.vercel.app/"}
                        className="mr-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Web
                      </a>
                      <a
                        href={"https://play.google.com/store/apps/details?id=com.midalia.wittyjokebox"}
                        className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Android
                      </a>
                    </div>
                  </div>
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

export default Projects;
