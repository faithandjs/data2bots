import Image from "next/image";
import React from "react";
import { Container } from "../Container";

const CareerHero = () => {
  return (
    <div className="pt-32 md:pt-52 pb-24 overflow-hidden">
      <Container>
        <div className=" flex flex-col relative justify-center md:flex-row md:items-center lg:gap-12 md:gap-6">
          <div className="flex-1 md:mx-0 mt-6 text-[#727891] relative mb-20 md:mb-0">
            <div className="relative">
                  <div className=" h-[121px] w-[121px] absolute left-[0px] -top-[42px] rounded-full bg-primary" />
                  <h1 className="flex md:block relative font-bold text-4xl md:text-[51px] md:leading-[78px] max-w-[424px] mb-5 ml-16 text-black">
                  Work With The Best Minds
                  </h1>
                </div>
            <p className={"text-sm md:text-[21px] md:ml-16 mb-[18px] leading-[31.5px] text-[#727891]"}>
            Are you a data professional or enthusiast looking to join a team of innovative minds to spur a change in digital transformation?
<br/>
<br/>
We build secure and scalable data solutions in the cloud, helping organisations make informed decisions off their data.
<br/>
<br/>
We provide a remote real-life working environment designed for innovative thinkers.

            </p>
          </div>

          <div className=" flex-col flex-1">
            <div className=" relative w-fit">
              <div className=" hidden md:block absolute w-[549px] h-[549px] rounded-full bg-primary -top-[8px] -left-[37px]" />
              <Image
                className="relative"
                src={"/Assets/careers-hero-img.png"}
                alt="team picture"
                width={549}
                height={549}
              />
              <div className="absolute rounded-full h-[168px] w-[168px] right-[41px] -top-[23px] bg-[#F7AE57]"></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CareerHero;
