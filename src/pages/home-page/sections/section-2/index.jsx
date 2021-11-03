import React from "react";
import styled from "styled-components";
import { Box, Grid, GridItem } from "../../../../styled-component/container";
import { Text } from "../../../../styled-component/typography";
import CustomGrid from "../../../../views/custom-grid";
import Expandable from "../../../../views/expandable";

const HomeSectionTwo = () => {
  return (
    <>
      <Expandable />

      <Box mt={"80px"} mobileMt={"40px"}>
        <Grid column jCenter aCenter>
          <GridItem>
            <Grid gap={8} style={{ marginBottom: "8px" }}>
              <GridItem style={{ alignSelf: "flex-end" }}>
                <ColorText
                  family={"Oxanium"}
                  wt={600}
                  upperCase
                  variant={7}
                  mb={15}>
                  Amado por
                </ColorText>
              </GridItem>
              <GridItem style={{ alignSelf: "flex-end" }}>
                <ColorText
                  family={"Oxanium"}
                  wt={900}
                  upperCase
                  variant={5}
                  mb={15}>
                  REDACTORES
                </ColorText>
              </GridItem>
            </Grid>
          </GridItem>

          <GridItem>
            <Text
              family={"Nunito"}
              wt={900}
              upperCase
              variant={8}
              color={"#7C8B8E"}>
              {"¡Queremos hacerte la vida más fácil!"}
            </Text>
          </GridItem>
          <GridItem lg={8} sm={11}>
            <Text
              family={"Nunito"}
              wt={600}
              upperCase
              variant={9}
              center
              color={"#7C8B8E"}>
              {
                "Estamos ansiosos por ver todo lo que puedes crear con nuestro asistente de inteligencia artificial, ahorra tiempo y dinero creando el contenido que necesitas ¡deja que Escríbelo lo haga por ti!"
              }
            </Text>
          </GridItem>
        </Grid>
      </Box>
      <CustomGrid />
    </>
  );
};

export default HomeSectionTwo;

const ColorText = styled(Text)`
  background: linear-gradient(
    90deg,
    #06d9ca 4.88%,
    #19b6f0 46.67%,
    #19b6f0 86.76%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
