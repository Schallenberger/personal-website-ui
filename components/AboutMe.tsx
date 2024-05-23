import React from 'react'
import { DirectionAwareHover } from './ui/direction-aware-hover';
import Image from 'next/image';
const imageUrl = "/bruno.jpg"
const technologiesLogos = {
  node: "/node-icon.png",
  javascript: "/javascript-icon.png",
  typescript: "/typescript-icon.png",
  nextjs: "/nextjs-icon.png",
  nestjs: "/nestjs-icon.png",
  postgresql: "/postgresql-icon.png",
  angularjs: "/angularjs-icon.png",
  docker: "/docker-icon.png",
}

const AboutMe = () => {
  return (
    <section id='about' className='w-full flex flex-wrap py-32 gap-20 items-center bg-background justify-center md:justify-center lg:justify-between'>
      <div className='flex min-h-[316px] flex-col gap-9  w-60 md:w-96'>
        <h1 className='text-4xl font-bold'>/About me</h1>
        <p>I am currently a Software Development Engineer at Deskfy, where I am part of the Core Squad. My responsibilities include developing new features and maintaining our SaaS platform. This role involves working closely with cross-functional teams to ensure the smooth operation and continuous improvement of our software. I am actively involved in the entire development lifecycle, from initial planning and design to implementation, testing, and deployment.</p>
      </div>
      <div className='flex min-h-[316px] flex-col gap-9 w-60 md:w-96'>
        <h1 className='text-4xl font-bold'>/Technologies</h1>
        <div className="gap-2 grid grid-cols-2">
          {Object.entries(technologiesLogos).map(([key, value]) => (
            <Image className='grayscale scale-100 hover:grayscale-0 hover:scale-110 transition-all cursor-pointer' src={value} key={key} alt={key} width={48} height={48}/>
          ))}
        </div>
      </div>
      <div className="relative flex items-center justify-center">
        <DirectionAwareHover imageUrl={imageUrl}>
        </DirectionAwareHover>
      </div>
    </section>
  )
}

export default AboutMe