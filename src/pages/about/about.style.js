import styled from 'styled-components';
import * as colors from '../../stylesheet/Colors.style';
import backgrondImage from '../../assets/images/background_code.png';

export const Img = styled.img`
  width: 100%;
  @media (min-width: 1500px) and (max-width: 2580px) {
    width: 70%;
  }
`;

export const Title = styled.h1`
  color: ${colors.colors.purple};
  font-family: 'Playfair Display', serif;
  @media (min-width: 1200px) and (max-width: 2570px) {
    font-size: 2.5rem;
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
  font-family: 'Yantramanav', sans-serif;
  font-weight: 100;
  font-size: 1.1rem;
  @media (max-width: 700px) {
    font-size: 0.9rem;
  }
  p {
    margin-top: -0.5em;
  }
`;

export const Background = styled.div`
  background-image: url(${backgrondImage});
  background-repeat: no-repeat;
  width: 100%;
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

export const ContainerButton = styled.div`
  color: white;
  width: 170px;
  border-radius: 10px;
  padding: 3px;
  margin-left: 0.8em;

  @media (min-width: 360px) and (max-width: 420px) {
    margin-left: 0px;
  }

  &hover {
    background-color: ${colors.colors.purple};
  }
  border: 1px solid ${colors.colors.pink};
`;

export const IconWrap = styled.div`
  display: inline-block;
  margin-left: 5px;
  svg {
    width: 25px;
    height: 25px;
    color: ${colors.colors.pink};
  }
`;

export const StyledIcon = styled.div`
  display: inline-block;
  padding-left: 5px;
  svg {
    width: 35px;
    height: 35px;
    color: ${colors.colors.pink};
  }
`;

export const Subtitle = styled.div`
  font-size: 1.7rem;
  text-align: center;
  a {
    color: ${colors.colors.pink};
    font-weight: 300;
    text-decoration: none;
  }
`;
