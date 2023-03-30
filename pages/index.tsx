import Articules from "@/components/landing/Articules";
import CTAButtom from "@/components/landing/CTAButtom";
import Hero from "@/components/landing/Hero";
import OurPastWorks from "@/components/landing/OurPastWorks";
import Outline1 from "@/components/landing/Outline1";
import Outline2 from "@/components/landing/Outline2";
import Partners from "@/components/landing/Partners";
import WhatWeDo from "@/components/landing/WhatWeDo";
import LandingPageLayout from "@/layouts/LandingPageLayout";
import Head from "next/head";
import { ReactElement } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Data2bot | Home</title>
        <meta name="title" content="Home - Data2Bots"></meta>
      </Head>
      <Hero />
      <WhatWeDo />
      <Partners />
      <Outline1 />
      <Outline2 />
      <Outline1 />
      <Outline2 />
      <Outline1 />
      <Outline2 />
      <OurPastWorks />
      <Articules />
      <CTAButtom />
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};
