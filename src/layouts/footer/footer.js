import React from 'react';
import { useSelector } from 'react-redux';
import logo from '../../assets/images/logo.png';
import { Row, Col, SpaceTop } from '../../pages/wrapp/wrapp.style';
import { Icon } from '@iconify/react';
import {
  Container,
  Copyright,
  IconContainer,
  Line,
  Logo,
  Purple,
  Space,
  Text,
  Wrap,
} from './footer.style';
const Footer = () => {
  const height = useSelector((state) => state.dasboardReducer.height);
  return (
    <>
      <Space height={height} />
      <Container>
        <Row>
          <Col lg={3}></Col>
          <Col lg={6}>
            <Row centered>
              <Col lg={6} xs={3}></Col>
              <Col lg={6} xs={6}>
                <Logo alt="logo-navbar" src={logo} />
              </Col>
            </Row>
            <Row centered>
              <Col lg={1}></Col>
              <Col lg={11}>
                <Text>
                  <h4>
                    “You can, you should, and if you’re brave enough to start,
                    you will.”
                  </h4>
                  <Purple>― Stephen King</Purple>
                </Text>
              </Col>
            </Row>
            <Row centered>
              <Col lg={1}></Col>
              <Col lg={11}>
                <Row centered>
                  <Col lg={1} md={2} sm={2} xs={2}>
                    <IconContainer>
                      <a href="https://github.com/gabrielaRazo" target="_blank">
                        <Icon icon="radix-icons:github-logo" />
                      </a>
                    </IconContainer>
                  </Col>
                  <Col
                    lg={1}
                    md={2}
                    sm={2}
                    xs={2}
                    style={{ paddingLeft: '10px' }}
                  >
                    <IconContainer>
                      <a
                        href="https://www.linkedin.com/in/gabriela97/"
                        target="_blank"
                      >
                        <Icon icon="bxl:linkedin" />
                      </a>
                    </IconContainer>
                  </Col>
                  <Col
                    lg={1}
                    md={2}
                    sm={2}
                    xs={2}
                    style={{ paddingLeft: '10px' }}
                  >
                    <IconContainer>
                      <a
                        href="https://codesandbox.io/u/gabrielaRazo"
                        target="_blank"
                      >
                        <Icon icon="ph:codesandbox-logo" />
                      </a>
                    </IconContainer>
                  </Col>
                  <Col
                    lg={1}
                    md={2}
                    sm={2}
                    xs={2}
                    style={{ paddingLeft: '10px' }}
                  >
                    <IconContainer>
                      <a
                        href="https://bitbucket.org/gaby_razo/"
                        target="_blank"
                      >
                        <Icon icon="mdi:bitbucket" />
                      </a>
                    </IconContainer>
                  </Col>
                  <Col
                    lg={1}
                    md={2}
                    sm={2}
                    xs={2}
                    style={{ paddingLeft: '10px' }}
                  >
                    <IconContainer>
                      <a
                        href="mailto:gabrielarazoroldan@gmail.com"
                        target="_blank"
                      >
                        <Icon icon="dashicons:email-alt" />
                      </a>
                    </IconContainer>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row centered>
              <Col lg={1} md={1}></Col>
              <Col lg={8} md={8} sm={12} xs={12}>
                <Copyright>
                  <Icon icon="ic:baseline-copyright" /> Design with Figma, and
                  build with React by Gabriela Razo 2022
                </Copyright>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
