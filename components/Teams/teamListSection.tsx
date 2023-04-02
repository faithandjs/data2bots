import React from "react"
import { Container } from "../Container"
import Image from "next/image"

const TeamListSection = () => {
  return (
    <div>
        <Container>
<div className="flex flex-wrap mx-6">
  {[...Array(12)].map((value,index)=><div key={index}  className="flex justify-center w-full md:w-1/2 lg:w-1/3">
    <div className="w-fit">
        <div className="relative w-[241px] h-[241px]">
            <div className="absolute -left-[1rem] -top-[3px] bg-primary w-full h-full rounded-full"/>
           <Image src={`/Assets/person-${index+1}.png`} fill className=" rounded-full" alt="john"/>
           <div className="absolute right-[1.125rem] -top-[10px] bg-secondary w-[61px] h-[61px] rounded-full"/>
        </div> 
        <div className=" mt-6 ml-8 pb-8">
          <h5 className=" text-[#727891] leading-5 font-bold text-[21px]">Jane <span className=" !text-[#C2C5D1]">Doe</span></h5>  
          <p className=" text-[#727891] text-xs">Marketing</p>
        </div>       
    </div>  
  </div>
  
  
  ) }  


</div>
        </Container>
    </div>
  )
}

export default TeamListSection
