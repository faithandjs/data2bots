import Image from "next/image";
import React from "react";

const TeamsHero = () => {
  return (
    <div className="relative mt-[80px] md:mt-[89px] mb-64">
      <div className="h-[583px] relative bg-[#083158]">
        <Image
          src={"/Assets/teams-hero.png"}
          alt="Hero Image"
          className="object-cover object-center opacity-60"
          fill
        />
      </div>

      <div className="absolute top-0 left-0 right-0 h-[583px] w-full">
        <div className="relative h-full w-full">
          <div className=" relative md:flex mt-36 md:mt-0 max-w-[85rem] mx-auto items-center justify-between w-full h-full">
            {/* circular design */}
            <div className="absolute h-[1039px] w-[1039px] -left-[444px] -top-[450px] md:-top-[307px]">
              <div className="relative h-full w-full bg-[rgba(255,161,49,0.58)] rounded-full"></div>
            </div>
            {/* circular design end */}
            <div className=" relative md:flex-1">
              <div className="max-w-[506px] flex flex-col md:items-center mx-6">
                <div className="relative">
                  <div className=" h-[121px] w-[121px] absolute left-[0px] -top-[42px] rounded-full bg-primary" />
                  <h1 className="flex md:block relative font-bold text-4xl md:text-[51px] md:leading-[78px] mb-5 ml-16 text-white">
                    Meet <br /> Our team
                  </h1>
                </div>
              </div>
            </div>
            <div className="relative md:flex-1 md:flex justify-start mx-6">
              <p className="relative text-[21px] max-w-[524px] font-normal text-white mt-8 md:mt-16 mb-7">
                At Data2Bots, we build secure and scalable data solutions in the
                cloud, helping businesses make informed decisions off their
                data. Our solutions are driven towards identifying
                organizational data challenges, designing strategi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamsHero;
