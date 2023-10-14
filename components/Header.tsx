import React, { FC } from 'react';
import { Logo, Navigation } from '.';

const Header: FC = () => {
    return (
        <header className='max-container padding-x absolute left-[50%] translate-x-[-50%] py-8 z-10 w-full flex items-center justify-between'>
            <Logo />
            <Navigation />
        </header>
    );
};

export default Header;
