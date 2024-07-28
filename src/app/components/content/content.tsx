import { Banner } from './components';
import React from 'react';
import './content.scss';

const Content: React.FC = () => {
  return (
    <main className='content'>
      <Banner />

      <div> grid </div>
    </main>
  );
};

export default Content;