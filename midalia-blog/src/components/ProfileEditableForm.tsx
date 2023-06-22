import { useState } from "react";

export const ProfileEditableForm: React.FC = () => {
  const [skillsInput, setSKillsInput] = useState<string>("");
  const [skills, setSkills] = useState<string[]>([]);
  const handleAddSkills = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
    const input = e.target.innerText;
    setSKillsInput(input);
  };

  const handleSkillSepration = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.innerText = "";
    setSkills(skillsInput.split(","));
  };

  return (
    <>
      <div className="turncate m-8 flex h-fit flex-1 flex-col rounded bg-stone-100 pb-4 text-black sm:flex-initial">
        <div className="p-4 text-2xl">
          <h2>Profile</h2>
        </div>
        <div className="flex flex-col items-center justify-center sm:flex-row">
          <div className="flex w-full flex-col p-4">
            <div className="flex text-slate-700">
              {" "}
              <label>First Name</label>
            </div>

            <input className="w-full p-4" />
          </div>
          <div className="flex w-full flex-col p-4">
            <div className="flex text-slate-700">
              {" "}
              <label>Last Name</label>
            </div>

            <input className="w-full p-4" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center sm:flex-row">
          <div className="flex w-full flex-col p-4">
            <div className="flex text-slate-700">
              {" "}
              <label>Add your skills, seperete them with (,) comma.</label>
            </div>
            <div
              onInput={handleAddSkills}
              onBlur={handleSkillSepration}
              className="content w-full bg-white p-4"
              placeholder="Add your skills, seperete them with (,) comma."
              contentEditable={true}
            >
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="ml-2 rounded-md bg-neutral-200 p-2"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex w-full flex-col p-4">
            <div className="flex text-slate-700">
              {" "}
              <label>Job title</label>
            </div>
            <input className="w-full p-4" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center sm:flex-row">
          <div className="flex w-full flex-col p-4">
            <div className="flex text-slate-700">
              {" "}
              <label>Current company</label>
            </div>

            <input className="w-full p-4" />
          </div>
          <div className="flex w-full flex-col p-4">
            <div className="flex text-slate-700">
              {" "}
              <label>Your Linkedin Profile</label>
            </div>

            <input className="w-full p-4" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center sm:flex-row">
          <div className="flex w-full flex-col p-4">
            <div className="flex text-slate-700">
              {" "}
              <label>Your Stackoverflow Profile</label>
            </div>

            <input className="w-full p-4" />
          </div>
          <div className="flex w-full flex-col p-4">
            <div className="flex text-slate-700">
              {" "}
              <label>Your Medium Profile</label>
            </div>

            <input className="w-full p-4" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center sm:flex-row">
          <div className="flex w-full flex-col p-4">
            <div className="flex text-slate-700">
              {" "}
              <label>Your Github Profile</label>
            </div>

            <input className="w-full p-4" />
          </div>
          <div className="flex w-full flex-col p-4">
            <div className="flex text-slate-700">
              {" "}
              <label>Your Twitter Profile</label>
            </div>

            <input className="w-full p-4" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center sm:flex-row">
          <div className="flex w-full p-4">
            <textarea
              className="h-64 w-full p-2"
              placeholder="Tell us about yourself, this will be show in your homepage as a bio."
            />
          </div>
          <div className="flex w-full p-4">
            <textarea
              className="h-64 w-full p-3"
              placeholder="Write a message to engage your audience and invite them to connect. This will be show before Socials section."
            />
          </div>
        </div>
        <div className="flex w-full justify-end p-4">
          <button className="h-8 w-24 flex-initial border-2 border-slate-600 bg-zinc-200 shadow-md hover:bg-transparent">
            <div className="flex flex-1 justify-center">Save</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileEditableForm;
