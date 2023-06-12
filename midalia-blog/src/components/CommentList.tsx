
export const CommentList: React.FC = () => {

  return (
    <>
      <div className="turncate m-8 flex h-fit flex-1 flex-col rounded bg-stone-100 pb-4 text-black sm:flex-initial">
        <div className="p-4 text-2xl">
          <h2>Comments</h2>
        </div>
        <div className="ml-4 mr-4 flex flex-row justify-center border-b-2 border-black bg-white text-center">
          <div className="flex-1">Comment</div>
          <div className="flex-1">Created at</div>
        </div>
          <div className="ml-4 mr-4 flex flex-row justify-center bg-white p-2 text-center">
            <div className="flex-1">-</div>
            <div className="flex-1">-</div>
          </div>
      </div>
    </>
  );
};

export default CommentList;
