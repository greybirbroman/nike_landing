'use client';
import React, { FormEvent } from 'react';
import { Button } from '@/components';

const Subscribe = () => {
    return (
        <div
            id='contact-us'
            className='max-container flex justify-between items-center max-lg:flex-col gap-10'
        >
            <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>
                Sign Up from <span className='text-coral-red'>Updates</span> &
                Newsletter
            </h3>
            <form
                noValidate
                onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}
                className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'
            >
                <input
                    type='text'
                    placeholder='subscribe@nike.com'
                    className='input'
                />
                <Button label='Sign Up' />
            </form>
        </div>
    );
};

export default Subscribe;
