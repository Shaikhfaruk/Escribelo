import React from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";
// import GradiantConatiner from "../../container/gradient-border";
const GradiantButtonFill = (props) => {
  const { children, onClick, width, height, borderRadius, color } = props;

  return (
    <Button
      onClick={onClick}
      style={{
        padding: 0,
        margin: 0,
        borderRadius: borderRadius || 0,
        overflow: "hidden",
      }}>
      <GradiantBackground
        width={width}
        height={height}
        borderRadius={borderRadius}
        color={color}>
        {children}
      </GradiantBackground>
    </Button>
  );
};

export default GradiantButtonFill;

const GradiantBackground = styled.div`
  background: linear-gradient(90deg, #06d9ca 0%, #19b6f0 50%, #6e6cff 100%);
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "40px"};
  border-radius: ${(props) => props.borderRadius || 10};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color || "#FFF"};
  text-transform: none;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    ${(props) => props.mW && `width : ${props.mW}`};
    ${(props) => props.mH && `height : ${props.mH}`};
  }
`;
