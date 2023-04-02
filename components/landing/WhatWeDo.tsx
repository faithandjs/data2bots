import Image from "next/image";
import React from "react";
import { Container } from "../Container";

const WhatWeDo = () => {
  return (
    <div className="bg-[url('/Assets/bg-overlay.png')]  bg-no-repeat bg-cover pt-64 pb-32">
      <Container>
        <div>
          <h4 className="text-[28px] font-medium leading-[42px] text-[#232C57] mb-3">
            We offer our expreties across various touchpoints{" "}
          </h4>
          <p className="text-xs text-[#232C57]">
            Learn More about how we can help you and your team
          </p>

          <div className="flex flex-wrap">
            {[...Array(4)].map((_, index) => (
              <div key={index} className=" md:w-[40%] flex justify-start">
                <div className="w-full sm:w-[392px] my-[26px]">
                  <div className="w-full h-[174px] mb-2 px-[27px] py-[20px] shadow-[-1px_3px_22px_18px_rgba(2,58,110,0.04)] bg-white">
                    <h6 className="mb-[2.75rem] text-primary font-semibold text-[21px]">
                      Data2Bots Talent Pipeline
                    </h6>
                    <p className=" text-[9px] pb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Erat tristique imperdiet tortor morbi volutpat, donec.
                      Accum Lorem
                    </p>
                  </div>
                  <div className="w-full relative h-[127px]  shadow-[-1px_3px_22px_18px_rgba(2,58,110,0.04)]">
                    <Image src={"/Assets/learn-bg.png"} fill alt="background" />
                    <div className="absolute top-0 w-full h-full bg-[rgba(0,0,0,0.56)] flex justify-end px-[23px] py-[15px] items-end">
                      <div className="text-white flex">
                        <p className=" text-sm mr-2">Learn more</p>{" "}
                        <span className=" h-[19px] w-[19px] flex justify-center items-center border border-white rounded-full">
                          <svg
                            width="11"
                            className=" "
                            height="8"
                            viewBox="0 0 11 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.62207 0.926147L9.82503 4.12911L6.62207 7.33207"
                              stroke="white"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M0.854492 4.12927H9.73519"
                              stroke="white"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhatWeDo;
