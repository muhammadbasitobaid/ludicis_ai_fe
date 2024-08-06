import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Paragraph = ({ variant = 'sm', children, className, ...props }) => {
  const paragraphClass = clsx(
    'text-center text-gray',
    {
      'text-sm': variant === 'sm',
      'text-md': variant === 'md',
      'text-lg': variant === 'lg',
    },
    className
  );

  return (
    <p className={paragraphClass} {...props}>
      {children}
    </p>
  );
};

Paragraph.propTypes = {
  variant: PropTypes.oneOf(['sm', 'md', 'lg']).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Paragraph.defaultProps = {
  className: '',
};

export default Paragraph;
