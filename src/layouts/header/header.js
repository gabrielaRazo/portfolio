import React from 'react';
import { useDispatch } from 'react-redux';
import logo from '../../assets/images/logo.png';
import Navbar from '../../components/navbar/navbar';
import { Col, Row } from '../../pages/wrapp/wrapp.style';
import { Container, Logo } from './header.style';

const Header = () => {
  const dispatch = useDispatch();
  const onHandleSelected = (selected) => {
    dispatch({ type: 'CHANGE_SELECTED_VALUE', selected: selected });
  };
  return (
    <>
      <Container>
        <Row>
          <Col lg={2}>
            <a href="#Home" onClick={() => onHandleSelected('Home')}>
              <Logo alt="logo-navbar" src={logo} />
            </a>
          </Col>
          <Col lg={10}>
            <Navbar />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
