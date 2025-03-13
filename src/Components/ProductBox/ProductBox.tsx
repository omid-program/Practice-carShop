import { ICarDatasItem } from "@/Types/types";
import React from "react";

function ProductBox({
   name,
   company,
   model,
   bildYear,
   price,
   srcImg,
}: ICarDatasItem) {
   console.log(company, name, model, bildYear);

   return (
      <div className="border border-yellow-400 rounded-lg shadow shadow-yellow-400 p-1 h-auto">
         {/* image */}
         <div className="w-full box-border rounded-md h-52  overflow-hidden flex items-center justify-center mb-4">
            <img
               className="w-full h-full max-w-full max-h-full object-contain"
               src={srcImg}
               alt=""
            />
         </div>

         {/* details */}
         <div className="mt-4">
            {/* name-company-bildYear */}
            <div className="grid gap-3 col items-center justify-center">
               <div className="flex gap-2 text-xl">
                  <span>شرکت:</span><span>{company}</span>
               </div>
               <div className="flex gap-2 mt-2 text-xl">
                  <span>{name}</span>
                  <span>{model}</span>
                  <span>{bildYear}</span>
               </div>
            </div>
            {/* price */}
            <div className="mt-2 text-xl mx-auto text-center mb-4">
               <span>قیمت: {price} </span>
            </div>
         </div>
      </div>
   );
}

export default ProductBox;
