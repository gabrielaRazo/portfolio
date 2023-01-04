import React from 'react';
import { Col, Row, SpaceLeft } from '../../../pages/wrapp/wrapp.style';
import avatar from '../../../assets/images/avataaars__1___1_-removebg-preview.png';
import { Img, Text, Title, ContainerIcons, Background } from '../about.style';
import { faSpotify, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDog, faDumbbell, faBook } from '@fortawesome/free-solid-svg-icons';
import { StyledIcon } from '../../contact/contact.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const AboutResponsive = () => {
  return (
    <>
      <Row>
        <Col md={2} sm={12} xs={12}></Col>
        <Col md={8} sm={12} xs={12}>
          <Title>Me, Myself, and I</Title>
        </Col>
      </Row>
      <Row centered>
        <Background>
          <Col md={2} sm={12} xs={12}>
            <Row centered>
              <Col xs={6} sm={6}>
                <Img src={avatar} alt="avatar" />
              </Col>
            </Row>
          </Col>
          <SpaceLeft md={2} />
          <Col md={9} xs={12}>
            <Row centered>
              <Col lg={12} md={12} xs={12}>
                <Text>
                  <p>
                    I am a Frontend Developer with 2.8 years of professional
                    experience.
                  </p>
                  <p>
                    I enjoy researching, designing, prototyping and coding
                    ecommerce as well as web Apps.
                  </p>
                  <p>
                    When I am not coding. I am either playing videogames, doing
                    crossfit, reading, lightening music, or spending quality
                    time with my dog.
                  </p>
                </Text>
              </Col>
              <Col md={6} xs={7} sm={5}>
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
              </Col>
              <Col md={12} xs={12}>
                <Text>
                  <p>
                    I am open to Job opportunities were I can play a part in,
                    expand my skills, and grow.
                  </p>
                </Text>
              </Col>
            </Row>
          </Col>
        </Background>
      </Row>
    </>
  );
};
export default AboutResponsive;
