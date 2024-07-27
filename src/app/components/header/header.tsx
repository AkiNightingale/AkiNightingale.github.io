import React from 'react';
import './header.scss';
import { Stack } from 'ui-kit';
import { logo } from '../../../assets';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <img src={logo} className='header__logo' alt='logo' />

      <Stack
        className='stackCustom'
        direction='row'
        justifyContent='space-between'
      >
        <button className='header__button _home'>
          <span className='header__button-text'>Home</span>
        </button>
        <button className='header__button _product'>
          <span className='header__button-text'>Products</span>
        </button>
      </Stack>

    </header>
  );
};

export default Header;