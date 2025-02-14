'use client'
import React from 'react'
import Me from "@/assets/aboutMe.jpeg";
import Image from "next/image"
import { motion } from "motion/react"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
export default function AboutMe() {
  return (
    <motion.div 
    className='xs:max-w-[990px] mx-auto block w-full py-14 px-4'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className='relative top-[-200px]' id='aboutme'>
    </div>
    <div className='grid xs:grid-cols-5 grid-cols-1 xs:gap-x-8'>
      <motion.div 
        className='h-[400px]  w-full xs:col-span-2 col-span-1' 
        whileInView={{ x: 0, opacity: 1 }} 
          initial={{ x: -100, opacity: 0 }} 
          viewport={{ once: true }} 
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image 
          src={Me} 
          className='w-full h-full object-cover xs:rounded-none rounded-xl object-[0%_60%]' 
          width={500} 
          height={400} 
          alt='' 
        />
      </motion.div>

      <motion.div 
        className='col-span-3 relative' 
        whileInView={{ y: 0, opacity: 1 }} 
          initial={{ y: 100, opacity: 0 }} 
          viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        <h1 className='font-bold xs:text-3xl text-2xl text-black italic xs:mt-0 mt-8'>ABOUT ME</h1>
        <p className='font-[400] leading-8 xs:text-base text-sm mt-2 text-[#000000bd]'>
          I am a passionate and accomplished creator with a proven 
          track record in business growth, development, and team building. 
          I find value in giving a business or brand a unique social media 
          identity and personality. With a deep understanding of market and 
          viral trends, I can identify growth opportunities effectively. 
          Additionally, I excel in running paid ad campaigns, including 
          Facebook Ads and Google Ads.
        </p>

        <motion.div 
          className='flex items-center gap-x-5 absolute xs:bottom-0 bottom-[-30px] right-0'
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <motion.div 
            whileHover={{ scale: 1.2 }} 
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaInstagram className='xs:text-2xl text-xl text-black'/>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.2 }} 
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaXTwitter className='xs:text-2xl text-xl text-black'/>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.2 }} 
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaFacebookF className='xs:text-2xl text-xl text-black'/>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.2 }} 
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaLinkedin className='xs:text-2xl text-xl text-black'/>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  </motion.div>
  )
}
