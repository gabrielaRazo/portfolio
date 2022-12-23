import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Icon, Container } from './navbarResponsive.style';

const NavbarResponsive = () => {
  return (
    <>
      <Container>
        <Icon>
          <FontAwesomeIcon icon={faBars} />
        </Icon>
      </Container>
    </>
  );
};

export default NavbarResponsive;
