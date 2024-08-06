import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Divider = ({ variant, className = "", ...props }) => {
  const dividerClass = clsx(
    'bg-lightGray',
    {
      'min-w-full h-px': variant === 'horizontal',
      'min-h-full w-px': variant === 'vertical',
    },
    className
  );

  return (
    <div className={dividerClass} {...props} />
  );
};

Divider.propTypes = {
  variant: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
  className: PropTypes.string,
};

export default Divider;
