import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Tag } from './navbar.styles';

const Navbar = () => {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.dasboardReducer.selected);
  const onHandleSelected = (selected) => {
    dispatch({ type: 'CHANGE_SELECTED_VALUE', selected: selected });
  };
  return (
    <>
      <Container>
        <Tag>
          <span></span>
        </Tag>
        <Tag
          onClick={() => onHandleSelected('Home')}
          active={selected === 'Home' ? true : false}
          href="#Home"
        >
          <span>Home</span>
        </Tag>
        <Tag
          onClick={() => onHandleSelected('About me')}
          active={selected === 'About me' ? true : false}
          href="#About"
        >
          <span>About me</span>
        </Tag>
        <Tag
          onClick={() => onHandleSelected('My Skills')}
          active={selected === 'My Skills' ? true : false}
          href="#Skills"
        >
          <span> My Skills</span>
        </Tag>
        <Tag
          onClick={() => onHandleSelected('Work')}
          active={selected === 'Work' ? true : false}
        >
          <span>Work</span>
        </Tag>
        <Tag
          onClick={() => onHandleSelected('Projects')}
          active={selected === 'Projects' ? true : false}
        >
          <span>Projects</span>
        </Tag>
      </Container>
    </>
  );
};

export default Navbar;
