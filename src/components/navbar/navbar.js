import React, { useState } from 'react';
import { Container, Tag } from './navbar.styles';

const Navbar = () => {
  const [selected, setSelected] = useState('Home');
  return (
    <>
      <Container>
        <Tag>
          <span></span>
        </Tag>
        <Tag
          onClick={() => setSelected('Home')}
          active={selected === 'Home' ? true : false}
        >
          <a href="#Home">Home</a>
        </Tag>
        <Tag
          onClick={() => setSelected('About me')}
          active={selected === 'About me' ? true : false}
        >
          <a href="#About">About me</a>
        </Tag>
        <Tag
          onClick={() => setSelected('My Skills')}
          active={selected === 'My Skills' ? true : false}
        >
          <a href="#Skills">My Skills</a>
        </Tag>
        <Tag
          onClick={() => setSelected('Work')}
          active={selected === 'Work' ? true : false}
        >
          <span>Work</span>
        </Tag>
        <Tag
          onClick={() => setSelected('Projects')}
          active={selected === 'Projects' ? true : false}
        >
          <span>Projects</span>
        </Tag>
      </Container>
    </>
  );
};

export default Navbar;
