import React from 'react';
import { StyledMenu } from './menu.style';

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
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
