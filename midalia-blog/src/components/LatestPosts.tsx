export const LatestPosts: React.FC<{}> = () => {
   
    return (
        <>
         <div className="turncate m-8 flex h-fit flex-1 flex-col rounded bg-stone-100 pb-4 text-black sm:flex-initial">
              <div className="p-4 text-2xl">
                <h2>Latest posts</h2>
              </div>
              <div className="ml-4 mr-4 flex flex-row justify-center bg-slate-50 text-center">
                <div className="flex-1">Title</div>
                <div className="flex-1">Created at</div>
                <div className="flex-1">Comments</div>
              </div>
              <div className="ml-4 mr-4 flex flex-row justify-center bg-slate-100 text-center">
                <div className="flex-1">-</div>
                <div className="flex-1">-</div>
                <div className="flex-1">0</div>
              </div>
            </div>
        </>
    )
}

export default LatestPosts;
