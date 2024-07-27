import React from 'react';
import './app.scss';
import { Footer, Header } from './components';

const App = () => {
  return (
    <div className='app__container'>
      <Header />

      <main className='app__content'>
        <p> Content </p>
      </main>

      <Footer />
    </div>
  );
};

export default App;
