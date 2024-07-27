import { close } from 'assets';
import React from 'react';
import './menu.scss';
import { Stack } from 'ui-kit';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <div className={`menu ${isOpen ? 'menu-open' : ''}`}>
      <header className='menu__header'>
        <img
          src={close}
          className='menu__header__close-button'
          alt='close-icon'
          onClick={onClose}
        />
      </header>

      <Stack className='menu__content'>
        <button className='menu__content_button'>
          Menu Item
        </button>
        <button className='menu__content_button'>
          Menu Item
        </button>
        <button className='menu__content_button'>
          Menu Item
        </button>
      </Stack>
    </div>
  );
};

export default Menu;