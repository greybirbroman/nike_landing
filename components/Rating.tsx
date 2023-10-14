import React, { FC, Fragment } from 'react';
import Image from 'next/image';
import { star } from '@/public/icons';

interface IRating {
    rating: number | string;
    customClass?: string;
}

const Rating:FC<IRating> = ({ rating, customClass }) => {
    return (
        <div className={customClass}>
            <Image
                src={star}
                alt='Star, Icon'
                width={24}
                height={24}
                className='object-contain m-0'
            />
            <span className='text-xl font-montserrat text-slate-gray'>
                ({rating})
            </span>
        </div>
    );
};

export default Rating;
