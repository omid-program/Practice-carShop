"use client";
import { ICarBasket, IMotherContext } from "@/Types/types";
import React, { createContext, useContext, useState } from "react";

const CarBasketContext = createContext({} as IMotherContext);
export const useCarBaContext = () => {
   return useContext(CarBasketContext);
};

export function CarBaConProvider({ children }: { children: React.ReactNode }) {
   const [carBasket, setCarBaskt] = useState<ICarBasket[]>([]);
   const getQtyVal = (id: string) => {
      return carBasket.find((car) => car.id === id)?.qty || 0;
   };
   const increseQtyHand = (id: string) => {
      setCarBaskt((prevCarBasket) => {
         if (!prevCarBasket) return [{ id, qty: 1 }]; // اگه آرایه undefined بود، مقدار اولیه بده

         let isHaveCar = prevCarBasket.some((car) => car.id === id);

         if (isHaveCar) {
            return prevCarBasket.map((car) =>
               car.id === id ? { ...car, qty: car.qty + 1 } : car
            );
         } else {
            return [...prevCarBasket, { id, qty: 1 }];
         }
      });
   };
   const decreseQtyHand = (id: string) => {
      setCarBaskt((prevCarBasket) => {
         let isLastOne = prevCarBasket.find((car) => car.id == id)?.qty === 1;
         //  _____________________________________________________________
         // |isLastOne Cheked and isHaveItem Checked                      |
         // |so if isLastOne: true ==> is have Item and is last one       |
         // |and if isLastOne: false ==>1)its have Item an more than One  |
         // |2) Item its not existed                                      |
         // |so we need find Item and sea if(item.id === id)... else...   |
         // |_____________________________________________________________|
         if (isLastOne) {
            return prevCarBasket.filter((car) => car.id !== id);
         } else {
            return prevCarBasket.map((car) => {
               if (car.id == id) {
                  return {
                     ...car,
                     qty: car.qty - 1,
                  };
               } else return car;
            });
         }
      });
   };
   const totalQty = carBasket.reduce((total , item)=>{
      return total + item.qty
   },0)
   return (
      <CarBasketContext.Provider
         value={{
            carBasket,
            increseQtyHand,
            decreseQtyHand,
            getQtyVal,
            totalQty
         }}
      >
         {children}
      </CarBasketContext.Provider>
   );
}
