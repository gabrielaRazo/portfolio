import React from 'react';
import logo from '../../assets/images/logo.png';
import Navbar from '../../components/navbar/navbar';
import { Container, Logo } from './header.style';

const Header = () => {
  return (
    <>
      <Container>
        <Logo alt="logo-navbar" src={logo} />
        <Navbar />
      </Container>
    </>
  );
};

export default Header;
