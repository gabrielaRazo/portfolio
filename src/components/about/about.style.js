import styled from 'styled-components';
import * as colors from '../../stylesheet/Colors.style';

export const Img = styled.img`
  width: 100%;
`;

export const Title = styled.h1`
  color: ${colors.colors.purple};
  font-family: 'Playfair Display';
  font-size: 30px;
  font-weight: 100;
`;

export const Text = styled.div`
  color: white;
  text-align: left;
  font-size: 22px;
`;

export const SpaceLeft = styled.div`
  margin-left: ${({ marginLeft }) => marginLeft + `em`};
`;
