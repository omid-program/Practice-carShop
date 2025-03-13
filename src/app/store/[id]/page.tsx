import Container from "@/Components/Container/Container";
import HandleQTY from "@/Components/HandleQTY/HandleQTY";
import PageTitle from "@/Components/pageTitle/PageTitle";
import { ICarDatasItem, ICarPageParams } from "@/Types/types";
import React from "react";

async function CarPage(params: ICarPageParams) {
   const { id } = await params.params;
   console.log(id);
   const response = await fetch(`http://localhost:8000/cars/${id}`);
   const carData = await response.json() as ICarDatasItem;
   console.log(carData);

   return (
      <Container>
         <div>
            <PageTitle title="ماشین فلان" />
            <div className="grid grid-cols-7 gap-5">
               <div className="col-span-2">
                  <div>
                     <img src={carData.srcImg} alt="" />
                  </div>
                  <HandleQTY id={id}/>
               </div>
               <div className="col-span-5 bg-gray-700 flex flex-col justify-center items-center p-4 border border-yellow-400 rounded-md">
                  <h2 className="text-3xl text-center text-yellow-400 my-3">
                  {carData.company} - {carData.name}
                  </h2>
                  {/* table */}
                  {/* میتونیم دیتا بیس رو تنظیم کنیم و داده های جدول رو جدا کنیم و روی اون با استفاده از مپ جدول رو ترسیم کنیم اما در اینجا فعلا هدف چیز دیگه ایه */}
                  <div>
                     <table className="">
                        <thead>
                           <tr>
                              <th>ویژگی</th>
                              <th>مقدار</th>
                           </tr>
                        </thead>
                        <tbody>
                           {
                              Object.entries(carData.tecInfo).map(([key , value])=>(
                                 <tr key={key}>
                                    <td>{key}</td>
                                    <td>{value}</td>
                                 </tr>
                              ))
                           }
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </Container>
   );
}

export default CarPage;
