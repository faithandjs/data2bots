import React from "react";
import { Button } from "./buttons";
import Image from "next/image";

interface Props {
  index: number;
  title: string;
}

const LandingHeroSwipe = ({ index, title }: Props) => {
  return (
    <div className="relative">
      <div className="h-[686px] relative bg-[#232C57]">
        <Image
          src={`/Assets/hero-bg-${index + 1}.png`}
          alt="Hero Image"
          className="object-cover object-center opacity-70"
          fill
        />
      </div>
      <div className="absolute h-[904px] w-[904px] md:-left-[141px] -left-[230px] -top-[93px]">
        <div className="relative h-full w-full bg-[rgba(67,136,200,0.68)] rounded-full">
          <div className=" h-[132px] w-[132px] absolute left-[826px] top-[436px] rounded-full bg-secondary" />
          <div className=" h-[90px] w-[90px] absolute left-[800px] top-[611px] rounded-full bg-secondary" />
          <div className=" h-[63px] w-[63px] absolute left-[749px] top-[724px] rounded-full bg-secondary" />
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 h-[686px] w-full">
        <div className="relative h-full w-full">
          <div className="flex max-w-[85rem] mx-auto items-start mt-40 justify-between w-full h-full">
            <div className=" md:flex-1">
              <div className=" max-w-[506px] mx-6">
                <h1
                  className={`font-medium text-4xl md:text-[51px] leading-[48px] ${
                    (index + 1) % 2 ? "md:leading-[78px]" : "md:leading-[68px]"
                  } mb-5 text-white`}
                >
                  {title}
                </h1>
                <p className=" text-xs text-white mb-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
                  tristique imperdiet tortor morbi volutpat, donec. Accumsan
                  curabitur egestas non malesuada ipsum pellentesque faucibus
                  tincidun
                </p>
                <div className="flex gap-6">
                  <Button cssExtras="!w-fit" className=" !text-sm">
                    Get Started
                  </Button>
                  <button className=" py-[12px] px-[24px] text-sm bg-secondary text-white rounded-[3px]">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden md:flex-1 md:flex justify-end">
              <p className=" max-w-[399px] border-l-[7px] border-secondary p-[9px] mt-28 text-xs text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
                tristique imperdiet tortor morbi volutpat, donec. Accum
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHeroSwipe;
