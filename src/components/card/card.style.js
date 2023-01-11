import styled from 'styled-components';
import * as colors from '../../stylesheet/Colors.style';

export const Card = styled.div`
  margin-top: 12em;
  position: absolute;
  height: 100%;
  @media (min-width: 1024px) and (max-width: 2570px) {
    width: 70%;
  }
  width: 75%;
`;

export const Container = styled.div`
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
