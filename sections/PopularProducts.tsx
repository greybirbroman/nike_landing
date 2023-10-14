import React, { Fragment } from 'react';
import { PopularProductCard, InfoText } from '@/components';
import { products } from '@/utils/constants';

const PopularProducts = () => {
    return (
        <div id='products' className='max-container max-sm:mt-12'>
            <Fragment>
                <h2 className='text-4xl font-bold font-palanquin'>
                    Our <span className='text-coral-red'>Popular </span>Products
                </h2>
                <InfoText
                    text=' Experience top-notch quality and style with our sougth-after
                    selections. Discover a world of comfort, design, and value.'
                    customClass='mt-2'
                />
            </Fragment>
            <ul className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
                {products.map((product) => (
                    <li key={product.name}>
                        <PopularProductCard {...product} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PopularProducts;
