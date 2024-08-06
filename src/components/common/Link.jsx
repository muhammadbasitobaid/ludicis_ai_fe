import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Link = ({ text, href, className = "", ...props }) => {
  const linkClass = clsx(
    'text-black transition-colors duration-300 hover:text-primary hover:underline font-medium text-16px leading-[21.86px]',
    className
  );

  return (
    <a href={href} className={linkClass} {...props}>
      {text}
    </a>
  );
};

Link.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Link;
