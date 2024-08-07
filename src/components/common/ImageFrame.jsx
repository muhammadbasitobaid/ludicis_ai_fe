import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ImageFrame = ({ src, alt, className, ...props }) => {
  const frameClass = clsx(
    'w-full p-4 rounded-[50px] overflow-hidden bg-faded-gradient',
    className
  );

  return (
    <div className={frameClass} {...props}>
      <img src={src} alt={alt} className="w-full h-auto object-cover" />
    </div>
  );
};

ImageFrame.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ImageFrame.defaultProps = {
  className: '',
};

export default ImageFrame;
