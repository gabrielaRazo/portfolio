import React from 'react';
import { Col, Row, SpaceBottom, SpaceTop } from '../wrapp/wrapp.style';
import avatar from '../../assets/images/avataaars__1___1_-removebg-preview.png';
import moment from 'moment';

import {
  Img,
  Text,
  Title,
  Background,
  ContainerIcons,
  IconWrap,
  Subtitle,
  ContainerButton,
  StyledIcon,
} from './about.style';
import { Icon } from '@iconify/react';
const About = () => {
  const yearsExperience = moment().diff('2020-04-01', 'years', true).toFixed(1);
  return (
    <>
      <Row centered>
        <Col lg={1} md={1}></Col>
        <Col lg={6} md={7} sm={11} xs={11}>
          <Title>Me, Myself, and I</Title>
        </Col>
      </Row>

      <Row centered>
        <Col lg={3} md={3} xs={12} sm={12}>
          <Row>
            <Col lg={2} md={0} xs={0} sm={0}></Col>
            <Col lg={10} md={12} sm={11} xs={11}>
              <Row centered>
                <Col lg={8} xs={6} sm={6} md={6}>
                  <Img src={avatar} alt="avatar" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col lg={7} md={9} xs={12} sm={12}>
          <Background>
            <Col lg={12} md={12} sm={12} xs={12}>
              <Text>
                <p>
                  I am a Frontend Developer with {yearsExperience} years of
                  professional experience.
                </p>
                <p>
                  I enjoy researching, designing, prototyping, and coding
                  e-commerce besides web Apps.
                </p>
                <p>
                  When I am not coding, I am either playing video games, doing
                  CrossFit, reading, lightening to music, or spending quality
                  time with my dog.
                </p>
                <Row centered>
                  <Col lg={6} md={6} xs={9} sm={7}>
                    <br />
                    <ContainerIcons>
                      <StyledIcon>
                        <a
                          href="https://open.spotify.com/user/a2i6x6zn1x37dkmbwb2rs2ga4?si=lnMsoeLZQteN2oAmR5XW9w"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Icon icon="mdi:spotify" />
                        </a>
                      </StyledIcon>
                      <StyledIcon>
                        <Icon icon="ph:book-duotone" />
                      </StyledIcon>
                      <StyledIcon>
                        <Icon icon="fluent:animal-dog-20-filled" />
                      </StyledIcon>
                      <StyledIcon>
                        <Icon icon="iconoir:favourite-book" />
                      </StyledIcon>
                      <StyledIcon>
                        <Icon icon="mdi:crossfit" />
                      </StyledIcon>
                    </ContainerIcons>
                    <SpaceBottom xl={1} lg={1} md={1} />
                  </Col>
                </Row>
                <p>
                  I am open to Job opportunities where I can play a part, expand
                  my skills, and grow.
                </p>
                <Row>
                  <Col lg={3} md={3} xs={0} sm={0}></Col>
                  <Col lg={4} md={4} xs={8} sm={6}>
                    <ContainerButton>
                      <Subtitle>
                        <a
                          href="https://www.linkedin.com/in/gabriela97/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Let's chat!
                        </a>
                        <IconWrap>
                          <Icon icon="tabler:brand-linkedin" />
                        </IconWrap>
                      </Subtitle>
                    </ContainerButton>
                  </Col>
                </Row>
              </Text>
            </Col>
          </Background>
        </Col>
      </Row>
      <SpaceBottom xs={6.1} sm={8} md={13.5} lg={19.2} xl={20} />
    </>
  );
};
export default About;
