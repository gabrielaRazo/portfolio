import React from 'react';
import logo from '../../../assets/images/logo.png';
import { Logo } from './headerResponsive.style';

const HeaderResponsive = () => {
  return (
    <>
      <Logo alt="logo-navbar" src={logo} />
    </>
  );
};

export default HeaderResponsive;
