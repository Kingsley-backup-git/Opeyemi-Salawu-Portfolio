'use client'
import React from 'react'
import { motion } from "motion/react"
import Img2 from "@/assets/strength.jpeg"
import deegadgetImg from "@/assets/deegadgetsImg.jpeg"
import Image from 'next/image'
export default function Why() {
  return (
    <div className='xs:max-w-[990px] mx-auto block w-full xs:py-14 py-8 px-4 overflow-x-hidden'>
    <div className='relative top-[-200px]' id="why"></div>
    <h1 className='font-bold xs:text-3xl text-xl text-black italic mb-8 xxs:hidden flex'>Why</h1>
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1, ease: "easeOut" }} 
      viewport={{ once: true }}
      className='grid xs:grid-cols-2 grid-cols-1 gap-x-8'
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "backOut" }}
        viewport={{ once: true }}
        className='h-[400px]'
      >
        <Image 
          src={deegadgetImg} 
          className='h-full mx-auto  xs:rounded-none rounded-xl object-[0px_20%] object-cover' 
          width={500} height={200} alt='' 
        />
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1.2, ease: "easeOut" }} 
        viewport={{ once: true }}
        className='rounded-lg overflow-x-hidden xs:mt-0 mt-8'
      >
        <h1 className='font-bold text-xl text-black italic text-balance'>
          WHY YOU SHOULD WORK WITH A DIGITAL MARKETER/ SOCIAL MEDIA CREATOR
        </h1>
        <p className='font-[400] leading-6 text-sm mt-4 text-[#000000bd]'>
        In today&apos;s digital age, social media has become a crucial aspect of marketing for businesses of all sizes.

A social media manager can help businesses effectively utilize social media platforms to reach their target audience, increase brand awareness, and ultimately drive sales. They are experts in creating and curating content, managing social media accounts, monitoring analytics and metrics, and staying up-to-date on the latest trends and algorithms.

By working with a social media manager, businesses can save time and resources while also ensuring that their social media presence is strategic, consistent, and engaging.
        </p>
      </motion.div>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1, ease: "easeOut" }} 
      viewport={{ once: true }}
      className='grid xs:grid-cols-2 grid-cols-1 gap-x-8 mt-12 auto-rows-auto items-stretch'
    >
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1.2, ease: "easeOut" }} 
        viewport={{ once: true }}
        className='rounded-lg overflow-x-hidden xs:order-first order-last xs:mt-0 mt-8'
      >
        <h1 className='font-bold text-xl text-black italic xs:text-balance text-pretty'>
          MY STRENGTH AS A SOCIAL MEDIA MANAGER
        </h1>
        <p className='font-[400] leading-6 text-sm mt-4 text-[#000000bd]'>
        As a digital marketer, one of my greatest strengths is my ability to craft engaging, relevant, and creative content that resonates with a brand&apos;s target audience.

I am well-versed in social media trends and algorithms, and I know how to optimize content to maximize reach and engagement. Additionally, I am skilled at developing and executing social media strategies that align with a brand&apos;s overall marketing goals.

I am also adept at measuring and analyzing data to continually improve social media performance and drive business results.

Overall, I am confident in my ability to create and manage social media campaigns that deliver value and make a meaningful impact on a brand&apos;s digital presence
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "backOut" }}
        viewport={{ once: true }}
      >
        <Image 
          src={Img2} 
          className='h-[400px] w-full xs:rounded-none rounded-xl object-fill' 
          width={400} height={200} alt='' 
        />
      </motion.div>
    </motion.div>
  </div>
  )
}
