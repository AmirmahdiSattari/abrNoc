import React, { useState, useEffect } from 'react'

import axios from 'axios'
import America from '../../assets/America.png'
import Germany from '../../assets/Germany.png'
import Japan from '../../assets/Japan.png'
import Spain from '../../assets/Spain.png'
import Country from './../../components/country/Country';

const Regions = () => {
  const [selectedDiv, setSelectedDiv] = useState(null);
  const [country, setCountry] = useState([]);

  const handleDivSelection = (divIndex) => {
    setSelectedDiv(divIndex === selectedDiv ? null : divIndex);
  };

  let countries = [
    { flag: America, name: 'US' },
    { flag: Germany, name: 'Germany' },
    { flag: Japan, name: 'Japan' },
    { flag: Spain, name: 'Spain' },
  ]

  useEffect(() => {
    axios('https://assignment.abrnoc.com/regions').then((res) => {
      setCountry(res.data)
    })
  }, [])


  return (
    <div className=' w-[718px] h-[120px] 
    flex flex-col items-start justify-between mt-3'>
      <p className='font-roboto text-[20px] font-[500] mb-5'>Region</p>
      <div className='flex gap-[20px]'>

        {countries.map((data, index) => (
          <React.Fragment>

            {country != [] &&

              country.map((res) => (res.name === data.name ?
                <React.Fragment>
                  <Country
                    flag={data.flag} name={data.name}
                    key={index} id={res.name}
                    isSelected={selectedDiv === index + 1}
                    onClick={() => handleDivSelection(index + 1)} />
                </React.Fragment>
                : ''))}
          </React.Fragment>
        ))}

      </div>
    </div>
  )
}

export default Regions 