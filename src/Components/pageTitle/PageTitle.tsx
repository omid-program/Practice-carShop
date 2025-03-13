import React from "react";

function PageTitle({title}:{title:string}) {
   return (
      <div>
         {/* home title */}
         <div className=" border-b border-yellow-400 w-1/5 mx-auto pb-3 shadow-yellow-400 my-5  ">
            <h1 className="text-4xl text-yellow-400 text-center ">{title}</h1>
         </div>
      </div>
   );
}

export default PageTitle;
