import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Button = ({ variant, children, iconStart = null, iconEnd = null, ...props }) => {
  const buttonClass = clsx(
    'font-medium text-xs rounded-full flex items-center justify-center px-6 py-2 transition-colors duration-300',
    {
      'bg-primary text-white hover:bg-primaryHover': variant === 'primary',
      'bg-transparent border border-lightGray text-black hover:border-grayHover hover:text-grayHover': variant === 'secondary',
      'bg-faded-gradient text-black hover:bg-faded-gradient-hover': variant === 'gradient',
      'bg-primary bg-opacity-5 text-primary': variant === 'transparentPrimary',
    }
  );

  return (
    <button className={buttonClass} {...props}>
      {iconStart && <span className="mr-2">{iconStart}</span>}
      {children}
      {iconEnd && <span className="ml-2">{iconEnd}</span>}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'gradient', 'transparentPrimary']).isRequired,
  children: PropTypes.node.isRequired,
  iconStart: PropTypes.node,
  iconEnd: PropTypes.node,
};

export default Button;
