import React from 'react';
import {
  HeroSection,
  PopularProducts,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Services,
  SuperQualityProducts,
} from '@/sections';

const Home = () => {
  return (
    <>
      <section id='home' className='xl:padding-l wide:padding-r padding-b'>
        <HeroSection />
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
      <section className='padding'>
        <SuperQualityProducts />
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffer />
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
    </>
  );
};

export default Home;
