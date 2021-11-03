import React from "react";
import {
  Box,
  Container,
  FullHeightConainer,
  Grid,
  GridItem,
} from "../../../../styled-component/container";
import Header from "../../../../components/header";
import styled from "styled-components";
import { Text } from "../../../../styled-component/typography";

// all images and icons
import PricingHeroImage from "../../../../assets/background.png";

const CasosHomePage = ({match}) => {
  return (
    <HeroMainWrapper>
      <Header match={match}/>
      <Box mt={"190px"} mobileMt={"180px"}>
        <Container fixWidth={"60%"} fixWidthMobile={"90%"}>
          <MainSection column jCenter aCenter>
            <Text
              colorFill
              variant={1}
              wt={900}
              family={"Oxanium"}
              lineH={"77px"}
              mobileLineH={"40px"}
              center
            >
              {"¿CÓMO PUEDE AYUDARTE ESCRÍBELO PARA REDACTAR MÁS RÁPIDO?"}
            </Text>
          </MainSection>
        </Container>
      </Box>

      
    </HeroMainWrapper>
  );
};

export default CasosHomePage;

const HeroMainWrapper = styled(FullHeightConainer)`
  width: 100%;
  height: 100%;
  background-color: black;
  background: url(${PricingHeroImage});
  margin: 0;
  padding: 0;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  /* min-height: 80vh; */
  min-height: 100vh;
  /* margin-bottom: 100px; */
  position: relative;
`;
const MainSection = styled(Grid)`
  width: 100%;
`;

