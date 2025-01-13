import React from 'react'
import { Cover } from './ui/cover'
import Link from 'next/link'
import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react'

const Footer = () => {
  return (
    <div className='flex flex-col relative h-dvh w-full justify-center items-center'>
        <h1 className='text-4xl sm:text-6xl font-bold'>Get In 
            <Link href={"https://www.linkedin.com/in/saifattiqueahmad/"} target='_blank'>
                <Cover>Touch.</Cover>
            </Link>
        </h1>
        <div className='flex flex-row mt-4'>
            <Link href={"https://www.linkedin.com/in/saifattiqueahmad/"} target='_blank'>
                <IconBrandLinkedin stroke={2} size={48} className=' scale-75 sm:scale-100 hover:scale-125 ease-in-out duration-700'/>
            </Link>
            <Link href={"https://github.com/saifahmad02/"} target='_blank'>
                <IconBrandGithub stroke={2} size={40} className='ml-2 mt-1 scale-75 sm:scale-100 hover:scale-125 ease-in-out duration-700'/>
            </Link>
        </div>
    </div>
  )
}

export default Footer