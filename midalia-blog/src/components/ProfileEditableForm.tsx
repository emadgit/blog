
export const ProfileEditableForm: React.FC = () => {

    return (
      <>
        <div className="turncate m-8 flex h-fit flex-1 flex-col rounded bg-stone-100 pb-4 text-black sm:flex-initial">
          <div className="p-4 text-2xl">
            <h2>Profile</h2>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center">
            <div className="flex w-full p-4">
              <input className="w-full p-4" placeholder="Add your skills, seperete them with (,) comma."/>
            </div>
            <div className="flex w-full p-4">
              <input className="w-full p-4" placeholder="Your Linkedin Profile" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center">
            <div className="flex w-full p-4">
              <input className="w-full p-4" placeholder="Your Stackoverflow profile"/>
            </div>
            <div className="flex w-full p-4">
              <input className="w-full p-4" placeholder="Your Medium profile" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center">
            <div className="flex w-full p-4">
              <textarea className="w-full h-64 p-2" placeholder="Tell us about yourself, this will be show in your homepage as a bio."/>
            </div>
            <div className="flex w-full p-4">
              <textarea className="w-full h-64 p-3" placeholder="Write a message to engage your audience and invite them to connect. This will be show before Socials section." />
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
  