import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {  useEffect } from 'react'
import useFetch from './user.jsx'
function App() {
  const {data, loading , error} = useFetch("car.json");

if (loading) return <h2 className='text-white mt-[20%] text-center '>Loading...</h2>;
if (error) return <h2 className='text-white mt-[20%] text-center  '>Error:sorry</h2>

  return (
    <>
    <h1 className='text-center text-4xl font-[ui] mt-5 font-bold bg-clip-text text-yellow-400 '>Car Show</h1>
      <section className='p-50 gap-10 grid grid-cols-3'>
        {data.map((Cars) =>(
          <div key={Cars.id} className='border w-[400px] hover:scale-110  text-white border-gray-400  overflow-hidden relative cursor-pointer  shadow-olive-500 hover:shadow-2xl transition-all duration-300 delay-150 h-[400px] rounded-2xl '>
        <img className='w-full h-full object-cover rounded-2xl' src={Cars.img} alt="" />
          <div className="absolute inset-0  "></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-xl font-bold">{Cars.name}</h2>
            <p className="text-sm">{Cars.bestFeature}</p>
            <p className="text-sm">{Cars.price}</p>

          </div>
      </div>


        ))}
      

    </section> 
    </>
  )
}

export default App
