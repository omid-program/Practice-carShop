'use client'
import React, { useContext, useEffect, useState } from "react";
import HandleQTY from "../HandleQTY/HandleQTY";
import { useCarBaContext } from "@/context/CarBasketContext";
import Container from "../Container/Container";
import { formatPrice } from "@/utils/number";

function BasketItem({id , qty , allCarData}) {
   // console.log(id , qty);
   // console.log(allCarData);
   // console.log(allCarData ?? "Loading...");
   if(!allCarData){
      return(
         <span>Loadimg...</span>
      )
   }
   const carInfoFind = allCarData.find(car=>car.id === id)
   console.log(carInfoFind);
   



   return (
      <Container>
         <div className="grid grid-cols-4 border border-yellow-400 my-8 rounded-lg py-8">
            <div className="col-span-1">
               <div>
                  <img src={carInfoFind.srcImg} alt="" />
                  <HandleQTY id={id} />
               </div>
            </div>
            <div className="col-span-3 text-center text-xl ">
               <h3>{carInfoFind.company} {carInfoFind.name}</h3>
               <div className="">
               <span>قیمت: </span> <span>{formatPrice(carInfoFind.price)}</span>
               </div>
            </div>
         </div>
      </Container>
   );
}

export default BasketItem;
