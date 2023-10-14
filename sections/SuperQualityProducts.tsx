import React from 'react';
import { Button } from '@/components';

const SuperQualityProducts = () => {
    return (
        <div
            id='about-us'
            className='flex justify-between items-center max-lg:flex-col gap-10 max-container'
        >
            <div className='flex flex-1 flex-col'>
                <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
                    We Provide You{' '}
                    <span className='text-coral-red'>Super Quality </span>
                    Shoes
                </h2>
                <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
                    Discover stylish Nike arrivals, quality comfort, and
                    innovation for your active life.
                </p>
                {/* <Button label='Show now' iconURL={arrowRight} /> */}
            </div>
        </div>
    );
};

export default SuperQualityProducts;
