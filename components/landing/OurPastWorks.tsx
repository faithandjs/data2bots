import Image from "next/image";
import React from "react";
import { Container } from "../Container";

const pastWorks = [
  {
    title: "Helping NNIP’s sucessfully move core workloads to the cloud",
  },
  {
    title:
      "Strengthing T-mobile’s core Devops team with our expert consultants",
  },
  {
    title: "Tranining 150 certified expert data engineers in 9 months ",
  },
  {
    title: "Helping NNIPsucessfully move core workloads to the cloud",
  },
];

const OurPastWorks = () => {
  return (
    <div className=" mb-36">
      <Container>
        <h4 className="text-[28px] font-medium leading-[42px] text-primary mb-[65px] max-w-[807px]">
          In our work in the past years, we have built some important solutions
          for our clients.
        </h4>
        <div className="flex flex-wrap justify-between">
          {pastWorks.map(({ title }, index) => (
            <div
              key={title}
              className=" w-[271px] h-[228px] relative flex flex-col justify-end mb-5"
            >
              <Image
                src={`/Assets/readmore${index + 1}.png`}
                fill
                alt="blog image"
                className="object-cover object-center"
              />
              <div className=" pt-[24px] px-[30px] bg-[rgba(0,0,0,0.52)] relative">
                <p className=" text-xs text-white">{title}</p>
                <div className="text-secondary flex mt-[7px] mb-4 ">
                  <p className=" text-sm mr-5 font-bold">Read Case Study</p>{" "}
                  <span className=" h-[19px] w-[19px] flex justify-center items-center border border-secondary rounded-full">
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
                        stroke="#F7AE57"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M0.854492 4.12927H9.73519"
                        stroke="#F7AE57"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-20">
          <h6 className="text-[21px] font-bold text-secondary flex items-center gap-3 cursor-pointer">
            Read more about our expoits{" "}
            <span>
              <svg
                width="19"
                height="15"
                viewBox="0 0 19 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.93 1L18 7.06997L11.93 13.14"
                  stroke="#FFA131"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.00012 7.07031H17.8301"
                  stroke="#FFA131"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </h6>
        </div>
      </Container>
    </div>
  );
};

export default OurPastWorks;
