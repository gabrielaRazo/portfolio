import styled from 'styled-components';
import * as colors from '../../stylesheet/Colors.style';

export const StyledIcon = styled.svg`
  width: 25px;
  height: 25px;
  a {
    color: ${colors.colors.salmon};
  }
`;

export const Line = styled.div`
  border-left: 1px solid ${colors.colors.salmon};
  height: 100px;
  margin-left: 0.7em;
  ${({ up }) => up && `  margin-top: 1em;`};
  ${({ down }) => down && `  margin-bottom: 1em; `};
`;

export const Container = styled.div`
  position: fixed;
  opacity: 0.7;
  ${({ left }) => left && `  left: 0;margin-left: 5em;`};
  ${({ rigth }) => rigth && `  right: 0; margin-right: 5em; `};
`;
