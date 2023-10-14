import React from 'react';
import { PopularProductCard, SectionTitle, InfoText } from '@/components';
import { products } from '@/utils/constants';

const PopularProducts = () => {

  const sectionTextData = {
    sectionTitle: {
      before: 'our ',
      span: 'popular',
      after: 'products',
    },
    infoText:
      'Experience top-notch quality and style with our sougth-after selections. Discover a world of comfort, design, and value.',
  };

  return (
    <div className='max-container max-sm:mt-12'>
      <SectionTitle
        before={sectionTextData.sectionTitle.before}
        span={sectionTextData.sectionTitle.span}
        after={sectionTextData.sectionTitle.after}
      />
      <InfoText text={sectionTextData.infoText} customClass='mt-2' />
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
