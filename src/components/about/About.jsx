import React from 'react'
import './about.css'
import ME  from "../../assets/me.jpeg"
import { FaAward } from 'react-icons/fa'
import { ImUsers } from 'react-icons/im'
import {VscFolderOpened} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ ME} alt='me'/>
          </div>
        </div>
     

      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>13+ years working</small>
          </article>

          <article className='about__card'>
            <ImUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>Multiple clients worldwide</small>
          </article>

          <article className='about__card'>
            <VscFolderOpened className='about__icon'/>
            <h5>Projects</h5>
            <small>Many complex cross-functional projects</small>
          </article>
          </div>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit magni perspiciatis harum voluptatibus quod sequi nulla necessitatibus cumque, dolor iste libero asperiores deleniti repellat illum, quam nesciunt porro qui voluptate?
        </p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
       
      </div>
      
    </section>
  )
}

export default About