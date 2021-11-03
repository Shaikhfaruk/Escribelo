import React from "react";
import styled from "styled-components";
import {
  Box,
  Container,
  Grid,
  GridItem,
} from "../../../../styled-component/container";
import { Text } from "../../../../styled-component/typography";
import MiddleSvg from "../../../../assets/Frame9.png";
import GooglePng from "../../../../assets/google.png";
import GradiantButtonEmpty from "../../../../styled-component/buttons/custom-button/gradiantButtonEmpty";
import GradiantButtonFill from "../../../../styled-component/buttons/custom-button/graidantButtonFill";
const HomeSectionOne = () => {
  return (
    <>
      <Container fluid style={{ backgroundColor: "#FAFAFA" }}>
        <Container fixWidthMobile={"95%"} fixWidth={"80%"}>
          <Grid column aCenter gap={15}>
            <GridItem>
              <Text color={" #00657C"} family={"Oxanium"} wt={900} variant={5}>
                {"¿Cómo funciona Escribelo?"}
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
                      <Text
                        color={"#475052"}
                        variant={8}
                        center
                        family={"Nunito"}
                        wt={900}>
                        {"Elige un caso de uso"}
                      </Text>
                    </GridItem>
                    <GridItem>
                      <Text
                        color={"#04020F"}
                        variant={9}
                        center
                        family={"Nunito"}
                        wt={400}>
                        {
                          "Escribelo.ai está entrenado por redactores y expertos en conversión con reglas a seguir y modelos a imitar para darte un contenido único."
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
                      <Text
                        color={"#475052"}
                        variant={8}
                        center
                        family={"Nunito"}
                        wt={900}>
                        {"Dale tu toque personal"}
                      </Text>
                    </GridItem>
                    <GridItem>
                      <Text
                        color={"#04020F"}
                        variant={9}
                        center
                        family={"Nunito"}>
                        {
                          "Añade información sobre tu marca o producto, elige el tono que deseas transmitir y agrega tus palabras clave favoritas para conseguir un texto más eficaz."
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
                      <Text
                        color={"#475052"}
                        variant={8}
                        center
                        family={"Nunito"}
                        wt={900}>
                        {"Genera tu contenidoúnico"}
                      </Text>
                    </GridItem>
                    <GridItem>
                      <Text
                        color={"#04020F"}
                        variant={9}
                        center
                        family={"Nunito"}>
                        {
                          "Pon a funcionar la inteligencia de Escribelo.ai para obtener un resultado 100% original y único que te ayude a lograr tus objetivos."
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

      <Container>
        <Grid>
          <MiddleImage src={MiddleSvg} />
        </Grid>
      </Container>

      <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Box
          mt={"20px"}
          mobileMt={"60px"}
          style={{ backgroundColor: "#fafafa" }}>
          <Container fixWidth={"70%"} fixWidthMobile={"90%"}>
            <Grid column jCenter aCenter>
              <Text
                color={"#00657C"}
                variant={8}
                autoCapitalize
                family={"Oxanium"}
                wt={600}
                lineH={"20px"}
                center
                mobileLineH={"20px"}>
                {"ESCRIBELO TIENE +30 HABILIDADES DE REDACCIÓN INTELIGENTE"}
              </Text>
              <Text
                colorFill
                variant={4}
                autoCapitalize
                wt={800}
                family={"Oxanium"}
                lineH={"50px"}
                mobileLineH={"30px"}
                center>
                {"¿QUÉ ES LO QUE PUEDE HACER escrÍbelo POR ti?"}
              </Text>
              <Container
                fixWidth={"70%"}
                fixWidthMobile={"90%"}
                style={{ margin: "0 auto", padding: 0 }}>
                <Grid jCenter aCenter column>
                  <GridItem>
                    <Text
                      variant={9}
                      family={"Oxanium"}
                      lineH={"22px"}
                      wt={800}
                      center
                      color={"#05010F"}>
                      {
                        "Inteligencia Artificial entrenada por expertos en redacción, copywriting, storytelling y marketing de contenidos."
                      }
                    </Text>
                  </GridItem>
                  <GridItem>
                    <Text
                      variant={9}
                      family={"Oxanium"}
                      lineH={"22px"}
                      wt={600}
                      center
                      color={"#05010F"}>
                      {`Escríbelo.ai tiene todas las habilidades que necesarias para crear un contenido excelente que capte atención y convierta a tu público objetivo.`}
                    </Text>
                  </GridItem>
                </Grid>
              </Container>
            </Grid>
          </Container>
          <Box
            mt={"50px"}
            pb={"50px"}
            mobileMt={"30px"}
            style={{ maxWidth: "1200px" }}
            ml={"auto"}
            mr={"auto"}>
            <Grid jCenter aCenter column gap={40}>
              <GridItem lg={9}>
                <Grid wrap style={{ rowGap: "30px" }}>
                  {Array.from(Array(6).keys()).map((item, index) => (
                    <GridItem lg={4} md={6} sm={12}>
                      <Grid jCenter>
                        <GridItem lg={8} md={6} sm={6} xs={6} xs={9}>
                          <GoogleCardWrapper>
                            <GridItem>
                              <Grid aCenter gap={10}>
                                <GridItem>
                                  <GoogleImage src={GooglePng} />
                                </GridItem>
                                <GridItem>
                                  <Text
                                    colorFill
                                    style={{ wordBreak: "break-word" }}
                                    variant={7}
                                    autoCapitalize
                                    wt={700}>
                                    GOOGLE ADS HEADLINE
                                  </Text>
                                </GridItem>
                              </Grid>
                            </GridItem>

                            <GridItem>
                              <Text
                                variant={8}
                                color={"#7C8B8E"}
                                family={"Nunito"}>
                                {`Create high converting copy for the "Headlines" section of your Google Ads.`}
                              </Text>
                            </GridItem>
                          </GoogleCardWrapper>
                        </GridItem>
                      </Grid>
                    </GridItem>
                  ))}
                </Grid>
              </GridItem>

              <GridItem>
                <GradiantButtonEmpty
                  width={"200px"}
                  height={"50px"}
                  jCenter
                  aCenter
                  bold>
                  <Text colorFill family={"Oxanium"} wt={600} variant={8}>
                    Ver todos los casos
                  </Text>
                </GradiantButtonEmpty>
              </GridItem>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default HomeSectionOne;

const NumberText = styled(Text)`
  font-size: 3.5rem;
  font-family: Inter;
  text-align: center;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const MiddleImage = styled.img`
  width: 100%;
  height: auto;
  margin: 20px auto;
`;

const GoogleCardWrapper = styled.div`
  width: 100%;
  min-width: 100%;
  padding: 20px;
  background-color: white;
  box-shadow: 0px 16px 60px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const GoogleInnerCardWrapper = styled.div`
  padding: 20px;
`;

const GoogleImage = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
`;
