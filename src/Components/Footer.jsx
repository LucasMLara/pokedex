import React from 'react'

import { StyledFooter, P, InfoContainer, SocialMediaContainer} from './FooterStyle'
import { FaInstagram, FaLinkedin, FaGithubSquare } from "react-icons/fa";
const year = new Date().getFullYear()
export default function Footer() {

  return (
    <StyledFooter>
      <InfoContainer>
        <P>Lucas Muniz Lara</P>
        <P>{year}</P>
      </InfoContainer>
      <SocialMediaContainer>
        <li>
          <a href='https://www.instagram.com/lucas.m.lara/' target='_blank' rel="noreferrer">
            <FaInstagram />
          </a>
        </li>
        <a href='https://www.linkedin.com/in/lucasmlara/' target='_blank' rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href='https://github.com/LucasMLara' target='_blank' rel="noreferrer">
          <FaGithubSquare />
        </a>
      </SocialMediaContainer>
    </StyledFooter>
  )
}
