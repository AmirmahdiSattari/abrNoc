import React from 'react'

import logoImg from '../../assets/logo.png'

const Logo = () => {
  return (
    <div className='w-[220px] h-[100%] 
   bg-white 
   flex justify-center items-center
   border-r border-[#E0E0E0]'>
      <img src={logoImg} className="
        w-[25%] h-[80%]"/>
      <p 
      className='font-roboto text-2xl
      font-bold
      text-[#0d2d51]'>
        Cloud<span className='text-[#506781]'>zy</span> 
      </p>
    </div>
  )
}

export default Logo