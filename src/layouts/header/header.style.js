import styled from 'styled-components';
import { colors } from '../../stylesheet/Colors.style';

export const Logo = styled.img`
  width: 70px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 10% 90%;
  grid-template-rows: auto 50px;
  column-gap: 0.5rem;
  margin-top: 10px;
`;
