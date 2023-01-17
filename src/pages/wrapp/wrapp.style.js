import styled from 'styled-components';

function getWidthStrings(span) {
  if (!span) {
    return;
  }
  let flex = (span / 12) * 100;
  return `display: block; flex: ${flex}%; max-width: ${flex}%;`;
}

const media = {
  xs: (styles) => `
    @media only screen and (max-width:480px){
        ${styles}
    }
    `,
  md: (styles) => `
    @media (min-width: 768px) and (max-width: 1023px){
        ${styles}
    }
    `,
  sm: (styles) => `
    @media (min-width: 481px) and (max-width: 768px){
        ${styles}
    }
    `,
  lg: (styles) => `
@media (min-width: 1024px) and (max-width: 2570px) {
        ${styles}
    }
    `,
};

export const Container = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
`;

export const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Col = styled.div`
  padding: 8px 0;
  ${({ space }) => space && `padding-left: 0.5em; padding-right: 0.5em`};

  @media (max-width: 420px) {
    ${({ xs }) => (xs ? getWidthStrings(xs) : 'width: 100%')};
  }
  @media (min-width: 420px) and (max-width: 767px) {
    ${({ sm }) => sm && getWidthStrings(sm)};
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    ${({ md }) => md && getWidthStrings(md)};
  }
  @media (min-width: 1024px) and (max-width: 2570px) {
    ${({ lg }) => lg && getWidthStrings(lg)};
  }
  ${(props) => props.collapse && media[props.collapse](`display:none;`)};
  ${(props) => props.hidden && media[props.hidden](`display:none;`)};
  ${(props) => props.none && media[props.none](`display:none;`)};
`;

export const SpaceLeft = styled.div`
  @media (max-width: 376px) {
    margin-left: ${({ xs }) => xs + `em`};
  }
  @media (min-width: 376px) and (max-width: 767px) {
    margin-left: ${({ sm }) => sm + `em`};
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    margin-left: ${({ md }) => md + `em`};
  }
  @media (min-width: 1024px) and (max-width: 2570px) {
    margin-left: ${({ lg }) => lg + `em`};
  }
`;

export const SpaceRigth = styled.div`
  @media (max-width: 376px) {
    margin-right: ${({ xs }) => xs + `em`};
  }
  @media (min-width: 376px) and (max-width: 768px) {
    margin-right: ${({ sm }) => sm + `em`};
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    margin-right: ${({ md }) => md + `em`};
  }
  @media (min-width: 1024px) and (max-width: 2570px) {
    margin-right: ${({ lg }) => lg + `em`};
  }
`;

export const Padding = styled.div`
  padding: 10px 6% 0px;
`;

export const SpaceBottom = styled.div`
  @media (max-width: 376px) {
    margin-bottom: ${({ xs }) => xs + `em`};
  }
  @media (min-width: 376px) and (max-width: 768px) {
    margin-bottom: ${({ sm }) => sm + `em`};
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    margin-bottom: ${({ md }) => md + `em`};
  }
  @media (min-width: 1024px) and (max-width: 1450px) {
    margin-bottom: ${({ lg }) => lg + `em`};
  }
  @media (min-width: 1451px) and (max-width: 2580px) {
    margin-bottom: ${({ xl }) => xl + `em`};
  }
`;

export const SpaceTop = styled.div`
  @media (max-width: 376px) {
    margin-bottom: ${({ xs }) => xs + `em`};
  }
  @media (min-width: 376px) and (max-width: 768px) {
    margin-bottom: ${({ sm }) => sm + `em`};
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    margin-bottom: ${({ md }) => md + `em`};
  }
  @media (min-width: 1024px) and (max-width: 1450px) {
    margin-bottom: ${({ lg }) => lg + `em`};
  }
  @media (min-width: 1451px) and (max-width: 2580px) {
    margin-bottom: ${({ xl }) => xl + `em`};
  }
`;

export const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  ${({ centered }) =>
    centered && `width: 100%; align-items: center; justify-content: center;`};
  &::after {
    content: '';
    clear: both;
    display: table;
  }
`;
