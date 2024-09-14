import React, { useState, useEffect } from 'react';
import PageBackground from '../Shared/PageBackground';
import TestimonialCard from './TestimonialCard';
import { testimonialContent } from '../../../Data/Data';
import useMediaQuery from '../../../hooks/useMediaQuery';

function Testimonial() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const [expandedTestimonialId, setExpandedTestimonialId] = useState(null);
  const [minTestimonialLength, setMinTestimonialLength] = useState(Infinity);

  useEffect(() => {
    const minLength = testimonialContent.colleagues.reduce((minLength, colleague) => {
      const testimonialLength = colleague.testimonial.length;
      return testimonialLength < minLength ? testimonialLength : minLength;
    }, Infinity);
    setMinTestimonialLength(minLength);
  }, []);

  useEffect(() => {
    if (isDesktop) {
      setExpandedTestimonialId((prevId) => prevId || testimonialContent.colleagues[0].id);
    } else {
      setExpandedTestimonialId(null);
    }
  }, [isDesktop]);

  const handleTestimonialClick = (id, isCollapsible) => {
    if (isDesktop) {
      if (expandedTestimonialId === id) return;
      setExpandedTestimonialId(id);
    } else {
      if (!isCollapsible) return;
      setExpandedTestimonialId((prevId) => (prevId === id ? null : id));
    }
  };

  const reorderedTestimonials =
    expandedTestimonialId && isDesktop
      ? testimonialContent.colleagues
          .filter((colleague) => colleague.id === expandedTestimonialId)
          .concat(testimonialContent.colleagues.filter((colleague) => colleague.id !== expandedTestimonialId))
      : testimonialContent.colleagues;

  return (
    <div className="bg-[#303a43] min-h-screen text-[var(--text-color-secondary)] font-[poppins]">
      <PageBackground
        pageBackgroundTitle={testimonialContent.pageBackgroundTitle}
        pageTitle={testimonialContent.pageTitle}
      />
      <div className="flex flex-wrap   gap-8 justify-around pb-4 mx-4">
        {reorderedTestimonials.map((colleague) => {
          const isCollapsible = colleague.testimonial.length > minTestimonialLength;
          return (
            <TestimonialCard
              key={colleague.id}
              name={colleague.name}
              jobRole={colleague.jobRole}
              image={colleague.image}
              testimonial={colleague.testimonial}
              isExpanded={colleague.id === expandedTestimonialId}
              onCardClick={() => handleTestimonialClick(colleague.id, isCollapsible)}
              minCharacters={minTestimonialLength}
              id={colleague.id}
              isCollapsible={isCollapsible}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Testimonial;
