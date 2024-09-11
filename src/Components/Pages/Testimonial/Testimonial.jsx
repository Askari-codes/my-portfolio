import React, { useState, useEffect } from 'react';
import PageBackground from '../Shared/PageBackground';
import TestimonialCard from './TestimonialCard';
import { testimonialContent } from '../../../Data/Data';
import useMediaQuery from '../../../hooks/useMediaQuery';

function Testimonial() {
    const isDesktop = useMediaQuery("(min-width: 1024px)")
    const [expandedTestimonial, setExpandedTestimonial] = useState(null)
    const [shortestTestimonial, setShortestTestimonial] = useState(Infinity)

    useEffect(() => {
        testimonialContent.colleagues.forEach((colleague) => {
            const testimonial = colleague.testimonial
            const testimonialLength = testimonial.length
            if (testimonialLength < shortestTestimonial) {
                setShortestTestimonial(testimonialLength)
            }
        })
    }, [shortestTestimonial])
   
    useEffect(() => {
        setExpandedTestimonial(testimonialContent.colleagues[0].id)
    }, []) 
    const handleTestimonialClick = (id, isCollapsible) => {
        if (isDesktop && (!isCollapsible && expandedTestimonial === id)) {
            return  
        }
        setExpandedTestimonial(prevId => prevId === id ? null : id) 
    } 

    const reorderedTestimonials = expandedTestimonial && isDesktop
        ? testimonialContent.colleagues.filter(colleague => colleague.id === expandedTestimonial)
            .concat(testimonialContent.colleagues.filter(colleague => colleague.id !== expandedTestimonial))
        : testimonialContent.colleagues 
    return (
        <div className='bg-[#303a43] min-h-screen text-[var(--text-color-secondary)] h-full font-[poppins]'>
            <PageBackground pageBackgroundTitle={testimonialContent.pageBackgroundTitle} pageTitle={testimonialContent.pageTitle} />
            <div className='flex flex-wrap gap-8 justify-around pb-4 mx-4'>
                {reorderedTestimonials.map(colleague => (
                    <TestimonialCard
                        key={colleague.id}
                        name={colleague.name}
                        jobRole={colleague.jobRole}
                        image={colleague.image}
                        testimonial={colleague.testimonial}
                        isExpanded={colleague.id === expandedTestimonial}
                        ExpandedTestimonial={expandedTestimonial}
                        onClick={() => handleTestimonialClick(colleague.id, colleague.isCollapsible)} 
                        minCharecters={shortestTestimonial}
                    />
                ))}
            </div>
        </div>
    ) 
}

export default Testimonial 
