import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Heading = ({ variant, level=1, children, className='', ...props }) => {
  const HeadingTag = `h${level}`;

  const headingClass = clsx(
    {
      'text-[64px[': variant === 'xl',
      'text-[52px]': variant === 'lg',
      'text-5xl': variant === 'md',
      'text-sm': variant === 'sm',
    },
    className // Apply custom class names
  );

  return <HeadingTag className={headingClass} {...props}>{children}</HeadingTag>;
};

Heading.propTypes = {
  variant: PropTypes.oneOf(['xl', 'lg', 'md', 'sm']).isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};


export default Heading;
