import CareerHero from "@/components/career/CareerHero";
import CareerIntro from "@/components/career/CareerIntro";
import LandingPageLayout from "@/layouts/LandingPageLayout";
import Head from "next/head";
import React, { ReactElement } from "react";
import { list_job_postings } from "@/utils/api_handlers";
import CareerListSection from "@/components/career/CareerListSection";

export const getStaticProps = async () => {
  try {
    const data = await list_job_postings();

    return {
      props: {
        list: data,
      },
      revalidate: 5 * 60,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

interface Props {
  list: jobList[];
}

const Careers = ({ list }: Props) => {
  return (
    <>
      <Head>
        <title>Data2bot | Careers</title>
        <meta name="title" content="Careers - Data2Bots"></meta>
      </Head>
      <CareerHero />
      <CareerIntro />
      <CareerListSection list={list}/>
    </>
  );
};

Careers.getLayout = function getLayout(page: ReactElement) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};

export default Careers;
