import React, { useState, useEffect } from 'react';
import { TableHeader, TableCell } from '../../components';
import axios from 'axios'
import { AiFillWarning } from 'react-icons/ai';

const Plan = () => {

  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedDiv, setSelectedDiv] = useState(null);

  const handleDivSelection = (divIndex) => {
    setSelectedDiv(divIndex === selectedDiv ? null : divIndex);
  };

  const [plans, setPlans] = useState([]);

  const handleRowSelect = (index) => {
    setSelectedRow(index);
  };

  useEffect(() => {
    axios(`https://assignment.abrnoc.com/plans?region=US`).then((res) => {
      setPlans(res.data);
    })
  }, [])

  return (
    <div className='w-[782px] h-[600px] 
    flex flex-col items-start py-4 mb-4 mt-11'>
      <p className='font-roboto text-[20px]
       font-[500] leading-[32px] tracking-[0.05px]
       text-[#2F3857] pl-6 mb-6'>Plan</p>

      <table className='w-[782px]'>

        <TableHeader />

        {
          plans !== [] ? 
           plans.map((data, index) => (
          <TableCell
            key={index} id={data.id}
            isSelected={selectedRow  === index + 1}
            onSelect={handleRowSelect}
            rowIndex={ index + 1}
            data={data}
            onClick={() => handleDivSelection(index + 1)} />
        )): <span>No Data found</span>}

      </table>
    </div>
  )
}

export default Plan