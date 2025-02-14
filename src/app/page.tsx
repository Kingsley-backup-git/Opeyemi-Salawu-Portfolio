import AboutMe from "@/components/AboutMe";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Me from "@/components/Me";
import MyValue from "@/components/MyValue";
import Projects from "@/components/Projects";
import ClientPromise from "@/components/Service/clientPromise";
import Steps from "@/components/Service/steps";
import SocialMedia from "@/components/SocialMedia";
import Why from "@/components/Why";

export default function Home() {
  
  return (
  <div className="mt-[80px] w-full">

<Me />


    <div className="flex w-full xs:flex-row border-y-[1px]  border-[#1C1C1C1A]">
    <div className="w-[80px] xxs:flex hidden flex-col justify-around relative text-black border-r-[1px]  border-[#1C1C1C1A]">
      <div className="">
        <h1 className="-rotate-90 italic text-sm font-semibold text-nowrap">
        VISION AND MISSION
</h1>
</div>

<div className="">
<h1 className="-rotate-90 italic text-sm font-semibold text-nowrap">
PORTFOLIO
</h1>
</div>
    </div>



    <div className="flex-1">
<MyValue />

</div>
</div>





<div className="flex xs:flex-row border-b-[1px] w-full border-[#1C1C1C1A]">
    <div className="w-[80px] xxs:flex hidden flex-col justify-around text-black border-r-[1px] border-[#1C1C1C1A]">
      <div className="">
        <h1 className="-rotate-90 italic text-sm font-semibold text-nowrap">
ABOUT ME
</h1>
</div>

<div className="">
<h1 className="-rotate-90 italic text-sm font-semibold text-nowrap">
PORTFOLIO
</h1>
</div>
    </div>



    <div className="flex-1 w-full">
<AboutMe />

</div>
</div>



<div className="flex flex-row border-b-[1px] border-[#1C1C1C1A]">
    <div className="w-[80px] xxs:flex hidden  flex-col justify-around text-black border-r-[1px] border-[#1C1C1C1A]">
      <div className="">
        <h1 className="-rotate-90 italic text-sm font-semibold text-nowrap">
SOCIAL MEDIA POSTS
</h1>
</div>

<div className="">
<h1 className="-rotate-90 italic text-sm font-semibold text-nowrap">
PORTFOLIO
</h1>
</div>
    </div>



    <div className="flex-1">
<SocialMedia />

</div>
</div>






<div className="flex flex-row border-b-[1px] border-[#1C1C1C1A]">
    <div className="w-[80px] xxs:flex hidden flex-col justify-around text-black border-r-[1px] border-[#1C1C1C1A]">
      <div className="">
        <h1 className="-rotate-90 italic text-sm font-semibold  text-nowrap">
THE BIGGEST WHY
</h1>
</div>

<div className="">
<h1 className="-rotate-90 italic text-sm font-semibold  text-nowrap">
PORTFOLIO
</h1>
</div>
    </div>



    <div className="flex-1">
<Why />

</div>
</div>



<Clients />

<Projects />

<div className="flex flex-row w-full border-t-[1px]  border-[#1C1C1C1A]">
    <div className="w-[80px] xxs:flex hidden flex-col justify-around text-black border-r-[1px] border-[#1C1C1C1A]">
      <div className="">
        <h1 className="-rotate-90 italic text-sm font-semibold  text-nowrap">
THE PROMISE
</h1>
</div>

<div className="">
<h1 className="-rotate-90 italic text-sm font-semibold  text-nowrap">
PORTFOLIO
</h1>
</div>
    </div>



    <div className="flex-1">
<ClientPromise />

</div>
</div>





<div className="flex flex-row w-full border-b-[1px]  border-[#1C1C1C1A]">
    <div className="w-[80px] xxs:flex hidden flex-col justify-around  text-black border-r-[1px] border-[#1C1C1C1A]">
      <div className="">
        <h1 className="-rotate-90 italic text-sm font-semibold  text-nowrap">
THE PROCESS
</h1>
</div>

<div className="">
<h1 className="-rotate-90 italic text-sm font-semibold  text-nowrap">
PORTFOLIO
</h1>
</div>
    </div>



    <div className="flex-1">
<Steps />

</div>
</div>




<div className="flex flex-row w-full">
    <div className="w-[80px] xxs:flex hidden py-2 flex-col justify-around text-black border-r-[1px] border-[#1C1C1C1A]">
      <div className="">
        <h1 className="-rotate-90 italic text-sm font-semibold  text-nowrap">
GET IN TOUCH
</h1>
</div>

<div className="">
<h1 className="-rotate-90 italic text-sm font-semibold  text-nowrap">
PORTFOLIO
</h1>
</div>
    </div>



    <div className="flex-1">
<Contact />

</div>
</div>


  </div>
  );
}
