import React from 'react'
import styled from 'styled-components';
import Button1HeroImage from "../../../assets/pricing-button-1.png";
import Button2HeroImage from "../../../assets/Rectangle3.png";
import { Grid } from '../../container';

const GradiantButtonEmpty = ({width , height , children , bold}) => {
    return (
        <ButtonOneHeroImage width={width} height={height} jCenter aCenter bold={bold}>
            {children}
        </ButtonOneHeroImage>
    )
}

export default GradiantButtonEmpty


const ButtonOneHeroImage = styled(Grid)`
  width: ${(props) => props.width || "200px"};
  height: ${(props) => props.height || "80px"};
  /* background: url(${Button1HeroImage}); */
  ${(props) =>
    props.bold
      ? `background: url(${Button2HeroImage});`
      : `background: url(${Button1HeroImage});`}
  margin: 0;
  padding: 0;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 20px;
  cursor: pointer;
`;