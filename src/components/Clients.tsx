'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import AMREALTY from "@/assets/amRealty.png"
import DEEGADGET from "@/assets/deegadget.jpg"
import CRESTVILLE from "@/assets/crestville.jpeg"
import UNILAGLOGO from "@/assets/unilagLogoImg.png"
import DarlingHairLogo from "@/assets/darlingHair.png"
import Outlash from "@/assets/outlashLogo.png"

import OTGlam from "@/assets/O.T Glam.png"

import ClientLogo from "@/assets/clientLogo.png"
export default function Clients() {
  return (
    <div className='xs:max-w-[990px] mx-auto block w-full xs:py-14 py-8 px-4 overflow-x-hidden'>
      <div className='mx-auto max-w-[750px] w-full'>
        <h1 className='xs:font-medium font-semibold xs:text-3xl text-2xl text-black text-center'>Clients</h1>

        <div className='grid xs:grid-cols-5 xxs:grid-cols-3 grid-cols-2 xs:gap-6 gap-4 mt-5'>
          {/* Image with staggered animation */}
          <motion.div
            className="flex justify-center items-center"
            whileInView={{
              opacity: 1,
              x: 0,
              rotateY: 0,
              transition: { duration: 1, type: "spring", stiffness: 100 }
            }}
            initial={{ opacity: 0, x: -100, rotateY: -20 }}
            viewport={{ once: true }}
          >
            <Image src={AMREALTY} alt='' width={200} height={100} />
          </motion.div>

          <motion.div
            className="flex justify-center items-center"
            whileInView={{
              opacity: 1,
              x: 0,
              rotateY: 0,
              transition: { duration: 1, type: "spring", stiffness: 100 }
            }}
            initial={{ opacity: 0, x: -100, rotateY: -20 }}
            viewport={{ once: true }}
          >
            <Image src={DEEGADGET} alt='' width={200} height={100} />
          </motion.div>

          <motion.div
            className="flex justify-center items-center"
            whileInView={{
              opacity: 1,
              x: 0,
              rotateY: 0,
              transition: { duration: 1, type: "spring", stiffness: 100 }
            }}
            initial={{ opacity: 0, x: -100, rotateY: -20 }}
            viewport={{ once: true }}
          >
            <Image src={CRESTVILLE} alt='' width={200} height={100} />
          </motion.div>

          <motion.div
            className="flex justify-center items-center"
            whileInView={{
              opacity: 1,
              x: 0,
              rotateY: 0,
              transition: { duration: 1, type: "spring", stiffness: 100 }
            }}
            initial={{ opacity: 0, x: -100, rotateY: -20 }}
            viewport={{ once: true }}
          >
            <Image src={UNILAGLOGO} alt='' width={200} height={100} />
          </motion.div>

          <motion.div
            className="flex justify-center items-center"
            whileInView={{
              opacity: 1,
              x: 0,
              rotateY: 0,
              transition: { duration: 1, type: "spring", stiffness: 100 }
            }}
            initial={{ opacity: 0, x: -100, rotateY: -20 }}
            viewport={{ once: true }}
          >
            <Image src={DarlingHairLogo} alt='' width={200} height={100} />
          </motion.div>

          <motion.div
            className="flex justify-center items-center"
            whileInView={{
              opacity: 1,
              x: 0,
              rotateY: 0,
              transition: { duration: 1, type: "spring", stiffness: 100 }
            }}
            initial={{ opacity: 0, x: -100, rotateY: -20 }}
            viewport={{ once: true }}
          >
            <Image src={Outlash} alt='' width={200} height={100} />
          </motion.div>

          <motion.div
            className="flex justify-center items-center"
            whileInView={{
              opacity: 1,
              x: 0,
              rotateY: 0,
              transition: { duration: 1, type: "spring", stiffness: 100 }
            }}
            initial={{ opacity: 0, x: -100, rotateY: -20 }}
            viewport={{ once: true }}
          >
            <Image src={OTGlam} alt='' width={200} height={100} />
          </motion.div>

          <motion.div
            className="flex justify-center items-center"
            whileInView={{
              opacity: 1,
              x: 0,
              rotateY: 0,
              transition: { duration: 1, type: "spring", stiffness: 100 }
            }}
            initial={{ opacity: 0, x: -100, rotateY: -20 }}
            viewport={{ once: true }}
          >
            <Image src={ClientLogo} alt='' width={200} height={100} />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
