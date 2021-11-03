import React from "react";
import styled from "styled-components";
import {
  Box,
  Container,
  Grid,
  GridItem,
} from "../../../../styled-component/container";
import StarImage from "../../../../assets/group-tag-2.png";
import Slider, { SliderThumb } from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { styled as MuiStyled } from "@mui/material/styles";
import GradiantButtonEmpty from "../../../../styled-component/buttons/custom-button/gradiantButtonEmpty";
import { Text } from "../../../../styled-component/typography";
const PartnerSectionFour = () => {
  return (
    <>
      <Box mt={"30px"}>
        <Container>
          <Grid jCenter aCenter>
            <GridItem>
              <StarImageWrapper src={StarImage} />
            </GridItem>
          </Grid>
        </Container>
      </Box>

      <Container fluid style={{ backgroundColor: "#fafafa" }}>
        <Container fixWidthMobile={"90%"}>
          <Grid column aCenter jCenter gap={10}>
            <GridItem lg={7} sm={11}>
              <Text
                colorFill
                variant={4}
                autoCapitalize
                upperCase
                family={"Oxanium"}
                wt={600}
                center>
                {"CALCULA TUS COMISIONES PROMOCIONANDO ESCRÍBELO"}
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
                          {"Clics en enlace:"}
                        </Text>
                      </GridItem>
                      <GridItem>
                        <Text wt={600} color={"#19b6f0"} variant={8}>
                          {"3500"}
                        </Text>
                      </GridItem>
                    </Grid>
                  </GridItem>
                  <GridItem>
                    <Grid column jCenter aCenter>
                      <GridItem>
                        <Text wt={600} color={"#05010F"} variant={8}>
                          {"Clientes estimados:"}
                        </Text>
                      </GridItem>
                      <GridItem>
                        <Text wt={600} color={"#19b6f0"} variant={8}>
                          {"175"}
                        </Text>
                      </GridItem>
                    </Grid>
                  </GridItem>
                  <GridItem>
                    <Grid column jCenter aCenter>
                      <GridItem>
                        <Text wt={600} color={"#05010F"} variant={8}>
                          {"Comisiones estimadas: "}
                        </Text>
                      </GridItem>
                      <GridItem>
                        <Text wt={600} color={"#19b6f0"} variant={8}>
                          {"2.572€€"}
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
                <Text colorFill family={"Oxanium"} wt={600} variant={8}>
                  ¡Quiero Ser Partner!
                </Text>
              </GradiantButtonEmpty>
            </GridItem>

            <GridItem>
              <Grid gap={15} jCenter aCenter>
                <GridItem>
                  <Text variant={10} color={"#7C8B8E"}>
                    {"¿Ya eres partner?"}{" "}
                  </Text>
                </GridItem>
                <GridItem>
                  <Text
                    variant={9}
                    wt={600}
                    color={"#000"}
                    style={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}>
                    {"Accede a tu panel de control"}{" "}
                  </Text>
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default PartnerSectionFour;

const StarImageWrapper = styled.img`
  width: 350px;
  height: auto;
  object-fit: contain;

  @media screen and (max-width: 768px) {
    width: 250px;
  }
`;

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
