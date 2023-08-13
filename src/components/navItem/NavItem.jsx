import React from 'react'
import {
  AiOutlineDashboard, AiOutlinePlusSquare,
  AiOutlineCopy, AiOutlineKey, AiOutlineControl,
  AiOutlineDown
  , AiOutlineWifi, AiOutlineBarChart
} from "react-icons/ai";
import { FaDollarSign, } from "react-icons/fa";

import { upperMenuItemsData, lowerMenuItemsData } from './navItemDb';
import NavbarButton from './../navbarButton/NavbarButton';

const NavItem = () => {

  return (
    <div className='w-[100%] h-[100%]
    flex flex-col justify-start items-center
     gap-[10px]'>

      {upperMenuItemsData.map(data => (
        <React.Fragment>
          {data.name === "Volume" ?
            <div className='w-[180px] h-[40px]
                flex justify-start items-center gap-[16px]
                pt-[10px] pr-[63px] pb-[10px] pl-[16px]
                text-[#00000042] border-b border-[#00000042] cursor-pointer'>

              <span className='w-[20px] h-[20px]'><AiOutlineControl className='w-[100%] h-[100%]' /></span>
              <span className='text-[14px] font-roboto font-medium tracking-[0.035px]'> Volume </span>
            </div>
            :
            <div className='w-[180px] h-[40px]
              flex justify-center items-center gap-[12px]
              text-[#2F3857]
              pt-[10px] pr-[63px] pb-[10px] pl-[16px]
               hover:text-[white] hover:bg-[#2C5EFF]
               rounded-md cursor-pointer
               transition-all duration-150 ease-in'>
              <span className='w-[20px] h-[20px]'>< data.logo className='w-[100%] h-[100%]' /></span>
              <span className='text-[14px] font-roboto font-medium tracking-[0.035px]'> {data.name} </span>
            </div>
          }
        </React.Fragment>
      ))}

      {lowerMenuItemsData.map(data => (
        <React.Fragment>
          {data.name == "Billing" ?
            <div className='w-[180px] h-[40px]
          flex justify-start items-center gap-[12px]
          text-[#2F3857] cursor-pointer
          pt-[10px] pr-[43px] pb-[10px] pl-[16px]
           hover:text-[white] hover:bg-[#2C5EFF]
           rounded-md 
           transition-all duration-150 ease-in
          '>
              <span className='w-[20px] h-[20px]'><data.logo className='w-[100%] h-[100%] font-normal' /></span>
              <span className='text-[14px] font-roboto font-medium tracking-[0.035px]'>{data.name}</span>
              <span className='text-[14px] font-roboto  tracking-[0.035px] pl-[26px] hover:text-white hover:scale-105
             transition-all duration-150 ease-in'><data.secondLogo /></span>
            </div>
            :
            <div className='w-[180px] h-[40px]
          flex justify-start items-center gap-[12px]
          text-[#2F3857] cursor-pointer
          pt-[10px] pr-[63px] pb-[10px] pl-[16px]
           hover:text-[white] hover:bg-[#2C5EFF]
           rounded-md 
           transition-all duration-150 ease-in'>
              <span className='w-[20px] h-[20px]'><data.logo className='w-[100%] h-[100%]' /></span>
              <span className='text-[14px] font-roboto font-medium tracking-[0.035px]'>{data.name}</span>
            </div>
          }
        </React.Fragment>
      ))}
      <div className="w-[220px] h-[768px] 
      border-r border-[#E0E0E0]" >
        <NavbarButton />
      </div>

    </div>
  )
}

export default NavItem