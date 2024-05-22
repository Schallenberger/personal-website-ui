/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { easeInOut, motion } from "framer-motion";

const Hero = () => {
  return (
    <section className='h-[calc(100vh - 88px)] flex items-center  '>
      <HeroHighlight className="flex align-center gap-5 flex-col max-w-5xl">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.2,
            ease: [easeInOut],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-5xl leading-relaxed lg:leading-snug text-center mx-auto"
        >
          Hi there, Bruno Schallenberger here! <br />
          <Highlight className="text-black dark:text-white">
            I'm a Full-Stack Software Engineer
          </Highlight>
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.2,
            ease: [easeInOut],
          }}
          className="text-md px-4 font-semibold text-neutral-700 dark:text-white max-w-2xl leading-relaxed lg:leading-snug text-center mx-auto"
        >
          i'm a Software Engineer based in Brazil. I am fascinated by large-scale applications with significant impacts in the tech world and contribute to the scalability and growth of startups throughout Brazil.
        </motion.p>
      </HeroHighlight>
    </section>
    
  )
}

export default Hero
