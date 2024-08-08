import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ImageFrame from './ImageFrame';
import Heading from './Heading';
import List from './List';
import Paragraph from './Paragraph';

const TwoSectionLayout = ({ className, heading, listItems, imageSrc, text, reverse = false, ...props }) => {
    const layoutClass = clsx(
        'w-full flex py-36',
        className,
        { 'flex-row-reverse': reverse }
    );

    return (
        <div className={layoutClass} {...props}>
            {/* Left Section */}
            <div className="flex-1 flex flex-col items-start justify-start">
                <Heading variant={'md'} level={3} className='text-primary font-medium'>{heading}</Heading>
                {
                    listItems && (
                        <div className="relative w-full">
                            <List items={listItems} isBigList isInside />
                            <div className="absolute z- bottom-0 left-0 w-full h-60 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                        </div>
                    )
                }
                <div className='relative w-full'>

                    {text && <Paragraph variant='sm'>{text}</Paragraph>}
                </div>
            </div>
            {/* Right Section */}
            <div className="flex-1 p-6 flex items-start justify-start">
                <ImageFrame src={imageSrc} alt="Right Section Image" className="max-w-full h-auto" />
            </div>
        </div>
    );
};

TwoSectionLayout.propTypes = {
    className: PropTypes.string,
    heading: PropTypes.string.isRequired,
    listItems: PropTypes.arrayOf(PropTypes.string),
    text: PropTypes.string,
    imageSrc: PropTypes.string.isRequired,
    reverse: PropTypes.bool, // New prop to control the order of sections
};

export default TwoSectionLayout;
