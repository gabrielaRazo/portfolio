import React from 'react';
import ReactAnimation from '../../components/reactAnimation/animation';
import { Button, Text } from './home.styles';
import { Row, Col } from '../../pages/wrapp/wrapp.style';
const Home = () => {
  return (
    <>
      <Row>
        <Col lg={8}>
          <Text>
            <h4>Hi, I am Gabriela.</h4>
            <h1>Front End Developer</h1>
            <p>Specialized in bulding Web App with React and Javascript</p>
          </Text>
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
        <Col lg={4}>
          <ReactAnimation />
        </Col>
      </Row>
    </>
  );
};
export default Home;
