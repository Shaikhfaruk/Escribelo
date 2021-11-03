import React from "react";
import {
  Box,
  Container,
  FullHeightConainer,
  Grid,
  GridItem,
} from "../../../../styled-component/container";
// import HomeHeroImage from "../../../../assets/home-hero.png";
import HomeHeroImage from "../../../../assets/background.png";
import HappyImage from "../../../../assets/home-hero-icons/happy.png";
import ThumbImage from "../../../../assets/home-hero-icons/thumb.png";
import TimeImage from "../../../../assets/home-hero-icons/time.png";
import Header from "../../../../components/header";
import styled from "styled-components";
import { Text } from "../../../../styled-component/typography";
import GradiantButtonFill from "../../../../styled-component/buttons/custom-button/graidantButtonFill";
import { createStyles } from "@mui/material";

const styles = (theme) =>
  createStyles({
    scrollBar: {
      "&::-webkit-scrollbar": {
        width: "0.4em",
      },
      "&::-webkit-scrollbar-track": {
        "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(0,0,0,.1)",
        outline: "1px solid slategrey",
      },
    },
  });

const HeroHomePage = ({ match }) => {
  const classes = styles();
  return (
    <HeroMainWrapper>
      <Header match={match} />
      <Box mt={"120px"} mobileMt={"60px"}>
        <Container fixWidth={"90%"} fixWidthMobile={"90%"}>
          <MainSection column jCenter gap={10}>
            <GridItem>
              <Text
                variant={7}
                autoCapitalize
                family={"Oxanium"}
                wt={500}
                lineH={"20px"}
                center
                mobileLineH={"20px"}>
                {"Escribelo Lo Hace Por Ti"}
              </Text>
            </GridItem>

            <GridItem>
              <Text
                colorFill
                variant={0}
                autoCapitalize
                wt={800}
                family={"Oxanium"}
                lineH={"70px"}
                mobileLineH={"40px"}>
                {"marketing copy."}
              </Text>
            </GridItem>

            <GridItem lg={4} md={7} sm={9} xs={11}>
              <Text variant={7} family={"Oxanium"} lineH={"22px"} wt={600}>
                {
                  "¡Hazlo más rápido, más fácil y más económico con inteligencia artificial!"
                }
              </Text>
            </GridItem>

            <GridItem lg={5} md={7} sm={9} xs={11}>
              <Text
                variant={8}
                family={"Oxanium"}
                lineH={"22px"}
                wt={600}
                color={"#505A5C"}>
                {`Todo el contenido que necesitas para tu blog, tus redes sociales, tu página web ¡y más! Escríbelo tan inteligente como tú.`}
              </Text>
            </GridItem>

            <Box mt={"20px"}>
              <GradiantButtonFill
                width={"220px"}
                height={"40px"}
                borderRadius={5}>
                <Text variant={7} color={"#FFF"} wt={600}>
                  ¡Pruébalo Ahora!
                </Text>
              </GradiantButtonFill>
            </Box>
          </MainSection>
        </Container>
        <Container fixWidth={"90%"} fixWidthMobile={"90%"}>
          <Box
            mt={"80px"}
            mobileMt={"60px"}
            // style={{ maxWidth: "1000px" }}
            // ml={"auto"}
            // mr={"auto"}
          >
            <CardGrid id={"home-page-grid"} jSpaceBetween gap={30} aCenter>
              {/* first card */}
              <GridItem>
                <ShadowCard aCenter gap={10}>
                  <GridItem
                    style={{ backgroundColor: "#06D9CA", borderRadius: "2px" }}>
                    <IconImage src={HappyImage} />
                  </GridItem>
                  <GridItem>
                    <Grid column>
                      <GridItem>
                        <Text wt={900} variant={5} color={"#06D9CA"}>
                          {"+1.000"}
                        </Text>
                      </GridItem>
                      <GridItem>
                        <Text wt={800} variant={9}>
                          {"usuarios satisfechos"}
                        </Text>
                      </GridItem>
                    </Grid>
                  </GridItem>
                </ShadowCard>
              </GridItem>

              {/* second card */}
              <GridItem>
                <ShadowCard aCenter gap={10}>
                  <GridItem
                    style={{ backgroundColor: "#19B6F0", borderRadius: "4px" }}>
                    <IconImage src={ThumbImage} />
                  </GridItem>
                  <GridItem>
                    <Grid column>
                      <GridItem>
                        <Grid>
                          <GridItem style={{ alignSelf: "flex-end" }}>
                            <Text wt={900} color={"#19B6F0"} variant={5}>
                              {"9"}
                            </Text>
                          </GridItem>
                          <GridItem style={{ alignSelf: "flex-end" }}>
                            <Text wt={900} color={"#19B6F0"} variant={7}>
                              {"de cada"}
                            </Text>
                          </GridItem>
                          <GridItem>
                            <Text wt={900} color={"#19B6F0"} variant={5}>
                              {"10"}
                            </Text>
                          </GridItem>
                        </Grid>
                      </GridItem>
                      <GridItem>
                        <Text wt={800} variant={9}>
                          {"nos recomiendan"}
                        </Text>
                      </GridItem>
                    </Grid>
                  </GridItem>
                </ShadowCard>
              </GridItem>

              {/* third card */}
              <GridItem>
                <ShadowCard aCenter gap={10}>
                  <GridItem
                    style={{ backgroundColor: "#6E6CFF", borderRadius: "4px" }}>
                    <IconImage src={TimeImage} />
                  </GridItem>
                  <GridItem>
                    <Grid column>
                      <GridItem>
                        <Grid>
                          <GridItem style={{ alignSelf: "flex-end" }}>
                            <Text wt={900} color={"#6E6CFF"} variant={5}>
                              {"+10.000"}
                            </Text>
                          </GridItem>
                          <GridItem style={{ alignSelf: "flex-end" }}>
                            <Text wt={900} color={"#6E6CFF"} variant={7}>
                              {" horas"}
                            </Text>
                          </GridItem>
                        </Grid>
                      </GridItem>
                      <GridItem>
                        <Text wt={900} variant={9}>
                          {"ahorradas en redacción"}
                        </Text>
                      </GridItem>
                    </Grid>
                  </GridItem>
                </ShadowCard>
              </GridItem>
            </CardGrid>
          </Box>
        </Container>
      </Box>
    </HeroMainWrapper>
  );
};

export default HeroHomePage;

const HeroMainWrapper = styled(FullHeightConainer)`
  width: 100%;
  height: 100%;
  background-color: black;
  background: url(${HomeHeroImage});
  margin: 0;
  padding: 0;
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
const MainSection = styled(Grid)`
  width: 100%;
`;

const ShadowCard = styled(Grid)`
  background-color: white;
  box-shadow: 0px 16px 60px rgba(0, 0, 0, 0.12);
  /* padding-right: 60px; */
  width: 250px;
  border-radius: 4px;
`;
const IconImage = styled.img`
  width: 40px;
  height: 80px;
  margin-left: 5px;
  margin-right: 5px;
  padding: 5px;
  object-fit: contain;
`;

const CardGrid = styled(Grid)`
  @media screen and (max-width: 768px) {
    max-wwidth: 100%;
    overflow: scroll;
  }
`;
