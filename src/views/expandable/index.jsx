import React from "react";
import styled from "styled-components";
import { Container, Grid, GridItem } from "../../styled-component/container";
import { Text } from "../../styled-component/typography";
import DownIcon from "../../assets/down-arrow.png";

const data = [
  {
    query: "¿por qué debo contratar escríbelo?",
    ans: `We accept all major credit cards as well as debit cards. Including Visa, Mastercard, Discover, American Express and UnionPay. We also accept PayPal.`,
  },
  {
    query: "¿En qué casos me puede ayudar Escríbelo?",
    ans: `We accept all major credit cards as well as debit cards. Including Visa, Mastercard, Discover, American Express and UnionPay. We also accept PayPal.`,
  },
  {
    query: "¿Cuánto dinero puedo ahorrar utilizando Esríbelo?",
    ans: `We accept all major credit cards as well as debit cards. Including Visa, Mastercard, Discover, American Express and UnionPay. We also accept PayPal.`,
  },
  {
    query: "¿Qué cantidad de contenido puedo generar con Escríbelo?",
    ans: `We accept all major credit cards as well as debit cards. Including Visa, Mastercard, Discover, American Express and UnionPay. We also accept PayPal.`,
  },
  {
    query: "¿Puedo utilizar Escríbelo si soy freelance o agencia?",
    ans: `We accept all major credit cards as well as debit cards. Including Visa, Mastercard, Discover, American Express and UnionPay. We also accept PayPal.`,
  },
  {
    query: "¿en qué se diferencia Escríbelo de los demás?",
    ans: `We accept all major credit cards as well as debit cards. Including Visa, Mastercard, Discover, American Express and UnionPay. We also accept PayPal.`,
  },
];
const Expandable = () => {
  return (
    <Container>
      <Grid column jCenter aCenter gap={30}>
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
            {"Preguntas frecuentes"}
          </Text>
        </GridItem>

        <GridItem lg={6} md={8} sm={9} xs={10}>
          <Grid column gap={20}>
            {data.map((item) => (
              <GridItem lg={12}>
                <ExpandableComponent query={item.query} ans={item.ans} />
              </GridItem>
            ))}
          </Grid>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Expandable;

const ExpandableComponent = ({ query, ans }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <ExpandableWrapper
      jSpaceBetween
      aLeft
      open={open}
      onClick={() => {
        if (!open) {
          setOpen(true);
        }
      }}
    >
      <GridItem lg={12}>
        <Grid column gap={10}>
          <GridItem>
            <ExpandableText colorFill={open}>{query}</ExpandableText>
          </GridItem>
          <GridItem>
            <Text variant={7} color={"#B8B8B8"}>{ans}</Text>
          </GridItem>
        </Grid>
      </GridItem>
      <GridItem>
        {" "}
        <DownArrow
          src={DownIcon}
          onClick={() => {
            if (open) {
              setOpen(false);
            }
          }}
          open={open}
        />{" "}
      </GridItem>
    </ExpandableWrapper>
  );
};

const ExpandableText = styled(Text)`
  font-size: 1.2rem;
  font-weight: 500;
  color: #04020f;

  @media screen and (max-width: 1024px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 512px) {
    font-size: 0.7rem;
  }
`;
const DownArrow = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
  ${(props) => props.open && `transform: rotate(180deg) ; `};
  transition: transform 500ms linear;

  @media screen and (max-width: 512px) {
    width: 10px;
    height: 10px;
  }
`;

const ExpandableWrapper = styled(Grid)`
  padding: 2px;
  max-height: ${(props) => (props.open ? "1000px" : "28px")};
  overflow: hidden;
  align-items: ${(props) => (props.open ? "flex-end" : "flex-start")};
  /* &:hover {
    background-color: rgba(22, 101, 124, 0.1);
  } */
  transition: all 500ms ease-in-out;
  @media screen and (max-width: 768px) {
    max-height: ${(props) => (props.open ? "1000px" : "20px")};
  }
  @media screen and (max-width: 512px) {
    max-height: ${(props) => (props.open ? "1000px" : "18px")};
  }
`;
