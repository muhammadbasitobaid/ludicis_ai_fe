import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ToggleButton = ({ label, className, onToggle, initialState = false, ...props }) => {
  const [isToggled, setIsToggled] = useState(initialState);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    if (onToggle) {
      onToggle(!isToggled);
    }
  };

  const toggleButtonClass = clsx(
    'relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300',
    isToggled ? 'bg-primary' : 'bg-gray-300',
    className
  );

  const toggleCircleClass = clsx(
    'inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300',
    isToggled ? 'translate-x-6' : 'translate-x-1'
  );

  const labelClass = clsx(
    'ml-3 text-base font-medium',
    isToggled ? 'text-primary' : 'text-gray-700'
  );

  return (
    <div className="flex items-center">
      <button type="button" className={toggleButtonClass} onClick={handleToggle} {...props}>
        <span className={toggleCircleClass}></span>
      </button>
      {label && <span className={labelClass}>{label}</span>}
    </div>
  );
};

ToggleButton.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  onToggle: PropTypes.func,
  initialState: PropTypes.bool,
};

export default ToggleButton;
