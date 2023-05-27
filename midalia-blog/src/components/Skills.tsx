import { useEffect, useState } from "react";

interface SkillsProps {
    skills: string[]
}

export const Skills: React.FC<SkillsProps> = ({
    skills
}) => {
    const [currentItemIndex, setCurrentItemIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentItemIndex((prevIndex) => (prevIndex + 1) % skills.length);
        }, 2000);
    
        return () => clearInterval(interval);
      }, [skills.length]);
    return (
        <>
        <div className="flex h-screen flex-row items-center justify-center">
              <div
                className="mb-16 flex min-w-max rounded-lg rounded-r-none bg-slate-800 p-4 text-slate-100 shadow"
                style={{ marginTop: "4px" }}
              >
                <h3 className="text-lg font-bold">Emad Dehnavi</h3>
              </div>

              <div className="flex w-24 min-w-max">
                <ul className="relative list-none">
                  {skills.map((item, index) => (
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
        </>
    )
}