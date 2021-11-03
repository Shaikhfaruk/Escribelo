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
import Header from "../../../../components/header";
import styled from "styled-components";
import { Text } from "../../../../styled-component/typography";
import GradiantButtonEmpty from "../../../../styled-component/buttons/custom-button/gradiantButtonEmpty";
import { useHistory } from "react-router-dom";
const HeroPartnersPage = ({ match }) => {
  const history = useHistory();
  return (
    <HeroMainWrapper>
      <Header match={match} />
      <Box mt={"150px"} mobileMt={"60px"}>
        <Grid>
          <MainSection column jCenter aCenter gap={10}>
            <GridItem>
              <Text
                colorFill
                variant={7}
                autoCapitalize
                family={"Oxanium"}
                wt={600}
                lineH={"24px"}
                center
                mobileLineH={"20px"}>
                {"Escríbelo | Partners"}
              </Text>
            </GridItem>

            <GridItem lg={8} sm={11}>
              <Text
                colorFill
                variant={1}
                autoCapitalize
                wt={900}
                family={"Oxanium"}
                lineH={"45px"}
                mobileLineH={"35px"}
                center>
                {
                  "¿Preparado para promocionar el mejor SaaS de Escritura humanizada de habla hispana?"
                }
              </Text>
            </GridItem>

            <GridItem sm={11}>
              <Text
                variant={8}
                family={"Oxanium"}
                lineH={"22px"}
                wt={800}
                center>
                {
                  "Muéstrale a tu audiencia la NUEVA forma de crear contenido y escribir textos usando Escríbelo.ai junto a una OFERTA ESPECIAL."
                }
              </Text>
            </GridItem>

            <GridItem sm={11}>
              <Text
                variant={8}
                family={"Oxanium"}
                lineH={"22px"}
                wt={600}
                center>
                {`Cuando se registren, obtendrás un 30% de comisión recurrente según el tipo de membresía que haya elegido tu referido.`}
              </Text>
            </GridItem>

            <GridItem>
              <Box mt={"50px"}>
                <GradiantButtonEmpty
                  width={"220px"}
                  height={"40px"}
                  borderRadius={10}
                  bold>
                  <Text variant={7} colorFill wt={600}>
                    {"¡Quiero ser partner!"}
                  </Text>
                </GradiantButtonEmpty>
              </Box>
            </GridItem>

            <GridItem>
              <Grid gap={15} jCenter aCenter>
                <GridItem>
                  <Text variant={10} color={"#7C8B8E"}>
                    {"¿Ya eres partner?"}{" "}
                  </Text>
                </GridItem>
                <GridItem>
                  <LinkText
                    onClick={() => {
                      window.location.href = "//www.google.com";
                    }}>
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
                  </LinkText>
                </GridItem>
              </Grid>
            </GridItem>
          </MainSection>
        </Grid>
      </Box>
    </HeroMainWrapper>
  );
};

export default HeroPartnersPage;

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

const LinkText = styled.div`
  cursor: pointer;
  &:hover {
    h3 {
      color: blue;
    }
  }
`;
