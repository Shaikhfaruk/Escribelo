import styled from "styled-components";

export const ImageCmp = styled.img`
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "100px"};
  object-fit: ${(props) => props.fit || "contain"};
`;
