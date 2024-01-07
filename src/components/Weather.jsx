import React from 'react'
import { useState,useEffect } from 'react';

const Weather = () => {
  const [search,setSearch]= useState("Kanpur")
  const [city,setCity]=useState(null);
  useEffect(() => {
     const fetchapi=async()=>{
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a1bbf017240871a755814888ff203ada`;
      const response=await fetch(url);
      const resJson=await response.json();
      console.log(resJson);
      setCity(resJson.main);
     }
     fetchapi();
  }, [search])
  
  return (
    <>
    <div className='box bg-sky-800 h-[400px] w-[400px] flex justify-center absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] shadow-2xl shadow-blue-950'>
            <div className="input">
                <input type="search" placeholder="Enter The City" id="" className='rounded-xl border-black border-2 top-12 absolute left-[30%] text-black p-1' onChange={(e)=>{setSearch(e.target.value)} } />
            </div>
            {!city?(<p className="text-white absolute top-1/2 text-2xl ">No data Found</p>):(<>
            <div className="info text-white absolute text-4xl top-[160px] leading-loose ">
                <i className="fa-solid fa-sharp fa-street-view flex gap-10 justify-center"><p>{search}</p></i>
                </div>
                <div className="info text-white absolute text-xl bottom-20 font-bold leading-loose ">
                <h1 className="temp flex justify-center mb-2">
                   Current Temp : {city.temp} °C
                </h1>
                <h3 className="tempmin_max flex justify-center">
                   Feels Like : {city.feels_like} °C | Humidity : {city.humidity} %  </h3>
                    </div>
            </>)}
           
    </div>
    </>
  )
}

export default Weather