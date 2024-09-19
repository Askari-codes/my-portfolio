import React from 'react';

function TestimonialCard({ name, jobRole, image, testimonial }) {
  return (
    <div className="p-6 md:p-8 mt-6 md:mt-10  flex flex-col justify-center  md:h-[300px] 2xl:h-[250px] 2xl:max-w-[40vw]    bg-[--color-accent] text-[var(--color-text-primary)] text-justify rounded-lg shadow-lg border border-[--color-border] md:transition-transform transform md:hover:scale-105">
      {/* Image and Name */}
      <div className="image-part flex gap-5 items-center">
        <img
          className="rounded-full w-12 h-12"
          src={image}
          alt={`${name}'s avatar`}
          loading="lazy"
        />
        <div>
          <div className="font-semibold text-lg text-[--color-primary]">{name}</div>
          <div className="text-[var(--color-placeholder)] text-sm md:text-base">{jobRole}</div>
        </div>
      </div>
      
      {/* Accent Divider */}
      <div className="mt-4 mb-4 border-b border-[--color-border]"></div>
      
      {/* Testimonial Text */}
      <div className="mt-3 text-sm md:text-base leading-relaxed">
        {testimonial}
      </div>
    </div>
  );
}

export default TestimonialCard;
