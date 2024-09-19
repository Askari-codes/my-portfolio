import React, { useState, useRef } from 'react';
import PageBackground from '../Shared/PageBackground';
import TestimonialCard from './TestimonialCard';
import { testimonialContent } from '../../../Data/Data';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function Testimonial() {
  const swiperRef = useRef(null);





  // const getAlignmentClass = (index, ) => {
  //   return index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start';
  // };

  return (
    <div className="bg-[var(--color-background)] min-h-screen text-[var(--color-text-primary)] font-poppins relative">
      <PageBackground
        pageBackgroundTitle={testimonialContent.pageBackgroundTitle}
        pageTitle={testimonialContent.pageTitle}
      />
      <div className="px-4 py-8">
        <Swiper
          ref={swiperRef}
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true, el: '.custom-pagination' }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
            // 1280: { slidesPerView: 3 }
          }}
          className="testimonial-swiper"
          loop={true} // Optional: Enable looping
          speed={600} // Optional: Adjust transition speed
        >
          {testimonialContent.colleagues.map((colleague, index) => (
            <SwiperSlide
              key={colleague.id}
              className={`xxs:min-h-[45vh] xs:min-h-[42vh]  md:min-h-[50vh] flex justify-center items-end  `}
            >
              <div className=' md:min-h-[360px]'>
                <TestimonialCard
                  name={colleague.name}
                  jobRole={colleague.jobRole}
                  image={colleague.image}
                  testimonial={colleague.testimonial}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Pagination Wrapper */}
        <div className="custom-pagination mt-4 flex justify-center"></div>
      </div>
    </div>
  );
}

export default Testimonial;
