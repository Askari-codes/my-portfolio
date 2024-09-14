import React from 'react';

function TestimonialCard({
    name,
    jobRole,
    image,
    testimonial,
    isExpanded,
    onCardClick,
    minCharacters,
    isCollapsible,
}) {
    const isTestimonialCollapsed = !isExpanded && isCollapsible;
    const renderTestimonialText = () => {
        if (isExpanded) {
            return testimonial;
        } else if (isTestimonialCollapsed) {
            return (
                <>
                    {testimonial.substring(0, minCharacters)}
                    <span className="font-bold ml-1  text-[var(--color-highlight)]"> . . . </span>
                </>
            );
        } else {
            return testimonial;
        }
    };

    return (
        <div
            onClick={onCardClick}
            style={{ cursor: isCollapsible ? 'pointer' : 'default' }}
            className={`${isExpanded ? 'lg:w-[90%]' : 'lg:w-[45%]'
                } min-h-[180px] mt-10 flex flex-col justify-center bg-[var(--color-dark-slate)] text-justify p-4`}
        >
            <div className="image-part flex gap-5">
                <img className="rounded-full w-12 h-12" src={image} alt={`${name}'s avatar`} />
                <div>
                    <div>{name}</div>
                    <div>{jobRole}</div>
                </div>
            </div>
            <div className="mt-3 transition-all duration-300">
                {renderTestimonialText()}
            </div>
        </div>
    );
}

export default TestimonialCard;
