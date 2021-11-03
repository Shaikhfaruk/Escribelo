import React from "react";
import styled from "styled-components";
import {
  Box,
  Container,
  Grid,
  GridItem,
} from "../../../../styled-component/container";
import { Text } from "../../../../styled-component/typography";
import BestSellerImage from "../../../../assets/partners-icon/best-seller.png";
import DeviceImage from "../../../../assets/partners-icon/devices.png";
import HeartImage from "../../../../assets/partners-icon/heart.png";
import SocialImage from "../../../../assets/partners-icon/social-networ.png";
import TagImage from "../../../../assets/partners-icon/tag .png";
import WorldImage from "../../../../assets/partners-icon/world.png";

const data = [
  {
    image: SocialImage,
    title: "No más lagrimas",
    desc: "Ofrecemos un precio de membresía bastante razonable que le permitirá a tu cliente optimizar su tiempo e inversión mínima.",
  },
  {
    image: HeartImage,
    title: "Lo tenemos todo",
    desc: "ntegramos más de 30 casos de uso que le harán la vida más fácil a tus clientes y sus proyectos evolucionarán al siguiente nivel de crecimiento.",
  },
  {
    image: WorldImage,
    title: "Lo hacemos más simple",
    desc: "Haz que tus clientes realicen acciones sencillas para obtener resultados extraordinarios, no necesitan un doctorado para entender cómo funciona Escríbelo.",
  },

  {
    image: TagImage,
    title: "Amamos la eficiencia",
    desc: "Nos apasiona ayudar a nuestros usuarios y conseguir contenido de calidad para cada etapa de su proyecto o negocio.",
  },
  {
    image: DeviceImage,
    title: "Sin barreras geográficas",
    desc: "Tus clientes podrán crear contenido en más de 30 idiomas disponibles ¡el mundo es el límite!",
  },
  {
    image: BestSellerImage,
    title: "Ganas tú, crecemos juntos",
    desc: "Queremos que ganes mucho dinero y no te pongas límites, tú haces la difusión y nosotros nos encargamos de la parte técnica.",
  },
];

const PartnerSectionTwo = () => {
  return (
    <>
      <Box pt={"40px"} pb={"40px"}>
        <Grid column gap={20} jCenter aCenter>
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
              {"¿Por qué promocionar Escribelo.AI?"}
            </Text>
          </GridItem>
          <GridItem>
            <Grid jCenter aCenter>
              <GridItem lg={10}>
                <Grid wrap style={{ rowGap: "20px" }}>
                  {data?.map((item, index) => (
                    <GridItem lg={4} sm={6} xs={12} key={index}>
                      <Grid jCenter aCenter>
                        <GridItem lg={6} sm={8} xs={10}>
                          <Grid column jCenter aCenter gap={4}>
                            <GridItem>
                              <ImageLogo src={item.image} />
                            </GridItem>
                            <GridItem>
                              <Text variant={9} color={"#000"}>
                                {item.title}
                              </Text>
                            </GridItem>
                            <GridItem>
                              <Text variant={10} color={"#7C8B8E"} center>
                                {item.desc}
                              </Text>
                            </GridItem>
                          </Grid>
                        </GridItem>
                      </Grid>
                    </GridItem>
                  ))}
                </Grid>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default PartnerSectionTwo;

const ImageLogo = styled.img`
  width: 35px;
  height: 35px;
  object-fit: cover;
`;
