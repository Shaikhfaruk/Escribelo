import React from "react";
import styled from "styled-components";
import { Grid, GridItem } from "../../../../styled-component/container";
import Image1 from "../../../../assets/ai-image.png";
import Image2 from "../../../../assets/ai-image2.png";
import Image3 from "../../../../assets/ai-image3.png";
import { Text } from "../../../../styled-component/typography";

const data = [
  {
    image: Image1,
    heading: "Crea contenido mucho más rápido en lenguaje humanizado",
    desc: "Elije entre más de 30 habilidades de redacción humanizada y crea un artículo para tu blog, el copy de una página de ventas o el guion de tu próximo video viral y genera el contenido perfecto en pocos minutos.",
  },
  {
    image: Image2,
    heading: "Ten todo organizado y aumenta tu productividad",
    desc: "Con nuestro sistema de organización por carpetas tendrás todo a mano siempre y podrás trabajar cuantos proyectos quieras a la vez.",
  },

  {
    image: Image3,
    heading: "Crea contenido que posicione y convierta",
    desc: "Nuestro asistente de redacción se encargará de entregarle contenido pensado para posicionar en los resultados de búsqueda según las palabras clave que hayas ingresado previamente.",
  },

  {
    image: Image1,
    heading: "Publica contenido en más de 30 idiomas",
    desc: "Escríbelo puede generar contenido de alta calidad en el idioma que tú desees, solo debes seleccionar un idioma, asignarle un tono de voz y elegir el caso de uso que necesitas para ver el resultado.",
  },

  {
    image: Image2,
    heading: "Puedes crear tu próximo best seller si te lo propones",
    desc: "Con Escríbelo puedes crear más contenido del que te imaginas, desde un artículo de blog que atrae visitas a tu web, hasta tu próxima novela de ficción o libro profesional ¡Escribe sin límites!",
  },
];

const PricingSectionOne = () => {
  return (
    <>
      <GreyColorContainer jCenter aCenter column gap={50}>
        <GridItem>
          <Text
            color={"#00657C"}
            variant={7}
            family={"Oxanium"}
            wt={900}
            lineH={"20px"}
            center
            mobileLineH={"20px"}
          >
            {"Conoce todo lo que Escríbelo puede hacer por ti"}
          </Text>
        </GridItem>
        <GridItem lg={6} lmd={8} md={10} sm={12}>
          <Grid column gap={20}>
            {data.map((item, index) => (
              <GridItem lg={12}>
                <CustomGrid gap={30} jCenter aCenter index={index}>
                  <GridItem lg={6} sm={12}>
                    <GridImage src={item.image} />
                  </GridItem>
                  <GridItem lg={6} sm={12}>
                    <Grid column>
                      <GridItem>
                        <Text
                          variant={8}
                          color={"#00657C"}
                          wt={900}
                          family={"Oxanium"}
                          style={{ wordBreak: "break-word" }}
                        >
                          {item.heading}
                        </Text>
                      </GridItem>
                      <GridItem>
                        <Text variant={9} family={"Nunito"} wt={600}>
                          {item.desc}
                        </Text>
                      </GridItem>
                    </Grid>
                  </GridItem>
                </CustomGrid>
              </GridItem>
            ))}
          </Grid>
        </GridItem>
      </GreyColorContainer>
    </>
  );
};

export default PricingSectionOne;

const GreyColorContainer = styled(Grid)`
  background-color: #fafafa;
  padding: 40px;
`;

const GridImage = styled.img`
  width: 100%;
  height: 120px;
  border-radius: 10px;
  object-fit: cover;
`;

const CustomGrid = styled(Grid)`
flex-direction: ${ ({index}) => index%2==0 ? "row" : "row-reverse"};
  @media screen and (max-width: 512px) {
    flex-direction: column;
  }
`;
