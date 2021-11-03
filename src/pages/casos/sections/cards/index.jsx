import React from 'react'
import styled from 'styled-components';
import { Grid, GridItem } from '../../../../styled-component/container';
import { Text } from '../../../../styled-component/typography';
import ThreeStarsPng from "../../../../assets/ShiningStar.svg";
import BluerVectorImage from "../../../../assets/BLUE-vector.png";
import SliderTemplate from '../../../../views/slider-component';

const CardSectionCasos = () => {
    const [cardNumber, setCardNumber] = React.useState(16);
    const setCardNumberFunc = () => {
      if (window.innerWidth <= 768) {
        setCardNumber(5);
      } else {
        setCardNumber(16);
      }
    };
    React.useEffect(() => {
      window.addEventListener("resize", setCardNumberFunc);
      setCardNumberFunc();
      return () => {
        window.removeEventListener("resize", setCardNumberFunc);
      };
    });
    return (
      <>
        <CardsContainer jCenter aCenter column gap={50}>
          <GridItem lg={5} lmd={6} md={8} sm={11}>
            <Text
              color={"#006D9A"}
              variant={6}
              family={"Oxanium"}
              wt={900}
              lineH={"20px"}
              center
              mobileLineH={"20px"}
            >
              {
                "Descubre más de 30 habilidades de escritura que Escríbelo ha aprendido de expertos en la redacción, copywriting, storytelling y marketing de contenidos."
              }
            </Text>
          </GridItem>
          <GridItem lg={8} lmd={9} sm={12}>
            <Grid wrap style={{ rowGap: "30px" }}>
              {Array.from(Array(cardNumber).keys()).map((item, index) => (
                <GridItem lg={4} lmd={4} sm={12}>
                  <Grid jCenter>
                    <GridItem lg={8} lmd={8} md={8} sm={4} xs={8}>
                      <ThreeStarCardWrapper>
                        <GridItem>
                          <Grid aCenter gap={20}>
                            <GridItem>
                              <ThreeStarImage src={ThreeStarsPng} />
                            </GridItem>
                            <GridItem>
                              <Text
                                color={"#7C8B8E"}
                                style={{ wordBreak: "break-word" }}
                                variant={9}
                                wt={600}
                              >
                                IDEA Y ESQUEMA DE BLOG
                              </Text>
                            </GridItem>
                          </Grid>
                        </GridItem>

                        <GridItem>
                          <Text variant={9} color={"#7C8B8E"} family={"Nunito"}>
                            {`Genera una lista de temas de publicaciones pensadas para posicionarse y atraer visitas mientras construyes un esquema para las publicaciones de la temática que desees posicionar.`}
                          </Text>
                        </GridItem>
                      </ThreeStarCardWrapper>
                    </GridItem>
                  </Grid>
                </GridItem>
              ))}
            </Grid>
          </GridItem>
        </CardsContainer>

        <Grid jCenter aCenter column>
          <GridItem style={{ position: "relative", bottom: -30 }}>
            <Text color={"#00657C"} family={"Oxanium"} wt={600} vairant={8}>
              ¡AHORRA CADA VEZ MÁS!
            </Text>
          </GridItem>
          <GridItem>
            <SliderTemplate />
          </GridItem>
        </Grid>
      </>
    );
}

export default CardSectionCasos


const CardsContainer = styled(Grid)`
  width: 100%;
  height: 100%;
  background-color: black;
  background: url(${BluerVectorImage});
  margin: 0;
  padding: 0;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  /* min-height: 80vh; */
  min-height: 100vh;
  padding-top : 70px;
  padding-bottom: 70px;
  
`;


const ThreeStarCardWrapper = styled.div`
  width: 100%;
  min-width: 100%;
  padding: 20px;
  background-color: white;
  box-shadow: 0px 16px 60px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;


const ThreeStarImage = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
`;

