import Container from "@/Components/Container/Container";
import PageTitle from "@/Components/pageTitle/PageTitle";
import Pagination from "@/Components/Pagination/Pagination";
import ProductBox from "@/Components/ProductBox/ProductBox";
import { ICarDatasItem, IStoreProps } from "@/Types/types";
import Link from "next/link";
import React from "react";

async function Store({searchParams}:IStoreProps) {
   const page = (await searchParams.page) ?? '1'
   const perpage = (await searchParams.per_page) ?? '3'
   const searchTitle = ((await searchParams).title) ?? ''
   const response = await fetch(`http://localhost:8000/cars?_page=${page}&_per_page=${perpage}&title=${searchTitle}`);
   const carData = (await response.json()) as ICarDatasItem[];
   console.log(carData);

   return (
      <>
         <PageTitle title="فروشگاه" />
         <Container>
            <div className="grid grid-cols-3 gap-5">
               {carData.data.map((car) => (
                  <Link href={`http://localhost:3000/store/${car.id}`}
                  key={car.id}>
                     
                     <ProductBox {...car} />
                  </Link>
               ))}
            </div>
            <Pagination pageCount={carData.pages}/>
         </Container>
      </>
   );
}

export default Store;
