import React from 'react'

import { LiaHeadphonesAltSolid } from "react-icons/lia"
import {AiOutlineQuestionCircle} from 'react-icons/ai'

const NavbarButton = () => {

let  navbarButtonData=[
  {
    name: "Support",
    logo:LiaHeadphonesAltSolid
  },
  {
    name: "Help",
    logo:AiOutlineQuestionCircle
  },
]

  return (
    <div className='w-[100%] h-[35%]
    flex flex-col justify-end items-center
     gap-[10px]  py-4'>

     {navbarButtonData.map((data)=>(

      <div className='w-[180px] h-[40px]
      flex justify-center items-center gap-[12px]
      text-[#2F3857] border border-[#E0E0E0]
      pt-[10px] pr-[63px] pb-[10px] pl-[16px]
       hover:text-[white] hover:bg-[#2C5EFF]
       rounded-md cursor-pointer
       transition-all duration-150 ease-in'>
          <span className='w-[20%]  h-[20px]'>
            <data.logo className='w-[100%] h-[100%]' />
          </span>
          <span className='w-[80%] text-[14px] font-roboto font-medium tracking-[0.035px]'>
            {data.name}
          </span>
        </div>

  ))}

    </div>
  )
}

export default NavbarButton