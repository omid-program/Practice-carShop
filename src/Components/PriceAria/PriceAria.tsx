import React, { useState } from "react";
import Container from "../Container/Container";
import { formatPrice } from "@/utils/number";

function PriceAria({ allCarData, carBasket }) {
   const [offCodeInput , setOffCodeInput] = useState('')
   const [finalPrice , setFinalPrice] = useState(0)
   const [userBenefit , setUserBenefit] = useState(0)




   if (!allCarData || allCarData.length === 0) {
      return <span>loadind...</span>;
   }

   console.log(carBasket);
   console.log(allCarData);

   const totalPrice = carBasket.reduce((total, item) => {
      let selectedCar = allCarData.find((car) => car.id === item.id) || {};
      return total + selectedCar?.price * item.qty;
   }, 0);

   const  submitOffCode = async()=>{
      const response = await fetch(`http://localhost:8000/offCode?code=${offCodeInput}`)
      const offCodeFetch = await response.json()
      // console.log(offCodeFetch);
      // setOffCodes(offCodeFetch)
      // console.log(offCodeInput);
      let finalPrice = totalPrice - (totalPrice * (offCodeFetch[0].persentage / 100)) 
      setFinalPrice(finalPrice)
      let userBenefit = totalPrice - finalPrice
      setUserBenefit(userBenefit)
   }



   return (
      <Container>
         <div>
            <div>
               <span>قیمت کل:</span>
               <span>{formatPrice(totalPrice)}</span>
            </div>
            <div>
               <span> سود شما:</span>
               <span>{formatPrice(userBenefit)}</span>
            </div>
            <div>
               <span> قیمت نهایی</span>
               <span>{formatPrice(finalPrice)}</span>
            </div>
            <div>
               <input 
               type="text" 
               placeholder="کد تخفیف" 
               className="border border-yellow-400 py-3 px-2 rounded-md text-white bg-black" 
               onChange={(e)=>{setOffCodeInput(e.target.value)}}
               />
               <button className=" border border-yellow-400 px-w py-3 rounded-md text-white  "
               onClick={submitOffCode}
               >اعمال کد تخفیف</button>
            </div>
         </div>
      </Container>
   );
}

export default PriceAria;
