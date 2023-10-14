import React, { FC } from 'react';
import Image from 'next/image';

interface IButton {
  label: string;
  iconURL?: string;
  variant?: string;
}

const Button: FC<IButton> = ({ label, iconURL, variant }) => {
  return (
    <button
      className={`${
        variant === 'white'
          ? 'bg-white border-slate-gray border text-slate-gray'
          : 'text-white bg-coral-red border-coral-red'
      } flex justify-center items-center gap-2 font-montserrat rounded-full px-7 py-4 leading-none text-lg`}
    >
      {label}
      {iconURL && (
        <Image
          src={iconURL}
          alt='Icon'
          width={20}
          height={20}
          className='ml-2 rounded-full'
        />
      )}
    </button>
  );
};

export default Button;
