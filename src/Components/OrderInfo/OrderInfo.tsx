"use cilent";
import React, { ChangeEvent, useState } from "react";
import Container from "../Container/Container";
import { useCarBaContext } from "@/context/CarBasketContext";
import axios from "axios";

function OrderInfo() {

   const { carBasket } = useCarBaContext();

   const [newUserOrd, setNewUserOrd] = useState({
      id: Math.floor(Math.random() * 1000),
      ord: [],
      country: "",
      city: "",
      phone: "",
      address: "",
   });
   const submitNewOrd = () => {
      console.log("carBasket: ", carBasket);
      setNewUserOrd(prev => {
         const updatedOrder = { ...prev, ord: carBasket };
         axios.post("http://localhost:8000/ord", updatedOrder);
         console.log(updatedOrder);  // مقدار درست رو لاگ می‌کنه.
         return updatedOrder;
      });
   };
   

   // _____________________________________________
   // const submitNewOrd = () => {
   //    console.log("carBasket: ", carBasket);
   //    setNewUserOrd({
   //       ...newUserOrd,
   //       ord: carBasket,
   //    });
   //    axios({
   //       method: "POST",
   //       url: "http://localhost:8000/ord",
   //       data: newUserOrd,
   //    });
   //    console.log(newUserOrd);
   // };
// __________________________________________________
   const changeInfoHand = (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      const { name, value } = e.target;
      setNewUserOrd({
         ...newUserOrd,
         [name]: value,
      });
      console.log(newUserOrd);
   };
   return (
      <Container>
         <div className="border border-sky-500 p-5 flex flex-col rounded-md gap-5">
            <div className="flex gap-9 ">
               <div>
                  <label>کشور: </label>
                  <input
                     type="text"
                     placeholder="کشور:"
                     name={"country"}
                     value={newUserOrd.country}
                     className="bg-black border border-yellow-400 py-2 px-1 text-white rounded-md"
                     onChange={(e) => {
                        changeInfoHand(e);
                     }}
                  />
               </div>
               <div>
                  <label>شهر: </label>
                  <input
                     type="text"
                     placeholder="شهر:"
                     name={"city"}
                     value={newUserOrd.city}
                     className="bg-black border border-yellow-400 py-2 px-1 text-white rounded-md"
                     onChange={(e) => {
                        changeInfoHand(e);
                     }}
                  />
               </div>
            </div>
            <div>
               <label>شماره تماس: </label>
               <input
                  type="text"
                  placeholder="شماره تماس:"
                  name={"phone"}
                  value={newUserOrd.phone}
                  className="bg-black border border-yellow-400 py-2 px-1 text-white rounded-md"
                  onChange={(e) => {
                     changeInfoHand(e);
                  }}
               />
            </div>
            <div>
               <label>آدرس دقیق:</label>
               <textarea
                  name={"address"}
                  value={newUserOrd.address}
                  className="w-full border border-yellow-400 bg-black text-white"
                  onChange={(e) => {
                     changeInfoHand(e);
                  }}
               >
                  {" "}
               </textarea>
            </div>
            <button
               onClick={submitNewOrd}
               className="px-1 py-2 border border-yellow-400 bg-black text-white w-1/5"
            >
               ثبت سفارش
            </button>
         </div>
      </Container>
   );
}

export default OrderInfo;
