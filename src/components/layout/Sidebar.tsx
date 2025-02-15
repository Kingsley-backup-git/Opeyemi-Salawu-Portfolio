'use client'
import Link from 'next/link';
import React,{useEffect, useState} from 'react'
import { motion } from "motion/react"
import { IoMdClose } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { PiScroll } from "react-icons/pi";
import { FaMobileAlt } from "react-icons/fa";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { IoFolderOpenOutline } from "react-icons/io5";
import { LuWrench } from "react-icons/lu";
import { RiContactsBook3Line } from "react-icons/ri";

export default function Sidebar({openHandler,open}: {openHandler:(val:boolean)=>void; open:boolean}) {
  const [nav, setNav] = useState("")
      useEffect(()=> {
if(typeof window !== undefined) {
setNav(window.location.hash)
}
      },[window.location.hash])
    const links = [
        {
          link : "About Me",
    href : "#aboutme",
    icon : ()=>  <div><FaRegUser className='text-2xl text-[#5a3d31]'/></div>
        },
        {
          link : "My Value",
    href : "#myvalue",
    icon : ()=>  <div><PiScroll className='text-2xl text-[#5a3d31]'/></div>
        },
        {
          link : "Social Media",
    href : "#socialmedia",
    icon : ()=>  <div><FaMobileAlt className='text-2xl text-[#5a3d31]'/></div>
        },
        {
          link : "Why?",
    href : "#why",
    icon : ()=>  <div><FaPersonCircleQuestion className='text-2xl text-[#5a3d31]'/></div>
        },
        {
          link : "Project",
    href : "#project",
    icon : ()=>  <div><IoFolderOpenOutline className='text-2xl text-[#5a3d31]'/></div>
        },
        {
          link : "Service",
    href : "#service",
    icon : ()=>  <div><LuWrench className='text-2xl text-[#5a3d31]'/></div>
        },
        {
          link : "Contact",
    href : "#contact",
    icon : ()=>  <div><RiContactsBook3Line className='text-2xl text-[#5a3d31]'/></div>
        },
      ]
  return (
    <motion.div
   
    initial={{ x: '-100%', scale: 1}}  
    animate={{ x: open ? '0%' : '-100%', scale: open ? 1 : 0 }} 
    transition={{ duration: 0.4, ease: "easeInOut", type: "tween" }}
     className='shadow-2xl px-4 flex bg-[#f4e5e3] xs:hidden backdrop-blur-3xl fixed top-0  left-0 bottom-0 max-w-[290px] w-full  h-screen z-[9999999]'>
<motion.div initial={{rotate:0}} 
animate = {{rotate : open ? 90 : 0}}
transition={{ duration: .7, ease: "easeInOut" }}
className="absolute top-5  right-6"><IoMdClose className="text-3xl cursor-pointer text-black flex  " onClick={()=> openHandler(false)}/></motion.div>

<div className='flex flex-col justify-between py-16 flex-1 text-black'>
{links.map((link, index)=> {
    return <motion.div
    key={index}
    initial={{ opacity: 0, x: -100, scale: 0.8 }}
    whileInView={{ opacity: 1, x: 0, scale: 1, transition: { duration: 1, ease: "easeOut", delay: index * 0.1, type:"spring" } }}
    viewport={{ once: false }}
    className={``}> <Link  href={link.href} onClick={()=> openHandler(false)} className={`flex items-center gap-4 w-full p-2 bg-[#f4e5e3] ${link.href === nav ? "shadow-2xl" : "shadow-inner"}   rounded-lg shadow-red-950`}>
   
    {link.icon && link.icon()}
    <h1 className="text-xl font-medium text-[#5a3d31]">{link.link}</h1>
    </Link>
   </motion.div>
})}

</div>
    </motion.div>
  )
}
