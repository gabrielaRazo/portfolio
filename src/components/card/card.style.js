import styled from 'styled-components';
import * as colors from '../../stylesheet/Colors.style';

export const Card = styled.div`
  margin-top: 8em;
  position: absolute;
  height: 100%;
  @media (min-width: 1024px) and (max-width: 2570px) {
    width: 70%;
    margin-top: 10em;
  }
  @media (max-width: 376px) {
    width: 75%;
  }
  width: 65%;
`;

export const CardRelative = styled.div`
  margin-top: 1em;
  position: relative;
  height: 100%;
  width: 100%;
`;

export const ColorWrap = styled.div`
  background-color: ${colors.colors.white};
  position: relative;
  border-radius: 10px;
`;

export const MainIcon = styled.div`
  display: flex;
  flex-flow: row wrap;
  background-color: ${colors.colors.violet};
  border-radius: 50%;
  width: 70px;
  height: 70px;
  align-items: center;
  justify-content: center;
  svg {
    width: 45px;
    height: 45px;
  }
`;

export const ContainerDivider = styled.div`
  border-left: 2px solid ${colors.colors.ligthGray};
  margin-top: -5px;
  height: 100%;
`;

export const Title = styled.h1`
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  font-size: 1.6rem;
  font-family: 'Playfair Display';
  font-weight: 100;
`;

export const IconCards = styled.div`
  display: flex;
  flex-flow: row wrap;
  background-color: ${colors.colors.ligherGray};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  img {
    width: 50px;
    height: 50px;
  }
`;

export const Horizontal = styled.div`
  border: 1px solid ${colors.colors.ligthGray};
  width: 90%;
`;

export const Text = styled.p`
  font-family: 'Quicksand';
  display: grid;
  width: 154px;
  text-align: center;
`;

export const ContainerResponsive = styled.div`
  height: 152px;
  @media (max-width: 420px) {
    height: 125px;
  }
`;
