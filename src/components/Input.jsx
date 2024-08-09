import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Input = ({ type = 'text', placeholder = '', value, onChange, className, ...props }) => {
  const inputClass = clsx(
    'w-full p-2 px-4 border border-lightGray rounded-full focus:outline-none focus:border-primary transition-colors duration-300',
    className
  );

  return (
    <input 
      type={type} 
      placeholder={placeholder} 
      value={value} 
      onChange={onChange} 
      className={inputClass} 
      {...props} 
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Input;
