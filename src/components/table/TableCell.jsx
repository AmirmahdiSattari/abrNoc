import React, { useState,useEffect } from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { FaRegCaretSquareDown } from 'react-icons/fa';
import './TableCell.css'
import { useUpdateContext } from '../../context/update';
import { useRegionContext } from '../../context/RegionContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TableCell = ({ rowIndex, onSelect, onClick, isSelected, data, id }) => {

    const { update, setUpdate } = useUpdateContext();

    const [isTooltipVisible, setIsTooltipVisible] = useState(false);

    const tableCellStyles = `w-[143.6px] h-[56px]
    p-[10px 16px] items-center gap-[10px]
    flex flex-col justify-center self-stretch
    font-roboto text-[14px] font-[400]
    leading-[22px] tracking-[0.014px]
    text-[#2F3857]`;

    const { selectedRegion } = useRegionContext();

    const handleRadioChange = (e) => {
        onSelect(rowIndex);

        if (selectedRegion) {
            if (data.id === e.target.id) {
                localStorage.setItem('planInfo', JSON.stringify(data));
                setUpdate(!update)
            }
            console.log(localStorage.getItem('planInfo'));
        } else {
            toast.error('Select Region', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

    };

    return (
        <React.Fragment>
            {data ?
                <tr className='w-[100%] flex 
                   border-b border-[#d1d8de]' id={id}>
                    <td className={`
                     h-[56px] 
                     px-[18px] pr-[12px] pl-[32px]
                     flex self-stretch items-center
                     rounded-lg`}>
                        <input type="radio" onChange={(e) => handleRadioChange(e)} id={id} checked={isSelected} />
                    </td>
                    <td className={tableCellStyles}>{data.cpu_cores} CPU</td>
                    <td className={tableCellStyles}>{data.memory_size_in_GB} GB</td>
                    <td className={tableCellStyles}>15 GB</td>
                    <td className={tableCellStyles}>Up to {data.connection_up_bound_speed} Gbps</td>
                    <td className={`${tableCellStyles} !flex-row !justify-evenly`}>

                        <div>$ {data.monthly_price}</div>


                        <div className={`flex flex-col justify-center items-center tooltip-container`}
                            onMouseEnter={() => setIsTooltipVisible(true)}
                            onMouseLeave={() => setIsTooltipVisible(false)}>
                            <span>
                                <AiOutlineInfoCircle
                                    className='w-[20px] h-[20px]
                                text-[#9E9E9E] hover:text-[#2F3857]' />
                            </span>
                            <span className={`tooltip bg-[#2F3857] text-[#FFF]
                                font-roboto text-[10px] font-[400] 
                                leading-[20px] tracking-[0.035px]
                                px-2 rounded-md mt-12  ${isTooltipVisible ? 'absolute' : 'hidden'}`}>
                                {data.hourly_price} /hour
                            </span>
                        </div>
                    </td>
                </tr>
                :
                <span></span>

            }
        </React.Fragment>
    )
}

export default TableCell