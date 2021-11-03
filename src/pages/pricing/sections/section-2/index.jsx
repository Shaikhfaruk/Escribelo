import React from "react";
import styled from "styled-components";
import { Box, Container, Grid, GridItem } from "../../../../styled-component/container";
import { Text } from "../../../../styled-component/typography";
import StarImage from "../../../../assets/image-tag1.png";
import ShopifyImage from "../../../../assets/shopify.png"
const PricingSectionTwo = () => {
  return (
    <>
      <Container fluid style={{ padding : 0, paddingRight: 0 }}>
        <Box mt={"20px"} mobileMt={"0px"}>
          <Container fixWidth={"70%"} fixWidthMobile={"90%"}>
            <Grid column jCenter aCenter gap={10}>
              <GridItem lg={7} sm={12}>
                <Text
                  colorFill
                  variant={4}
                  autoCapitalize
                  wt={800}
                  family={"Oxanium"}
                  lineH={"40px"}
                  mobileLineH={"30px"}
                  center
                  style={{ wordBreak: "keep-all" }}
                >
                  {"más de 100 reviews califican a Escríbelo 4.5/5"}
                </Text>
              </GridItem>

              <GridItem lg={9} lmd={12}>
                <Text
                  variant={8}
                  wt={800}
                  family={"Nunito"}
                  center
                  color={"#7C8B8E"}
                  style={{ wordBreak: "keep-all" }}
                >
                  {
                    "¡Queremos hacerte la vida más fácil!Ahorra tiempo y dinero creando el contenido que necesitas... deja que Escríbelo lo haga por ti."
                  }
                </Text>
              </GridItem>

              <GridItem>
                <StarImageWrapper src={StarImage} />
              </GridItem>

              <GridItem lg={10} lmd={12}>
                <Grid wrap jCenter aCenter style={{rowGap : "10px"}}>
                  {[...Array(8).keys()].map((item, index) => (
                    <GridItem lg={3} sm={6} xs={12}>
                      <Grid jCenter aCenter>
                        <GridItem>
                          <ShopifyImageWrapper src={ShopifyImage} />
                        </GridItem>
                      </Grid>
                    </GridItem>
                  ))}
                </Grid>
              </GridItem>
            </Grid>
          </Container>
        </Box>
      </Container>

    
    </>
  );
};

export default PricingSectionTwo;


const StarImageWrapper = styled.img`
    width : 300px;
    height : auto;
    object-fit: contain;
`


const ShopifyImageWrapper = styled.img`
  width: 150px;
  height: 50px;
  object-fit: cover;
`;