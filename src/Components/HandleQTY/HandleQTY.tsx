'use client'
import { useCarBaContext } from "@/context/CarBasketContext";
import { PropHanQty } from "@/Types/types";
import React from "react";



function HandleQTY({id}:PropHanQty) {
   const {
      increseQtyHand,
      carBasket,
      decreseQtyHand,
      getQtyVal
   } = useCarBaContext()
   // console.log(carBasket);
   return (
      <div className="flex gap-2">
         <button className="size-6 rounded-md text-xl flex justify-center items-center bg-yellow-400 text-gray-900"
         onClick={()=>{increseQtyHand(id)}}
         >
            +
         </button>
         <div>
            <span>تعداد محصول موجود در سبد: </span>
            {
               getQtyVal(id)
            }
         </div>
         <button className="size-6 rounded-md text-xl flex justify-center items-center border border-yellow-400"
         onClick={()=>{decreseQtyHand(id)}}
         >
            -
         </button>
      </div>
   );
}

export default HandleQTY;
