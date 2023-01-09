import React from 'react';
import About from '../about/about';
import Contact from '../../components/contact/contact';
import Header from '../../layouts/header/header';
import HeaderResponsive from '../../layouts/header/responsive/headerResponsive';
import Home from '../home/home';
import { Col, Row } from './wrapp.style';
const WrappContent = () => {
  return (
    <>
      <Row>
        {/* Just for Web */}
        <Col lg={12} collapse="xs" hidden="md">
          <Contact />
        </Col>
        <Col lg={1} md={1} xs={1}></Col>
        <Col lg={10} md={8}>
          <Col lg={12} collapse="xs" hidden="md">
            <Header />
          </Col>
          <Col collapse="lg" md={12} xs={12}>
            <HeaderResponsive />
          </Col>
          <Col lg={12} md={12} xs={12}>
            <Home />
          </Col>
        </Col>
        <Col lg={11} md={12} xs={12}>
          <About />
        </Col>
        <Col lg={1} md={1} xs={1}></Col>
      </Row>
    </>
  );
};
export default WrappContent;
