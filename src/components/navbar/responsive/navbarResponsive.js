import React from 'react';
import FocusLock from 'react-focus-lock';
import { useSelector } from 'react-redux';
import Burger from '../../burguer/burger';
import Menu from '../../menu/menu';

const NavbarResponsive = () => {
  const menuId = 'main-menu';
  const isMenuOpen = useSelector((state) => state.dasboardReducer.isMenuOpen);

  return (
    <>
      <FocusLock disabled={!isMenuOpen}>
        <Burger aria-controls={menuId} />
        <Menu id={menuId} />
      </FocusLock>
    </>
  );
};

export default NavbarResponsive;
