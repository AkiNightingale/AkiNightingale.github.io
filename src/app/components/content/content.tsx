import React from 'react';
import { Stack } from 'ui-kit';
import { Banner, Info } from './components';
import './content.scss';

const Content: React.FC = () => {
  return (
    <main className='content'>
      <Banner />

      <Stack className='content__container'>
        <div> grid </div>
        <Info />
      </Stack>
    </main>
  );
};

export default Content;