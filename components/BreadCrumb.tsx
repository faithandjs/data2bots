import React from 'react';
import { useRouter } from 'next/router';

export default function BreadCrumb() {
  const { pathname } = useRouter();

  return (
    <div className='capitalize text-[#C2C5D1] pb-16'>
      Home /&nbsp;
      <span className='text-[#727891]'>
        {pathname.substring(1, pathname.length).split('-').join(' ')}
      </span>
    </div>
  );
}

