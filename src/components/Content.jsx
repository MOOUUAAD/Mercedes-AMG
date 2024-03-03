import React from 'react'
import { FaUserFriends } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { BsCalendarEventFill } from "react-icons/bs";


const Content = () => {
  return (
    <div className='text-center m-auto'>
        <div className='mt-16 md:mt-0'>
            <h1 className='pt-2 text-5xl font-bold text-black'>Mercedes-AMG</h1>
            <p className='p-2 text-2xl font-semibold text-neutral-100'>The dawn of a new era</p>
        </div>
        <div className='absolute inset-x-0 bottom-12 md:bottom-10 flex justify-center items-center flex-col md:flex-row'>
            <a href="https://www.mercedes-amg.com/en/home/community.html" className='mx-2 my-1 font-semibold bg-gray-900 px-2 py-1 w-1/2 md:w-1/6 rounded-md hover:bg-slate-100 hover:text-zinc-800 group flex justify-center items-center duration-150'><FaUserFriends size={20} className='inline mx-3 group-hover:fill-gray-900 duration-150' /> COMMUNITY</a>
            <a href="https://www.mercedes-amg.com/en/home/events.html" className='mx-2 my-1 font-semibold bg-gray-900 px-2 py-1 w-1/2 md:w-1/6 rounded-md hover:bg-slate-100 hover:text-zinc-800 group flex justify-center items-center duration-150'><BsCalendarEventFill size={15} className='inline mx-3 group-hover:fill-gray-900 duration-150' /> EVENTS</a>
            <a href="https://www.mercedes-amg.com/en/home/benefits.html" className='mx-2 my-1 font-semibold bg-gray-900 px-2 py-1 w-1/2 md:w-1/6 rounded-md hover:bg-slate-100 hover:text-zinc-800 group flex justify-center items-center duration-150'><FaGift size={18} className='inline mx-3 group-hover:fill-gray-900 duration-150' /> BENEFITS</a>
        </div>

    </div>
  )
}

export default Content