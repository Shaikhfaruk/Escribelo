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
import GradiantButtonFill from "../../../../styled-component/buttons/custom-button/graidantButtonFill";

// all images and icons
import PricingHeroImage from "../../../../assets/background.png";
import Button1HeroImage from "../../../../assets/pricing-button-1.png";
import TrendingIcon from "../../../../assets/trending-icon.png";
import WatchIcon from "../../../../assets/watch-icon.png";
import PencilIcon from "../../../../assets/pencil-icon.png";

const PricingHomePage = ({ match }) => {
  return (
    <HeroMainWrapper>
      <Header match={match} />
      <Box mt={"150px"} mobileMt={"60px"}>
        <Container fixWidth={"60%"} fixWidthMobile={"90%"}>
          <MainSection column jCenter aCenter>
            <Text
              colorFill
              variant={1}
              wt={800}
              family={"Oxanium"}
              lineH={"77px"}
              mobileLineH={"40px"}
              center>
              {"La forma más fácil de escribir un buen texto rápidamente."}
            </Text>
          </MainSection>
        </Container>
      </Box>

      <BottomButtonConainer colMb aCenter>
        <GridItem lg={4} sm={10}>
          <Grid jCenter>
            <ButtonOneHeroImage jCenter aCenter>
              <Grid gap={20}>
                <GridItem>
                  <ButtonIcon src={PencilIcon} />
                </GridItem>
                <GridItem>
                  <Text colorFill variant={8} wt={800}>
                    {"GENERA CONTENIDO DE CALIDAD SIEMPRE"}
                  </Text>
                </GridItem>
              </Grid>
            </ButtonOneHeroImage>
          </Grid>
        </GridItem>

        <GridItem lg={4} sm={10}>
          <Grid jCenter>
            <ButtonOneHeroImage jCenter aCenter>
              <Grid gap={20} style={{ alignItems: "center" }}>
                <GridItem>
                  <ButtonIcon src={WatchIcon} />
                </GridItem>
                <GridItem>
                  <Text colorFill variant={8} wt={800}>
                    {"PUBLICA MÁS CONTENIDOS CON MAYOR RAPIDEZ"}
                  </Text>
                </GridItem>
              </Grid>
            </ButtonOneHeroImage>
          </Grid>
        </GridItem>

        <GridItem lg={4} sm={10}>
          <Grid jCenter>
            <ButtonOneHeroImage jCenter aCenter>
              <Grid gap={20} style={{ alignItems: "center" }}>
                <GridItem>
                  <ButtonIcon src={TrendingIcon} />
                </GridItem>
                <GridItem>
                  <Text colorFill variant={8} wt={800}>
                    {"AUMENTA TUS VENTAS CON TEXTOS DE CALIDAD"}
                  </Text>
                </GridItem>
              </Grid>
            </ButtonOneHeroImage>
          </Grid>
        </GridItem>
      </BottomButtonConainer>
    </HeroMainWrapper>
  );
};

export default PricingHomePage;

const HeroMainWrapper = styled(FullHeightConainer)`
  width: 100%;
  height: 100%;
  background-color: black;
  background: url(${PricingHeroImage});
  margin: 0;
  padding: 0;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  min-height: 80vh;
  margin-bottom: 100px;
  position: relative;
`;
const MainSection = styled(Grid)`
  width: 100%;
`;

const BottomButtonConainer = styled(Grid)`
  position: absolute;
  bottom: -50px;
  row-gap: 20px;
`;

const ButtonOneHeroImage = styled(Grid)`
  width: 250px;
  height: 80px;
  background: url(${Button1HeroImage});
  margin: 0;
  padding: 0;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 20px;
  backdrop-filter: blur(10px);
`;
const ButtonIcon = styled.img`
  width: 35px;
  height: 35px;
  object-fit: contain;
`;
