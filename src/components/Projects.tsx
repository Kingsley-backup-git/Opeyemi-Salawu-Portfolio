'use client'
import React,{useState} from 'react'
import dynamic from 'next/dynamic';
import { FaChevronDown } from "react-icons/fa6";
import { motion } from "motion/react"

const UserCard = dynamic(() => import('react-ui-cards').then((mod) => mod.UserCard), {
  ssr: false, // Disable server-side rendering for this component
});

export default function Projects() {
  const [educativeContent, setEducativeContent] = useState(false)
  const [promotionalContent, setPromotionalContent] = useState(false)
  const [entertainingContent, setEntertainingContent] = useState(false)
const contentHandler = (val:number)=> {
  if(val ===1) {
    setEducativeContent(prev => !prev)
    setPromotionalContent(false)
    setEntertainingContent(false)
  } else if(val === 2){
    setPromotionalContent(prev => !prev)
    setEducativeContent(false)
    setEntertainingContent(false)
  }else if(val === 3){
    setEntertainingContent(prev => !prev)
    setPromotionalContent(false)
    setEducativeContent(false)
  }
}
  return (
    <div className='max-w-[1000px]  mx-auto block w-full py-12 overflow-x-hidden px-4'>
       <div className='relative top-[-200px]' id='project'>

</div>
        <h1 className='text-center font-medium text-3xl text-black'>Link to  projects</h1>
        <div className='mt-4 overflow-hidden'>
         <div className="flex overflow-hidden max-w-fit cursor-pointer z-[9999] gap-x-4  items-center" onClick={()=> contentHandler(1)}> 
           <h1 className='text-black  font-medium text-lg my-2'>Educative Content</h1>
       <motion.div
         initial= {{rotate:0}}
         animate = {{rotate:educativeContent ? 0 : 180, transition : {duration : .5, type:"tween"} }}
         ><FaChevronDown className='text-black text-xl'/> </motion.div>
          </div> 
        
            <motion.div
            initial = {{y:0, opacity : 1}}
            animate = {{display : educativeContent ? "flex" : "none", opacity : educativeContent ? 1 : 0, transition: {duration: .5, type : "tween"}}}
             className='grid grid-flow-col snap-x snap-mandatory gap-4 h-full overflow-x-auto'>
   
    
      <UserCard
      
  float
    href='https://www.instagram.com/reel/C89PXihoHvR/'
    header='/contentOne.jpeg'
    stats={[{ name: "www.instagram.com", value: "👉 Tap to Watch Now!" }]}
  avatar='/myImage.jpeg'
    name='Opeyemi Salawu'
  className='snap-center '
    positionName='Digital Marketer/Content Creator'
/>

<UserCard
    float
    href='https://www.instagram.com/reel/DFUz-KMoer3/'
    header='/contentTwo.jpeg'
  avatar='/myImage.jpeg'
    name='Opeyemi Salawu'
     className='snap-center'
    stats={[{ name: "www.instagram.com", value: "👉 Tap to Watch Now!" }]}
    positionName='Digital Marketer/Content Creator'
/>


<UserCard
    float
    href='https://www.instagram.com/reel/C58B2A0IHVd/'
    header='/contentThree.jpeg'
  avatar='/contentThree.jpeg'
  stats={[{ name: "www.instagram.com", value: "👉 Tap to Watch Now!" }]}
    name='Opeyemi Salawu'
     className='snap-center'
    positionName='Digital Marketer/Content Creator'
/>

<UserCard
    float
    href='https://www.instagram.com/reel/DCyYE9fIr8I/'
    header='/amRealty.png'
  avatar='/myImage.jpeg'
    name='Opeyemi Salawu'
     className='snap-end'
    stats={[{ name: "www.instagram.com", value: "👉 Tap to Watch Now!" }]}
    positionName='Digital Marketer/Content Creator'
/>






            </motion.div> 
        </div>





        <div className='mt-4'>
        <div className="flex gap-x-4 cursor-pointer max-w-fit items-center" onClick={()=> contentHandler(2)}>     
            <h1 className='text-black font-medium text-lg my-2'>Promotional Content</h1>
            <motion.div
         initial= {{rotate:0}}
         animate = {{rotate:promotionalContent ? 0 : 180, transition : {duration : .5, type:"tween"} }}
         ><FaChevronDown className='text-black text-xl'/> </motion.div>
          </div> 
        
            <motion.div
            initial = {{y:0, opacity : 1}}
            animate = {{ display : promotionalContent ? "flex" : "none", opacity : promotionalContent ? 1 : 0, transition: {duration: .5, type : "tween"}}}
             className='grid grid-flow-col snap-x snap-mandatory gap-4 h-full overflow-x-auto'>
          
      <UserCard
    float
    href='https://vm.tiktok.com/ZMkgJArPH/'
    header='/crestVille.jpeg'
    stats={[{ name: "www.tiktok.com", value: "👉 Tap to Watch Now!" }]}
  avatar='/myImage.jpeg'
    name='Opeyemi Salawu'
          className='snap-center'
    positionName='Digital Marketer/Content Creator'
/>

<UserCard
    float
    href='https://www.instagram.com/reel/'
    header='/promotionTwo.jpeg'
  avatar='/myImage.jpeg'
    name='Opeyemi Salawu'
        className='snap-center'
    stats={[{ name: "www.instagram.com", value: "👉 Tap to Watch Now!" }]}
    positionName='Digital Marketer/Content Creator'
/>


<UserCard
    float
    href='https://vm.tiktok.com/ZMkgJdMfq/'
    header='/promotionThree.jpeg'
  avatar='/myImage.jpeg'
    name='Opeyemi Salawu'
        className='snap-center'
    stats={[{ name: "www.tiktok.com", value: "👉 Tap to Watch Now!" }]}
    positionName='Digital Marketer/Content Creator'
/>

<UserCard
    float
    href='https://vm.tiktok.com/ZMkgJDMug/'
    header='/crestVille.jpeg'
  avatar='/myImage.jpeg'
  stats={[{ name: "www.tiktok.com", value: "👉 Tap to Watch Now!" }]}
    name='Opeyemi Salawu'
        className=' snap-center'
    positionName='Digital Marketer/Content Creator'
/>


<UserCard
    float
    href='https://vm.tiktok.com/ZMkgJ1eWx/'
    header='/crestVille.jpeg'
  avatar='/myImage.jpeg'
  stats={[{ name: "www.tiktok.com", value: "👉 Tap to Watch Now!" }]}
    name='Opeyemi Salawu'
         className='snap-center'
    positionName='Digital Marketer/Content Creator'
/>


<UserCard
    float
    href='https://vm.tiktok.com/ZMkgJLboe/'
    header='/promotionFive1.jpeg'
  avatar='/myImage.jpeg'
  stats={[{ name: "www.tiktok.com", value: "👉 Tap to Watch Now!" }]}
    name='Opeyemi Salawu'
       className='snap-center'
    positionName='Digital Marketer/Content Creator'
/>





            </motion.div> 
        </div>

    





        <div className='mt-4'>
        <div className="flex gap-x-4 cursor-pointer max-w-fit items-center" onClick={()=> contentHandler(3)}>
           <h1 className='text-black font-medium text-lg my-2'>Entertaining Content</h1>
           <motion.div
         initial= {{rotate:0}}
         animate = {{rotate:entertainingContent ? 0 : 180, transition : {duration : .5, type:"tween"} }}
         ><FaChevronDown className='text-black text-xl'/> </motion.div>
          </div> 
        
            <motion.div
            initial = {{y:0, opacity : 1}}
            animate = {{display : entertainingContent ? "flex" : "none", opacity : entertainingContent ? 1 : 0, transition: {duration: .5, type : "tween"}}}
             className='grid grid-flow-col snap-x snap-mandatory gap-4 h-full overflow-x-auto'>
           
      
      <UserCard
    float
    href='https://www.instagram.com/reel/DATkZRsIC1T/'
    header='/entertainOne.jpeg'
    stats={[{ name: "www.instagram.com", value: "👉 Tap to Watch Now!" }]}
  avatar='/myImage.jpeg'
    name='Opeyemi Salawu'
         className=' snap-center'
    positionName='Digital Marketer/Content Creator'
/>

<UserCard
    float
    href='https://www.instagram.com/reel/C3sovM8oz1F/'
    header='/crestVille.jpeg'
  avatar='/myImage.jpeg'
    name='Opeyemi Salawu'
         className=' snap-center'
    stats={[{ name: "www.instagram.com", value: "👉 Tap to Watch Now!" }]}
    positionName='Digital Marketer/Content Creator'
/>


<UserCard
    float
    href='https://vm.tiktok.com/ZMkgJN4qW/'
    header='/entertainThree.jpeg'
  avatar='/myImage.jpeg'
    name='Opeyemi Salawu'
          className='snap-center'
    stats={[{ name: "www.tiktok.com", value: "👉 Tap to Watch Now!" }]}
    positionName='Digital Marketer/Content Creator'
/>









            </motion.div> 
        </div>


    </div>
  )
}
