'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Button, ShoeCard } from '@/components';
import { arrowRight } from '@/public/icons';
import { bigShoe1 } from '@/public/images';
import { statistics, shoes } from '@/utils/constants';

const HeroSection = () => {

    const [bigImage, setBigImage] = useState(bigShoe1)

    return (
        <div className='w-full flex xl:flex-row flex-col gap-10 justify-center min-h-screen max-container px-2'>
            <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
                <p className='text-xl font-montserrat text-coral-red'>
                    Our Summer Collection
                </p>
                <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
                    <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
                        The New Arrival
                    </span>
                    <br />
                    <span className='text-coral-red inline-block mt-3'>Nike</span>
                    {' '}Shoes
                </h1>
                <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
                    Discover stylish Nike arrivals, quality comfort, and
                    innovation for your active life.
                </p>
                <Button label='Show now' iconURL={arrowRight} />
                <ul className='flex flex-wrap gap-16 w-full mt-20 items-center justify-starts'>
                    {statistics.map((item) => (
                        <li key={item.label}>
                            <span className='font-palanquin font-bold text-4xl'>{item.value}</span>
                            <p className='font-monsterrat leading-7 text-slate-gray'>{item.label}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-right bg-cover'>
                <Image src={bigImage} alt='Main Image, Shoe, Nike' width={610} height={600} className='object-contain z-10'/>
                <ul className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
                    {shoes.map((item, index) => (
                        <li key={index} className=''>
                            <ShoeCard imgURL={item} onChangeImage={(item) => {setBigImage(item)}} bigShoeImage={bigImage}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export { HeroSection };
