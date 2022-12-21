import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInbox } from '@fortawesome/free-solid-svg-icons';
import { Container, Line, StyledIcon } from './contact.style';

const Contact = () => {
  return (
    <>
      <Container left>
        <StyledIcon>
          <a
            href="https://www.linkedin.com/in/gabriela97/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </StyledIcon>
        <Line up />
      </Container>
      <Container rigth>
        <div orientation="right">
          <Line down />
          <StyledIcon>
            <a
              href="mailto:gabrielarazoroldan@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInbox} />
            </a>
          </StyledIcon>
        </div>
      </Container>
    </>
  );
};

export default Contact;
