'use client';
import React, { FormEvent } from 'react';
import { Button, SectionTitle } from '@/components';

const Subscribe = () => {
  return (
    <div className='max-container flex justify-between items-center max-lg:flex-col gap-10'>
      <SectionTitle before='sign up from' span='updates' after='newsletter' />
      <form
        noValidate
        onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}
        className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'
      >
        <input type='text' placeholder='subscribe@nike.com' className='input' />
        <Button label='Sign Up' />
      </form>
    </div>
  );
};

export default Subscribe;
