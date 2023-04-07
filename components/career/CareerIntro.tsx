import Image from "next/image";
import React from "react";
import { Container } from "../Container";

const CareerIntro = () => {
  return (
    <div className="pt-16 pb-24 overflow-hidden bg-[#F6F6FA]">
      <Container>
        <div className=" flex flex-col relative justify-center md:flex-row md:items-center lg:gap-12 md:gap-6">
          <div className="flex-1 md:mx-0 mt-6 text-[#727891] relative mb-20 md:mb-0">
            <p className={"text-sm mb-[18px] md:max-w-[387px]"}>
              At Data2Bots, we build secure and scalable data solutions in the
              cloud, helping businesses make informed decisions off their data.
              Our solutions are driven towards identifying organizational data
              challenges, designing strategies to address them while keeping
              your business’s needs top of mind without disrupting your business
              activities.
              <br />
              <br />
              Our consultants have a broad knowledge in building data pipelines,
              deploying data infrastructure and developing solutions for
              businesses across industries. With hands-on experience in
              problem-solving, our experts can help your business grow by
              reviewing your existing data infrastructure and providing advice
              for improvement.
            </p>
          </div>

          <div className=" flex-col flex-1">
            <div className=" relative w-fit">              
            <div className="absolute rounded-full h-[139px] w-[139px] -left-[55px] -top-[55px] bg-[#F7AE57]"/>
              <div className=" w-[395px] h-[483px]">
              <Image
              fill
                className="object-cover object-center"
                src={"/Assets/about-hero.png"}
                alt="team picture"

              />                
              </div>

            </div>
          </div>
          <div className="flex-1">
            <h5 className=" text-[38px] text-primary leading-[57px]">
            We believe strongly in developing every human capacity to deliver maximum value through challenging projects.
            </h5>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CareerIntro;

