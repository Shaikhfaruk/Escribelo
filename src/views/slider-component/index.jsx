import React from "react";
import styled from "styled-components";
import {
  Box,
  Container,
  Grid,
  GridItem,
} from "../../styled-component/container";
import { Text } from "../../styled-component/typography";
import Slider, { SliderThumb } from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { styled as MuiStyled } from "@mui/material/styles";
import GradiantButtonEmpty from "../../styled-component/buttons/custom-button/gradiantButtonEmpty";
const SliderTemplate = () => {
  return (
    // <Box mt={"50px"}>
    <Container fixWidthMobile={"90%"}>
      <Grid column aCenter jCenter gap={10}>
        <GridItem lg={7} sm={11}>
          <Text
            colorFill
            variant={4}
            autoCapitalize
            upperCase
            family={"Oxanium"}
            wt={800}
            center>
            {"¡Haz que EL PODER inteligencia artificial te ahorre el trabajo!"}
          </Text>
        </GridItem>
        <GridItem>
          <Box
            mt={"10px"}
            mobileMt={"10px"}
            style={{ maxWidth: "1000px" }}
            ml={"auto"}
            mr={"auto"}>
            <Grid jSpaceAround colMb gap={30} aCenter>
              <GridItem>
                <Grid column jCenter aCenter>
                  <GridItem>
                    <Text wt={600} color={"#05010F"} variant={8}>
                      {"Horas que ahorras:"}
                    </Text>
                  </GridItem>
                  <GridItem>
                    <Text wt={600} color={"#19b6f0"} variant={8}>
                      {"20"}
                    </Text>
                  </GridItem>
                </Grid>
              </GridItem>
              <GridItem>
                <Grid column jCenter aCenter>
                  <GridItem>
                    <Text wt={600} color={"#05010F"} variant={8}>
                      {"Dinero Ahorrado:"}
                    </Text>
                  </GridItem>
                  <GridItem>
                    <Text wt={600} color={"#19b6f0"} variant={8}>
                      {" 500€"}
                    </Text>
                  </GridItem>
                </Grid>
              </GridItem>
              <GridItem>
                <Grid column jCenter aCenter>
                  <GridItem>
                    <Text wt={600} color={"#05010F"} variant={8}>
                      {"Número de palabras:"}
                    </Text>
                  </GridItem>
                  <GridItem>
                    <Text wt={600} color={"#19b6f0"} variant={8}>
                      {"10,000"}
                    </Text>
                  </GridItem>
                </Grid>
              </GridItem>
            </Grid>
          </Box>
        </GridItem>

        <GridItem lg={6} lmd={6} md={7} sm={10}>
          <PrettoSlider aria-label="pretto slider" defaultValue={20} />
        </GridItem>

        <GridItem>
          <GradiantButtonEmpty
            width={"200px"}
            height={"50px"}
            jCenter
            aCenter
            bold>
            <Text colorFill family={"Oxanium"} wt={600}>
              Empieza Ahora
            </Text>
          </GradiantButtonEmpty>
        </GridItem>

        <GridItem>
          <Text family={"Oxanium"} variant={9}>
            Pruébalo totalmente gratis durante 5 días
          </Text>
        </GridItem>
      </Grid>
    </Container>
    // </Box>
  );
};

export default SliderTemplate;

const PrettoSlider = MuiStyled(Slider)({
  width: "100%",
  height: 5,
  "& .MuiSlider-track": {
    border: "none",
    background:
      "linear-gradient(90deg, #06D9CA 4.88%, #19B6F0 46.67%, #6E6CFF 86.76%)",
    opacity: 0.5,
    borderRadius: "3.5px",
  },
  "& .MuiSlider-thumb": {
    height: 16,
    width: 16,
    backgroundColor: "#fff",
    background: "linear-gradient(180deg, #19B6F0 29.53%, #4285F4 100%)",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
});
