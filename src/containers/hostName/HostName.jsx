import React, { useState, useEffect } from 'react';
import { useUpdateContext } from './../../context/update';

const HostName = ({ hostNumber }) => {

  const { setUpdateComponent } = useUpdateContext();

  const [hostName, setHostName] = useState({
    region: ``, gb: ``, os: ``,
  })


  useEffect(() => {
    if (localStorage.getItem('Os')) {
      setHostName((prevHostName) => ({
        ...prevHostName,
        os: localStorage.getItem('Os'),
      }));
    }
  }, [localStorage.getItem('Os').quantity]);

  useEffect(() => {
    if (localStorage.getItem('planInfo')) {
      const planData = JSON.parse(localStorage.getItem('planInfo'));
      setHostName((prevHostName) => ({
        ...prevHostName,
        gb: planData.memory_size_in_GB,
      }));
    }
  }, [localStorage.getItem('planInfo')]);

  useEffect(() => {
    if (localStorage.getItem('regionId')) {
      setHostName((prevHostName) => ({
        ...prevHostName,
        region: localStorage.getItem('regionId'),
      }));
    }
  }, [localStorage.getItem('regionId')]);



  return (
    <React.Fragment>


      <div className=' w-[50%] px-8  pt-4 bg-white py-4
                   pb-12 rounded-[8px]' >
        <div className='w-[349px] h-[88px]
              flex flex-col justify-end items-start '>

          <p className='font-roboto text-[20px] font-[500]
             leading-[32px] tracking-[0.05px] text-[#2F3857]'>
            HostName
          </p>
          <input className='w-[90%] h-[40px]
                          flex flex-col items-start gap-[10px] px-2
                          text-[#2F3857] text-[14px] font-[500]
                          leading-[20px] tracking-[0.035px]
                          rounded-[4px]
                          border border-[#BDBDBD]' type="text"

            placeholder={`${hostName.os}-${hostName.region}-${hostName.gb}gb${hostNumber !== 0 ? `-` + hostNumber : ''}`} />
        </div>
      </div>

    </React.Fragment>
  )
}

export default HostName