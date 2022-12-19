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

export const ContainerCenter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Col = styled.div`
  padding: 16px 0;
  ${({ spaced }) => spaced && `margin-left: 0.5em; margin-right: 0.5em`};

  @media (max-width: 480px) {
    ${({ xs }) => (xs ? getWidthStrings(xs) : 'width: 100%')};
  }
  @media (min-width: 481px) and (max-width: 768px) {
    ${({ sm }) => sm && getWidthStrings(sm)};
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    ${({ md }) => md && getWidthStrings(md)};
  }
  @media (min-width: 1024px) and (max-width: 2570px) {
    ${({ lg }) => lg && getWidthStrings(lg)};
  }
  ${(props) => props.collapse && media[props.collapse](`display:none;`)};
`;
