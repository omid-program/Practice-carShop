"use client";
import BasketItem from "@/Components/BasketItem/BasketItem";
import OrderInfo from "@/Components/OrderInfo/OrderInfo";
import PageTitle from "@/Components/pageTitle/PageTitle";
import PriceAria from "@/Components/PriceAria/PriceAria";
import { useCarBaContext } from "@/context/CarBasketContext";
import React, { useEffect, useState } from "react";

function ShopBasket() {
   const { carBasket } = useCarBaContext();
   const [allCars, setAllCars] = useState();

   useEffect(() => {
      const response = fetch(`http://localhost:8000/cars`)
         .then((result) => result.json())
         .then((carsData) => setAllCars(carsData));
   }, []);
   // console.log(allCars);

   return (
      <div>
         <PageTitle title="سبد خرید" />
         <div>
            {carBasket.map((car) => (
               <BasketItem {...car} allCarData={allCars} />
            ))}
         </div>
         <div>
            <PriceAria allCarData={allCars} carBasket={carBasket}/>
         </div>
         <div>
            <OrderInfo/>
         </div>
      </div>
   );
}

export default ShopBasket;
