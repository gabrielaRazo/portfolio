import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Nucleo, ReactLogo } from './animationResponsive.style';

const AnimationResponsive = () => {
  const isMenuOpen = useSelector((state) => state.dasboardReducer.isMenuOpen);
  return (
    <Container isMenuOpen={isMenuOpen}>
      <ReactLogo>
        <Nucleo></Nucleo>
      </ReactLogo>
    </Container>
  );
};
export default AnimationResponsive;
