import Image from "next/image";
import React from "react";
import { Button } from "../buttons";
import { Container } from "../Container";

const Outline1 = () => {
  return (
    <div className="relative md:h-[800px]">
      <Container className=" md:flex gap-8 mb-7">
        <div className=" md:flex-1 ">
          <div className=" max-w-[505px]">
            <h4 className=" text-[28px] leading-10 font-medium mb-[53px] text-primary mt-7">
              Our pool of talents and consultant are trained and certified
              adding value to tech teams globally
            </h4>
            <p className=" text-[#727891] text-xs mb-[41px]">
              We Partnered with top global brands to deliverer the best service
              to our clients and customers We Partnered with top global brands
              to deliverer the best service to our clients and customersWe
              Partnered
            </p>
            <Button cssExtras="!w-fit">Learn More</Button>
          </div>
        </div>
        <div className=" md:flex-1 flex justify-end items-center"></div>
      </Container>
      <div className=" flex w-full mt-32 md:mt-0 md:absolute h-[760px] top-0 left-0 right-0 ">
        <div className=" md:flex-1"></div>
        <div className=" md:flex-1 w-full md:w-fit h-fit flex justify-end relative">
          <p className=" text-[28px] leading-10 w-[405px] mt-20 text-left font-normal text-white z-10 relative">
            Access to the best talents that can transform your team and take
            productivity to the next level
            <span>
              <svg
                width="331"
                height="47"
                viewBox="0 0 331 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.01581 44.0804C0.231726 44.3478 -0.187116 45.2002 0.080297 45.9842C0.34771 46.7683 1.20011 47.1872 1.98419 46.9198L1.01581 44.0804ZM314.5 22.0001C314.5 26.4183 318.082 30.0001 322.5 30.0001C326.918 30.0001 330.5 26.4183 330.5 22.0001C330.5 17.5818 326.918 14.0001 322.5 14.0001C318.082 14.0001 314.5 17.5818 314.5 22.0001ZM1.98419 46.9198C41.4981 33.4434 104.951 16.0961 166.835 7.86195C197.778 3.74487 228.282 1.91267 255.181 3.96446C282.109 6.01836 305.266 11.9533 321.649 23.2355L323.351 20.7646C306.334 9.04685 282.562 3.04426 255.409 0.973152C228.229 -1.10006 197.501 0.755247 166.44 4.88816C104.316 13.154 40.6685 30.5567 1.01581 44.0804L1.98419 46.9198Z"
                  fill="#F7AE57"
                />
              </svg>
            </span>
          </p>
          <Image
            src={"/Assets/side-img-1.png"}
            width={708}
            height={462}
            alt="side-message img"
            className="absolute "
          />
          <div className=" absolute -top-[129px] -right-[125px] h-[600px] w-[600px] lg:h-[770px] lg:w-[770px] rounded-full bg-[rgba(67,136,200,0.68)]"></div>
        </div>
      </div>
    </div>
  );
};

export default Outline1;
