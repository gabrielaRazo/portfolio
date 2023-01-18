import React from 'react';
import { useSelector } from 'react-redux';
import { StyledMenu } from './menu.style';
import { Col, Row } from '../../pages/wrapp/wrapp.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAt, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { StyledIcon } from '../contact/contact.style';

const Menu = () => {
  const isMenuOpen = useSelector((state) => state.dasboardReducer.isMenuOpen);
  const isHidden = isMenuOpen ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={isMenuOpen} aria-hidden={!isHidden}>
      <a href="#Home" tabIndex={tabIndex}>
        <span>Home</span>
      </a>
      <a href="#About" tabIndex={tabIndex}>
        <span>About me</span>
      </a>
      <a href="#Skills" tabIndex={tabIndex}>
        <span>My Skills</span>
      </a>
      <a href="/" tabIndex={tabIndex}>
        <span>Work</span>
      </a>
      <a href="/" tabIndex={tabIndex}>
        <span>Projects</span>
      </a>
      <br />
      <br />
      <br />
      <Row centered>
        <Col md={1} xs={1}></Col>
        <Col md={2} xs={2}>
          <StyledIcon>
            <a
              href="https://www.linkedin.com/in/gabriela97/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </StyledIcon>
        </Col>
        <Col md={2} xs={2}>
          <StyledIcon>
            <a
              href="mailto:gabrielarazoroldan@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faAt} />
            </a>
          </StyledIcon>
        </Col>
        <Col md={2} xs={2}>
          <StyledIcon>
            <a
              onClick={() =>
                window.open(
                  'https://gabrielaportfolio.netlify.app/Gabriela-CV.pdf'
                )
              }
            >
              <FontAwesomeIcon icon={faFileArrowDown} />
            </a>
          </StyledIcon>
        </Col>
      </Row>
    </StyledMenu>
  );
};

export default Menu;
