import Image from "next/image";
import React from "react";
import { Container } from "../Container";

const Details = () => {
  return (
    <div className='md:pt-[197px] pb-24 pt-14 overflow-hidden'>
      <Container>
        <div className=' flex flex-col relative justify-center md:flex-row md:items-center lg:gap-12 md:gap-6'>
          <div className='flex-1 md:mx-0 mt-6 text-[#727891] relative mb-20 md:mb-0 gap-7 xl:gap-10 grid'>
            <h4 className=' text-[2.375rem] relative text-primary'>
              Tap into our wide array of experience in building scalable Data
              Solutions
            </h4>
            <p className={"text-sm mb-[18px] md:max-w-[387px]"}>
              At Data2Bots, We help you build secure and scalable data solutions
              in the cloud so that you can make informed decisions based on your
              data. We work with you to identify data challenges in your
              organisation, design solutions to them while keeping your business
              needs top of mind.
            </p>
            <button
              className=' px-10 py-3 rounded text-white bg-[#4388C8] w-max'
              type='submit'>
              Call Us Today
            </button>
          </div>

          <div className=' flex-col flex-1'>
            <div className=' relative w-fit'>
              <Image
                className='relative'
                src={"/Assets/extended-details.png"}
                alt='team picture'
                width={520}
                height={483}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Details;

