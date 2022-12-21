import React from 'react';
import logo from '../../assets/images/logo.png';
import { Container, Logo } from './header.style';

const Header = () => {
  return (
    <>
      <Container>
        <Logo alt="logo-navbar" src={logo} />
      </Container>
    </>
  );
};

export default Header;
