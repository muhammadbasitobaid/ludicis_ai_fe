import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const BigCell = ({ className, children, ...props }) => {
  const bigCellClass = clsx(
    'w-full flex flex-col items-center p-4 pt-12',
    className
  );

  return (
    <div className={bigCellClass} {...props}>
      {children}
    </div>
  );
};

BigCell.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default BigCell;
