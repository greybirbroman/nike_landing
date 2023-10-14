import React from 'react';
import Image from 'next/image';
import { Button, InfoText, SectionTitle } from '@/components';
import { shoe8 } from '@/public/images';

const SuperQualityProducts = () => {
  const sectionTextData = {
    sectionTitle: {
      before: 'we provide you',
      span: 'super quality',
      after: 'shoes',
    },
    infoTextFirst:
      'Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.',
    infoTextSecond:
      'Our dedication to detail and excellence ensures your satisfaction',
  };

  return (
    <div className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex flex-1 flex-col'>
        <SectionTitle
          before={sectionTextData.sectionTitle.before}
          span={sectionTextData.sectionTitle.span}
          after={sectionTextData.sectionTitle.after}
        />
        <InfoText text={sectionTextData.infoTextFirst} customClass='mt-4' />
        <InfoText text={sectionTextData.infoTextSecond} customClass='mt-6' />
        <div className='mt-11 w-fit'>
          <Button label='View details' />
        </div>
      </div>
      <div className='flex flex-1 justify-center items-center'>
        <Image
          src={shoe8}
          alt='Image, Shoes'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </div>
  );
};

export default SuperQualityProducts;
