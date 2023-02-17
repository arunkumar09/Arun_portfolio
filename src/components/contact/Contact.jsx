import './contact.css'
import { MdEmail } from 'react-icons/md'
import { FaFacebookMessenger } from 'react-icons/fa'
import {IoLogoWhatsapp} from 'react-icons/io'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
    
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>arun.kumar09@gmaill.com</h5>
            <a href='mailto:arun.kumar09@gmaill.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Facebook Messenger</h4>
            <h5>Arun Kumar</h5>
            <a href='https://m.me/RunRunKumar/' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+1 (408) 759 1338</h5>
            <a href='https://api.whatsapp.com/send?phone=+14087591338' target='_blank'>Send a message</a>
          </article>
        </div>

        <form action=''>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact