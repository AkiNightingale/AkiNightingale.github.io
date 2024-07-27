import { rocket } from 'assets';
import React from 'react';
import './footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <img src={rocket} alt='rocket' className='footer__icon' />
      <span className='footer__text bold'> Exciting space adventure! </span>
    </footer>
  );
};

export default Footer;