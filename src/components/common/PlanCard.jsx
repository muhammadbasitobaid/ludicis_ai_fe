import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Paragraph from './Paragraph';
import Heading from './Heading';
import Image from './Image';
import Button from './Button';


const IconLabel = ({label}) => {
return (
  <div className="flex gap-4">
    <Image src={"/icons/check_mark_icon.svg"} alt=""  width="40" height="40" />
    <Paragraph variant="sm" className="text-gray">{label}</Paragraph>
  </div>
)

}

const PlanCard = ({ icon, planName, planPrice, duration, listItems, buttonText, onButtonClick, className, ...props }) => {
  const cardClass = clsx(
    'bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center gap-6',
    className
  );

  return (
    <div className={cardClass} {...props}>
      <Image src={icon} alt="plan-icon" />
      <Paragraph variant='sm' className={'text-primary font-bold'}>{planName}</Paragraph>
      <Heading variant="md" level={4} className="font-bold">
        {planPrice}
        </Heading>
      <Paragraph variant='sm' className={'text-gray'}>{duration}</Paragraph>
      <div className='flex flex-col gap-8'>

        {listItems.map((item, index) => (
          <IconLabel key={index}  label={item} />
        ))}
      </div>
      <button 
        className="mt-11 bg-primary text-white py-2 px-4 rounded-full hover:bg-primaryHover transition-colors duration-300 w-full"
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

PlanCard.propTypes = {
  icon: PropTypes.string.isRequired,
  planName: PropTypes.string.isRequired,
  planPrice: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttonText: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default PlanCard;
