import Image from 'next/image';
import React from 'react';
import { Container } from '../Container';
import BreadCrumb from '../BreadCrumb';

export default function ExtendedMain() {
  return (
    <div className='md:pt-32 pb-24 pt-14'>
      <Container>
        <BreadCrumb />
        <div className=' flex flex-col relative justify-center md:flex-row md:items-center lg:gap-12 md:gap-6 '>
          <div className='flex-1 md:mx-0 mt-6 text-[#727891] relative md:mb-0 mb-20 grid gap-10 xl:gap-12 md:pr-10 '>
            <div className='absolute w-[49px] h-[49px] rounded-full bg-primary  -left-[20px] -top-6 ' />
            <h4 className=' text-5xl relative text-secondary'>
              Boost your in house team’s productivity
            </h4>
            <p className={'  text-secondary text-3xl'}>
              Streamline your Data automation, Cloud Migration and Machine
              learning processes.
            </p>

            <p className={'text-sm mb-[18px] '}>
              Say goodbye to the long,  expensive and tedious process of
              recruiting a new team and use our extended team today
            </p>
          </div>

          <div className=' flex-col flex-1 lg:w-[65%]'>
            <div className=' relative w-fit'>
              <Image
                className='relative'
                src={'/Assets/extended-main.png'}
                alt='team picture'
                width={520}
                height={483}
              />
              <Image
                className='absolute z-[-1] top-1/2 -right-[10%] -translate-y-1/2 lg:block hidden '
                src={'/Assets/art.png'}
                alt='team picture'
                width={208}
                height={633}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

