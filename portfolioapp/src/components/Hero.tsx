import React from 'react'
import { BackgroundLines } from './ui/background-lines'
import { TypewriterEffectSmooth } from './ui/typewrite-effect'

const Hero = () => {
  
  const words = [
    {
      text: "Software",
      className: "text-color-white"
    },
    {
      text: "Engineer.",
      className: "text-color-white"
    },
  ]

  return (

    <BackgroundLines className="flex flex-col justify-center items-center w-full h-screen">
      <h1 className='text-2xl font-bold sm:text-2xl md:text-4xl lg:text-7xl '>Saif Ahmad.</h1>
      <TypewriterEffectSmooth words={words}/>
    </BackgroundLines>
  
  )
}

export default Hero