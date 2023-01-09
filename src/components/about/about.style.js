import styled from 'styled-components';
import * as colors from '../../stylesheet/Colors.style';
import backgrondImage from '../../assets/images/background_code.png';

export const Img = styled.img`
  width: 100%;
`;

export const Title = styled.h1`
  color: ${colors.colors.purple};
  font-family: 'Playfair Display';
  @media (min-width: 1200px) and (max-width: 2570px) {
    font-size: 3rem;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  font-size: 2.5rem;
  font-weight: 100;
  text-align: center;
`;

export const Text = styled.div`
  color: white;
  text-align: left;
  @media (min-width: 1500px) {
    font-size: 1.7rem;
  }
  @media (min-width: 1024px) and (max-width: 1450px) {
    font-size: 18px;
  }
  font-size: 0.9rem;
  p {
    margin-top: -0.5em;
  }
`;

export const Background = styled.div`
  background-image: url(${backgrondImage});
  background-repeat: no-repeat;
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  @media (min-width: 1024px) and (max-width: 2570px) {
    margin-left: 3em;
  }
`;

export const ContainerIcons = styled.div`
  margin-top: -2em;
  svg {
    color: ${colors.colors.pink};
  }
  @media (min-width: 360px) and (max-width: 420px) {
    margin-left: 1em;
  }
`;

export const Icon = styled.div`
  display: inline-block;
  text-align: center;
  background-color: ${colors.colors.pink};
  width: 36px;
  height: 36px;
  margin-right: 10px;
  border-radius: 50%;
  svg {
    width: 25px;
    height: 25px;
    padding-left: 1px;
    color: ${colors.colors.black};
  }
`;

export const Subtitle = styled.div`
  font-size: 1.7rem;
  a {
    color: ${colors.colors.pink};
  }
  &:hover {
    text-decoration: underline;
  }
`;
