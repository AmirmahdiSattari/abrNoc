import React from 'react'

const HostName = () => {
  return (
    <div className=' w-[100%] px-8  pt-4 bg-white py-4
    pb-12 rounded-[8px]' >
      <div className='w-[349px] h-[88px]
    flex flex-col justify-end items-start '>

        <p className='font-roboto text-[20px] font-[500]
    leading-[32px] tracking-[0.05px] text-[#2F3857]'>
          HostName
        </p>
        <input className='w-[100%] h-[40px]
    flex flex-col items-start gap-[10px] px-2
    text-[#2F3857] text-[14px] font-[500]
    leading-[20px] tracking-[0.035px]
    rounded-[4px]
    border border-[#BDBDBD]' type="text"
          placeholder='ubuntu-DE-Frankfurt-1gb' />
      </div>
    </div>
  )
}

export default HostName