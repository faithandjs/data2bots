import AboutHero from "@/components/about/AboutHero";
import WhatWeDo from "@/components/about/WhatWeDo";
import AboutSide1 from "@/components/about/AboutSide1";
import AboutSide2 from "@/components/about/AboutSide2";
import LandingPageLayout from "@/layouts/LandingPageLayout";
import Head from "next/head";
import React, { ReactElement } from "react";
import CoreValues from "@/components/about/CoreValues";
import People from "@/components/about/People";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>Data2bot | About Us</title>
        <meta name="title" content="Home - Data2Bots"></meta>
      </Head>
      <AboutHero />
      <WhatWeDo />
      <AboutSide1 />
      <AboutSide2 />
      <CoreValues />
      <People />
    </>
  );
};

AboutUs.getLayout = function getLayout(page: ReactElement) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};

export default AboutUs;
