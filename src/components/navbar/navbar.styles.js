import styled from 'styled-components';
import * as colors from '../../stylesheet/Colors.style';

export const Tag = styled.div`
  margin-top: 1.7em;
  width: 100%;
  color: ${colors.colors.salmon};
  opacity: 0.7;
  text-align: center;
  cursor: pointer;
  span {
    &:hover {
      padding: 10px 25px 10px 25px;
      border-radius: 10px;
      background-color: ${colors.colors.purple};
      color: ${colors.colors.white};
    }
    ${({ active }) =>
      active &&
      `
      padding: 10px 25px 10px 25px;
      border-radius: 10px;
      background-color: ${colors.colors.purple};
      color: ${colors.colors.white};
    `}
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
