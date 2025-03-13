'use client'
import axios from "axios";
import React, { useEffect, useState } from "react";

function BlueInput(props) {

   const {name , lable , newCarInfo , onChangeHan} = props
   // console.log(newCarInfo);
   const value = newCarInfo[name] ?? newCarInfo.tecInfo[name] ?? ''
   return (
      <div>
         <label>{lable}</label>
         <input
            type="text"
            name={name}
            className="py-2 px-1 bg-black text-white border border-sky-500 rounded-md"
            placeholder={lable}
            onChange={(e)=>onChangeHan(e)}
            value={value}
         />
      </div>
   );
}

export default BlueInput;
