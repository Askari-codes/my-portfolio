import React, { useRef } from 'react';
import PageBackground from '../Shared/PageBackground';
import TestimonialCard from './TestimonialCard';
import { testimonialContent } from '../../../Data/Data';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function Testimonial() {
  const swiperRef = useRef(null);

  return (
    <div className="relative h-screen bg-[--background-application] text-[--color-text-primary] font-poppins">
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
          }}
          className="testimonial-swiper"
          loop={true}
          speed={600}
        >
          {testimonialContent.colleagues.map((colleague) => (
            <SwiperSlide
              key={colleague.id}
              className="flex items-end justify-center xxs:min-h-[45vh] xs:min-h-[42vh] md:min-h-[50vh]"
            >
              <div className="md:min-h-[360px]">
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
        <div className="custom-pagination mt-4 flex justify-center"></div>
      </div>
    </div>
  );
}

export default Testimonial;
