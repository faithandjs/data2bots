import Contact from "@/components/extendedTeam/Contact";
import Details from "@/components/extendedTeam/Details";
import ExtendedMain from "@/components/extendedTeam/ExtendedMain";
import Points from "@/components/extendedTeam/Points";
import LandingPageLayout from "@/layouts/LandingPageLayout";
import Head from "next/head";
import React, { ReactElement } from "react";

export default function ExtendedTeam() {
  return (
    <>
      <Head>
        <title>Data2bot | Extended Teams</title>
        <meta name="title" content="Extended Teams - Data2Bots"></meta>
      </Head>
      <ExtendedMain />
      <Points />
      <Details />
      <Contact />
    </>
  );
}

ExtendedTeam.getLayout = function getLayout(page: ReactElement) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};
