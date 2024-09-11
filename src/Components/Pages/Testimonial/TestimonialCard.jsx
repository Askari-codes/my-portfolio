import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import useMediaQuery from '../../../hooks/useMediaQuery';

function TestimonialCard({ name, jobRole, image, testimonial, isExpanded, onClick, minCharecters }) {
    const [isCollapsible, setIsCollapsible] = useState(false);
    const [isTestimonialCollapsed, setIsTestimonialCollapsed] = useState(isExpanded ? false : true);
    const isLargeScreen = useMediaQuery("(min-width:1536px)");
    const testimonialRef = useRef(null);
    const testimonialCardRef = useRef(null);
    const linesLimit = isLargeScreen ? 4 : 5;

    useLayoutEffect(() => {
        const testimonialElement = testimonialRef.current;
        const lineHeight = parseFloat(getComputedStyle(testimonialElement).lineHeight);
        const maxHeight = lineHeight * linesLimit;

        if (testimonialElement.scrollHeight > maxHeight) {
            setIsCollapsible(true)
        } else {
            setIsCollapsible(false)
        }
    }, []);
    useEffect(() => {

    }, [])

    useLayoutEffect(() => {
        if (isExpanded) {
            setIsTestimonialCollapsed(false)
        } else if (isCollapsible) {
            setIsTestimonialCollapsed(true)
        } else {
            setIsTestimonialCollapsed(false)
        }
    }, [isExpanded, isCollapsible]);

    const clickHandler = () => {
        onClick(isCollapsible);
    };

    return (
        <div
            ref={testimonialCardRef}
            className={`${isExpanded ? 'lg:w-[95%]' : 'lg:w-[45%] '} flex flex-col bg-[var(--color-dark-slate)] text-justify p-4`}
        >
            <div className="image-part flex gap-5">
                <img className="rounded-full w-12 h-12" src={image} alt="" />
                <div>
                    <div>{name}</div>
                    <div>{jobRole}</div>
                </div>
            </div>
            <div
                ref={testimonialRef}
                onClick={clickHandler}
                className={`mt-3 transition-all duration-300 ${isTestimonialCollapsed && isCollapsible ? '' : ''}`}
            >
                {`${isExpanded ? testimonial : (isCollapsible ? testimonial.substring(0, minCharecters) + "..." : testimonial)}`}

            </div>
        </div>
    );
}

export default TestimonialCard;
