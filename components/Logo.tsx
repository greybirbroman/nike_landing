import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import defaultImage from '../public/images/header-logo.svg';
import { StaticImageData } from 'next/image';

interface ILogo {
    logo?: StaticImageData;
    width?: number;
    height?: number;
}

const Logo = ({ logo, width, height }: ILogo) => {
    return (
        <Link href='/'>
            <Image
                src={logo || defaultImage}
                alt='Nike, Logo - image'
                width={width || 130}
                height={height || 30}
                className='w-auto h-auto'
            />
        </Link>
    );
};

export default Logo;
