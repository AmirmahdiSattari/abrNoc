import React from 'react'

const TableHeader = () => {

  const tableHeaderStyle = `w-[143px] h-[48px] 
  p-[10px 16px] text-center gap-[10px]
  flex flex-col justify-center self-stretch
  font-roboto text-[12px] font-[500] text-[#2F3857]
  leading-[20px] tracking-[0.0.48px]`;

  return (
    <React.Fragment>
      <tr className='w-[100%] flex 
      border-b border-[#d1d8de]'>
        <th className={`
        h-[56px] 
        px-[18px] pr-[12px] pl-[32px]
        flex self-stretch items-center
        rounded-lg`}>  </th>
        <th className={tableHeaderStyle}>CPU</th>
        <th className={tableHeaderStyle}>Memory</th>
        <th className={tableHeaderStyle}>Storage</th>
        <th className={tableHeaderStyle}>Conenction Speed</th>
        <th className={tableHeaderStyle}>Monthly price</th>
      </tr>
    </React.Fragment>
  )
}

export default TableHeader