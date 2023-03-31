import React from "react";
import { Container } from "../Container";

const WhatWeDo = () => {
  return (
    <div className="bg-[#F6F6FA]  bg-no-repeat bg-cover pt-24 pb-12">
      <Container>
        <div>
          <h4 className="text-[28px] font-medium leading-[42px] text-[#232C57] mb-3">
            What we do
          </h4>
          <p className="text-xs text-[#727891]">
          We offer a range of services that cover these core areas
          </p>

          <div className="flex flex-wrap">
            {["Consultancy","Training","Team Support","Data Transformation"].map((title, index) => (
              <div key={index} className=" md:w-[40%] flex justify-start">
                <div className="w-[392px] h-[216px] my-[26px]">
                  <div className=" flex flex-col justify-end w-full h-full mb-2 px-[27px] py-[20px] shadow-[-1px_3px_22px_18px_rgba(2,58,110,0.04)] bg-white">
                    <div className="">
                    <h6 className={`mb-2 ${index>1?"text-secondary":"text-primary"} font-medium text-[28px]`}>
                      {title}
                    </h6>
                    <p className=" text-[9px] pb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Erat tristique imperdiet tortor morbi volutpat, donec.
                      Accum Lorem
                    </p>                        
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
