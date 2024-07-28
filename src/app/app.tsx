import React from 'react';
import './app.scss';
import { Content, Footer, Header } from './components';

const App = () => {
  return (
    <div className='app__container'>
      <Header />

      <Content />

      <Footer />
    </div>
  );
};

export default App;
