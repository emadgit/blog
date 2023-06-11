import { EditorState } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";
import React, { InputHTMLAttributes, useState } from "react";
import { api } from "../utils/api";
import { useEffect } from "react";


export const CreateCategory: React.FC = () => {
  const [category, setCategory] = useState<string>('');
  const { data } = api.blog.listBlogPostCategories.useQuery();
  const { mutate, error, isLoading } = api.blog.createBlogPostCategory.useMutation();
  const [feedback, setFeedback] = useState<string>("");

  useEffect(()=> {
    if (error) {
        if(error?.message.includes("Unique constraint failed")) {
        setFeedback(`${category} category is already exist`)
    } else {
        setFeedback("There's something wrong with this feature at the moment.")
    }
}
  }, [error])

  useEffect(()=> {
    setTimeout(() => {
        setFeedback("");
      }, 5000);
  }, [feedback])

  const handleCategoryState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
    // setCategory((prevCategory) => [...prevCategory, e.target.value]);
  };
  

  const handleCreateCategory = () => {
    if (!category){
        setFeedback(
        "Please enter a category name"
      );
      return;
    }
    mutate({
        categoryName: category
    });
    if(!isLoading && !error) {
        setFeedback("Baaam! Category is created 🚀");
        setCategory("");
    }
  };

  return (
    <>
    <div className="flex flex-col sm:flex-row w-full">
    <div className="turncate h-fit m-0 sm:m-8 flex flex-initial w-full sm:w-2/4 md:w-3/4 flex-col rounded bg-stone-100 pb-4 text-black sm:flex-initial">
        <div className="p-4 text-2xl">
          <h2>Create new category</h2>
        </div>
        <div className="ml-4 mr-4 flex flex-col justify-center gap-4 bg-transparent text-center font-bold text-slate-700">
          <input
            className="border-1 w-full rounded border-neutral-900 p-2"
            type="text"
            value={category}
            onChange={handleCategoryState}
            placeholder="Category name"
          />
          
          <div className="flex flex-row-reverse ">
            <button
              onClick={handleCreateCategory}
              className="h-8 w-48 flex-initial items-center justify-center border-2 border-slate-600 bg-zinc-200 shadow-md hover:bg-transparent"
              disabled={!category}
            >
              <div className="flex flex-1 justify-center">Create</div>
            </button>
          </div>
        </div>
      </div>
      <div className="turncate h-fit m-0 sm:m-8 flex flex-initial w-full sm:w-2/4 md:w-1/4 flex-col rounded bg-stone-100 pb-4 text-black sm:flex-initial">
        <div className="p-4 text-2xl">
          <h2>Categories</h2>
        </div>
        <div className="ml-4 mr-4 flex flex-row justify-center border-b-2 border-black bg-white text-center">
          <div className="flex-1">Category name</div>
        </div>
        {data?.map((category) => (
          <div key={category.id} className="ml-4 mr-4 flex flex-row justify-center bg-white p-2 text-center">
            <div className="flex-1">{category.name}</div>
          </div>
        ))}
      </div>
    </div>
     
      {feedback && (
        <div className="turncate m-8 flex h-fit flex-1 flex-col justify-center rounded bg-cyan-200 pb-4 text-center text-black sm:flex-initial">
          <p className="pt-4">{feedback}</p>
        </div>
      )}
    </>
  );
};

export default CreateCategory;
