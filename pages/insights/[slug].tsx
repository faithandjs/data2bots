import LandingPageLayout from "@/layouts/LandingPageLayout";
import { sanityClient, urlFor } from "@/sanity";
import { formatBlogDate } from "@/utils/helpers";
import type { GetStaticProps } from "next";
import { ReactElement } from "react";
import Image from "next/image";
import PostCard from "@/components/Insights/PostCard";

const Insight = ({ post, blogPosts }: { post: Post; blogPosts: [Post] }) => {
  return (
    <div>
      <div className="flex justify-end pt-[61px] pr-[108px] text-sm">
        <span className="text-[#C2C5D1]">Home /</span>
        <span className="text-[#727891] ml-2">insight</span>
      </div>
      <div className="pl-[212px] pr-[316px] mt-[41px] ">
        <p className="  text-[#727891] text-[28px] font-normal ">
          {post.title}
        </p>

        <p className="text-xs my-[12px] font-normal text-primary">
          {formatBlogDate(post.publishedAt)}
        </p>

        <img
          src={urlFor(post.mainImage).url()}
          alt={post.title}
          className=" w-[912px] h-[374px]"
        />
        <div className="mt-[74px] text-sm font-normal text-[#727891]">
          <p className="  ">
            The upsurge of data being generated and the need for its analysis
            have led to an unprecedented and urgent demand for talents in the
            data space. This brings an opportunity to data enthusiasts to
            explore and become highly in demand data professionals. According to
            Randstad Study, everything about the world of work has changed
            drastically since early 2020. Employers are still struggling to find
            talent for key roles including AI, machine learning, data
            engineering, data science and more.
          </p>
          <br />
          <p>
            In part 1 of this article, I discussed how you can become an
            in-demand data professional from the perspective of our Engineers at
            Data2Bots. The article was rich with information from my discussion
            with current professionals in the field.
          </p>
          <br />
          <p>
            In this article, you will get to know the current trends,
            opportunities in the data space and how you can upskill to become an
            in demand data expert. You will also see how you can fill the data
            gap in the data field in terms of the skills required and how you
            can learn them.
          </p>
          <p className="text-yellow-500 text-2xl py-4">
            Data Professionals Job Trends
          </p>
          <p>
            According to IBM, an increment of 364,000 to 2,720,000 data-related
            job openings was generated in the year 2020. So, there will be a
            sharp increase in demand for data professionals by 2022. This demand
            will only grow further to an astonishing 700,000 openings.
          </p>
          <br />
          <p>
            In another research, the data space is predicted to grow over the
            next decade. The demand for data scientists and other related
            professionals rose by 28% by 2020 alone. It is an astonishing fact
            that close to 90% of the data in the world was generated in just 2
            years. How can you then imagine the amount of data that will be
            generated in the next decade?
          </p>
          <br />
          <p>
            In the LinkedIn 2020 reports, data is another field that has topped
            the Emerging Jobs list for three years running. It’s a speciality
            that’s continuing to grow significantly across all industries. The
            report indicated that some of this growth can likely be attributed
            to the evolution of previously existing jobs, like Statisticians,
            and increased emphasis on data in academic research.
          </p>
          <br />
          <p>
            Data related jobs such as data engineering, data analysis and data
            architecture, are the top positions listed on the Glassdoor website.
            These positions will likely remain unchanged in the future. It was
            also reported that the data related openings are open for 45 days.
            This figure is 5 days more than the ones in a regular job market.
          </p>
          <p className="text-yellow-500 text-2xl py-4">
            How to Acquire the Required Skills to Become a Data Professional
          </p>
          <p>
            Data Professionals such as data engineers, data scientists and data
            analysts required distinct but similar skills which include
            Programming Language (Python, Java, Scala), Data Processes, Machine
            learning, data visualisation, Presentation skill, critical thinking
            among others.
          </p>

          <br />
          <p>
            Different kinds of certifications exist for each career path in the
            data profession. The certification includes but is not limited to:
          </p>
          <br />
          <p>
            Certified Analytics Professional (CAP)
            <br />
            Cloudera Certified Associate (CCA) Data Analyst
            <br />
            Cloudera Certified Professional (CCP) Data Engineer <br />
            Data Science Council of America (DASCA) Senior Data Scientist (SDS){" "}
            <br />
            Dell EMC Data Science Track (EMCDS) <br /> Google Professional Data
            Engineer Certification <br /> IBM Data Science Professional
            Certificate <br />
            Microsoft Certified: Azure Data Scientist Associate <br /> SAS
            Certified AI & Machine Learning Professional <br /> Apart from
            Universities programs on data science and engineering leading to the
            award of degree certification. Companies such as IBM, Google, and
            Microsoft have courses that train and certify qualified
            professionals. There are also some online courses offered by other
            online vendors like Coursera. Another option available is to attend
            a well structured upskill program such as Data2Bots Academy upskill
            program leading to certification, job placement, and relocation.
            Data2Bots Academy offers a 9-month intensive, well structured and
            career-focused upskill program that takes you from zero to mastery
            in the data field such as data engineering, data analysis, data
            science etc.
          </p>
          <br />
          <p>
            Data Professionals Salaries
            <br />
            According to Glassdoor, data professionals’ average salary is
            $105,601 /yr. This number represents the median, which is the
            midpoint of the ranges from their proprietary total pay estimate
            model and based on salaries collected from their users.
          </p>
          <br />

          <p>
            The average salary for the role of data analyst according to
            LinkedIn is $65,000. While a data engineer earned $156,008 per year,
            the average data scientist’s earning is $154,002 annually. Also, the
            average remuneration for a machine learning engineer is $125,000 per
            year.
          </p>
          <br />
          <p>
            Data Professionals Average Salary <br />
            Data Professionals Average Salary <br />
            Conclusion
            <br />
            Data roles are at the forefront of the job openings across all job
            sites. If you want to become a data professional in a short period
            of time, then you must check the Data2Bots Academy upskill
            programme. Data2Bot Academy provides you with the most efficient and
            supportive way to upskill and become the top 10%, in demand data
            professionals. Register today and get access to early bird perks.
          </p>
        </div>

        <hr className="mt-9 mb-5" />
        <div className="flex items-center space-x-5 mb-[100px]">
          <div className=" h-[34px] w-[34px] relative">
            <Image fill alt="profile" src="/Assets/JaneDoe.svg" />
          </div>
          <div className="flex flex-col ">
            <p className="text-[#727891]">Jane Doe</p>
            <span className="text-gray-400 text-xs">Marketing</span>
          </div>
        </div>
        <div>
          <p className="text-[#727891] text-3xl mb-[41px]">
            Here are some other related articles
          </p>
          <div className="flex flex-wrap justify-between">
            {blogPosts?.length &&
              blogPosts.map(
                ({ _id, title, mainImage, description, publishedAt, slug }) => (
                  <PostCard
                    key={_id}
                    title={title}
                    mainImage={mainImage}
                    description={description}
                    publishedAt={publishedAt}
                    slug={slug}
                    _id={""}
                    author={{
                      name: "",
                      image: "",
                    }}
                  />
                )
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

Insight.getLayout = function getLayout(page: ReactElement) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};
export default Insight;

export const getStaticPaths = async () => {
  const query = `*[_type == "post"]|order(publishedAt desc) [0...20]{
        _id,
       slug
      }
    `;
  const posts = await sanityClient.fetch(query);
  const paths = posts.map((post: Post) => ({
    params: { slug: post.slug.current },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
        title,
        mainImage,
        publishedAt,
        description,
        author -> {
          name,
          image
        },
        categories,
        publishedAt,
        body
      }
    `;
  const query2 = `*[_type == "post"]|order(publishedAt desc) [0...6]{
      _id,
      title,
      mainImage,
      publishedAt,
      description,
      slug,
    }`;
  let post = {};
  let blogPosts = [];

  try {
    post = await sanityClient.fetch(query, { slug: params?.slug });
    blogPosts = await sanityClient.fetch(query2);
  } catch (err) {
    console.log(err);
    blogPosts = [];

    return {
      notFound: true,
    };
  }
  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
      blogPosts,
    },
    revalidate: 60 * 5,
  };
};
