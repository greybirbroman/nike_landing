import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LogoImage from '../public/images/header-logo.svg'

const Logo = () => {
  return (
    <Link href='/'>
      <Image src={LogoImage} alt='Nike, Logo - image' width={130} height={30} className='w-auto h-auto'/> 
    </Link>
  )
}

export default Logo
