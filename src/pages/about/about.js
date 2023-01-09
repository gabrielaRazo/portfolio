import React from 'react';
import { Col, Row, SpaceBottom, SpaceLeft } from '../wrapp/wrapp.style';
import avatar from '../../assets/images/avataaars__1___1_-removebg-preview.png';
import moment from 'moment';

import {
  Img,
  Text,
  Title,
  Background,
  ContainerIcons,
  Icon,
  Subtitle,
} from './about.style';
import {
  faSpotify,
  faReact,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faDog, faDumbbell, faBook } from '@fortawesome/free-solid-svg-icons';
import { StyledIcon } from '../../components/contact/contact.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const About = () => {
  const yearsExperience = moment().diff('2020-04-01', 'years', true).toFixed(1);
  return (
    <>
      <Row centered>
        <Col lg={2}></Col>
        <Col lg={7} md={6} sm={12} xs={12}>
          <Title>Me, Myself, and I</Title>
        </Col>
      </Row>
      <SpaceBottom xl={-2} md={-1.5} />
      <Col lg={12} md={12} xs={12}>
        <Background>
          <Row centered>
            <Col lg={2} md={2} sm={12} xs={12}>
              <Row centered>
                <Col lg={8} xs={6} sm={6} md={12}>
                  <Img src={avatar} alt="avatar" />
                </Col>
              </Row>
            </Col>
            <SpaceLeft lg={2} md={2} />
            <Col lg={9} md={9} xs={12}>
              <Row centered>
                <Col lg={12} md={12} xs={12}>
                  <Text>
                    <p>
                      I am a Frontend Developer with {yearsExperience} years of
                      professional experience.
                    </p>
                    <p>
                      I enjoy researching, designing, prototyping and coding
                      ecommerce as well as web Apps.
                    </p>
                    <p>
                      When I am not coding. I am either playing videogames,
                      doing crossfit, reading, lightening music, or spending
                      quality time with my dog.
                    </p>
                  </Text>
                </Col>
              </Row>
            </Col>
            <Col lg={2}></Col>
            <Col lg={9}>
              <Text>
                <Row centered>
                  <Col lg={5} md={3} collapse="xs"></Col>
                  <Col lg={7} md={6} xs={7} sm={5}>
                    <SpaceBottom lg={1} />
                    <ContainerIcons>
                      <StyledIcon>
                        <a
                          href="https://open.spotify.com/user/a2i6x6zn1x37dkmbwb2rs2ga4?si=lnMsoeLZQteN2oAmR5XW9w"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon icon={faSpotify} />
                        </a>
                      </StyledIcon>
                      <StyledIcon>
                        <FontAwesomeIcon icon={faReact} />
                      </StyledIcon>
                      <StyledIcon>
                        <FontAwesomeIcon icon={faDog} />
                      </StyledIcon>
                      <StyledIcon>
                        <FontAwesomeIcon icon={faDumbbell} />
                      </StyledIcon>
                      <StyledIcon>
                        <FontAwesomeIcon icon={faBook} />
                      </StyledIcon>
                    </ContainerIcons>
                    <SpaceBottom xl={1} lg={1} md={1} />
                  </Col>
                </Row>
                <SpaceLeft lg={0.6}>
                  <p>
                    I am open to Job opportunities were I can play a part in,
                    expand my skills, and grow.
                  </p>
                </SpaceLeft>
              </Text>
              <Row centered>
                <Col lg={5} md={5} xs={2} sm={4}></Col>
                <Col lg={7} md={7} xs={8} sm={8}>
                  <Subtitle>
                    <Icon>
                      <a
                        href="https://www.linkedin.com/in/gabriela97/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </a>
                    </Icon>
                    <a
                      href="mailto:gabrielarazoroldan@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Let's chat!
                    </a>
                  </Subtitle>
                </Col>
              </Row>
            </Col>
          </Row>
        </Background>
      </Col>
    </>
  );
};
export default About;
