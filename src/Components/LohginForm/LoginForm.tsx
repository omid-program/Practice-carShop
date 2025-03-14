"use client";
import axios from "axios";
import cookie from 'js-cookie'
import React, { useState } from "react";

function LoginForm() {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const loginHand = () => {
      // const response =  axios({
      //    url:'',
      //    method:'POST',
      //    data:{
      //       username,
      //       password
      //    }
      // })
      const response = {
         token:"asdasda833rkwy3rsd",
         expaier:5
      }
      cookie.set('token' , response.token ,{expires:5})
   };
   return (
      <div className="w-1/4 shadow-md shadow-sky-600 my-24 mx-auto px-3 py-5 rounded-md flex flex-col gap-5 items-center justify-center ltr">
         <h3 className="text-center text-2xl">Login</h3>
         <div className=" w-full flex flex-col items-center justify-center gap-3 ">
            <input
               type="text"
               placeholder="نام کاربری"
               className=" rounded-md border border-sky-700 w-4/5 px-1 py-2 bg-black text-yellow-400"
               value={username}
               onChange={(e) => {
                  setUsername(e.target.value);
               }}
            />
            <input
               type="password"
               placeholder="رمز عبور"
               className=" rounded-md border border-sky-700 w-4/5 px-1 py-2 bg-black text-yellow-400"
               value={password}
               onChange={(e) => {
                  setPassword(e.target.value);
               }}
            />
            <button
               onClick={loginHand}
               className=" w-4/5 my-3 rounded-md py-2 bg-black text-white border border-sky-600"
            >
               ورود
            </button>
         </div>
      </div>
   );
}

export default LoginForm;
