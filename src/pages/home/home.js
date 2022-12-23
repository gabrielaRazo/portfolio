import React from 'react';
import ReactAnimation from '../../components/reactAnimation/animation';
import { Button, Text } from './home.styles';
import { Row, Col, Center } from '../../pages/wrapp/wrapp.style';
import AnimationResponsive from '../../components/reactAnimation/responsive/animationResponsive';
const Home = () => {
  return (
    <>
      <Row>
        <Col lg={8} md={9} xs={12}>
          {/* Web */}
          <Text>
            <h4>Hi, I am Gabriela.</h4>
            <h1>Front End Developer</h1>
            <p>Specialized in bulding Web App with React and Javascript</p>
          </Text>
          <Col lg={12} collapse="xs" hidden="md">
            <Button>
              <span
                onClick={() =>
                  window.open('http://localhost:3000/Gabriela-CV.pdf')
                }
              >
                Check my CV
              </span>
            </Button>
          </Col>

          {/* Responsive */}

          <Col collapse="lg">
            <Center>
              <Button>
                <span
                  onClick={() =>
                    window.open('http://localhost:3000/Gabriela-CV.pdf')
                  }
                >
                  Check my CV
                </span>
              </Button>
            </Center>
          </Col>
        </Col>
        {/* Web */}
        <Col lg={4} collapse="xs" hidden="md">
          <ReactAnimation />
        </Col>
        {/* Space grid Tablet */}
        <Col md={1} collapse="lg" hidden="xs" />
        <Col xs={12} md={2} collapse="lg">
          <AnimationResponsive />
        </Col>
      </Row>
    </>
  );
};
export default Home;
