import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Image from '../Image';
import List from '../List';

const SmallCell = ({ className, heading, text, list, ...props }) => {
  const smallCellClass = clsx(
    'w-full flex flex-col items-start p-[3rem] py-[2.5rem]',
    className
  );

  return (
    <div className={smallCellClass} {...props}>
      <Image src="/icons/tick_purple.svg" alt="Tick Icon" className='mb-4' />
      <Heading variant="sm" level={4} className='font-bold text-primary'>{heading}</Heading>
      <Paragraph className="!text-left" variant='sm'>{text || ""}</Paragraph>
      {list && (
        <List items={list}/>
      )}
    </div>
  );
};

SmallCell.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
};

export default SmallCell;
