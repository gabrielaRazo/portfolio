import styled from 'styled-components';
import * as colors from '../../stylesheet/Colors.style';

export const Title = styled.h1`
  font-size: 2rem;
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
  text-align: center;
  font-family: 'Quicksand';
  width: 60px;
`;
