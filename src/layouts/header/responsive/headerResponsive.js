import React from 'react';
import { useDispatch } from 'react-redux';
import logo from '../../../assets/images/logo.png';
import { Logo } from './headerResponsive.style';
import { Row, Col } from '../../../pages/wrapp/wrapp.style';
import NavbarResponsive from '../../../components/navbar/responsive/navbarResponsive';

const HeaderResponsive = () => {
  const dispatch = useDispatch();
  const onHandleSelected = (selected) => {
    dispatch({ type: 'CHANGE_SELECTED_VALUE', selected: selected });
  };
  return (
    <Row>
      <Col lg={4} md={4} xs={4}>
        <a href="#Home" onClick={() => onHandleSelected('Home')}>
          <Logo alt="logo-navbar" src={logo} />
        </a>
      </Col>
      <Col collapse="lg" hidden="md" xs={4} />
      <Col lg={8} md={8} xs={4}>
        <NavbarResponsive />
      </Col>
    </Row>
  );
};

export default HeaderResponsive;
