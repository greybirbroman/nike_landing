import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { hamburger } from '@/public/icons';
import { navLinks } from '@/utils/constants';

const Navigation = () => {
  return (
    <nav>
      <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden font-montserrat text-lg text-slate-gray'>
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <div className='hidden max-lg:block'>
        <Image
          src={hamburger}
          alt='Hamburger menu, icon'
          width={25}
          height={25}
        />
      </div>
    </nav>
  );
};

export default Navigation;
