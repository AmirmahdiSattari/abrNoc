import React, { useState, useEffect } from 'react';
import { Quantity } from '../../components';
import { useUpdateContext } from '../../context/update';
import { useQuantityContext } from '../../context/QuantityContext';
import { useRegionContext } from './../../context/RegionContext';
import { toast } from 'react-toastify';

const Cart = () => {

  const [price, setPrice] = useState(null);
  const { update } = useUpdateContext();
  const { quantity, setQuantity } = useQuantityContext();
  const { selectedRegion } = useRegionContext();


  const handleClick = () => {

    let osData = localStorage.getItem('Os');
    let region = localStorage.getItem('regionId');
    let planData = JSON.parse(localStorage.getItem('planInfo'));

    if (osData && region && planData) {

      console.log("Operating System is ✅", osData);
      console.log("Region is ✅", region);
      console.log("Plan Details ✅", planData);
      console.log("quantity is ✅", quantity);
      toast.success("check console")
    } else {

      toast.error("ops something went wrong!")
    }
  }

  useEffect(() => {
    if (selectedRegion) {
      setPrice(null)
      if (localStorage.getItem('planInfo')) {
        setPrice(JSON.parse(localStorage.getItem('planInfo')).monthly_price);
      }
    }
  }, [update, selectedRegion]);

  return (
    <div className='w-[283px] h-[324px] 
    bg-[#fff] rounded-[8px]'>
      <Quantity />
      <div className='flex flex-col justify-center items-center'>
        <div className='w-[90%] 
        flex justify-start py-5'>
          <p className='w-[40%] flex justify-start
          font-roboto text-[20px] font-[500]
          leading-[32px] tracking-[0.05px] text-[#2F3857]'>
            Total
          </p>
          <p className='w-[60%] flex justify-end items-center'>
            <span className='
            font-roboto text-[20px] font-[500]
            leading-[32px] tracking-[0.05px] text-[#2F3857]'>
              $ {price ? (price * quantity).toFixed(2) : '0.00'}
            </span>
            <span className='
            font-roboto text-[16px] font-[400]
            leading-[24px] tracking-[0.08px] text-[#757575] 
            pl-1'>
              /month
            </span>
          </p>
        </div>
        <button className=' w-[90%] h-[40px]
        px-[77px] py-[2px] 
        flex justify-center items-center
        rounded-lg
        bg-[#00CD82]
        font-roboto text-[14px] font-[500]
        leading-[36px] tracking-[0.175px] text-[#FFFFFF]
        shadow-md
        ' onClick={handleClick}>
          DEPLOY NOW
        </button>
      </div>
    </div>
  )
}

export default Cart