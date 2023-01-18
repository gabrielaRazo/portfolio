import React from 'react';
import { useDispatch } from 'react-redux';
import logo from '../../assets/images/logo.png';
import Navbar from '../../components/navbar/navbar';
import { Container, Logo } from './header.style';

const Header = () => {
  const dispatch = useDispatch();
  const onHandleSelected = (selected) => {
    dispatch({ type: 'CHANGE_SELECTED_VALUE', selected: selected });
  };
  return (
    <>
      <Container>
        <a href="#Home" onClick={() => onHandleSelected('Home')}>
          <Logo alt="logo-navbar" src={logo} />
        </a>
        <Navbar />
      </Container>
    </>
  );
};

export default Header;
