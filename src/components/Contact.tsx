import Link from 'next/link'
import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { GrMail } from "react-icons/gr";
import ContactImg from "@/assets/contactImg.jpeg"
import { IoMdHome } from "react-icons/io";
import Image from 'next/image';
export default function Contact() {
  return (
    <div className='xs:max-w-[990px] mx-auto block w-full py-14 px-4' >
      <div className='relative top-[-200px]' id="contact">

</div>
       <div className='w-full'>
       <Image src={ContactImg} className='xs:aspect-[16/5] aspect-[16/7] w-full object-cover' width={300} height={200} alt='' />

       </div>

        <h1 className='font-semibold xs:text-4xl text-3xl text-black mt-6'>Contact</h1>


        <div className='grid xs:grid-cols-3 mini:grid-cols-2  grid-cols-1 mt-5 xs:gap-x-4 gap-x-2  gap-y-6'>
<div className='flex flex-col gap-y-4 '>
<div className='flex gap-x-4 items-center'>
<FaInstagram className='text-lg text-black'/>
<Link href="#" className='text-sm font-normal text-black'>Anike_teee</Link>
</div>


<div className='flex gap-x-4 items-center'>
<FaLinkedin className='text-lg text-black'/>
<Link href="#" className='text-sm font-normal text-black'>Opeyemi Salawu</Link>
</div>


<div className='flex gap-x-4 items-center'>
<FaXTwitter className='text-lg text-black'/>
<Link href="#" className='text-sm font-normal text-black'>Anikeszn</Link>
</div>
</div>



<div className='flex flex-col  gap-y-4 col-span-1'>
<div className='flex gap-x-4 items-center'>
<IoCall className='text-2xl text-black'/>
<div>
<h1 className='font-medium text-sm text-black'>Call</h1>
<p className='mt-1 text-black text-xs font-normal'>+234813881569</p>
</div>
</div>


<div className='flex gap-x-4 items-center'>
  <div className=''>
<GrMail className='text-black w-full min-w-[20px] min-h-[20px]'/>
</div>
<div>
<h1 className='font-medium text-sm text-black'>Mail</h1>
<p className='mt-1 text-black text-xs font-normal'>opeesalawu@gmail.com</p>
</div>
</div>

</div>



<div className='flex flex-col gap-y-5 xs:items-center'>
<div className='flex gap-x-3 items-center'>
<IoMdHome className='text-2xl text-black'/>
<div>
<h1 className='font-semibold text-sm text-black'>Address</h1>
<p className='mt-1 text-black text-xs font-normal'>Lagos, Nigeria</p>
</div>
</div>

</div>
        </div>
    </div>
  )
}
