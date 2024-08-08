import React from 'react';
import PropTypes from 'prop-types';
import PlanCard from './common/PlanCard';
import Button from './common/Button';
import Heading from './common/Heading';
import Paragraph from './common/Paragraph';
import ToggleButton from './common/ToggleButton';
import Container from './common/Container';

const PlanSection = () => {
/**
 * 
 * { backgroundImage, buttonText, heading, text, radioLabel }
 */
  const plans = [
    {
      icon: "/icons/basic_plan_icon.svg",
      planName: "Basic Plan",
      planPrice: "$10/mth",
      duration: "Billed annually",
      listItems: [
        "Access to all basic features",
        "Basic reporting and analytics",
        "Up to 10 individual users",
        "20GB individual data each user",
        "Basic chat and email support"
      ],
      buttonText: "Upgrade",
      onButtonClick: () => console.log("Upgrade to Basic Plan")
    },
    {
      icon: "/icons/business_plan_icon.svg",
      planName: "Business Plan",
      planPrice: "$20/mth",
      duration: "Billed annually",
      listItems: [
        "200+ integrations",
        "Advanced reporting and analytics",
        "Up to 20 individual users",
        "40GB individual data each user",
        "Priority chat and email support"
      ],
      buttonText: "Upgrade",
      onButtonClick: () => console.log("Upgrade to Business Plan")
    },
    {
      icon: "/icons/enterprise_plan_icon.svg",
      planName: "Enterprise Plan",
      planPrice: "$40/mth",
      duration: "Billed annually",
      listItems: [
        "Advanced custom fields",
        "Audit log and data history",
        "Unlimited individual users",
        "Unlimited individual data",
        "Personalised+priority service"
      ],
      buttonText: "Upgrade",
      onButtonClick: () => console.log("Upgrade to Enterprise Plan")
    }
  ];

  return (

    <div
      className="w-full min-h-screen bg-no-repeat bg-center py-24"
      style={{ backgroundImage: `url(/images/background_pattern.png)` }}
    >
    <Container className='flex flex-col items-center justify-center gap-16'>
      {/* First Section */}
      <div className="flex flex-col items-center gap-4">
        <Button variant={"transparentPrimary"}>Pricing plans</Button>
        <Heading variant={'md'} className='text-primary font-bold'>Plans for all sizes</Heading>
        <Paragraph variant="md" className='text-primary font-medium'>Simple, transparent pricing that grows with you. Try any plan free for 30 days.</Paragraph>
        <div className="flex items-center">
      <ToggleButton onToggle={() => console.log("Toggle")} initialState={true} label="Annual pricing (save 20%)" />
        </div>
      </div>

      {/* Second Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <PlanCard
            key={index}
            icon={plan.icon}
            planName={plan.planName}
            planPrice={plan.planPrice}
            duration={plan.duration}
            listItems={plan.listItems}
            buttonText={plan.buttonText}
            onButtonClick={plan.onButtonClick}
          />
        ))}
      </div>
    </Container>
    </div>
  );
};


export default PlanSection;
