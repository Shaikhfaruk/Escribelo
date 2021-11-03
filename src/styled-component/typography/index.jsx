import styled, { css } from "styled-components";

const TextStyles = css`
  font-weight: ${(props) => props.wt || "normal"};
  text-align: ${(props) =>
    (props.right && "right") ||
    (props.center && "center") ||
    (props.left && "left") ||
    "left"};
  ${(props) => (props.fluid ? `width:100%` : `width:fit-content`)};
  ${(props) => props.color && `color : ${props.color || "#505A5C"}`};
  ${(props) => props.family && `font-family : ${props.family}`};
  ${(props) => props.lineH && `line-height : ${props.lineH}`};
  padding: 0;
  margin: 0;

  ${(props) =>
    (props.variant == 0 || props.variant == "0") &&
    `
    font-size : 4rem ; 
    `};

  ${(props) =>
    (props.variant == 1 || props.variant == "1") &&
    `
    font-size : 3rem ; 
    `};
  ${(props) =>
    (props.variant == 2 || props.variant == "2") &&
    `
    font-size : 2.7rem ; 
    `};
  ${(props) =>
    (props.variant == 3 || props.variant == "3") &&
    `
    font-size : 2.4rem ; 
    `};
  ${(props) =>
    (props.variant == 4 || props.variant == "4") &&
    `
    font-size : 2.1rem ; 
    `};
  ${(props) =>
    (props.variant == 5 || props.variant == "5") &&
    `
    font-size : 1.8rem ; 
    `};
  ${(props) =>
    (props.variant == 6 || props.variant == "6") &&
    `
    font-size : 1.5rem ; 
    `};
  ${(props) =>
    (props.variant == 7 || props.variant == "7") &&
    `
    font-size : 1.2rem ; 
    `};
  ${(props) =>
    (props.variant == 8 || props.variant == "8") &&
    `
    font-size : 0.9rem ; 
    `};
  ${(props) =>
    (props.variant == 9 || props.variant == "9") &&
    `
    font-size : 0.7rem ; 
    `};
  ${(props) =>
    (props.variant == 10 || props.variant == "10") &&
    `
    font-size : 0.6rem ; 
    `};

  @media screen and (max-width: 768px) {
    ${(props) => props.mobileLineH && `line-height : ${props.mobileLineH}`};

    ${(props) =>
      (props.variant == 0 || props.variant == "0") &&
      `
    font-size : 3rem ; 
    `};
    ${(props) =>
      (props.variant == 1 || props.variant == "1") &&
      `
    font-size : 2rem ; 
    `};
    ${(props) =>
      (props.variant == 2 || props.variant == "2") &&
      `
    font-size : 1.8rem ; 
    `};
    ${(props) =>
      (props.variant == 3 || props.variant == "3") &&
      `
    font-size : 1.6rem ; 
    `};
    ${(props) =>
      (props.variant == 4 || props.variant == "4") &&
      `
    font-size : 1.4rem ; 
    `};
    ${(props) =>
      (props.variant == 5 || props.variant == "5") &&
      `
    font-size : 1.2rem ; 
    `};
    ${(props) =>
      (props.variant == 6 || props.variant == "6") &&
      `
    font-size : 1rem ; 
    `};
    ${(props) =>
      (props.variant == 7 || props.variant == "7") &&
      `
    font-size : 1rem ; 
    `};
    ${(props) =>
      (props.variant == 8 || props.variant == "8") &&
      `
    font-size : 0.8rem ; 
    `};
    ${(props) =>
      (props.variant == 9 || props.variant == "9") &&
      `
    font-size : 0.7rem ; 
    `};
    ${(props) =>
      (props.variant == 10 || props.variant == "10") &&
      `
    font-size : 0.7rem ; 
    `};
  }
`;

export const Text = styled.h3`
  ${TextStyles};
  ${(props) =>
    props.colorFill &&
    `background: linear-gradient(
      90deg,
      #06d9ca 17.68%,
      #19b6f0 39.18%,
      #6e6cff 80%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;`}
  ${(props) => props.autoCapitalize && `text-transform: capitalize;`};
  ${(props) => props.upperCase && `text-transform: uppercase;`};
  color: ${(props) => props.color || "#505A5C"};
  /* word-break: break-all; */
  font-style: normal;
`;

