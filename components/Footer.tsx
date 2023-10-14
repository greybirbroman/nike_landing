import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '.';
import { footerLogo } from '@/public/images';
import { socialMedia, footerLinks } from '@/utils/constants';
import { copyrightSign } from '@/public/icons';

const Footer: FC = () => {
  return (
    <footer className='padding-x padding-t pb-8 bg-black'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <Logo logo={footerLogo} width={150} height={46} />

          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>

          <ul className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <li
                key={icon.alt}
                className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
              >
                <Image src={icon.src} alt={icon.alt} width={24} height={24} />
              </li>
            ))}
          </ul>
          <ul className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap mt-16'>
            {footerLinks.map((section) => (
              <li key={section.title}>
                <h5 className='text-white font-montserrat text-2xl leading-normal font-medium mb-6'>
                  {section.title}
                </h5>
                <ul>
                  {section.links.map((link) => (
                    <li
                      key={link.name}
                      className='mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer'
                    >
                      <Link href={link.link}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='flex justify-center mt-24 max-sm:flex-col max-sm:items-center text-white-400'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer '>
          <Image
            src={copyrightSign}
            alt='Copyright, Icon'
            width={20}
            height={20}
          />
          <span>Copyright. All rights reserved.</span>
        </div>
        <p className='font-montserrat'>Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
