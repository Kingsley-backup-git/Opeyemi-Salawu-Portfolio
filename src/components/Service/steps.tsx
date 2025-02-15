'use client'
import React from 'react'
import { motion } from "motion/react"
import StepImg from "@/assets/stepsImg.jpeg"
import Image from "next/image"
export default function Steps() {
  return (
    <div className='max-w-[990px] mx-auto block w-full pb-14 px-4 overflow-x-hidden'>
    <div className='grid xs:grid-cols-2 grid-cols-1 xs:gap-x-8 mt-12'>
      
      {/* Steps Section with motion animation */}
      <div className='xs:order-first order-last xs:mt-0 mt-6'>
        {/* Step One */}
        <motion.div
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1, transition: { duration: 1, ease: "easeOut", delay: 0.1 } }}
          viewport={{ once: true }}
          className=""
        >
          <h1 className='font-bold text-xl text-black italic text-center'>STEP ONE</h1>
          <p className='font-[400] leading-6 text-sm xs:mt-4 mt-2 text-center text-[#000000bd]'>
            Begin by meeting with the client to discuss their business goals, target audience, and current social media presence.
            Set clear goals for the campaign, such as increasing engagement, driving website traffic, or boosting sales.
          </p>
        </motion.div>

        {/* Step Two */}
        <motion.div
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1, transition: { duration: 1, ease: "easeOut", delay: 0.2 } }}
          viewport={{ once: true }}
          className="mt-4"
        >
          <h1 className='font-bold text-xl text-black italic text-center'>STEP TWO</h1>
          <p className='font-[400] leading-6 text-sm xs:mt-4 mt-2 text-center text-[#000000bd]'>
            Begin by meeting with the client to discuss their business goals, target audience, and current social media presence.
            Set clear goals for the campaign, such as increasing engagement, driving website traffic, or boosting sales.
          </p>
        </motion.div>

        {/* Step Three */}
        <motion.div
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1, transition: { duration: 1, ease: "easeOut", delay: 0.3 } }}
          viewport={{ once: true }}
          className="mt-4"
        >
          <h1 className='font-bold text-xl text-black italic text-center'>STEP THREE</h1>
          <p className='font-[400] leading-6 text-sm xs:mt-4 mt-2 text-center text-[#000000bd]'>
            I monitor the brand&apos;s social media accounts for comments, messages, and mentions.
            I respond to inquiries in a timely and professional manner and address any customer complaints or issues that arise.
          </p>
        </motion.div>

        {/* Step Four */}
        <motion.div
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1, transition: { duration: 1, ease: "easeOut", delay: 0.4 } }}
          viewport={{ once: true }}
          className="mt-4"
        >
          <h1 className='font-bold text-xl text-black italic text-center'>STEP FOUR</h1>
          <p className='font-[400] leading-6 text-sm xs:mt-4 mt-2 text-center text-[#000000bd]'>
            Use analytics tools to measure engagement, reach, and conversions. Provide the client with regular reports that detail the progress of the campaign and any adjustments that need to be made.
          </p>
        </motion.div>
      </div>

      {/* Image with motion animation */}
      <motion.div
        className='h-[500px] w-full'
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut", delay: 0.5 } }}
        viewport={{ once: true }}
      >
        <Image src={StepImg} className='w-full h-full xs:rounded-none rounded-xl object-fill' width={300} height={200} alt='' />
      </motion.div>

    </div>
  </div>
  )
}
