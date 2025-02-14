'use client'
import React from 'react'
import MissionImg from "@/assets/mission.jpeg";
import VisionImg from "@/assets/vision.jpeg";
import Image from "next/image"
import { motion } from "motion/react"

export default function MyValue() {
  return (
    <div className='xs:max-w-[1000px]  mx-auto block w-full py-10 px-4 overflow-x-hidden'>
    <motion.div
      className='relative top-[-200px]'
      id='myvalue'
      initial={{ opacity: 0, y: 50 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true}}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      {/* Optional Motion div for added entry effect */}
    </motion.div>

    <div className='grid xs:grid-cols-2 grid-cols-1 gap-x-8'>
      <motion.div
        className='h-[400px]'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: .8 }}
      >
        <Image src={MissionImg} className='w-full xs:rounded-none rounded-xl h-full object-fill' width={500} height={400} alt='' />
      </motion.div>

      <motion.div
        className='xs:mt-0 mt-8'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.3, duration: .8 }}
      >
        <h1 className='font-bold xs:text-3xl text-2xl text-black italic'>
          MISSION
        </h1>
        <p className='font-[400] leading-8 xs:text-base text-sm xs:mt-4 mt-2 text-[#000000bd]'>
          My mission is to create virtual identities that resonate with the goals and vision of brands while empowering them with a compelling
          online presence through strategic and data-driven digital marketing.
          I am committed to fostering genuine connections, amplifying brand narratives, and creating
          immersive experiences through authentic storytelling, innovative creativity, and measurable results.
          I strive to stay ahead of industry trends, continuously learn, and adapt to deliver
          unparalleled value, growth, and engagement for my clients.
        </p>
      </motion.div>
    </div>

    <div className='grid xs:grid-cols-5 grid-cols-1 w-full xs:gap-x-6 mt-16'>
      <motion.div
        className='xs:col-span-3 col-span-1 xs:order-first order-last xs:mt-0 mt-8'
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true}}
        transition={{ delay: 0.3, duration: .8 }}
      >
        <h1 className='font-bold xs:text-3xl text-2xl  text-black italic'>
          VISION
        </h1>
        <p className='font-[400] leading-8 text-pretty xs:text-lg text-sm xs:mt-4 mt-2 text-[#000000bd]'>
          To be able to use my voice, ideas, as well as storytelling skills to add value to brands and businesses who desire to build
          an online following, as well as to pioneer innovative and ethical digital marketing strategies, transcending
          industry norms and leveraging cutting-edge technologies. I aspire to be at the forefront of the ever-evolving digital landscape,
          driving impactful campaigns that resonate with audiences globally, creating and adding value in this digital age.
        </p>
      </motion.div>

      <motion.div
        className='col-span-2 h-[400px]'
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: .3, duration: .8 }}
      >
        <Image src={VisionImg} className='w-full h-full object-cover object-top' width={800} height={200} alt='' />
      </motion.div>
    </div>
  </div>
  )
}
