import React, { useState } from 'react'

import America from '../../assets/America.png'
import Germany from '../../assets/Germany.png'
import Singapore from '../../assets/Singapore.png'



const Country = ({ isSelected, onClick,flag,name }) => {

  const handleClick = () => {
    onClick();
  };

  return (
    <React.Fragment>

        <div className={` w-[170px] h-[72px]
          rounded-[4px] border-2  
          ${isSelected ? ' border-[#2C5EFF] shadow-lg' : 'border-[#BDBDBD]'}
          flex justify-start items-center cursor-pointer`}
          onClick={handleClick}>

          <div className='w-[69.333px] h-[40.889] 
           flex justify-center'>
            <img className='w-[40px] h-[40px] rounded-full
            object-cover'
              src={flag} />
          </div>

          <div className='w-[100px]'>
            <p className='font-roboto text-[16px] font-[500]
          leading-[24px] tracking-[0.08px] text-[#2F3857]'> {name} </p>
          </div>
        </div>

    

    </React.Fragment>
  )
}

export default Country