import Image from "next/image";
import React from "react";
import { Container } from "../Container";
import { urlFor } from "@/sanity";
import { formatBlogDate, truncate } from "@/utils/helpers";
import { useRouter } from "next/router";


const Articules = ({blogPosts}:{blogPosts:[Post]}) => {  
  const router = useRouter()
  return (
    <div>
      <Container>
        <h4 className="text-[28px] font-medium leading-[42px] text-primary mb-[65px] max-w-[807px]">
          In our work in the past years, we have built some important solutions
          for our clients.
        </h4>
        <div className="flex flex-wrap justify-between">
          {blogPosts.map(({
            _id,
            title,
            mainImage,
            description,
            publishedAt,
            slug
          }) => (
            <div
              key={_id}
              className=" flex flex-col w-full sm:w-1/2 md:w-1/3 px-3 justify-end mb-5"
            >
              <div className="w-full h-[251px] relative">
                <Image
                  src={urlFor(mainImage).url()}
                  fill
                  alt="blog image"
                  className="object-cover object-center"
                />
              </div>

              <div>
                <p className=" text-xs py-2">{formatBlogDate(publishedAt)}</p>
                <p className=" text-[21px] text-primary mb-4">{title}</p>
                <p className=" text-xs text-[#727891] mb-6">{truncate(description, 40)}</p>
                <button
                  onClick={() => router.push(`/blog/${slug?.current}`)}
                  className=" py-[12px] px-[24px] text-sm bg-secondary text-white rounded-[3px]">
                  Read Post
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-20">
          <h6 className="text-[21px] font-bold text-secondary flex items-center gap-3 cursor-pointer">
            Visit our blog today to read more insightful articles{" "}
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

export default Articules;



