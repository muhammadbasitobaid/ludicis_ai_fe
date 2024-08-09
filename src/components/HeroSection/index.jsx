import React from 'react'
import HeroHeader from './HeroHeader'
import Container from '../common/Container'
import ImageFrame from '../common/ImageFrame'
import Heading from '../common/Heading'
import Image from '../common/Image'

const HeroSection = () => {
  return (
    <Container className='mt-24 mb-14 flex flex-col gap-14'>
    <HeroHeader/>
    <ImageFrame
      src="/images/hero_img.png"
      alt="Hero Image"
      />
      <div className='flex flex-col justify-center text-center gap-14'>
        <Heading variant='sm' className='font-medium'>Trusted By Innovative Companies Worldwide</Heading>
        <Image src={"/images/company_icons.png"} alt="Company Icons" />
      </div>
    </Container>
  )
}

export default HeroSection