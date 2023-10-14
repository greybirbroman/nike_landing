import React, { FC } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { Rating } from '.';

interface IProduct {
  imgURL: string | StaticImageData;
  name: string;
  price: string;
}

const defaultRatingValue = '4.5';

const PopularProductCard: FC<IProduct> = ({ imgURL, name, price }) => {
  return (
    <article className='flex flex-1 flex-col w-full max-sm:w-full'>
      <Image src={imgURL} alt={name} width={280} height={280} />

      <Rating
        rating={defaultRatingValue}
        customClass='mt-8 flex justify-start gap-2.5'
      />

      <h3 className='mt-2 text-2xl leading-normal font-palanquin'>{name}</h3>
      <p className='mt-2 font-monserrat text-2xl text-coral-red leading-normal'>
        {price}
      </p>
    </article>
  );
};

export default PopularProductCard;
