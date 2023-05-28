import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaStrikethrough,
  FaLink,
  FaAlignCenter,
  FaAlignJustify,
  FaAlignLeft,
  FaAlignRight,
} from "react-icons/fa";
import {
  MdOutlineAddPhotoAlternate,
  MdOutlineEmojiEmotions,
} from "react-icons/md";

export const CreatePost: React.FC = () => {
  return (
    <>
      <div className="turncate m-8 flex h-fit flex-1 flex-col rounded bg-stone-100 pb-4 text-black sm:flex-initial">
        <div className="p-4 text-2xl">
          <h2>Create a new post</h2>
        </div>
        <div className="ml-4 mr-4 flex flex-col justify-center gap-4 bg-transparent text-center font-bold text-slate-700">
          <div className="flex flex-row gap-2">
            <button className="h-6 w-6 flex-initial items-center justify-center border-2 border-slate-600 bg-zinc-200 shadow-md hover:bg-transparent">
              <div className="flex flex-1 justify-center">
                <FaBold className="text-sm" />
              </div>
            </button>
            <button className="h-6 w-6 flex-initial items-center justify-center border-2 border-slate-600 bg-zinc-200 shadow-md hover:bg-transparent">
              <div className="flex flex-1 justify-center">
                <FaItalic className="text-sm" />
              </div>
            </button>
            <button className="h-6 w-6 flex-initial items-center justify-center border-2 border-slate-600 bg-zinc-200 shadow-md hover:bg-transparent">
              <div className="flex flex-1 justify-center">
                <FaUnderline className="text-sm" />
              </div>
            </button>
            <button className="h-6 w-6 flex-initial items-center justify-center border-2 border-slate-600 bg-zinc-200 shadow-md hover:bg-transparent">
              <div className="flex flex-1 justify-center">
                <FaStrikethrough className="text-sm" />
              </div>
            </button>
            <div className="h-6 w-1 flex-initial border-l-2 border-slate-300 bg-transparent"></div>
            <button className="h-6 w-6 flex-initial items-center justify-center border-2 border-slate-600 bg-zinc-200 shadow-md hover:bg-transparent">
              <div className="flex flex-1 justify-center">
                <FaAlignJustify className="text-sm" />
              </div>
            </button>
            <button className="h-6 w-6 flex-initial items-center justify-center border-2 border-slate-600 bg-zinc-200 shadow-md hover:bg-transparent">
              <div className="flex flex-1 justify-center">
                <FaAlignLeft className="text-sm" />
              </div>
            </button>
            <button className="h-6 w-6 flex-initial items-center justify-center border-2 border-slate-600 bg-zinc-200 shadow-md hover:bg-transparent">
              <div className="flex flex-1 justify-center">
                <FaAlignCenter className="text-sm" />
              </div>
            </button>
            <button className="h-6 w-6 flex-initial items-center justify-center border-2 border-slate-600 bg-zinc-200 shadow-md hover:bg-transparent">
              <div className="flex flex-1 justify-center">
                <FaAlignRight className="text-sm" />
              </div>
            </button>
            <div className="h-6 w-1 flex-initial border-l-2 border-slate-300 bg-transparent"></div>
            <button className="h-6 w-6 flex-initial items-center justify-center border-2 border-slate-600 bg-zinc-200 shadow-md hover:bg-transparent">
              <div className="flex flex-1 justify-center">
                <FaLink className="text-sm" />
              </div>
            </button>
            <button className="h-6 w-6 flex-initial items-center justify-center border-2 border-slate-600 bg-zinc-200 shadow-md hover:bg-transparent">
              <div className="flex flex-1 justify-center">
                <MdOutlineAddPhotoAlternate className="text-sm" />
              </div>
            </button>
            <button className="h-6 w-6 flex-initial items-center justify-center border-2 border-slate-600 bg-zinc-200 shadow-md hover:bg-transparent">
              <div className="flex flex-1 justify-center">
                <MdOutlineEmojiEmotions className="text-sm" />
              </div>
            </button>
          </div>
          <input
            className="border-1 w-full rounded border-neutral-900 p-2"
            type="text"
            placeholder="Post title"
          />
          <textarea
            className="border-1 h-64 w-full rounded border-neutral-900 p-2"
            placeholder="Write whatever is in your mind..."
          />
          <div className="flex flex-row-reverse ">
            <input type="checkbox" className="flex-initial" />{" "}
            <div className="flex flex-initial justify-center pr-2 text-sm font-medium">
              Allow comments?
            </div>
          </div>
          <div className="flex flex-row-reverse ">
            <button className="h-8 w-24 flex-initial items-center justify-center border-2 border-slate-600 bg-zinc-200 shadow-md hover:bg-transparent">
              <div className="flex flex-1 justify-center">Post</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
