import React, { FC } from 'react';

interface IReview {
    imgURL: string;
    customerName: string;
    rating: number;
    feedback: string;
}

const ReviewCard:FC<IReview> = ({ imgURL, customerName, rating, feedback }) => {
    return (
        <article>

        </article>
    )
};

export default ReviewCard;
