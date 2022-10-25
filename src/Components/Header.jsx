import React from 'react'

import { StyledHeader, HeaderImg } from './HeaderStyle'
import { FaMoon } from "react-icons/fa";


import logo from '../assets/1.svg'

export default function Header() {
  return (
    <StyledHeader>
      <HeaderImg clasName='imagemxablau' src={logo} style={{ height: '80%', background: 'inherit' }} alt='logo' />
      <FaMoon className='icone'/>
    </StyledHeader>
  )
}
