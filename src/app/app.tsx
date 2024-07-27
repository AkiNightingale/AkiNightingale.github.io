import React from 'react';
import './app.scss';
import { Header } from './components';

const App = () => {
  return (
    <div className="app__container">
      <Header />
      <main className="app__content">
        <p> Content </p>
      </main>

      <footer className="app__footer">
        <p> Footer </p>
      </footer>
    </div>
  );
}

export default App;
