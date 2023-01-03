import React from 'react';
import { Col, Row } from '../../pages/wrapp/wrapp.style';
import avatar from '../../assets/images/avataaars__1___1_-removebg-preview.png';
import { Img, SpaceLeft, Text, Title } from './about.style';
const About = () => {
  return (
    <>
      <Row>
        <Col lg={6}></Col>
        <Col lg={6}>
          <Title>Me, Myself, and I</Title>
        </Col>
      </Row>
      <Row centered>
        <Col lg={1}></Col>
        <Col lg={2} md={2} xs={6}>
          <Img src={avatar} alt="avatar" />
        </Col>
        <SpaceLeft marginLeft={3} />
        <Col lg={8} md={9} xs={12}>
          <Text>
            <p>
              I am a Frontend Developer with 2.8 years of professional
              experience.
            </p>
            <p>
              I enjoy researching, designing, prototyping and coding ecommerce
              as well as web Apps.
            </p>
            <p>
              When I am not coding. I am either playing videogames, doing
              crossfit, reading, lightening music, or spending quality time with
              my dog.
            </p>
          </Text>
        </Col>
      </Row>
    </>
  );
};
export default About;
