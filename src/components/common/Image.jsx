import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Image = ({ src, alt, height, width, className, ...props }) => {
  const imageClass = clsx(className, 'object-contain');

  return (
    <img
      src={src}
      alt={alt}
      className={imageClass}
      style={{ height: height || 'auto', width: width || 'auto' }}
      {...props}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
};

Image.defaultProps = {
  height: 'auto',
  width: 'auto',
  className: '',
};

export default Image;
