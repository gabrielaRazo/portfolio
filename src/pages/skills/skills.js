import React from 'react';
import CardWrap from '../../components/card/card';
import { Row, Col } from '../../pages/wrapp/wrapp.style';
import { Background } from './skills.style';
const Skills = () => {
  return (
    <>
      <Background />
      <Row centered id="Skills">
        <Col lg={1} md={1} sm={1} xs={1}></Col>
        <Col lg={9} md={10} sm={11} xs={11}>
          <CardWrap />
        </Col>
      </Row>
    </>
  );
};
export default Skills;
