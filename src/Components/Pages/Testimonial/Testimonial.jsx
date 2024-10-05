import React, { useRef } from 'react';
import PageBackground from '../Shared/PageBackground';
import TestimonialCard from './TestimonialCard';
import { testimonialContent } from '../../../Data/Data';
import { Swiper, SwiperSlide } from 'swiper/react';
import useMediaQuery from '../../../hooks/useMediaQuery';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function Testimonial() {
  const isSmall = useMediaQuery("(max-width:768px)")
  const swiperRef = useRef(null);

  return (
    <div className="relative font-poppins">
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
          pagination={isSmall?true:false}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
           
          }}
          loop={true}
          speed={600}
        >
          {testimonialContent.colleagues.map((colleague) => (
            <SwiperSlide
              key={colleague.id}
              className="flex items-center justify-center  xxs:min-h-[45vh] xs:min-h-[42vh] md:min-h-[50vh]"
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
      </div>
    </div>
  );
}

export default Testimonial;
