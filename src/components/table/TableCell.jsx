import React, { useState } from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { FaRegCaretSquareDown } from 'react-icons/fa';


const TableCell = ({ rowIndex,onSelect, onClick, isSelected, data }) => {
   
    const tableCellStyles = `w-[143.6px] h-[56px]
    p-[10px 16px] items-center gap-[10px]
    flex flex-col justify-center self-stretch
    font-roboto text-[14px] font-[400]
    leading-[22px] tracking-[0.014px]
    text-[#2F3857]`;

    const handleRadioChange = () => {
        onSelect(rowIndex);
    };

    return (
        <React.Fragment>
            {data ?
                <tr className='w-[100%] flex 
                   border-b border-[#d1d8de]'>
                    <td className={`
                     h-[56px] 
                     px-[18px] pr-[12px] pl-[32px]
                     flex self-stretch items-center
                     rounded-lg`}>
                        <input type="radio"
                            onChange={handleRadioChange}
                            checked={isSelected}
                        />
                    </td>
                    <td className={tableCellStyles}>{data.cpu_cores} CPU</td>
                    <td className={tableCellStyles}>{data.memory_size_in_GB} GB</td>
                    <td className={tableCellStyles}>15 GB</td>
                    <td className={tableCellStyles}>Up to {data.connection_up_bound_speed} Gbps</td>
                    <td className={`${tableCellStyles} !flex-row`}>
                        <span>$ {data.monthly_price}</span>
                        <span><AiOutlineInfoCircle /></span>
                    </td>
                </tr>
                :
                <span></span>

            }
        </React.Fragment>
    )
}

export default TableCell