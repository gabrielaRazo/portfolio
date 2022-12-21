import React from 'react';
import Contact from '../../components/contact/contact';
import Header from '../../layouts/header/header';
import Home from '../home/home';
import { Col, Row } from './wrapp.style';
const WrappContent = () => {
  return (
    <>
      <Row>
        <Col lg={1}></Col>
        <Col lg={10}>
          <Col lg={12}>
            <Header />
          </Col>
          <Col lg={12}>
            <Home />
          </Col>
        </Col>
        <Col lg={1}></Col>
        <Contact />
      </Row>
    </>
  );
};
export default WrappContent;
