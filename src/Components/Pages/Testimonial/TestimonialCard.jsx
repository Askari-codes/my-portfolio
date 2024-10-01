import React from 'react';

function TestimonialCard({ name, jobRole, image, testimonial }) {
  return (
    <div className="mt-6 h-[290px] p-6 text-justify rounded-lg shadow-lg md:p-8 md:mt-10 xl:h-[250px] 2xl:h-[220px] 3xl:h-[200px] 2xl:w-[600px] 3xl:min-w-[700px] bg-[--background-cards] text-[--color-text-primary] border-[1px] border-[--border-cards] md:transition-transform transform md:hover:scale-105">
      <div className="flex items-center gap-5 image-part">
        <img
          className="w-12 h-12 rounded-full"
          src={image}
          alt={`${name}'s avatar`}
          loading="lazy"
        />
        <div>
          <div className="text-lg font-semibold text-[--color-blue-700]">
            {name}
          </div>
          <div className="text-sm text-[--text-job-title-testimonial] md:text-base">
            {jobRole}
          </div>
        </div>
      </div>

      <div className="my-4 border-b-[1px] border-[--border-cards]"></div>

      <div className="mt-3 text-sm leading-relaxed md:text-base">
        {testimonial}
      </div>
    </div>
  );
}

export default TestimonialCard;
