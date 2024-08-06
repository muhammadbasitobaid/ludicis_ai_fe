import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Heading = ({ variant, level, children }) => {
  const HeadingTag = `h${level}`;

  const headingClass = clsx({
    'text-xl': variant === 'xl',
    'text-lg': variant === 'lg',
    'text-md': variant === 'md',
    'text-sm': variant === 'sm',
  });

  return <HeadingTag className={headingClass}>{children}</HeadingTag>;
};

Heading.propTypes = {
  variant: PropTypes.oneOf(['xl', 'lg', 'md', 'sm']).isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.node.isRequired,
};

export default Heading;
