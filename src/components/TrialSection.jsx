import React from 'react';
import Container from './common/Container';
import Heading from './common/Heading';
import Paragraph from './common/Paragraph';
import Button from './common/Button';

const TrialSection = () => {
  return (
    <Container className='max-w-[70%] mb-24'>
    <div 
      className="relative w-full p-24 rounded-[40px] bg-primary bg-opacity-5 overflow-hidden"
    >
      <div 
        className="absolute bottom-0 right-0 bg-no-repeat bg-right-bottom bg-contain w-full h-full"
        style={{ backgroundImage: `url(/images/woman.png)`}}
      ></div>
      <div className="relative z-10 max-w-[70%] flex flex-col gap-6">
        <Heading variant={"lg"} className='text-primary'>Transform Your Data Today</Heading>
        <Paragraph variant='md' className={'!text-black leading-8'}>Don't let valuable insights remain hidden in your documents. With Lucidis.ai, illuminate the true potential of your data and drive your organization forward.</Paragraph>
        <div className="flex space-x-4">
            <Button variant={"primary"}>
            Start Free Trial
          </Button>
            <Button variant={"secondary"}>
            Book a Demo
          </Button>
        </div>
      </div>
    </div>
    </Container>
  );
};


export default TrialSection;
