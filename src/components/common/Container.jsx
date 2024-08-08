import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Container = ({ children, className = "", sticky = false, ...props }) => {
  const containerClass = clsx(
    'max-w-[77.2%] mx-auto',
    className,
    {
      'sticky z-50 top-4': sticky
    }
  );

  return (
    <div className={containerClass} {...props}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  sticky: PropTypes.bool,
};


export default Container;
