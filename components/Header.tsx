import React from 'react';
import { Logo, Navigation } from '.';

const Header = () => {
  return (
    <header className='max-container padding-x py-8 absolute z-10 w-full flex items-center justify-between'>
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
