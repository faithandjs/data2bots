import Link from "next/link";
import React from "react";
import { Button } from "./buttons";

interface Props {
  id: string;
  title: string;
  locations: string;
  description: string;
}

export default function ApplyPosition({
  id,
  title,
  locations,
  description,
}: Props) {
  return (
    <div className=" flex flex-col gap-7 bg-white py-[27px] px-[40px] md:px-[40px] max-w-[805px] shadow-[-1px_3px_22px_18px_rgba(2,58,110,0.04)]">
      <div className=" flex">
        <div className=" flex-1">
          <h4 className=" md:text-[21px] md:leading-[31px] text-[#4388C8] font-medium">
            {title}
          </h4>
        </div>
        <p className=" text-xs font-bold text-[#727891] md:whitespace-nowrap px-8">
          {locations}
        </p>
      </div>
      <div className=" flex w-full">
        <div className=" w-[60%] md:w-[70%] text-[#727891] max-w-[555px]">
          <p className=" text-xs">{description}</p>
        </div>
        <div className=" flex justify-end flex-initial w-[40%] md:w-[30%]">
          <Link href={"/apply/" + id}>
            <Button cssExtras="!w-fit" className=" !text-sm ">
              {" "}
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
