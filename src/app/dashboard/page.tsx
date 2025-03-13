'use client'
import BlueInput from "@/Components/BlueInput/BlueInput";
import Container from "@/Components/Container/Container";
import PageTitle from "@/Components/pageTitle/PageTitle";
import React, { useEffect, useState } from "react";
import axios from "axios";

function page() {
  const [inputData , setInputData]=useState([])
  const [newCarInfo,setNewCarInfo] = useState(
    {
      id:String(Math.floor(Math.random()*1000)),
      company: '',
      name: '',
      model:'' ,
      srcImg: '',
      bildYear: 0,
      price: 0,
      tecInfo: {
          motor:'' ,
          speed: 0,
          aceleration: 0,
          org: '',
          useFuel: 0,
          power: 0
      }
    }
  )
  useEffect(() => {
      const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:8000/inputs");
            const inputDataFetch = await response.json();
           console.log("Data fetched: ", inputDataFetch);  // ✅ مقدار درست رو لاگ می‌کنه
            setInputData(inputDataFetch);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
      };
      fetchData();
  }, []);
  
  // console.log(inputData);

  const chaInputHan = (e)=>{
    const {name , value} = e.target

    console.log(value);
    

    setNewCarInfo((prevNewCarInfo)=>{
      if(name in prevNewCarInfo.tecInfo){
        return{
          ...prevNewCarInfo , 
          tecInfo:{
            ...prevNewCarInfo.tecInfo,
            [name] : value
          }
        }
      }else{
        return{
          ...prevNewCarInfo,
          [name] : value
        }
      }
    }
  )
  console.log(newCarInfo);
  }
  
  const submitNewCar = ()=>{
    axios({
      method:'POST',
      url:'http://localhost:8000/cars',
      data:newCarInfo
    })
  }

  return (
    <Container>
      <PageTitle title="داشبورد" />
      <div>
        <div className="grid grid-cols-3 gap-5 items-center justify-center">
          {
            inputData.map(inputElem=>(
              <div key={inputElem.id} className="grid col-span-1">
                <BlueInput {...inputElem} onChangeHan={chaInputHan} newCarInfo={newCarInfo} />
              </div>
            ))
          }
          <button 
          onClick={submitNewCar}
          className="bg-black text-white px-1 py-2 border border-sky-500 hover:bg-sky-700">ثبت ماشین جدید</button>

        </div>
      </div>
    </Container>
  );
}

export default page;
