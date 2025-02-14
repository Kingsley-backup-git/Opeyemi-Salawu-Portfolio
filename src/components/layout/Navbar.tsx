'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import Sidebar from './Sidebar';
export default function Navbar() {
  
      const [open, setOpen] = useState(false)
        function openHandler(val:boolean) {
    setOpen(val)
        }
    const [active, SetActive] = useState("")
    const links = [
        {
          link : "About Me",
    href : "#aboutme"
        },
        {
          link : "My Value",
    href : "#myvalue"
        },
        {
          link : "Social Media",
    href : "#socialmedia"
        },
        {
          link : "Why?",
    href : "#why"
        },
        {
          link : "Project",
    href : "#project"
        },
        {
          link : "Service",
    href : "#service"
        },
        {
          link : "Contact",
    href : "#contact"
        },
      ]

  return (
    <div className="fixed z-[9999]  top-0 border-b-[1px] shadow-lg border-[#1C1C1C1A] left-0 right-0 w-full h-[85px] bg-[#f4e5e3] flex xs:items-end items-center xs:px-0 px-6">
      <div className='md:flex hidden self-stretch border-l-[1px] border-[#1C1C1C1A]  w-[80px] text-black'>

      </div>
      <div className='flex-1 pb-2 px-4 z-[9999999] xs:flex hidden'>
    <div className="max-w-[990px]  gap-x-2 justify-between flex items-center w-full mx-auto">
        {links.map((link, index)=> {
            return  <Link key={index} href={link.href} onClick={()=> SetActive(link.href)}  className={`text-base  transform transition duration-300 ease-in-out  text-black ${active === link.href ? "translate-y-[-20px] transform font-bold text-base": ""}`}>{link.link}</Link>
        })}
 
      </div>
      </div>

      <FaBarsStaggered className='xs:hidden text-black text-2xl block me-auto cursor-pointer' onClick={()=>openHandler(true)}/>
      <Sidebar openHandler = {openHandler} open = {open}/>
      </div>
  )
}
