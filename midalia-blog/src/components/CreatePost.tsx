import { EditorState } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";
import React, { InputHTMLAttributes, useState } from "react";
import { convertToRaw } from "draft-js";
import * as draftToHtml from "draftjs-to-html";
import ReactHtmlParser from "react-html-parser";
import { api } from "../utils/api";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then(({ Editor }) => Editor),
  {
    ssr: false,
  }
);

export const CreatePost: React.FC = () => {
  const [postEntry, setPostEntry] = useState<EditorState>();
  const [postTitle, setPostTitle] = useState<string>("");
  const [error, setError] = useState<string>();
  const [feedback, setFeedback] = useState<string>();
  const mutation = api.blog.createBlogPost.useMutation();

  const handleTextEditorChange = (e: EditorState) => {
    setPostEntry(e);
  };

  const handlePostTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostTitle(e.target.value);
  };

  const handleNewPost = () => {
    if (!postEntry || !postTitle) {
      setError(
        "Please check if you add a title for your post or if you write something in the post before submit."
      );

      setTimeout(() => {
        setError("");
      }, 5000);
      return;
    }
    if (postEntry) {
      // formattedPost going to hold a html draft which we store to db and later render it using ReactHtmlParser()
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      const formattedPost = String(draftToHtml(
        convertToRaw(postEntry.getCurrentContent())
      ));

      mutation.mutate({
        postTitle,
        post: formattedPost,
        category: "Uncategorized", // Todo: create a dropdown to let user select a category
      });
      setFeedback("Baaam! A new post is just created.");
      setTimeout(() => {
        setFeedback("");
      }, 5000);
    }
    return;
  };

  return (
    <>
      <div className="turncate m-8 flex h-fit flex-1 flex-col rounded bg-stone-100 pb-4 text-black sm:flex-initial">
        <div className="p-4 text-2xl">
          <h2>Create a new post</h2>
        </div>
        <div className="ml-4 mr-4 flex flex-col justify-center gap-4 bg-transparent text-center font-bold text-slate-700">
          <input
            className="border-1 w-full rounded border-neutral-900 p-2"
            type="text"
            value={postTitle}
            onChange={handlePostTitle}
            placeholder="Post title"
          />
          <Editor
            editorState={postEntry}
            toolbarClassName="toolbarClassName bg-white flex"
            wrapperClassName="wrapperClassName bg-white flex flex-col h-96"
            editorClassName="editorClassName bg-white"
            onEditorStateChange={handleTextEditorChange}
            toolbar={{
              inline: { inDropdown: false },
              list: { inDropdown: true },
              textAlign: { inDropdown: true },
              link: { inDropdown: true },
              history: { inDropdown: true },
            }}
          />
          <div className="flex flex-row-reverse ">
            <input type="checkbox" className="flex-initial" />{" "}
            <div className="flex flex-initial justify-center pr-2 text-sm font-medium">
              Allow comments?
            </div>
          </div>
          <div className="flex flex-row-reverse ">
            <button
              onClick={handleNewPost}
              className="h-8 w-24 flex-initial items-center justify-center border-2 border-slate-600 bg-zinc-200 shadow-md hover:bg-transparent"
            >
              <div className="flex flex-1 justify-center">Post</div>
            </button>
          </div>
        </div>
      </div>
      {error && (
        <div className="turncate m-8 flex h-fit flex-1 flex-col justify-center rounded bg-red-200 pb-4 text-center text-black sm:flex-initial">
          <p className="pt-4">{error}</p>
        </div>
      )}
           {feedback && (
        <div className="turncate m-8 flex h-fit flex-1 flex-col justify-center rounded bg-green-200 pb-4 text-center text-black sm:flex-initial">
          <p className="pt-4">{feedback}</p>
        </div>
      )}
    </>
  );
};

export default CreatePost;
