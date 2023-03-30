import Image from "next/image";
import React from "react";
import { Button } from "../buttons";
import { Container } from "../Container";

const CTAButtom = () => {
  return (
    <div className="relative h-[412px] mt-72">
      <div className=" flex w-full md:mt-0 absolute h-[760px] top-0 left-0 right-0 ">
        <div className=" md:flex-1 w-full md:w-fit h-fit flex justify-start relative">
          <div className=" w-full h-[412px]">
            <Image
              src={"/Assets/CTAstripe.png"}
              alt="stripe image"
              className="object-cover object-center"
              fill
            />
          </div>
        </div>
      </div>
      <Container className=" relative md:flex gap-8 mb-7">
        <div className=" absolute -top-[129px] -left-[125px] h-[600px] w-[600px] lg:h-[770px] lg:w-[770px] rounded-full bg-[rgba(247,174,87,0.75)]" />

        <div className="relative md:flex-1 ">
          <div className=" max-w-[505px] pt-10">
            <h4 className=" text-[28px] leading-10 font-medium mb-3 text-white mt-7">
              Begin Your Data Transformation Journey Today
            </h4>
            <p className=" text-black text-xs mb-[41px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
              tristique imperdiet tortor morbi volutpat,
            </p>
            <div className=" flex gap-8">
              <Button cssExtras="!w-fit">Learn More</Button>
              <button className=" py-[12px] px-[24px] text-sm bg-black text-white rounded-[3px]">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className=" md:flex-1 flex justify-end items-center"></div>
      </Container>
    </div>
  );
};

export default CTAButtom;
