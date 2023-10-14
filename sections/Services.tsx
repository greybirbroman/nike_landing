import React from 'react';
import { ServiceCard } from '@/components';
import { services } from '@/utils/constants';

const Services = () => {
  return (
    <div className='max-container'>
      <ul className='flex justify-center flex-wrap gap-9'>
        {services.map((item) => (
          <li key={item.label}>
            <ServiceCard {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
