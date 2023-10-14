import React, { FC } from 'react';

interface ISectionTitle {
  before?: string;
  span: string;
  after?: string;
  fullWidth?: boolean;
  center?: boolean;
}

const SectionTitle: FC<ISectionTitle> = ({
  before,
  span,
  after,
  fullWidth,
  center,
}) => {
  return (
    <h2
      className={`font-palanquin text-4xl capitalize font-bold ${
        fullWidth ? 'w-full' : 'lg:max-w-lg'
      } ${center && 'text-center'}`}
    >
      {before} <span className='text-coral-red'>{span}</span> {after}
    </h2>
  );
};

export default SectionTitle;
