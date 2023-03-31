import Image from "next/image"
import React from "react"
import { Container } from "../Container"

const AboutHero = () => {
  return (
    <div className="pt-32 md:pt-64 pb-24 overflow-hidden">
      <Container>
        <div className=" flex flex-col relative justify-center md:flex-row md:items-center lg:gap-12 md:gap-6">

          <div className="flex-1 md:mx-0 mt-6 text-[#727891] relative mb-20 md:mb-0">
                     <div className="absolute w-[49px] h-[49px] rounded-full bg-primary  -left-[20px] "/> 
                     <h4 className=" text-[2.375rem] relative mb-[42px] text-secondary">
            Who we are
            </h4>
            <p className={"text-sm mb-[18px] md:max-w-[387px]"}>
            At Data2Bots, we build secure and scalable data solutions in the cloud, 
            helping businesses make informed decisions off their data. 
            Our solutions are driven towards identifying organizational data challenges, 
            designing strategies to address them while keeping your 
            business’s needs top of mind without disrupting your business activities.<br/><br/>

Our consultants have a broad knowledge in building data pipelines, 
deploying data infrastructure and developing solutions for 
businesses across industries. With hands-on experience in 
problem-solving, our experts can help your business grow  
by reviewing your existing data infrastructure and 
providing advice for improvement.
              </p>
          </div>

          <div className=" flex-col flex-1">
            <div className=" relative w-fit">
                <div className=" hidden md:block absolute w-[560px] h-[560px] rounded-full bg-primary -top-[135px] left-[150px]"/>
              <Image
                className="relative"
                src={"/Assets/about-hero.png"}
                alt="team picture"
                width={520}
                height={483}
              /> 
              <div className="absolute rounded-full h-[168px] w-[168px] -right-[55px] -top-[55px] bg-[#F7AE57]"></div>
              <div className="absolute rounded-full h-[68px] w-[68px] -right-[32px] bottom-[44px] bg-[#F7AE57]"></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default AboutHero
