import React from 'react'

import { MenuRoute, Logo, UserSection } from '../../components'


const Header = () => {
  return (
    <div className='h-[7%] w-[100%] bg-white
    flex 
    justify-start
    border-b border-[#E0E0E0]'>
      <Logo />
      <MenuRoute />
      <UserSection />
    </div>
  )
}

export default Header