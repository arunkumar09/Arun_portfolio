import React from 'react'
import './testimonials.css'
import ME from '../../assets/me.jpeg'
// import Swiper core and required modules
import { Pagination, Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials__container'
      // install Swiper modules
        modules={[Pagination]}
        navigation
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={ME} alt='' />
          </div>
          <h5 className='client__name'>Name1</h5>
            <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam deserunt animi totam cum? Veniam suscipit fuga voluptatem odio eligendi iure autem, voluptatum earum molestias similique optio reiciendis soluta enim eos!</small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={ME} alt='' />
          </div>
          <h5 className='client__name'>Name1</h5>
            <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam deserunt animi totam cum? Veniam suscipit fuga voluptatem odio eligendi iure autem, voluptatum earum molestias similique optio reiciendis soluta enim eos!</small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={ME} alt='' />
          </div>
          <h5 className='client__name'>Name1</h5>
            <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam deserunt animi totam cum? Veniam suscipit fuga voluptatem odio eligendi iure autem, voluptatum earum molestias similique optio reiciendis soluta enim eos!</small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials