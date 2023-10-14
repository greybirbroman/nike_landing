import React from 'react';
import Image from 'next/image';
import { SectionTitle, InfoText, Button } from '@/components';
import { offer } from '@/public/images';
import { arrowRight } from '@/public/icons';

const SpecialOffer = () => {
  const sectionTextData = {
    sectionTitle: {
      span: 'special',
      after: 'offer',
    },
    infoTextFirst: `Embark on a shopping journey that redifines your
           experience with unbeatable deals. From premier
           selections to incredible savings, we offer unparalleled
           value that sets us apart.`,
    InfoTextSecond: `Navigate a realm of possibilities designed to fullfill
           your uniqe desires, surpassing the loftiest expectations.
           Your journey with us is nothing short of exceptional.`,
  };

  return (
    <div className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <Image
          src={offer}
          alt='Best Offer, Image'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <SectionTitle
          span={sectionTextData.sectionTitle.span}
          after={sectionTextData.sectionTitle.after}
        />
        <InfoText text={sectionTextData.infoTextFirst} customClass='mt-4' />
        <InfoText text={sectionTextData.InfoTextSecond} customClass='mt-6' />
        <div className='mt-11 w-fit flex flex-wrap gap-4'>
          <Button label='Shop now' iconURL={arrowRight} />
          <Button label='Learn more' variant='white' />
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
