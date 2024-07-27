import React from 'react';
import './header.scss';
import { Stack } from 'ui-kit';
import { logo, menu } from '../../../assets';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <img src={logo} className='header__logo' alt='logo' />

      <Stack
        className='stackCustom'
        direction='row'
        justifyContent='space-between'
      >
        <button className='header__button'>
          <span className='header__button-text'>Home</span>
        </button>

        <button className='header__button'>
          <span className='header__button-text'>Products</span>
        </button>

        <span className='header__bucket-icon' />
      </Stack>

      <img src={menu} className='header__menu-icon' alt='menu-icon' />

    </header>
  );
};

export default Header;