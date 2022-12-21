import styled from 'styled-components';
import * as colors from '../../stylesheet/Colors.style';

export const Text = styled.div`
  h1 {
    margin-top: -0.7em;
    color: ${colors.colors.purple};
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 100;
    font-size: 45px;
  }
  h4 {
    color: ${colors.colors.white};
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 100;
    font-size: 26px;
  }
  p {
    margin-top: -0.5em;
    color: ${colors.colors.darkGray};
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 100;
    font-size: 20px;
  }
`;
