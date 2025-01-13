"use client"
import React from 'react'
import { Tabs } from './ui/tabs'
import Image from 'next/image'
import Link from 'next/link'
import countriesmockup from '/public/countriesmockup.png'
import basmockup from '/public/basmockup.png'
import weaimockup from '/public/weaimockup.png'
import { IconFileTypeJs, IconFileTypeHtml, IconFileTypeCss, IconBrandFirebase, IconBrandGithub, IconExternalLink, IconApi, IconBrandReact, IconBrandTailwind, IconBrandNodejs, IconFileTypeJsx, IconFileTypeSql, IconBrandAws, IconBrandMongodb, IconFileTypeTsx, IconBrandNextjs, IconBrandPython, IconBrandGoogle  } from '@tabler/icons-react';

const Projects = () => {

    const alert1 = () => {
      alert("Due to the nature of this project being a final year Capstone we arent able to host the site for the public yet. If you would like a demo please feel free to reach out.")
    }

    const alert2 = () => {
      alert("Due to the nature of this project being a final year Capstone project we arent able to share the repository yet. If you would like a demo please feel free to reach out.")
    }

    const tabs = [
        {
          title: "WE.AI",
          value: "weai",
          content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10  bg-gradient-to-br from-purple-700 to-violet-900 scrollbar-hidden">
              <div className='flex flex-row'>
                <IconBrandReact stroke={1.5} size={30} className=''/> 
                <IconBrandTailwind stroke={1.5} size={30}/>  
                <IconBrandNodejs stroke={1.5} size={30}/> 
                <IconBrandNextjs stroke={1.5} size={30}/>   
                <IconFileTypeTsx stroke={1.5} size={30} />
                <IconBrandPython stroke={1.5} size={30}/>
                <IconBrandMongodb stroke={1.5} size={30}/>
                <IconBrandGoogle stroke={1.5} size={30}/>
                <IconBrandFirebase stroke={1.5} size={30}/>
                <IconApi stroke={1.5} size={30}/>               
              </div>
              <p className='text-lg md:text-4xl font-semibold text-white mt-4'>WE.AI</p>
              <p className='mt-3 mb-10 text-xs/[14px] sm:text-base font-light'>
                Built a custom AI chatbot specifically designed for Western University engineering students to address questions related to the engineering program. Utilized Python and Beautiful Soup to scrape data from Western Engineering faculty pages, creating a comprehensive dataset. Trained Google Vertex AI directly on this custom dataset using tailored query instructions to ensure accurate and context-specific responses. Deployed the solution with a fully functional frontend built using Next.js & TailwindCSS, hosted on Firebase for seamless performance and accessibility.
              </p>
              <div className='absolute bottom-0 right-0 pr-5 pb-5 sm:pr-10 sm:pb-10'>
                <Link href={"#projects"} onClick={alert2} >
                  <IconBrandGithub stroke={1.5} size={40} className='scale-75 sm:scale-100 hover:scale-125 ease-in-out duration-700 mb-1 sm:mb-3'/>
                </Link>
                <Link href={"#projects"} onClick={alert1}>
                  <IconExternalLink stroke={1.5} size={40} className=' scale-75 sm:scale-100 hover:scale-125 ease-in-out duration-700'/>
                </Link>
              </div>
              <Image 
                alt='Countries API Game'
                src={weaimockup}
                style={{
                  width: '100%',
                  maxHeight: 'auto'
                }} className='object-contain mt-4'/>
            </div>
          ),
        },
        {
          title: "BAS Music",
          value: "bas Music",
          content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10  bg-gradient-to-br from-purple-700 to-violet-900 scrollbar-hidden">
              <div className='flex flex-row'>
                <IconBrandReact stroke={1.5} size={30}/> 
                <IconBrandTailwind stroke={1.5} size={30}/>   
                <IconBrandNodejs stroke={1.5} size={30}/>  
                <IconFileTypeJsx stroke={1.5} size={30} />
                <IconFileTypeSql stroke={1.5} size={30} />
                <IconApi stroke={1.5} size={30}/>               
                <IconBrandAws stroke={1.5} size={30}/>                               
              </div>
              <p className='text-lg md:text-4xl font-semibold text-white mt-4'>BAS Music - Music Library</p>
              <p className='mt-3 text-xs/[14px] sm:text-base font-light'>Built a comprehensive spotify style web app from the ground up using the PERN stack (PostgreSQL, Express, React, Node) and deployed the finalized product on AWS. Designed and developed a RESTful API with Express to access a vast online music archive of over 100,000 artists, albums, tracks, and genres stored in PostgreSQL. Integrated advanced functionalities into the Music App, including retrieving detailed track data such as tags and recording dates, creating and displaying playlists, and implementing filtering features to sort by track, artist, album, or song length for a seamless user experience.</p>
              <div className='absolute bottom-0 right-0 pr-5 pb-5 sm:pr-10 sm:pb-10'>
                <Link href={"https://github.com/brodysmith8/music-streaming-application"} target='_blank'>
                  <IconBrandGithub stroke={1.5} size={40} className='scale-75 sm:scale-100 hover:scale-125 ease-in-out duration-700'/>
                </Link>
              </div>
              <Image 
                alt='Countries API Game'
                src={basmockup}
                style={{
                  width: '100%',
                  maxHeight: 'auto'
                }} className='object-contain mt-4'/>
            </div>
          ),
        },
        {
          title: "Flag Guesser",
          value: "flag guesser",
          content: (              
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10  bg-gradient-to-br from-purple-700 to-violet-900 scrollbar-hidden">
              <div className='flex flex-row'>
                <IconFileTypeJs stroke={1.5} size={30}/> 
                <IconFileTypeHtml stroke={1.5} size={30}/>   
                <IconFileTypeCss stroke={1.5} size={30}/>  
                <IconBrandFirebase stroke={1.5} size={30} />
                <IconApi stroke={1.5} size={30}/>               
              </div>
              <p className='text-lg md:text-4xl font-semibold text-white mt-4'>Rest Countries Flag Guesser Game</p>
              <p className='mt-3 mb-10 text-xs/[14px] sm:text-base font-light'>Developed an interactive web-based flag guesser game by integrating the Rest Countries API to fetch and display country flag images. The application validated user inputs against the correct country names and dynamically updated the interface using DOM manipulation to show flags and track the player’s correct guess streak, enhancing user engagement. Deployed the final application on Firebase for accessibility.</p>
              <div className='absolute bottom-0 right-0 pr-5 pb-5 sm:pr-10 sm:pb-10'>
                <Link href={"https://github.com/saifahmad02/Rest-Countries-API"} target='_blank'>
                  <IconBrandGithub stroke={1.5} size={40} className='scale-75 sm:scale-100 hover:scale-125 ease-in-out duration-700 mb-1 sm:mb-3'/>
                </Link>
                <Link href={"https://rest-countries-api-game.web.app"} target='_blank'>
                  <IconExternalLink stroke={1.5} size={40} className=' scale-75 sm:scale-100 hover:scale-125 ease-in-out duration-700'/>
                </Link>
              </div>
              <Image 
                alt='Countries API Game'
                src={countriesmockup}
                style={{
                  width: '100%',
                  maxHeight: 'auto'
                }} className='object-contain mt-4'/>
            </div>
          ),
        }
      ];
      return (
        <div className="h-[35rem] md:h-[45rem] [perspective:1000px] relative b flex flex-col max-w-7xl mx-auto w-full items-start justify-start mt-20 mb-40 px-10">
            <h1 className='text-lg sm:text-4xl mb-4 text-white max-w-4xl'>
                Projects
            </h1>
            <p className="text-neutral-300 text-base w-full mb-5">
                An assortment of projects developed by me.
            </p>  
            <Tabs tabs={tabs} />
        </div>
      );
}

export default Projects