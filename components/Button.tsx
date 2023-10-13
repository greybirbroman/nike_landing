import React from 'react'
import Image from 'next/image'

interface ButtonProps {
    label: string,
    iconURL: string,
}

const Button = ({ label, iconURL }: ButtonProps) => {
  return (
    <button className='flex justify-center items-center gap-2 font-montserrat bg-coral-red rounded-full text-white border-coral-red px-7 py-4 leading-none text-lg'>
      {label}
      <Image src={iconURL} alt='Icon' width={20} height={20} className='ml-2 rounded-full'/>
    </button>
  )
}

export default Button
