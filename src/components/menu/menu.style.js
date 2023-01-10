import styled from 'styled-components';
import * as colors from '../../stylesheet/Colors.style';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  background-color: ${colors.colors.purple};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 103vh;
  text-align: left;
  scroll-behavior: unset;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  width: 310px;
  z-index: 2;

  ::before ::after {
    box-sizing: inherit;
  }
  ${({ open }) =>
    open &&
    'border-right: solid 1px black;box-shadow: 0 0 50px; transition: 0.3s color;'};

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
      padding: 1rem;
    }

    &:hover {
      color: '#343078';
    }
  }
`;
