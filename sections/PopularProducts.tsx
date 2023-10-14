import React from 'react';
import { PopularProductCard } from '@/components';
import { products } from '@/utils/constants';

const PopularProducts = () => {
    return (
        <div id='products' className='max-container max-sm:mt-12'>
            <div>
                <h2 className='text-4xl font-bold font-palanquin'>Our{' '}<span className='text-coral-red'>Popular </span>Products</h2>
                <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
                    Experience top-notch quality and style with our sougth-after
                    selections. Discover a world of comfort, design, and value.
                </p>
            </div>
            <ul className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
              {products.map((product) => (
                <li key={product.name}>
                  <PopularProductCard {...product}/>
                </li>
              ))}
            </ul>
        </div>
    );
};

export default PopularProducts;
