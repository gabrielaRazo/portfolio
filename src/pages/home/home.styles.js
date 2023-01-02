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
    @media (min-width: 481px) and (max-width: 768px) {
      text-align: center;
    }
    @media (max-width: 480px) {
      text-align: center;
    }
  }
  h4 {
    color: ${colors.colors.white};
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 100;
    font-size: 24px;
    @media (min-width: 481px) and (max-width: 768px) {
      text-align: center;
    }
    @media (max-width: 480px) {
      text-align: center;
    }
  }
  p {
    margin-top: -0.5em;
    color: ${colors.colors.darkGray};
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 100;
    font-size: 20px;
    @media (min-width: 481px) and (max-width: 768px) {
      text-align: center;
    }
    @media (max-width: 480px) {
      text-align: center;
    }
  }
`;

export const Button = styled.button`
  padding: 10px;
  border: 0;
  background-color: ${colors.colors.purple};
  border-radius: 10px;
  cursor: pointer;
  width: 254px;

  span {
    font-size: 15px;
    color: ${colors.colors.white};
    font-family: 'Quicksand';
  }
`;
