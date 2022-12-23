import styled from 'styled-components';
import * as colors from '../../stylesheet/Colors.style';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  background-color: ${colors.colors.purple};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  text-align: left;
  scroll-behavior: unset;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  ::before ::after {
    box-sizing: inherit;
  }

  @media (max-width: 576px) {
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 5rem;
  }

  a {
    font-size: 1rem;
    padding: 1rem 0;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
      width: 100%;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      font-size: 1.3rem;
      text-align: center;
    }

    &:hover {
      color: '#343078';
    }
  }
`;
