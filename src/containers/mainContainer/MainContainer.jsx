import React from 'react'
import { Regions, Plan, OperatingSystem, HostName } from '../../containers'
import { useQuantityContext } from '../../context/QuantityContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MainContainer = () => {
    const { quantity, incrementQuantity } = useQuantityContext();

    const hostNameComponents = Array.from({ length: quantity }).map((_, index) => (
        <HostName key={index} hostNumber={index} />
    ));


    return (
        <div className='w-[782px] h-[1515px]
             rounded-[8px] bg-white 
             flex flex-col items-center py-5'>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <Regions />
            <Plan />
            <OperatingSystem />

            <div className={`
            mt-5
            py-8
            flex justify-between
            flex-wrap
            w-[95%]
            overflow-x-hidden
            ${hostNameComponents.length > 2 ? `overflow-y-scroll` : `overflow-hidden`}`}>
                {hostNameComponents}
            </div>


        </div>
    )
}

export default MainContainer;