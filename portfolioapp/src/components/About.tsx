import React from 'react'
import { WobbleCard } from './ui/wobble-card';
import { IconFileTypeJs, IconFileTypeHtml, IconFileTypeCss, IconCoffee,IconBrandFirebase, IconBrandGithub, IconApi, IconBrandReact, IconBrandTailwind, IconBrandNodejs, IconFileTypeJsx, IconBrandAws, IconBrandMongodb, IconFileTypeTsx, IconBrandNextjs, IconBrandPython, IconBrandGoogle, IconBrandMysql  } from '@tabler/icons-react';

const About = () => {
  return (
    <div className='sm:py-20 flex flex-col max-w-7xl mx-auto px-10 xl:px-0'>
        <h1 className='text-lg md:text-4xl  mb-4 text-white max-w-4xl'>
            About
        </h1>
        <p className="text-neutral-300 text-md md:text-base w-full mb-5 sm:mb-20 ">
            Get to know more about me
        </p>  
        <div className='  pb-10 h-full overflow-auto flex flex-col lg:flex-row w-full flex-grow'>
            <WobbleCard containerClassName="bg-blue-800 my-2 " className="">         
                <div className="">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white">
                        My Journey
                    </h2>
                    <p className="mt-4 text-left text-xs sm:text-base text-neutral-200">
                        My interest in technology started early, I enjoyed video games growing up and built my first computer when I was 9, followed by a few more by the time I turned 12. Later, my cousin, a software engineering graduate, introduced me to programming, which became a new area of interest. In 10th grade, I created my first program—a simple video game in the learning language "Turing"—during a computer science class. Since then, I've continued on to pursuit Software Engineering at Western Universiry
                    </p>
                </div>
            </WobbleCard>
            <WobbleCard containerClassName="bg-pink-800 lg:mx-3 my-2"className="">         
                <div className="">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white">
                        Technologies
                    </h2>
                    <p className="my-4 text-left text-xs sm:text-base  text-neutral-200">
                     Over the course of my software engineering career, I've used a wide range of technologies. This includes programming languages like JavaScript, Java, Python, and C++; libraries like ReactJS with both TSX and JSX; frameworks like NextJS and ExpressJS; databases like MySQL, PostgreSQL, and MongoDB; and platforms like AWS, GCP, and Firebase.                    </p>
                    <div className='flex flex-wrap'>
                        <IconFileTypeJs stroke={1.5} size={30} className='scale-75 sm:scale-100' /> 
                        <IconFileTypeHtml stroke={1.5} size={30} className='scale-75 sm:scale-100' /> 
                        <IconFileTypeCss stroke={1.5} size={30} className='scale-75 sm:scale-100' /> 
                        <IconFileTypeJsx stroke={1.5} size={30} className='scale-75 sm:scale-100' /> 
                        <IconFileTypeTsx stroke={1.5} size={30} className='scale-75 sm:scale-100' /> 
                        <IconBrandPython stroke={1.5} size={30} className='scale-75 sm:scale-100' /> 
                        <IconCoffee stroke={1.5} size={30} className='scale-75 sm:scale-100' /> 
                        <IconBrandReact stroke={1.5} size={30} className='scale-75 sm:scale-100' /> 
                        <IconBrandNextjs stroke={1.5} size={30} className='scale-75 sm:scale-100' /> 
                        <IconBrandNodejs stroke={1.5} size={30} className='scale-75 sm:scale-100' /> 
                        <IconBrandTailwind stroke={1.5} size={30} className='scale-75 sm:scale-100' /> 
                        <IconApi stroke={1.5} size={30} className='scale-75 sm:scale-100' /> 
                        <IconBrandMysql stroke={1.5} size={30} className='scale-75 sm:scale-100' /> 
                        <IconBrandMongodb stroke={1.5} size={30} className='scale-75 sm:scale-100' /> 
                        <IconBrandAws stroke={1.5} size={30} className='scale-75 sm:scale-100' /> 
                        <IconBrandFirebase stroke={1.5} size={30} className='scale-75 sm:scale-100' /> 
                        <IconBrandGoogle stroke={1.5} size={30} className='scale-75 sm:scale-100' /> 
                        <IconBrandGithub stroke={1.5} size={30} className='scale-75 sm:scale-100' /> 
                    </div>
                </div>
            </WobbleCard>
            <WobbleCard containerClassName="bg-purple-800 my-2"className="">         
                <div className="">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white">
                        Me
                    </h2>
                    <p className="my-4 text-left text-xs sm:text-base  text-neutral-200">
                        Beyond my passion for technology, I enjoy exploring a wide range of interests that keep life balanced and exciting. Music, especially independent and rap, is a big part of my world, along with playing and watching basketball and soccer. I’m a big Raptors fan, but Nikola Jokić is my favorite player. I’m also into weightlifting and cooking—there’s nothing like experimenting with new recipes after a good workout. These interests not only keep me grounded but also inspire fresh ideas in everything I do.
                    </p>                
                </div>
            </WobbleCard>
        </div>
    </div>
    
  );
}

export default About