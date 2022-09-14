import React from 'react'

import { StyledHeader, HeaderImg } from './HeaderStyle'

import logo from '../assets/1.svg'

export default function Header() {
  return (
    <StyledHeader>
      <HeaderImg src={logo} style={{ height: '80%', background: 'inherit' }} alt='logo' />
    </StyledHeader>
  )
}
