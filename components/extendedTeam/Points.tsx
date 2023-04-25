import React from "react";

const Box = ({ head, body }: { head: string; body: string }) => (
  <div className="flex gap-6">
    <svg
      className="shrink-0"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.5039 16L34.0039 23.5L26.5039 31"
        stroke="#FFA131"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 23.5005H33.7949"
        stroke="#FFA131"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 46C36.1 46 46 36.1 46 24C46 11.9 36.1 2 24 2C11.9 2 2 11.9 2 24C2 36.1 11.9 46 24 46Z"
        stroke="#FFA131"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <div className="gap-5 flex flex-col">
      <h2 className="text-primary text-2xl font-medium">{head}</h2>
      <p className="text-[#727891]">{body}</p>
    </div>
  </div>
);

export default function Index () {
  return (
    <div className="bg-[#F6F6FA] md:pt-10 pb-24 pt-14">
      <div className=" mx-auto max-w-7xl py-14 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-primary text-3xl font-medium pb-20">
          Work with our Extended Team
        </h2>
        <div className=" grid md:grid-cols-2 gap-10 xl:gap-20 xl:gap-x-24">
          {[
            {
              head: "Access to World-Class Talent",
              body: "Have the best of the best always working with you. Get access to qualified and experienced experts working tirelessly to deliver on your projects and organisational needs.",
            },
            {
              head: "Quick Turnaround Time",
              body: "Deliver projects and meet client deadlines in an excellent way. When you have the best team working for you, your projects are not only done well, they are delivered on time, everytime.",
            },
            {
              head: "Save Cost",
              body: "No more cost-intensive recruitment processes. Get access to a team of seasoned, qualified professionals at a fraction of the cost.",
            },
            {
              head: "Grow Revenue",
              body: "Having a Team of more ⁶ experienced hands means you can take on more clients and more projects which in turn leads to increased revenue.",
            },
          ].map((item, key) => (
            <Box key={key} {...item} />
          ))}
        </div>{" "}
      </div>
    </div>
  );
}
