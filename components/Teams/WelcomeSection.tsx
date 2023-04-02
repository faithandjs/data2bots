import React from "react"
import { Container } from "../Container"
import { Button } from "../buttons"

const WelcomeSection = () => {
  return (
    <div className=" bg-[#023A6E]">
        <Container className="relative flex flex-col items-center pt-[60px] pb-28">
            <img className="absolute -top-7 -left-20" src="/Assets/team-bg-style.svg"/>
            <img className="absolute -top-7 -right-20" src="/Assets/team-bg-style2.svg"/>
            <h4 className=" text-white text-[38px] leading-[57px] max-w-[681px] text-center">Come be a part of the amazing work we are doing </h4>
            <Button cssExtras="!w-fit mt-8">Apply for a position</Button>
        </Container>
      
    </div>
  )
}

export default WelcomeSection
