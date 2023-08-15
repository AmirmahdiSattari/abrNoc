import React from 'react'
import Input from './../input/Input';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useQuantityContext } from '../../context/QuantityContext';

const Quantity = () => {

  const { quantity, incrementQuantity, decrementQuantity } = useQuantityContext();

  return (
    <div className='w-[100%] 
    flex flex-col items-center'>
      <p className='w-[243px] pb-1
       text-[14px] font-[400] leading-[20px] 
      tracking-[0.035px] text-[#2F3857] '>
        Instance quantity:
      </p>
      <div className='w-[243px] h-[40px]
      border border-[#BDBDBD] rounded-[4px]
      flex justify-between'>
        <span className='w-[48px] h-[100%]
        border-r border-[#BDBDBD] 
        flex justify-center items-center
        text-[#00000042] cursor-pointer'
          onClick={decrementQuantity}>
          <AiOutlineMinus />
        </span>
        <p className='font-roboto
        text-[14px] font-[500] leading-[20px] 
        tracking-[0.035px] text-[#2F3857]
        flex justify-center items-center'>
          {quantity}
        </p>
        <span className='w-[48px] h-[100%]
        border-l border-[#BDBDBD] 
        flex justify-center items-center
        text-[#00000042] cursor-pointer'
          onClick={incrementQuantity}>
          <AiOutlinePlus />
        </span>
      </div>

      <div className='w-[90%] py-6 
      flex justify-center items-center
      border-b border-[#BDBDBD]'>

        <input className='w-[20%] h-[20px]'
          type="checkbox" />

        <label className='w-[80%] 
        font-roboto text-[16px] font-[400] leading-[24px] 
        tracking-[0.08px] text-[#2F3857]'>
          Enable IPv4
        </label>
      </div>

    </div>
  )
}

export default Quantity