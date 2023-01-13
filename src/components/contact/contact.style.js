import styled from 'styled-components';
import * as colors from '../../stylesheet/Colors.style';

export const StyledIcon = styled.svg`
  width: 30px;
  height: 30px;
  padding: 1px;
  a {
    color: ${colors.colors.pink};
  }
`;

export const Line = styled.div`
  border-left: 1px solid ${colors.colors.pink};
  height: 100px;
  margin-left: 1em;
  ${({ up }) => up && `  margin-top: 1em;`};
  ${({ down }) => down && `  margin-bottom: 1em; `};
`;

export const Container = styled.div`
  position: fixed;
  z-index: 2;
  top: 30%;
  opacity: 0.7;
  ${({ left }) => left && `  left: 0;margin-left: 5em;`};
  ${({ rigth }) => rigth && `  right: 0; margin-right: 5em; `};
`;
