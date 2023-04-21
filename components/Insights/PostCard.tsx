import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity";
import { formatBlogDate, truncate } from "@/utils/helpers";
import { useRouter } from "next/router";

export default function PostCard({
  title,
  mainImage,
  description,
  publishedAt,
  slug,
}: Post) {
  const router = useRouter();

  return (
    <div className=" flex flex-col w-full sm:w-1/2 md:w-1/3 px-3 justify-end mb-5">
      <div className="w-full h-[251px] relative">
        <Image
          src={urlFor(mainImage).url()}
          fill
          alt="blog image"
          className="object-cover object-center"
        />
      </div>
      <p className="text-xs my-[8px] font-normal">
        {formatBlogDate(publishedAt)}
      </p>

      <div>
        <p className=" text-[21px] text-primary mb-2">{title}</p>
        <p className=" text-xs text-[#727891] mb-4">
          {truncate(description, 40)}
          Lorem ipsum dolor si
        </p>
        <button
          onClick={() => router.push(`/insights/${slug?.current}`)}
          className=" py-[12px] px-[24px] text-sm bg-secondary text-white rounded-[3px]"
        >
          Read Post
        </button>
      </div>
    </div>
  );
}
