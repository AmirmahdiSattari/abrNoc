import React from 'react'

import { FaCircleUser } from "react-icons/fa6";
import { AiOutlineBell } from "react-icons/ai";

const UserSection = () => {


  const moeneyAmount = 125.25;
  return (
    <div className='w-[25%] 
    flex justify-center items-center
    '>

      <div className='w-[10%]'>
        <sapn className="bg-[#FF4465]
         border border-white rounded-full
           w-[.5rem] h-[.5rem]
           absolute ml-3 mb-2"></sapn>

        <AiOutlineBell className='text-[#2F3857]  text-xl' />
      </div>

      <div className='
      border border-[#BDBDBD] rounded-md
      py-1 '>
        <span className='text-[#757575] pl-3'>+</span>
        <span className='pl-2 pr-8 text-[#2F3857]'>$ {moeneyAmount}</span>
      </div>

      <div className='
        w-[15%]
        flex
        justify-around items-center'>
        <span className='text-[#E0E0E0] text-xl'>|</span>
        <FaCircleUser className='text-[#BDBDBD] text-3xl' />
      </div>


    </div>
  )
}

export default UserSection