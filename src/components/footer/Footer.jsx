import React from 'react'
import './footer.css'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Arun Nair</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com'><BsFacebook/></a>
        <a href='https://instagram.com'><FaInstagramSquare/></a>
        <a href='https://twitter.com'><AiFillTwitterCircle/></a>
      </div>

      <div className='footer__copyright'>
      <small>&copy; Arun Nair. All rights reserved.</small>

      </div>
    </footer>

  )
}

export default Footer