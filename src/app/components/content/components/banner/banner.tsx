import React from 'react';
import './banner.scss';
import { Button, Stack } from 'ui-kit';

const Banner: React.FC = () => {
  return (
    <div className='banner'>
      <Stack gap={1.375} className='banner_stackCustom'>
        <div className='banner_stackCustom__title'>
          <span className='banner_stackCustom__title_text bold'>
          Discover the vast expanses of
            <span className='banner_stackCustom__title_text-rose'> space </span>
          </span>
        </div>

        <span className='banner_stackCustom__subtitle bold'>
          Where the possibilities are
          <span className='banner_stackCustom__subtitle-yellow'> endless! </span>
        </span>

        <Button>
          Learn more
        </Button>
      </Stack>
    </div>
  );
};

export default Banner;