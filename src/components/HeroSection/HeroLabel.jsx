import React from 'react';
import PropTypes from 'prop-types';
import Image from '../common/Image';

const HeroLabel = ({ text }) => {
  return (
    <div className="rotate-12 flex items-center space-x-2">
      <Image src="/icons/tick_gray.svg" alt="Tick Icon" width="20" height="20" />
      <span className='text-gray'>{text}</span>
    </div>
  );
};

HeroLabel.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HeroLabel;
