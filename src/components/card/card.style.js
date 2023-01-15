import styled from 'styled-components';
import * as colors from '../../stylesheet/Colors.style';

export const Card = styled.div`
  margin-top: 8em;
  position: absolute;
  height: 100%;
  @media (max-width: 420px) {
    width: 75%;
  }
  @media (min-width: 420px) and (max-width: 768px) {
    width: 78%;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 75%;
  }
  @media (min-width: 1024px) and (max-width: 2570px) {
    margin-top: 10em;
    width: 70%;
  }
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
