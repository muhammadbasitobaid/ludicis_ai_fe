import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import parse from 'html-react-parser';

const Paragraph = ({ variant = 'sm', children="", className, ...props }) => {
  const paragraphClass = clsx(
    'text-gray',
    {
      'text-base': variant === 'sm',
      'text-[18px]': variant === 'md',
      'text-[20px]': variant === 'lg',
    },
    className
  );

  return (
    <p className={paragraphClass} {...props}>
      {typeof children === 'string' ? parse(children) : children}
    </p>
  );
};

Paragraph.propTypes = {
  variant: PropTypes.oneOf(['sm', 'md', 'lg']).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};


export default Paragraph;
