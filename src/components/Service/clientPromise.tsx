'use client'
import React from 'react'
import { motion } from "motion/react"
import PromiseImg from "@/assets/promiseImg.jpeg"
import Image from "next/image"
export default function ClientPromise() {
  return (
    <div className='xs:max-w-[990px] mx-auto block w-full pt-14 px-4 overflow-x-hidden'>
    <div className='relative top-[-200px]' id="service"></div>

    <div className='grid xs:grid-cols-2 grid-cols-1 xs:gap-x-8 w-full'>
      {/* Image with motion animation */}
      <motion.div
        className='h-[400px] w-full'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1, type: 'spring', stiffness: 100 } }}
        viewport={{ once: true }}
      >
        <Image src={PromiseImg} className='w-full h-full xs:rounded-none rounded-xl object-fill' width={300} height={200} alt='' />
      </motion.div>

      {/* Text with motion animation */}
      <motion.div
      className='xs:mt-0 mt-8'
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 1, type: 'spring', stiffness: 100 } }}
        viewport={{ once: true }}
      >
        <h1 className='font-bold text-2xl text-black italic'>MY PROMISE TO OUR CLIENTS</h1>
        <p className='font-[400] leading-8 xs:text-base text-sm mt-4 text-[#000000bd]'>
          Dear Valued Client,
          <br />
          I would like to take a moment to express my gratitude for choosing my services. Your trust in me means a great deal,
          and I promise to do everything in my power to meet and exceed your expectations.
          
          I commit to providing you with high-quality work that is tailored to your specific needs and requirements.
          I will ensure that all deadlines are met and that you are satisfied with the final product.
         
          Should any issues arise, I promise to communicate with you in a timely and transparent manner and to work with you
          to find a solution that meets your needs.
          <br />
          Thank you for your trust, and I look forward to working with you.
        </p>
      </motion.div>
    </div>
  </div>
  )
}