import styled from 'styled-components';
import * as colors from '../../stylesheet/Colors.style';

export const Container = styled.div`
  position: relative;
  margin-top: ${({ height }) => height + `px`};
  @media (min-width: 1024px) and (max-width: 2570px) {
    padding-top: 3em;
  }
`;
