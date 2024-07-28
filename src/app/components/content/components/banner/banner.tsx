import React from 'react';
import './banner.scss';
import { Stack } from 'ui-kit';

const Banner: React.FC = () => {
  return (
    <div className='banner'>
      <Stack gap={1.375} className='banner_stackCustom'>
        <span className='banner_stackCustom__title bold'>
          Discover the vast expanses of
          <span className='banner_stackCustom__title-rose'> space </span>
        </span>

        <span className='banner_stackCustom__subtitle bold'>
          Where the possibilities are
          <span className='banner_stackCustom__subtitle-yellow'> endless! </span>
        </span>
      </Stack>
    </div>
  );
};

export default Banner;