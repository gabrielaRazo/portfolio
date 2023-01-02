import React from 'react';
import logo from '../../../assets/images/logo.png';
import { Logo } from './headerResponsive.style';
import { Row, Col } from '../../../pages/wrapp/wrapp.style';
import NavbarResponsive from '../../../components/navbar/responsive/navbarResponsive';

const HeaderResponsive = () => {
  return (
    <Row>
      <Col lg={4} md={4} xs={4}>
        <Logo alt="logo-navbar" src={logo} />
      </Col>
      <Col collapse="lg" hidden="md" xs={4} />
      <Col lg={8} md={8} xs={4}>
        <NavbarResponsive />
      </Col>
    </Row>
  );
};

export default HeaderResponsive;
