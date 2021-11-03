import React from "react";
import styled from "styled-components";
import {
  Box,
  Container,
  Grid,
  GridItem,
} from "../../../../styled-component/container";
import { Text } from "../../../../styled-component/typography";
const PartnerSectionOne = () => {
  return (
    <>
      <Container fluid style={{ backgroundColor: "#FAFAFA" }}>
        <Container fixWidthMobile={"95%"} fixWidth={"80%"}>
          <Grid column aCenter gap={15}>
            <GridItem>
              <Text color={" #00657C"} family={"Oxanium"} wt={900} variant={5}>
                {"¿Cómo funciona el Partner de Escríbelo?"}
              </Text>
            </GridItem>
            <GridItem>
              <Grid jSpaceAround colMb mobileAlign={"center"} gap={20}>
                <GridItem lg={3} sm={10}>
                  <Grid column gap={4} jCenter aCenter>
                    <GridItem>
                      <NumberText
                        color={"#06D9CA"}
                        variant={1}
                        family={"Inter"}
                        center>
                        1
                      </NumberText>
                    </GridItem>
                    <GridItem>
                      <Text color={"#475052"} variant={8} center wt={400}>
                        {"Regístrate o inicia sesión"}
                      </Text>
                    </GridItem>
                    <GridItem>
                      <Text color={"#04020F"} variant={9} center>
                        {
                          "Escríbelo está entrenado por redactores y expertos en conversión con reglas a seguir y modelos a imitar."
                        }
                      </Text>
                    </GridItem>
                  </Grid>
                </GridItem>

                <GridItem lg={3} sm={10}>
                  <Grid column gap={4} jCenter aCenter>
                    <GridItem>
                      <NumberText
                        color={"#19B6F0"}
                        variant={2}
                        family={"Inter"}
                        wt={900}
                        center>
                        2
                      </NumberText>
                    </GridItem>
                    <GridItem>
                      <Text color={"#475052"} variant={8} center>
                        {"Inserta los datos de su producto"}
                      </Text>
                    </GridItem>
                    <GridItem>
                      <Text color={"#04020F"} variant={9} center>
                        {
                          "Escribe información sobre tu marca o producto. Incluso añada instrucciones como el tono, la audiencia y demás para conseguir un texto más eficaz."
                        }
                      </Text>
                    </GridItem>
                  </Grid>
                </GridItem>

                <GridItem lg={3} sm={10}>
                  <Grid column gap={4} jCenter aCenter>
                    <GridItem>
                      <NumberText
                        color={"#6E6CFF"}
                        variant={2}
                        family={"Inter"}
                        wt={900}
                        center>
                        3
                      </NumberText>
                    </GridItem>
                    <GridItem>
                      <Text color={"#475052"} variant={8} center>
                        {"Generación del contenido"}
                      </Text>
                    </GridItem>
                    <GridItem>
                      <Text color={"#04020F"} variant={9} center>
                        {
                          "Escríbelo genera múltiples resultados a la vez para que los guardes, los elimines o los utilices."
                        }
                      </Text>
                    </GridItem>
                  </Grid>
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default PartnerSectionOne;

const NumberText = styled(Text)`
  font-size: 3.5rem;
  font-family: Inter;
  text-align: center;
  font-weight: bolder;
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;
