import React from 'react';
import { Stack } from 'ui-kit';
import { Banner, Info, Offers } from './components';
import './content.scss';

const Content: React.FC = () => {
  return (
    <main className='content'>
      <Banner />

      <Stack
        className='content__container'
      >
        <Offers />
        <Info />
      </Stack>
    </main>
  );
};

export default Content;