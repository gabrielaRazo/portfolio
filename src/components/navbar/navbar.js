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
          <span>Home</span>
        </Tag>
        <Tag
          onClick={() => setSelected('About me')}
          active={selected === 'About me' ? true : false}
        >
          <span>About me</span>
        </Tag>
        <Tag
          onClick={() => setSelected('My Skills')}
          active={selected === 'My Skills' ? true : false}
        >
          <span>My Skills</span>
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
