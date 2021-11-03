import React from "react";
import styled from "styled-components";
import {
  Box,
  Container,
  Grid,
  GridItem,
} from "../../../../styled-component/container";
import { Text } from "../../../../styled-component/typography";
import Slider, { SliderThumb } from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { styled as MuiStyled } from "@mui/material/styles";
import GradiantButtonEmpty from "../../../../styled-component/buttons/custom-button/gradiantButtonEmpty";
import Expandable from "../../../../views/expandable";
import Button1HeroImage from "../../../../assets/Rectangle60.png";
import CheckGreenImage from "../../../../assets/check-green.png";
import CheckWhiteImage from "../../../../assets/check-white.png";
import { cardActionsClasses } from "@mui/material";
import Button2HeroImage from "../../../../assets/Rectangle3.png";

const cardData = [
  {
    data: "Genera palabras ilimitadas",
    check: true,
  },
  {
    data: "Herramienta de detección de plagio",
    check: true,
  },
  {
    data: "Asistente de redacción SEO integrado",
    check: true,
  },

  {
    data: "+30 casos de uso diferentes",
    check: false,
  },
  {
    data: "+30 idiomas diferentes",
    check: false,
  },
  {
    data: "+20 tonos diferentes",
    check: false,
  },

  {
    data: "Acceso a soporte vía chat",
    check: false,
  },
  {
    data: "Archivos de texto ilimitados",
    check: false,
  },
  {
    data: "Comandos de voz",
    check: false,
  },
  {
    data: "Carpetas ilimitadas",
    check: false,
  },
  {
    data: "Acceso a la comunidad privada",
    check: false,
  },
];

const LabelComponent = ({ val1, val2 }) => (
  <Grid column jCenter aCenter>
    <GridItem>
      <Text color={"#000"} variant={8} wt={600} family={"Nunito"}>
        {val1}
      </Text>
    </GridItem>
    <GridItem>
      <DiscountText color={"rgba(255,0,0,0.5)"} variant={9} family={"Nunito"}>
        {val2}
      </DiscountText>
    </GridItem>
  </Grid>
);

const marks = [
  {
    value: 0,
    label: <LabelComponent val1={"1 mes"} val2={""} />,
  },
  {
    value: 25,
    label: <LabelComponent val1={"3 messes"} val2={"5% de descuento"} />,
  },
  {
    value: 50,
    label: <LabelComponent val1={"6 messes"} val2={"8% de descuento"} />,
  },
  {
    value: 75,
    label: <LabelComponent val1={"9 messes"} val2={"10% de descuento"} />,
  },
  {
    value: 100,
    label: <LabelComponent val1={"Anual"} val2={"2 meses gratis"} />,
  },
];

const discountObj = {
  25: "5%",
  50: "8%",
  75: "10%",
  100: "2 messes",
};

const discountArr = [
  { id: 25, discount: "5%" },
  { id: 50, discount: "8%" },
  { id: 75, discount: "10%" },
  { id: 100, discount: "2 meses" },
];

