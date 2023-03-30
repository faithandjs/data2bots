import Image from "next/image";
import React from "react";
import { Container } from "../Container";

const partners = {
  tech: [
    {
      name: "aws",
      width: 41.25,
      height: 25,
    },
    {
      name: "google",
      width: 161.62,
      height: 25,
    },
    {
      name: "azure",
      width: 85.25,
      height: 25,
    },
    {
      name: "snowflake",
      width: 105.07,
      height: 25,
    },
    {
      name: "atlassian",
      width: 190.75,
      height: 25,
    },
    {
      name: "slack",
      width: 96.05,
      height: 25,
    },
    {
      name: "zoom",
      width: 75.5,
      height: 25,
    },
  ],
  recruit: [
    {
      name: "randstad",
      width: 155.13,
      height: 25,
    },
    {
      name: "orangequarter",
      width: 86.61,
      height: 25,
    },
  ],
  customers: [
    {
      name: "nike",
      width: 44.45,
      height: 25,
    },
    {
      name: "tmobile",
      width: 102.78,
      height: 25,
    },
    {
      name: "philips",
      width: 136.27,
      height: 25,
    },
    {
      name: "pvh",
      width: 25.6,
      height: 25,
    },
  ],
};
const Partners = () => {
  return (
    <div className="mb-28 md:mb-56">
      <h3 className=" max-w-4xl px-6 mx-auto text-[28px] text-primary text-center font-medium leading-10 mb-5">
        We Patnered with top global brands to deliever the best service to our
        clients and customers
      </h3>
      <div className="bg-[#EFEFF5] mb-9 py-8">
        <Container className="md:flex px-7">
          <div className="md:w-[25%] my-auto">
            <p className="text-[#727891] mb-6 md:mb-0 ">Tech Partners:</p>
          </div>
          <div className="md:w-[75%] flex flex-wrap gap-y-11 md:pr-32">
            {partners.tech.map(({ name, width, height }) => (
              <Image
                key={name}
                src={`/Assets/${name}.png`}
                width={width}
                height={height}
                className="mr-10"
                alt="parthners"
              />
            ))}
          </div>
        </Container>
      </div>
      <div className="bg-[#EFEFF5] mb-9 py-8">
        <Container className="md:flex px-7">
          <div className="md:w-[25%] my-auto">
            <p className="text-[#727891] mb-6 md:mb-0">Recruitment Patners:</p>
          </div>
          <div className="md:w-[75%] flex flex-wrap gap-y-11 md:pr-32">
            {partners.recruit.map(({ name, width, height }) => (
              <Image
                key={name}
                src={`/Assets/${name}.png`}
                width={width}
                height={height}
                className="mr-10"
                alt="parthners"
              />
            ))}
          </div>
        </Container>
      </div>
      <div className="bg-[#EFEFF5] mb-9 py-8">
        <Container className="md:flex px-7">
          <div className="md:w-[25%]">
            <p className="text-[#727891] mb-6 md:mb-0 my-auto">Customers:</p>
          </div>
          <div className="md:w-[75%] flex flex-wrap items-center gap-y-11 md:pr-32">
            {partners.customers.map(({ name, width, height }) => (
              <Image
                key={name}
                src={`/Assets/${name}.png`}
                width={width}
                height={height}
                className="mr-10"
                alt="parthners"
              />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Partners;
