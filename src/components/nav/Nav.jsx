import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser, AiOutlineContacts } from 'react-icons/ai'
import { GiBookCover } from 'react-icons/gi'
import {RiServiceLine} from 'react-icons/ri'

const Nav = () => {
  return (
    <nav>
      <a href='#'><AiOutlineHome /></a>
      <a href='#about'><AiOutlineUser /></a>
      <a href='#experience'><GiBookCover /></a>
      <a href='#services'><RiServiceLine /></a>
      <a href='#contact'><AiOutlineContacts/></a>
    </nav> 
  )
}

export default Nav