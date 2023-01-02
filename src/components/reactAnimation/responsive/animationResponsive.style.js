import styled from 'styled-components';
import { keyframes } from 'styled-components';

const rotate = keyframes`
   100%{
      transform:rotate(360deg);
    }
`;

export const Container = styled.div`
  width: 250px;
  height: 250px;
  margin: 20px auto 0 auto;
  @media (max-width: 767px) {
    ${({ isMenuOpen }) => isMenuOpen === true && `visibility:hidden`};
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ReactLogo = styled.span`
  display: inline-block;
  border-radius: 50%;
  border: 10px solid #00d8ff;

  animation-name: ${rotate};
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  position: absolute;
  display: inline-block;
  width: 200px;
  height: 70px;
  border-radius: 50%;
  border: 10px solid #00d8ff;

  display: flex;
  align-items: center;
  justify-content: center;

  ::before,
  ::after {
    position: absolute;
    display: inline-block;
    width: 200px;
    height: 70px;
    border-radius: 50%;
    border: 10px solid #00d8ff;
    display: flex;
    align-items: center;
    justify-content: center;
    content: '';
  }

  ::after {
    transform: rotate(-57deg);
  }

  ::before {
    transform: rotate(57deg);
  }
`;

export const Nucleo = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background: #00d8ff;

  ::before,
  ::after {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background: #00d8ff;
  }
`;
