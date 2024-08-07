import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Heading = ({ variant, level, children, className, ...props }) => {
  const HeadingTag = `h${level}`;

  const headingClass = clsx(
    {
      'text-xl': variant === 'xl',
      'text-lg': variant === 'lg',
      'text-md': variant === 'md',
      'text-sm': variant === 'sm',
    },
    className // Apply custom class names
  );

  return <HeadingTag className={headingClass} {...props}>{children}</HeadingTag>;
};

Heading.propTypes = {
  variant: PropTypes.oneOf(['xl', 'lg', 'md', 'sm']).isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Heading.defaultProps = {
  className: '',
};

export default Heading;
