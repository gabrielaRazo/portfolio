import styled from 'styled-components';
import * as colors from '../../stylesheet/Colors.style';

export const Space = styled.div`
  position: relative;
  margin-top: ${({ height }) => height + `px`};
  @media (min-width: 1024px) and (max-width: 2570px) {
    padding-top: 3em;
  }
`;
export const Logo = styled.img`
  margin-top: 0px;
  width: 80px;
  @media (min-width: 400px) and (max-width: 2570px) {
    margin-left: -1em;
  }
`;

export const Text = styled.div`
  color: ${colors.colors.white};
  font-size: 1.7rem;
  h4 {
    font-weight: 100;
  }
  text-align: center;
`;

export const Purple = styled.div`
  color: ${colors.colors.purple};
  text-align: center;
  margin-top: -1em;
  @media (min-width: 1400px) and (max-width: 2570px) {
    margin-left: -1.5em;
  }
`;

export const Copyright = styled.div`
  color: ${colors.colors.white};
  text-align: center;
  font-size: 0.8rem;
  margin-top: 4em;
`;

export const Container = styled.div`
  width: 100%;
  position: relative;

  @media (min-width: 768px) and (max-width: 2580px) {
    padding-left: 2em;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  border: 1px solid ${colors.colors.purple};
  border-radius: 50%;
  width: 45px;
  height: 45px;
  align-items: center;
  justify-content: center;

  svg {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;
    color: ${colors.colors.purple};
  }
`;
