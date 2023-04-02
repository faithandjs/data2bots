import Image from "next/image";
import React from "react";
import { Button } from "../buttons";
import { Container } from "../Container";

interface Props {
  image: string;
  quote: string;
  title: string;
  note: string;
}

const Outline2 = ({ image, quote, title, note }: Props) => {
  return (
    <div className="relative md:h-[800px]">
      <Container className=" md:flex gap-8 mb-7">
        <div className=" md:flex-1 flex justify-end items-center"></div>
        <div className=" md:flex-1 ">
          <div className=" max-w-[505px]">
            <h4 className=" text-[28px] leading-10 font-medium mb-[53px] text-primary mt-7">
              {title}
            </h4>
            <p className=" text-[#727891] text-xs mb-[41px]">{note}</p>
            <Button cssExtras="!w-fit">Learn More</Button>
          </div>
        </div>
      </Container>
      <div className=" flex w-full mt-32 md:mt-0 md:absolute h-[760px] top-0 left-0 right-0 ">
        <div className=" md:flex-1 w-full md:w-fit h-fit flex justify-start relative">
          <p className=" pl-8 text-[28px] leading-10 w-[405px] mt-20 text-left font-normal text-white z-10 relative">
            {quote}
            <span>
              <svg
                width="331"
                height="47"
                viewBox="0 0 331 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M329.484 44.0804C330.268 44.3478 330.687 45.2002 330.42 45.9842C330.152 46.7683 329.3 47.1872 328.516 46.9198L329.484 44.0804ZM16 22.0001C16 26.4183 12.4183 30.0001 8 30.0001C3.58173 30.0001 0 26.4183 0 22.0001C0 17.5818 3.58173 14.0001 8 14.0001C12.4183 14.0001 16 17.5818 16 22.0001ZM328.516 46.9198C289.002 33.4434 225.549 16.0961 163.665 7.86195C132.722 3.74487 102.218 1.91267 75.3188 3.96446C48.3914 6.01836 25.2345 11.9533 8.85074 23.2355L7.14926 20.7646C24.1655 9.04685 47.9377 3.04426 75.0906 0.973152C102.271 -1.10006 132.999 0.755247 164.06 4.88816C226.184 13.154 289.831 30.5567 329.484 44.0804L328.516 46.9198Z"
                  fill="#4388C8"
                />
              </svg>
            </span>
          </p>
          <Image
            src={image}
            width={708}
            height={462}
            alt="side-message img"
            className="absolute left-0"
          />
          <div className=" absolute -top-[129px] -left-[125px] h-[600px] w-[600px] lg:h-[770px] lg:w-[770px] rounded-full bg-[rgba(247,174,87,0.75)]" />
        </div>

        <div className=" md:flex-1"></div>
      </div>
    </div>
  );
};

export default Outline2;
