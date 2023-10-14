import React, { FC } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface ImgURL {
  thumbnail: StaticImageData;
  bigShoe: StaticImageData;
}

interface IShoeCard {
  imgURL: ImgURL;
  onChangeImage: (arg: StaticImageData) => void;
  bigShoeImage: any;
}

const ShoeCard: FC<IShoeCard> = ({ imgURL, onChangeImage, bigShoeImage }) => {
  const handleClick = () => {
    if (bigShoeImage !== imgURL.bigShoe) {
      onChangeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`ring-2 rounded-xl ${
        bigShoeImage === imgURL.bigShoe ? 'ring-coral-red' : 'ring-transparent'
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className='flex min-h-[100px] justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <Image
          src={imgURL.thumbnail}
          alt='Shoe collection'
          width={130}
          height={100}
          className='object-contain'
        />
      </div>
    </div>
  );
};

export default ShoeCard;
