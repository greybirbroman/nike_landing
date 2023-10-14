import React, { FC } from 'react';
import Image from 'next/image';
import { Rating } from '.';

interface IReview {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
}

const ReviewCard: FC<IReview> = ({
  imgURL,
  customerName,
  rating,
  feedback,
}) => {
  return (
    <article className='flex justify-center items-center flex-col'>
      <Image
        src={imgURL}
        alt='Customer, Image'
        width={120}
        height={120}
        className='rounded-full object-cover'
      />
      <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
      <Rating
        rating={rating}
        customClass='mt-3 flex justify-center items-center gap-2.5'
      />
      <h4 className='mt-1 font-palanquin text-3xl font-bold text-center'>
        {customerName}
      </h4>
    </article>
  );
};

export default ReviewCard;
