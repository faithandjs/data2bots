import InsightsHero from '@/components/Insights/InsightsHero';
import SvgIconStyle from '@/components/SvgIconStyle';
import Select from '@/components/formControls/Select';
import LandingPageLayout from '@/layouts/LandingPageLayout';
import { debounce } from 'lodash';
import Head from 'next/head';
import React, { ReactElement, useState } from 'react';
import { sanityClient } from '@/sanity';
import { GetStaticProps } from 'next';
import PostCard from '@/components/Insights/PostCard';

const Insights = ({ blogPosts }: { blogPosts: [Post] }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [search, setSearch] = useState('');

  const debouncedSearch = React.useRef(
    debounce(async (word) => {
      setSearch(word);
    }, 500)
  ).current;

  return (
    <>
      <Head>
        <title>Data2bot | Insights</title>
        <meta name='title' content='Extended Teams - Data2Bots'></meta>
      </Head>
      <div className='min-h-screen  '>
        <InsightsHero />
        <div className='px-[116px]'>
          <div className='relative mt-[27px] max-w-[642px]'>
            <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
              <svg
                className='w-5 h-5 text-gray-500 dark:text-gray-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                  clipRule='evenodd'></path>
              </svg>
            </div>
            <input
              type='text'
              id='table-search'
              className='bg-[#FAFBFC] border border-gray-300 text-gray-500 rounded-[3px] focus:ring-[#669dd0] focus:border-[#669dd0] outline-none block w-full pr-10 pl-2 py-2'
              placeholder='Search Job Roles'
              onChange={(e) => {
                debouncedSearch(e.target.value);
              }}
            />
          </div>
          <div className='flex max-w-[420px] justify-between gap-4 mt-4 items-center mb-[55px]'>
            <SvgIconStyle
              src='/Assets/filter.svg'
              className=' text-[#C2C5D1]'
            />

            <Select
              id='Category'
              name='Category'
              placeholder='Category Type'
              options={[
                {
                  label: 'Category one',
                  value: 1,
                },
                {
                  label: 'Category two',
                  value: 2,
                },
              ]}
              optionPlaceHolder='Select Category'
              onChange={(value) => {
                console.log(value);
              }}
              className='sm:text-sm text-base'
            />
            <Select
              id='Topic'
              name='Topic'
              placeholder='Topic Type'
              options={[
                {
                  label: 'Topic one',
                  value: 1,
                },
                {
                  label: 'Topic two',
                  value: 2,
                },
              ]}
              optionPlaceHolder='Select Topic'
              onChange={(value) => {
                console.log(value);
              }}
              className='sm:text-sm text-base'
            />
          </div>
          <div className='flex flex-wrap justify-between'>
            {blogPosts.map(
              ({ _id, title, mainImage, description, publishedAt, slug }) => (
                <PostCard
                  key={_id}
                  title={title}
                  mainImage={mainImage}
                  description={description}
                  publishedAt={publishedAt}
                  slug={slug}
                  body={[{}]}
                  _id={''}
                  author={{
                    name: '',
                    image: '',
                  }}
                />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

Insights.getLayout = function getLayout(page: ReactElement) {
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
    }`;

  let blogPosts = [];
  try {
    blogPosts = await sanityClient.fetch(query);
  } catch (err) {
    console.log(err);
    blogPosts = [];
  }
  return {
    props: {
      blogPosts,
    },
    revalidate: 60 * 5,
  };
};
export default Insights;

