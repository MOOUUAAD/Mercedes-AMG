import React, { useState } from 'react'
import { TfiClose } from "react-icons/tfi";

const Navbar = () => {
    const [nav,setNav]= useState(false)
    const handleNav=()=>{
        setNav(!nav)
    }

  return (
    <div className='py-4 px-8 flex justify-between items-center '>
        <div className='cursor-pointer'>
            <a href="https://www.mercedes-amg.com/en/home.html"><img className='h-14' src="./assets/logo.png" /></a>
        </div>
        <div className='hidden md:block'>
            <ul className='flex'>
                <a href='https://www.mercedes-amg.com/en/home/vehicles/a-class/sedan.html' className='p-2 mx-2 font-semibold rounded cursor-pointer duration-200 hover:bg-black hover:text-white'>A-Class</a>
                <a href='https://www.mercedes-amg.com/en/home/vehicles/c-class/sedan.html' className='p-2 mx-2 font-semibold rounded cursor-pointer duration-200 hover:bg-black hover:text-white'>C-Class</a>
                <a href='https://www.mercedes-amg.com/en/home/vehicles/e-class/sedan.html' className='p-2 mx-2 font-semibold rounded cursor-pointer duration-200 hover:bg-black hover:text-white'>E-Class</a>
                <a href='https://www.mercedes-amg.com/en/home/vehicles/s-class/sedan.html' className='p-2 mx-2 font-semibold rounded cursor-pointer duration-200 hover:bg-black hover:text-white'>S-Class</a>
                <a href='https://www.mercedes-amg.com/en/home/vehicles/g-class/suv.html' className='p-2 mx-2 font-semibold rounded cursor-pointer duration-200 hover:bg-black hover:text-white'>G-Class</a>
            </ul>
        </div>
        <div>
            <a href="https://id.mercedes-benz.com/ciam/auth/login" className='p-3  font-semibold rounded-full cursor-pointer duration-200 hover:bg-black hover:text-white'>LOGIN</a>
            <button onClick={handleNav} className='md:hidden p-3 font-semibold rounded-full cursor-pointer duration-200 hover:bg-black hover:text-white'>MENU</button>
        </div>


        <div className={nav?'absolute top-0 right-0 h-full w-1/2 bg-white z-10':'fixed right-[100%]'}>
            <div className='m-8 flex justify-end'>
            <TfiClose onClick={handleNav} size={25} className='fill-black p-1 rounded-full duration-200 cursor-pointer hover:bg-gray-300' />
            </div>
            <h1 className='text-black text-lg font-bold ml-6 mb-4'>OUR VEHICLES</h1>
            <ul className='flex flex-col'>
                <a href='https://www.mercedes-amg.com/en/home/vehicles/a-class/sedan.html' className='p-2 mx-2 my-2 font-semibold rounded cursor-pointer duration-200 text-black hover:text-white hover:bg-black'>A-Class</a>
                <a href='https://www.mercedes-amg.com/en/home/vehicles/c-class/sedan.html' className='p-2 mx-2 my-2 font-semibold rounded cursor-pointer duration-200 text-black hover:text-white hover:bg-black'>C-Class</a>
                <a href='https://www.mercedes-amg.com/en/home/vehicles/e-class/sedan.html' className='p-2 mx-2 my-2 font-semibold rounded cursor-pointer duration-200 text-black hover:text-white hover:bg-black'>E-Class</a>
                <a href='https://www.mercedes-amg.com/en/home/vehicles/s-class/sedan.html' className='p-2 mx-2 my-2 font-semibold rounded cursor-pointer duration-200 text-black hover:text-white hover:bg-black'>S-Class</a>
                <a href='https://www.mercedes-amg.com/en/home/vehicles/g-class/suv.html' className='p-2 mx-2 my-2 font-semibold rounded cursor-pointer duration-200 text-black hover:text-white hover:bg-black'>G-Class</a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar