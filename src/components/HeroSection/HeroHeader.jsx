import React from 'react';
import PropTypes from 'prop-types';
import Image from '../common/Image';
import Button from '../common/Button';
import clsx from 'clsx';
import HeroLabel from './HeroLabel';
import Heading from '../common/Heading';
import Paragraph from '../common/Paragraph';

const HeroHeader = ({ className = '', ...props }) => {
    const heroHeaderClass = clsx(
        'w-full flex flex-col space-y-4',
        className
    );

    return (
        <div className={heroHeaderClass} {...props}>
            {/* First Row */}
            <div className="flex gap-4 items-center w-full">
                <div className="">
                    {/* <HeroLabel text='Fast' /> */}
                </div>
                <div className="flex-grow flex justify-center">
                    <Button variant="gradient" iconStart={<Image src={"/icons/sparkles.svg"} alt="sparkles" />} iconEnd={<Image src={"/icons/arrow_right_black.svg"} alt="arrow_right_black" />}>Unleash the Power of Your Documents</Button>
                </div>
                <div className="">
                    {/* <HeroLabel text='Professional' /> */}
                </div>
            </div>

            {/* Second Row */}
            <div className="flex gap-4 items-center w-full">
                <div className="">
                    {/* <HeroLabel text='Secure' /> */}
                </div>
                <div className="flex-grow text-center">
                    <Heading variant='xl'><span className='text-primary font-medium'>Illuminate Your Data's True Potential</span></Heading>
                </div>
                <div className="">
                    {/* <HeroLabel text='Optimized' /> */}
                </div>
            </div>

            {/* Third Row */}
            <div className="flex justify-center w-[60%] mx-auto">
                <Paragraph variant='sm' className='text-center text-gray font-bold	'>
                    In today's data-driven world, information is your most valuable asset. But what happens when that information is locked away in complex documents, unstructured data, or legacy formats? Enter <span className='font-bold'>Lucidis.ai</span> – your key to unlocking the full potential of your organization's data.
                </Paragraph>
            </div>

            {/* Fourth Row */}
            <div className="flex justify-center space-x-2 w-full">
      <Button variant="primary" iconEnd={<Image src={"/icons/arrow_right_white.svg"} alt="arrow_right_white"/>}>Get Started</Button>
      <Button variant="secondary">Book a Demo</Button>
            </div>
        </div>
    );
};

HeroHeader.propTypes = {
    className: PropTypes.string,
};

export default HeroHeader;
