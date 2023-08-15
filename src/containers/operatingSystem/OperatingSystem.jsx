import React, { useState, useEffect } from 'react';
import OPSContainer from './OPSContainer';

import axios from 'axios';

import CentOS from '../../assets/CentOS.png';
import Debian from '../../assets/Debian.png';
import Fedora from '../../assets/Fedora.png';
import FreeBSD from '../../assets/FreeBSD.png';
import Rocky from '../../assets/Rocky.png';
import Ubuntu from '../../assets/Ubuntu.png';
import WOS from '../../assets/WOS.png';

import { useUpdateContext } from '../../context/update';

const OperatingSystem = () => {

  const { updateComponetn } = useUpdateContext();

  let osData = [
    {
      name: 'Windows',
      logo: WOS
    },
    {
      name: 'Ubuntu',
      logo: Ubuntu
    },
    {
      name: 'CentOS',
      logo: CentOS
    },
    {
      name: 'Debian',
      logo: Debian
    },
    {
      name: 'Fedora',
      logo: Fedora
    },
    {
      name: 'FreeBSD',
      logo: FreeBSD,
    },
    {
      name: 'Rocky',
      logo: Rocky,
    },
  ]

  const [operatingSystem, setOperatingSystem] = useState([]);
  const [selectedDiv, setSelectedDiv] = useState(null);

  const handleDivSelection = (divIndex) => {
    setSelectedDiv(divIndex === selectedDiv ? null : divIndex);
  };

  useEffect(() => {
    axios('https://assignment.abrnoc.com/operating_systems').then((res) => {
      setOperatingSystem(res.data)
    })
  }, [])

  return (
    <div className='w-[750px] h-[495px] mt-[130px] 
    flex flex-col '>
      <p className='font-roboto text-[20px]
      font-[500] leading-[32px] tracking-[0.05px] text-[#2F3857]'>
        Operating System
      </p>
      <div className='pt-6 w-[100%] 
      flex flex-wrap justify-start ml-4
      items-center gap-[20px]'>

        {osData.map((data, index) => (
          <OPSContainer
            name={data.name} logo={data.logo} data={operatingSystem}
            key={index} id={data.id}
            isSelected={selectedDiv === index + 1}
            onClick={() => handleDivSelection(index + 1)}
          />
        ))}

      </div>
    </div>
  )
}

export default OperatingSystem