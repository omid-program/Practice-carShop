"use client";
import { useCarBaContext } from "@/context/CarBasketContext";
import Link from "next/link";
import React from "react";
import SearchNav from "../SearchNav/SearchNav";
import { usePathname } from "next/navigation";

function Navbar() {
      const pathName = usePathname()
   
   const navLinks = [
      {
         id: 1,
         title: "خانه",
         link: "/",
      },
      {
         id: 2,
         title: "فروشگاه",
         link: "/store",
      },
      {
         id: 3,
         title: "داشبورد",
         link: "/dashboard",
      },
   ];
   const { totalQty } = useCarBaContext();

   return (
      <nav className="flex justify-between py-5 px-2 shadow-md shadow-yellow-600">
         <div className="nav-right ">
            <ul className="flex">
               {navLinks.map((item) => (
                  <li key={item.id} className={`${pathName === String(item.id) ? 'p-2  shadow-sm shadow-sky-600' : 'p-2'}`}>
                     <Link href={item.link} className="text-xl text-yellow-400">
                        {item.title}
                     </Link>
                  </li>
               ))}
            </ul>
         </div>
         <SearchNav/>
         <div className="nav-left flex gap-1">
            <span className="bg-orange-800 size-8 rounded-full flex justify-center items-center ">{totalQty}</span>
            <Link href={"/shopBasket"} className="text-xl text-yellow-400">
               <div>سبد خرید</div>
            </Link>
         </div>
      </nav>
   );
}

export default Navbar;
