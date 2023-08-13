import React, { useState } from 'react';
import WOS from '../../assets/WOS.png';

const OPSContainer = ({ name, logo, data, isSelected, onClick }) => {

    const [notAvailable, setNotAvailable] = useState(false);
    const version = data;


    const handleClick = () => {
        onClick();
    };

    console.log(data)

    const mergedData = version.reduce((acc, current) => {
        const existingFamily = acc.find(item => item.family === current.family);
        if (existingFamily) {
            existingFamily.versions.push(current.version);
        } else {
            acc.push({
                family: current.family,
                versions: [current.version]
            });
        }
        return acc;
    }, []);

    console.log(mergedData, "📌")

    return (
        <div className={`
          w-[226px] h-[133px] 
          flex flex-col justify- items-start
          border border-[#BDBDBD] rounded-[4px]
         bg-white  cursor-pointer 
         ${isSelected ? ' !border-[#2C5EFF] shadow-lg' : 'border-[#BDBDBD]'}`} onClick={handleClick}>

            <div className='
            w-[75%] h-[50%]
            flex items-center justify-around'>
                <div className='w-[45px] h-[45px]'>
                    <img className='object-contain' src={logo} />
                </div>
                <p className='font-roboto text-[16px]
                font-[500] leading-[24px] tracking-[0.08px]'>
                    {name}
                </p>
            </div>

            <div className='w-[100%] h-[50%] 
             flex justify-center items-center'>
                <div className='w-[200px] bg-white rounded-[4px]' >
             

                    <select
                        className={`w-[190px] h-[40px]
                         flex justify-center items-center
                         rounded-[4px]  
                         outline-none  border border-[#BDBDBD] 
                         text-[#757575] font-roboto
                         px-4 first-letter:  ${isSelected ? ' !text-[#2F3857] shadow-lg' : ''}`}>

                        <option className='font-roboto text-[14px] font-[500]
                        leading-[20px] tracking-[0.035px]
                        border border-[#757575] outline-none text-[#757575]' value="">
                            Select version
                        </option>

                        {mergedData.map((res) => (
                            <React.Fragment>

                                {res.family == name
                                    ?
                                    res.versions.map((osVersion) => (
                                        <option className='text-black'>{osVersion}</option>
                                    ))
                                    : ''
                                }

                            </React.Fragment>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default OPSContainer