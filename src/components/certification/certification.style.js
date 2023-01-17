import styled from 'styled-components';
import * as colors from '../../stylesheet/Colors.style';

export const TitleCard = styled.div`
  background-color: ${colors.colors.purple};
  border-radius: 10px;
  color: white;
`;

export const Title = styled.h1`
  font-size: 0.9rem;
  text-align: center;
  font-family: 'Playfair Display';
  font-weight: 100;
  @media (min-width: 1200px) and (max-width: 2570px) {
    ${({ rigth }) => rigth && ` text-align: right !important;`};
    font-size: 1rem;
    text-align: left;
  }
`;

export const TitleBody = styled.h1`
  font-size: 0.7rem;
  text-align: center;

  font-family: 'Playfair Display';
  font-weight: 100;
  color: ${colors.colors.darkGray};
  @media (min-width: 1200px) and (max-width: 2570px) {
    ${({ rigth }) =>
      rigth &&
      ` text-align: right; justify-content: flex-end;  padding-right: 10px;`};
    display: flex;
    margin-left: 15px;
    font-size: 0.95rem;
    text-align: left;
  }
  a {
    text-decoration: none;
    color: ${colors.colors.darkGray};
  }
`;

export const BodyCard = styled.div`
  background-color: ${colors.colors.ligthPurple};
  border-radius: 10px;
  padding-bottom: 1em;
`;

export const IconContainer = styled.span`
  ${({ rigth }) => rigth && ` margin-right: 0.5em;`};
  ${({ left }) => left && ` margin-left: 0.7em;`};
  img {
    width: 25px;
    height: 25px;
    margin-bottom: -3px;
  }
`;

export const Text = styled.div`
  color: ${colors.colors.black};
  font-size: 0.75rem;
  text-align: justify;
  @media (min-width: 1200px) and (max-width: 2570px) {
    font-size: 1rem;
  }
`;

export const Tags = styled.div`
  font-size: 0.65rem;
  @media (min-width: 1200px) and (max-width: 2570px) {
    font-size: 0.8rem;
  }
  padding-left: 3px;
  margin-bottom: 1em;
  display: inline-block;
  span {
    width: 100%;
    padding: 5px 10px 5px 10px;
    background-color: ${colors.colors.lightPurplePink};
    color: ${colors.colors.black};
    border-radius: 20px;
  }
`;
export const ContainerImg = styled.div`
  height: 25px;
  display: inline-block;
  img {
    height: 60px;
    margin-top: -1em;
  }
`;
