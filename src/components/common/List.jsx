import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const List = ({ className = '', items, isBigList = false, isInside = false, ...props }) => {
  const listClass = clsx(
    'list-disc mt-2',
    { 'list-inside': isInside, 'list-outside': !isInside },
    className
  );

  return (
    <ul className={listClass} {...props}>
      {items.map((item, index) => (
        <li 
          key={index} 
          className={clsx(
            { 
              'text-gray': !isBigList, 
              'text-black mb-8 font-medium': isBigList 
            }
          )}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  isBigList: PropTypes.bool,
  isInside: PropTypes.bool,
};

export default List;

