'use client'
import React from 'react'
import { motion } from "motion/react"
import MyImage from "@/assets/myImage.jpeg"
import MyImage2 from "@/assets/nature.png"
import MyImage3 from "@/assets/myImage3.jpeg"
import { BsArrowRight } from "react-icons/bs";
import { FaAngleDoubleDown } from "react-icons/fa";
import Image from 'next/image'
export default function Me() {
  return (

    <div className="xs:max-w-[990px]  xs:mx-auto block w-full py-12 px-4">
      
      {/* Image Grid with Hover Effects */}
      <motion.div
        className="xs:grid xs:grid-cols-3 flex justify-center w-full xs:gap-x-8"
        initial="initial"
        animate="animate"
        variants={{
          initial: { opacity: 0 },
          animate: {
            opacity: 1,
            transition: {
              staggerChildren: 0.5, // Stagger animation of each child by 0.3 seconds
            },
          },
        }}
      >
        <motion.div
          className="overflow-hidden w-full"
          initial={{ scale: 0.8, x: -150, opacity: 0}}
          animate={{
            scale: 1,
            x: 0,
            y: 0,
            opacity: 1,
            rotate: 0,
          }}
          transition={{
            type:"tween",
            stiffness: 400,
            damping: 10,
            delay: 0.1,
            duration: 1.2,
          }}
        >
          <Image src={MyImage} className="w-full h-full xs:rounded-none rounded-xl" width={700} height={400} alt="" />
        </motion.div>

        <motion.div
         className="overflow-hidden xs:flex hidden"
         initial={{ scale: 0.8, y: -100, opacity: 0 }}
         animate={{
           scale: 1,
         
           y: 0,
           opacity: 1,
        
         }}
         transition={{
          type:"tween",
           stiffness: 400,
           damping: 10,
           delay: 0.5,
           duration: 1.2,
         }}
        >
          <Image src={MyImage2} className="w-full h-full object-fill" width={500} height={400} alt="" />
        </motion.div>

        <motion.div
            className="overflow-hidden xs:flex hidden"
            initial={{ scale: 0.8, x: 150, y: 100, opacity: 0 }}
            animate={{
              scale: 1,
              x: 0,
              y: 0,
              opacity: 1,
              rotate: 0,
            }}
            transition={{
              type:"tween",
              stiffness: 400,
              damping: 10,
              delay: 0.7,
              duration: 1.2,
            }}
        >
          <Image src={MyImage3} className="w-full h-full " width={500} height={400} alt="" />
        </motion.div>
      </motion.div>

      {/* Main Heading with Animation */}
      <div className="mt-8">
        <motion.h1
          className="md:text-6xl xs:text-4xl text-4xl font-semibold text-center text-black italic"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          OPEYEMI SALAWU
        </motion.h1>

        {/* Subheading with Text Animation */}
        <motion.div
          className="xs:mt-6 mt-3 flex xs:flex-row flex-col justify-center relative items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.h1
            className="font-normal text-center xs:flex hidden text-black xs:text-xl text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            DIGITAL MARKETER / SOCIAL MEDIA CONTENT <br /> CREATOR
          </motion.h1>


          <motion.h1
            className="font-normal text-center xs:hidden flex text-black xs:text-xl text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            DIGITAL MARKETER/SOCIAL MEDIA CONTENT CREATOR
          </motion.h1>

          {/* Animated Arrow Icon */}
          <motion.div
            className="xs:absolute right-3 xs:top-3   xs:mt-0 mt-8 xs:text-3xl text-4xl"
            initial = {{x:-150}}
            animate={{ rotate: 360,x:0 }}
            transition={{ loop: Infinity, duration: 2, delay:.5 }}
          >
            <BsArrowRight className="text-black xs:flex hidden" />
            <FaAngleDoubleDown className="text-black xs:hidden flex  animate-bounce border border-black rounded-full p-2"/>
          </motion.div>
        </motion.div>
      </div>

    </div>
  )
}
