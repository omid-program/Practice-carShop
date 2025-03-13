import React from "react";
import Navbar from "../Navbar/Navbar";

function Layout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <div lang="fa" dir="rtl" className="">
         <Navbar/>
         {children}
      </div>
   );
}

export default Layout;
