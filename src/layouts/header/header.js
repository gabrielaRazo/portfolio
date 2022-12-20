import React from 'react';
import logo from '../../assets/images/logo.png';
import { Logo } from './header.style';

const Header = () => {
  return (
    <>
      <Logo alt="logo-navbar" src={logo} />
    </>
  );
};

export default Header;
