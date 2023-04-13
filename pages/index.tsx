import Articules from "@/components/landing/Articules";
import CTAButtom from "@/components/landing/CTAButtom";
import Hero from "@/components/landing/Hero";
import OurPastWorks from "@/components/landing/OurPastWorks";
import Outline1 from "@/components/landing/Outline1";
import Outline2 from "@/components/landing/Outline2";
import Partners from "@/components/landing/Partners";
import WhatWeDo from "@/components/landing/WhatWeDo";
import LandingPageLayout from "@/layouts/LandingPageLayout";
import { GetStaticProps } from "next";
import { sanityClient } from "../sanity";
import Head from "next/head";
import React, { ReactElement } from "react";

const outlines = [
  {
    title:
      "Our pool of talents and consultant are trained and certified adding value to tech teams globaly",
    note: "We Patnered with top global brands to deliever the best service to our clients and customers We Patnered with top global brands to deliever the best service to our clients and customersWe Patnered ",
    quote:
      "Access to the best talents that can transform your team and take productivity to the next level",
    image: "/Assets/side-img-1.png",
  },
  {
    title:
      "Our extended team of data professionals Help you speed up your data migration and data pipeline projects",
    note: "We Patnered with top global brands to deliever the best service to our clients and customers We Patnered with top global brands to deliever the best service to our clients and customersWe Patnered ",
    quote:
      "You save alot of engineering time and cost when you work with global talents like ours",
    image: "/Assets/side-img-2.png",
  },
  {
    title:
      "Our academy equips you with requisite knowledge to stand out in a global market",
    note: "We Patnered with top global brands to deliever the best service to our clients and customers We Patnered with top global brands to deliever the best service to our clients and customersWe Patnered ",
    quote:
      "Learn from experts with years of indusry experience amd take your career journey to the next level.",
    image: "/Assets/side-img-3.png",
  },
  {
    title:
      "Our data engineering team can build entire solutions for your organization based on your preferences and guidelines.",
    note: "We Patnered with top global brands to deliever the best service to our clients and customers We Patnered with top global brands to deliever the best service to our clients and customersWe Patnered ",
    quote:
      "Save time on implementations and forget about downtime if you out source to our data solutions to our team",
    image: "/Assets/side-img-4.png",
  },
];

export default function Home({blogPosts}: {blogPosts: [Post]}) {
  return (
    <>
      <Head>
        <title>Data2bot | Home</title>
        <meta name="title" content="Home - Data2Bots"></meta>
      </Head>
      <Hero />
      <WhatWeDo />
      <Partners />
      <div className="bg-[url('/Assets/bg-overlay2.png')]  bg-no-repeat bg-cover">
        {outlines.map((outline, index) => (
          <React.Fragment key={outline.image}>
            {(index + 1) % 2 ? (
              <Outline1 {...outline} />
            ) : (
              <Outline2 {...outline} />
            )}
          </React.Fragment>
        ))}
      </div>

      <OurPastWorks />
      <Articules blogPosts={blogPosts}/>
      <CTAButtom />
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};


export const getStaticProps: GetStaticProps = async () => {
    const query = `*[_type == "post"]|order(publishedAt desc) [0...6]{
      _id,
      title,
      mainImage,
      publishedAt,
      description,
      slug,
    }`
  
  let blogPosts = []
  try{
    blogPosts = await sanityClient.fetch(query)
  }
  catch(err){
    console.log(err)
    blogPosts = []
  }
  return {
    props: {
      blogPosts
    },
    revalidate: 60 * 5
  }
}