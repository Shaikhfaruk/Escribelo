import React from "react";
import styled from "styled-components";
import { Grid, GridItem } from "../../../../styled-component/container";
import Image1 from "../../../../assets/partner-grid-1.png";
import Image2 from "../../../../assets/partner-grid-2.png";
import Image3 from "../../../../assets/partner-grid-3.png";
import Image4 from "../../../../assets/partner-grid-4.png";
import Image5 from "../../../../assets/partner-grid-5.png";
import { Text } from "../../../../styled-component/typography";

const data = [
  {
    image: Image1,
    heading: "Bloggers y escritores",
    desc: "Agrega tus enlace de afiliado y anuncios de Escríbelo para monetizar tus publicaciones de blog o contenido digital.",
  },
  {
    image: Image2,
    heading: "Social Media Influencers",
    desc: "Gana dinero al compartir Escríbelo en tus redes sociales con tus seguidores más fieles.",
  },

  {
    image: Image3,
    heading: "YouTubers",
    desc: "Agrega algunos enlaces de afiliados a tus videos y descripciones para ganar más haciendo lo que ya sabes hacer: compartir tus conocimientos y aventuras con cámara en mano.",
  },

  {
    image: Image4,
    heading: "Medios de comunicación",
    desc: "Los medios de comunicación, los podcasts y los agregadores de noticias pueden usar anuncios de Escríbelo y enlaces de afiliados para ganar dinero con su audiencia.",
  },

  {
    image: Image5,
    heading: "Emprendedores",
    desc: "Monetiza tu contenido ayudando a otros a hacer que Escríbelo funcione para su negocio.",
  },
];

const PartnersSectionThree = () => {
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
            mobileLineH={"20px"}>
            {"¿Para quién es nuestro programa de afiliados?"}
          </Text>
        </GridItem>
        <GridItem lg={6} lmd={8} md={10} sm={12}>
          <Grid column gap={20}>
            {data.map((item, index) => (
              <GridItem lg={12}>
                <CustomGrid
                  gap={30}
                  jCenter
                  aCenter
                  index={index}
                  style={{ rowGap: 0 }}>
                  <GridItem lg={6} sm={12}>
                    <GridImage src={item.image} />
                  </GridItem>
                  <GridItem lg={6} sm={12}>
                    <TextGrid column gap={20}>
                      <GridItem>
                        <Text
                          variant={8}
                          color={"#00657C"}
                          wt={900}
                          family={"Oxanium"}
                          style={{ wordBreak: "break-word" }}>
                          {item.heading}
                        </Text>
                      </GridItem>
                      <GridItem>
                        <Text variant={9} family={"Nunito"} wt={600}>
                          {item.desc}
                        </Text>
                      </GridItem>
                    </TextGrid>
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

export default PartnersSectionThree;

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
  flex-direction: ${({ index }) => (index % 2 == 0 ? "row" : "row-reverse")};
  @media screen and (max-width: 512px) {
    flex-direction: column;
  }
`;

const TextGrid = styled(Grid)`
  @media screen and (max-width: 512px) {
    gap: 5px;
  }
`;
