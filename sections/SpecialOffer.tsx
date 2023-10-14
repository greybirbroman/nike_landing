import React from 'react';
import Image from 'next/image';
import { InfoText, Button } from '@/components';
import { offer } from '@/public/images';
import { arrowRight } from '@/public/icons';

const SpecialOffer = () => {
    return (
        <div className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
            <div className='flex-1'>
                <Image
                    src={offer}
                    alt='Best Offer, Image'
                    width={773}
                    height={687}
                    className='object-contain w-full'
                />
            </div>
            <div className='flex flex-1 flex-col'>
                <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
                    <span className='text-coral-red'>Special </span>
                    Offer
                </h2>
                <InfoText
                    text='Embark on a shopping journey that redifines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.'
                    customClass='mt-4'
                />
                <InfoText
                    text='Navigate a realm of possibilities designed to fullfill your uniqe desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.'
                    customClass='mt-6'
                />
                <div className='mt-11 w-fit flex flex-wrap gap-4'>
                    <Button label='Shop now' iconURL={arrowRight} />
                    <Button label='Learn more' variant='white' />
                </div>
            </div>
        </div>
    );
};

export default SpecialOffer;
