import React from 'react';
import { SectionTitle, InfoText, ReviewCard } from '@/components';
import { reviews } from '@/utils/constants';

const CustomerReviews = () => {
  const sectionTextData = {
    sectionTitle: {
      before: 'what our',
      span: 'customers',
      after: 'say?',
    },
    infoText: `Hear genuine stories from our satisfied customers
           about their exceptional experiences with us.`,
  };

  return (
    <div className='max-container'>
      <SectionTitle
        before={sectionTextData.sectionTitle.before}
        span={sectionTextData.sectionTitle.span}
        after={sectionTextData.sectionTitle.after}
        fullWidth
        center
      />
      <InfoText
        customClass='m-auto mt-4 max-w-lg text-center'
        text={sectionTextData.infoText}
      />

      <ul className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review) => (
          <li key={review.customerName}>
            <ReviewCard {...review} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerReviews;
