import React from 'react'
import { Regions, Plan, OperatingSystem,HostName } from '../../containers'

const MainContainer = () => {
    return (
        <div className='w-[782px] h-[1515px]
             rounded-[8px] bg-white 
             flex flex-col items-center py-5'>
            <Regions />
            <Plan />
            <OperatingSystem />
            <HostName />
           
        </div>
    )
}

export default MainContainer