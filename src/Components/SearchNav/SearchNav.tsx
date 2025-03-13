'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

function SearchNav() {
   const [searchInput , setSearchInput] = useState('')
   const searchPrams = useSearchParams()
   const roter = useRouter()

   const searchHan = ()=>{
      console.log(decodeURIComponent( searchPrams.toString()));
      const currentSearch = new URLSearchParams(searchPrams.toString())
      console.log(decodeURIComponent(currentSearch.toString()));
      currentSearch.set("title" , searchInput)
      roter.push(`store?${currentSearch.toString()}`)
   }
   return (
      <div className="w-1/2">
         <input
            type="text"
            value={searchInput}
            placeholder="جست و جو"
            className="bg-gray-800 border shadow-md px-1 py-2 rounded-full "
            onChange={(e)=>{
               setSearchInput(e.target.value)
            }}
         />
         <button 
         onClick={searchHan}
         className="px-1 py-2 rounded-3xl border border-yellow-400 bg-gray-900">
            جست و جو
         </button>
      </div>
   );
}

export default SearchNav;
