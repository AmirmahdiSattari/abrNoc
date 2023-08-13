import React, { useState,useEffect } from 'react'
import { Country } from '../../components'
import axios from 'axios'
import America from '../../assets/America.png'
import Germany from '../../assets/Germany.png'
import Japan from '../../assets/Japan.png'
import Spain from '../../assets/Spain.png'

const Regions = () => {
  const [selectedDiv, setSelectedDiv] = useState(null);

  const handleDivSelection = (divIndex) => {
    setSelectedDiv(divIndex === selectedDiv ? null : divIndex);
  };

  let countries = [
    { flag: America, name: 'Los Angeles' },
    { flag: Germany, name: 'Germany' },
    { flag: Japan, name: 'Japan' },
    { flag: Spain, name: 'Spain' },
  ]

  useEffect(() =>{
    axios('https://assignment.abrnoc.com/regions').then((res)=>{
      console.log(res.data)
    })
  },[])

  return (
    <div className=' w-[718px] h-[120px] 
    flex flex-col items-start justify-between mt-3'>
      <p className='font-roboto text-[20px] font-[500] mb-5'>Region</p>
      <div className='flex gap-[20px]'>

        {countries.map((data, index) => (
          <Country
            flag={data.flag} name={data.name}
            key={index} id={data.id}
            isSelected={selectedDiv === index + 1}
            onClick={() => handleDivSelection(index + 1)} />
        ))}

      </div>
    </div>
  )
}

export default Regions 