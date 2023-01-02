import React from 'react';
import { useSelector } from 'react-redux';
import { StyledMenu } from './menu.style';

const Menu = () => {
  const isMenuOpen = useSelector((state) => state.dasboardReducer.isMenuOpen);
  const isHidden = isMenuOpen ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={isMenuOpen} aria-hidden={!isHidden}>
      <a href="/" tabIndex={tabIndex}>
        <span>Home</span>
      </a>
      <a href="/" tabIndex={tabIndex}>
        <span>About me</span>
      </a>
      <a href="/" tabIndex={tabIndex}>
        <span>My Skills</span>
      </a>
      <a href="/" tabIndex={tabIndex}>
        <span>Work</span>
      </a>
      <a href="/" tabIndex={tabIndex}>
        <span>Projects</span>
      </a>
    </StyledMenu>
  );
};

export default Menu;
