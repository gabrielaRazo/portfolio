import styled from 'styled-components';
import * as colors from '../../stylesheet/Colors.style';

export const Card = styled.div`
  background-color: ${colors.colors.white};
  margin-top: 12em;
  position: absolute;
  height: 100%;
  @media (min-width: 1024px) and (max-width: 2570px) {
    width: 70%;
  }
  width: 75%;
  border-radius: 10px;
`;

export const MainIcon = styled.div`
  display: flex;
  flex-flow: row wrap;
  background-color: ${colors.colors.violet};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  svg {
    width: 35px;
    height: 35px;
  }
`;

export const Divider = styled.div`
  border-left: 1px solid #d4d4d4;
  margin-top: -5px;
  height: 98vh;
`;
