import React from 'react';
import { InfoText, ReviewCard } from '@/components';
import { reviews } from '@/utils/constants';

const CustomerReviews = () => {
    return (
        <div className='max-container'>
            <h2 className='font-palanquin text-center text-4xl font-bold'>
                What Our <span className='text-coral-red'>Customers</span> Say?
            </h2>
            <InfoText
                customClass='m-auto mt-4 max-w-lg text-center'
                text='Hear genuine stories from our satisfied customers about their exceptional experiences with us.'
            />
            <ul className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
                {reviews.map((review) => (
                    <li key={review.customerName}>
                        <ReviewCard {...review} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerReviews;
