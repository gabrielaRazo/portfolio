import React from 'react';
import CardWrap from '../../components/card/card';
import { Row, Col, Center } from '../../pages/wrapp/wrapp.style';
import { Background } from './skills.style';
const Skills = () => {
  return (
    <>
      <Background />
      <Row centered>
        <Col lg={1} md={2} xs={1}></Col>
        <Col lg={9} md={10} xs={11}>
          <CardWrap />
        </Col>
      </Row>
    </>
  );
};
export default Skills;
