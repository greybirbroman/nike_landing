import React from 'react';
import Image from 'next/image';
import { Button, InfoText } from '@/components';
import { shoe8 } from '@/public/images';

const SuperQualityProducts = () => {
    return (
        <div
            id='about-us'
            className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
        >
            <div className='flex flex-1 flex-col'>
                <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
                    We Provide You{' '}
                    <span className='text-coral-red'>Super Quality </span>
                    Shoes
                </h2>
                <InfoText
                    text='Ensuring premium comfort and style, our meticulously crafted
                    footwear is designed to elevate your experience, providing
                    you with unmatched quality, innovation, and a touch of
                    elegance.'
                    customClass='mt-4'
                />
                <InfoText
                    text='Our dedication to detail and excellence ensures your satisfaction'
                    customClass='mt-6'
                />
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
