import Image from "next/image"
import React from "react"
import { Container } from "../Container"

const values=[
    {
    title:"Full Commitment",
    description:"As a company so passionate about making an impact on businesses daily lives, our team is no exception. Our employees are fully committed at what they do and take client business needs as theirs by providing qualitative business results. We believe that through constant feedback and collaboration, we are creating an environment where our employees are fully committed to business growth."
    },
    {
    title:"Ownership Mindset",
    description:"Data2bots has a collaborative team of independent owners. All of our team members are quick to brainstorm ideas and take ownership on tasks to make ideas become  a reality. We encourage our employees to explore their ideas and take full ownership and responsibilities. At Data2bots, we are building a balance of pushing people beyond their comfort zones and allowing them to succeed at what they do well."
    },
    {
    title:"Self Improvement",
    description:"As a company that solves businesses’ modern and day-to-day problems, it’s important that our employees are up-to-date with evolving technology. We prioritize individual development. We believe that both professional and personal development are major factors contributing to an individual’s success. We support our employees’ passions so that they will be more engaged and motivated at work and life in general."
    },
    {
    title:"Radical Transparency",
    description:"At Data2bots, Transparency is key to our culture and is embodied by everyone from the CEO to the latest hire. We are always intentional about having open conversations about information regarding the company and the internal and external factors that affect its health. We believe that If team members are transparent with their direct reports, open conversations will flow throughout the organization"
    },
]

const CoreValues = () => {
  return (
    <div className=" mt-32">
       <Container>
             <div className="relative">
             <div className="absolute w-[49px] h-[49px] rounded-full bg-primary  -left-[20px] "/> 
                     <h4 className=" text-[2.375rem] relative mb-[42px] text-secondary">
                     Our Core Values
            </h4>
             </div>
              <div className="flex flex-wrap justify-start">
          {values.map(({title,description}, index) => (
            <div
              key={index}
              className=" flex flex-col items-start w-full md:w-1/2 px-3 justify-end mb-10"
            >
              <div className="w-[449px] h-[281px] shadow-[-1px_3px_22px_18px_rgba(2,58,110,0.04)] relative">
                <Image
                  src={`/Assets/value${index+1}.png`}
                  fill
                  alt="blog image"
                  className="object-cover object-center"
                />
              </div>

              <div className=" w-[449px] bg-white shadow-[-1px_3px_22px_18px_rgba(2,58,110,0.04)] px-[35px] py-[46px]">
                
                <p className=" text-[21px] text-primary font-medium mb-4">
                  {title}
                </p>
                <p className=" text-xs text-[#727891]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>        
        
        </Container> 

    </div>
  )
}

export default CoreValues
