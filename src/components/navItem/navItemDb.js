import {
    AiOutlineDashboard, AiOutlinePlusSquare,
    AiOutlineCopy, AiOutlineKey, AiOutlineControl,
    AiOutlineDown
    , AiOutlineWifi, AiOutlineBarChart
  } from "react-icons/ai";
  
  import { FaDollarSign, } from "react-icons/fa";
  

export let upperMenuItemsData = [
    {
        name: 'Dashbord',
        logo: AiOutlineDashboard
    },
    {
        name: 'Instances',
        logo: AiOutlinePlusSquare
    },
    {
        name: 'Snapshots',
        logo: AiOutlineCopy
    },
    {
        name: 'SSH Keys',
        logo: AiOutlineKey
    },
    {
        name: 'Volume',
        logo: AiOutlineControl
    },
];

export let lowerMenuItemsData = [
    {
        name: 'Billing',
        logo: FaDollarSign,
        secondLogo: AiOutlineDown
    },
    {
        name: 'NetWorking',
        logo: AiOutlineWifi
    },
    {
        name: 'Report',
        logo: AiOutlineBarChart
    },
]