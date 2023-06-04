import { MdOutlineAddBox } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { signOut } from "next-auth/react";

import Link from "next/link";

export const BlogNavbar: React.FC = () => {
  return (
    <>
      <div className="turncate flex h-fit flex-1 flex-col gap-2 bg-neutral-900 p-4 text-slate-200 sm:h-full sm:w-64 sm:flex-initial">
        <Link href={"/blog-dashboard/new-post"} className="w-full rounded border-2 bg-transparent py-2 font-bold text-white hover:bg-neutral-700">
          <span className="flex flex-row justify-center gap-2">
            <div className="flex flex-row">
              <MdOutlineAddBox className="text-2xl" />
            </div>{" "}
            <div className="flex flex-row">New Post</div>
          </span>
        </Link>
        <Link href={"/blog-dashboard"} className="w-full rounded bg-transparent py-2 font-bold text-white hover:bg-neutral-700 text-center">
          Posts History
        </Link>
        <button className="w-full rounded bg-transparent py-2 font-bold text-white hover:bg-neutral-700">
          Categories
        </button>
        <button className="w-full rounded bg-transparent py-2 font-bold text-white hover:bg-neutral-700">
          Comments
        </button>
        <div className="flex h-fit flex-col-reverse bg-gray-300 sm:h-full sm:flex-row">
          <div className="turncate flex h-fit flex-1 flex-col gap-2 bg-neutral-900 text-slate-200 sm:h-full sm:w-64 sm:flex-initial sm:flex-col-reverse">
            <button onClick={() => void signOut()} className="w-full rounded bg-transparent py-2 font-bold text-white hover:bg-neutral-700">
              Logout
            </button>
            <button className="w-full rounded border-2 bg-transparent py-2 font-bold text-white hover:bg-neutral-700">
              <span className="flex flex-row justify-center gap-2">
                <div className="flex flex-row">
                  <FaUserEdit className="text-2xl" />
                </div>{" "}
                <div className="flex flex-row">Edit Profile</div>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogNavbar;
