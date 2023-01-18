import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from '../../pages/wrapp/wrapp.style';
import { Container } from './footer.style';
const Footer = () => {
  const height = useSelector((state) => state.dasboardReducer.height);
  console.log('height', height);
  return (
    <>
      <Row>
        <Col>
          <Container height={height} />
          <h1>Hola</h1>
        </Col>
      </Row>
    </>
  );
};

export default Footer;