const PriceCard = () => {
  const [discount, setDiscount] = React.useState(0);
  const handleChange = (event, newValue) => {
    setDiscount(newValue);
  };
  return (
    <>
      {/* text */}
      <Container fixWidthMobile={"90%"}>
        <Grid column aCenter jCenter gap={10}>
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
              {"Periodo de suscripción"}
            </Text>
          </GridItem>

          {/* Slider */}
          <GridItem lg={9} sm={11}>
            <PrettoSlider
              aria-label="Restricted values"
              defaultValue={0}
              step={null}
              marks={marks}
              onChange={handleChange}
            />
          </GridItem>
          <GridItem>
            <Box mt={"20px"}>
              <GradiantButtonEmpty
                width={"200px"}
                height={"50px"}
                jCenter
                aCenter
              >
                <Text
                  colorFill
                  family={"Oxanium"}
                  wt={600}
                  variant={discount == 100 ? 8 : 7}
                >
                  {`Descuento: ${discountObj[discount] || "-"}`}
                </Text>
              </GradiantButtonEmpty>
            </Box>
          </GridItem>
        </Grid>
      </Container>

      {/* price card */}
      <Container fluid>
        <PriceCardContaier jCenter column aCenter gap={20}>
          <GridItem
            lg={6}
            lmd={7}
            md={8}
            sm={10}
            xs={11}
            style={{ maxWidth: "624px" }}
          >
            <PriceCardWrapper colMb jCenter aCenter>
              <GridItem lg={6} sm={6} xs={10} style={{ height: "100%" }}>
                <PriceCardLeftWrapper>
                  <PriceCardLeftCard
                    column
                    jCenter
                    aCenter
                    gap={20}
                    style={{ height: "100%" }}
                  >
                    <GridItem>
                      <Text
                        color={"#00657C"}
                        variant={7}
                        family={"Oxanium"}
                        wt={900}
                        autoCapitalize
                        lineH={"20px"}
                        center
                        mobileLineH={"20px"}
                      >
                        {"PLAN ILIMITADO"}
                      </Text>
                    </GridItem>
                    <GridItem>
                      <Text
                        color={"#262636"}
                        variant={8}
                        family={"Nunito"}
                        autoCapitalize
                        lineH={"20px"}
                        center
                        mobileLineH={"20px"}
                      >
                        {
                          "Escribelo hasta 10 veces más rápido y comienza a crear tus contenidos utilizando IA para redactar TODO lo que necesitas."
                        }
                      </Text>
                    </GridItem>

                    <GridItem>
                      <Grid>
                        <GridItem style={{ alignSelf: "flex-start" }}>
                          <Text variant={9} color={"#19B6F0"}>
                            €
                          </Text>
                        </GridItem>
                        <GridItem>
                          <Text
                            color={"#19B6F0"}
                            variant={5}
                            family={"Oxanium"}
                            wt={900}
                          >
                            49
                          </Text>
                        </GridItem>
                        <GridItem style={{ alignSelf: "flex-end" }}>
                          <Text variant={9}>/mes</Text>
                        </GridItem>
                      </Grid>
                    </GridItem>

                    <GridItem>
                      <GradiantButtonEmpty width={"180px"} height={"40px"} bold>
                        <Text colorFill>{"Empieza Ahora"}</Text>
                      </GradiantButtonEmpty>
                    </GridItem>

                    <GridItem>
                      <Text variant={9}>
                        {"Pruébalo totalmente gratis durante 5 días"}
                      </Text>
                    </GridItem>
                  </PriceCardLeftCard>
                </PriceCardLeftWrapper>
              </GridItem>

              <GridItem lg={6} sm={6} xs={10} style={{ height: "100%" }}>
                <PriceCardRightCard
                  column
                  style={{ height: "100%" }}
                  jCenter
                  aCenter
                >
                  {cardData.map((item) => (
                    <Grid gap={10}>
                      <GridItem>
                        <CheckIcon
                          src={item.check ? CheckGreenImage : CheckWhiteImage}
                        />
                      </GridItem>
                      <GridItem>
                        <Text
                          color={item.check ? "#00FF85" : "#FFF"}
                          variant={8}
                        >
                          {item.data}
                        </Text>
                      </GridItem>
                    </Grid>
                  ))}
                </PriceCardRightCard>
              </GridItem>
            </PriceCardWrapper>
          </GridItem>

          <GridItem lg={3} md={6} sm={10}>
            <Text variant={9} center>
              * Cada plan está sujeto a nuestra política de uso razonable y a
              sus respectivos límites de plataforma.
            </Text>
          </GridItem>
        </PriceCardContaier>
      </Container>

      {/* expandable */}
      <Container fluid>
        <Expandable />
      </Container>
    </>
  );
};

export default PriceCard;

const PrettoSlider = MuiStyled(Slider)({
  width: "100%",
  height: 5,
  marginBottom: 40,
  "& .MuiSlider-track": {
    border: "none",
    background: "linear-gradient(180deg, #19B6F0 29.53%, #4285F4 100%)",
    borderRadius: "3.5px",
  },
  "& .MuiSlider-thumb": {
    height: 16,
    width: 16,
    backgroundColor: "#fff",
    // background: "linear-gradient(180deg, #19B6F0 29.53%, #4285F4 100%)",
    border: "2px solid #4285F4",
    // "&:before": {
    //   boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
    // },
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
      "&:before": {
        boxShadow: "0 4px 12px 0 rgba(0,0,0,0.4)",
      },
    },
    // "&:before": {
    //   display: "none",
    // },
  },
});

const PriceCardContaier = styled(Grid)`
  background-color: #fafafa;
  padding: 50px 0px;
  @media screen and (max-width: 768px) {
    padding: 30px 0px;
  }
`;

const PriceCardWrapper = styled(Grid)`
  height: 350px;
  @media screen and (max-width: 768px) {
    height: 700px;
  }
`;

const PriceCardLeftWrapper = styled(Grid)`
  width : 100%;
  height : 100%;
  border-radius: 5px 5px 0px 0px;
  overflow : hidden;

`

const PriceCardLeftCard = styled(Grid)`
  width: 100%;
  background: url(${Button1HeroImage});
  margin: 0;
  padding: 0;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 20px;
  @media screen and (max-width: 768px) {
    background: url(${""});
    border: 5px solid transparent;
    border-radius: 20px;
    border-image-slice: 1;
    border-width: 5px;
    border-image-source: linear-gradient(
      90deg,
      #06d9ca 4.88%,
      #19b6f0 46.67%,
      #6e6cff 86.76%
    );
  }
`;

const PriceCardRightCard = styled(Grid)`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    #6e6cff -16.26%,
    #19b6f0 61.79%,
    #06d9ca 126.26%
  );
  /* #06d9ca 26.26%,
    #19b6f0 61.79%,
    #6e6cff 126.26%, */
  border-radius: 0px 8px 8px 0px;
  padding: 20px;

  @media screen and (max-width: 768px) {
    border-radius: 0px 0px 8px 8px;
  }
`;

const CheckIcon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
`;

const DiscountText = styled(Text)`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
