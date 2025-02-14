import React from 'react'
import Img1 from "@/assets/socials1.jpeg"
import Img2 from "@/assets/socials2.jpeg"
import Img3 from "@/assets/socials3.jpeg"
import Image from 'next/image'
import Link from 'next/link'
export default function SocialMedia() {
  return (
    <div className='max-w-[990px] mx-auto block w-full py-14 px-4' >
    <div className='relative top-[-200px]' id='socialmedia'>

    </div>
    <h1 className='font-bold xs:text-3xl text-xl text-black italic mb-8 xxs:hidden flex'>SOCIAL MEDIA</h1>
<div className='grid xs:grid-cols-3  mini:grid-cols-2 grid-cols-1  gap-6'>

<div className=''>
<Link href = "https://www.instagram.com/anike_teee?igsh=YnJ1ZmVoZmVhaThp&utm_source=qr" className="w-full">
<Image src={Img1} className='w-full rounded-lg h-full object-fill object-[0px_30%]' width={200} height={200} alt='' />
</Link>
</div>
<div className=''>
<Link href = "https://www.instagram.com/crestville_apartments/" className="w-full">
<Image src={Img2} className='w-full rounded-lg h-full object-fill object-[0px_30%]' width={200} height={200} alt='' />
</Link>
</div>

<div className=''>
<Link href = "https://www.tiktok.com/@crestville.apartm?_t=ZM-8ttQBdxnwPv&_r=1" className="w-full">
<Image src={Img3} className='w-full rounded-lg h-full object-fill object-[0px_30%]' width={200} height={200} alt='' />
</Link>
</div>

</div>

    </div>
  )
}
