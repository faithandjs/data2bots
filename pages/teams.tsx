import TeamsHero from "@/components/Teams/TeamsHero";
import WelcomeSection from "@/components/Teams/WelcomeSection";
import TeamListSection from "@/components/Teams/teamListSection";
import LandingPageLayout from "@/layouts/LandingPageLayout";
import Head from "next/head";
import React, { ReactElement } from "react";

const Teams = () => {
  return (
    <>
      <Head>
        <title>Data2bot | Extended Teams</title>
        <meta name="title" content="Extended Teams - Data2Bots"></meta>
      </Head>   
      <TeamsHero />
      <TeamListSection/>
      <WelcomeSection/>
   
    </>
  );
};

Teams.getLayout = function getLayout(page: ReactElement) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};

export default Teams;