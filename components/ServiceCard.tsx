import React, { FC } from 'react';
import Image from 'next/image';

interface IService {
  imgURL: string;
  label: string;
  subtext: string;
}

const ServiceCard: FC<IService> = ({ imgURL, label, subtext }) => {
  return (
    <article className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'>
      <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
        <Image src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h4 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>
        {label}
      </h4>
      <p className='mt-3 break-words font-montserrat text-lg text-slate-gray leading-normal'>
        {subtext}
      </p>
    </article>
  );
};

export default ServiceCard;
