import React from "react";
import styled from "styled-components";
import {
  GridItem,
  Grid,
  Container,
  FillItem,
  Box,
} from "../../../styled-component/container";
import { Text } from "../../../styled-component/typography";
import Logo from "../../../assets/icon.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// social icons
import FacebookIcon from "../Icons/facebook";
import TwitterIcon from "../Icons/twitter";
import InstaIcon from "../Icons/insta";
import MailIcon from "../Icons/mail";
import RedditIcon from "../Icons/reddit";
import YoutubeIcon from "../Icons/youtube";
const FooterDesktop = () => {
  return (
    <>
      <FooterWrapper>
        <FooterMainGrid jCenter style={{ flexWrap: "wrap" }}>
          <GridItem lg={2} md={2}>
            <Grid>
              <LogoImage src={Logo} alt={""} />
            </Grid>
          </GridItem>

          <GridItem lg={6} md={5}>
            <Grid column gap={30}>
              <GridItem lg={12}>
                <Grid>
                  <GridItem lg={6}>
                    <Grid column>
                      <GridItem>
                        <Text
                          family={"Inter"}
                          wt={700}
                          variant={8}
                          color={"white"}>
                          Product
                        </Text>
                      </GridItem>
                      <GridItem>
                        <FooterLink variant={8}>Precio</FooterLink>
                      </GridItem>
                      <GridItem>
                        <FooterLink variant={8}>Acceso a usuarios</FooterLink>
                      </GridItem>
                      <GridItem>
                        <FooterLink variant={8}>Acceso a partners</FooterLink>
                      </GridItem>
                      {/* <GridItem>
                        <FooterLink variant={8}>Boss Mode Features</FooterLink>
                      </GridItem>
                      <GridItem>
                        <FooterLink variant={8}>
                          25+ Languages Pricing
                        </FooterLink>
                      </GridItem> */}
                    </Grid>
                  </GridItem>
                  <GridItem lg={6}>
                    <Grid column>
                      <GridItem>
                        <Text
                          family={"Inter"}
                          wt={700}
                          variant={8}
                          color={"white"}>
                          Recursos
                        </Text>
                      </GridItem>
                      <GridItem>
                        <FooterLink variant={8}>Blog</FooterLink>
                      </GridItem>
                      <GridItem>
                        <FooterLink variant={8}>Soluciones</FooterLink>
                      </GridItem>
                      <GridItem>
                        <FooterLink variant={8}>Reseñas</FooterLink>
                      </GridItem>
                      <GridItem>
                        <FooterLink variant={8}>Tutoriales</FooterLink>
                      </GridItem>
                      {/* <GridItem>
                        <FooterLink variant={8}>
                          25+ Languages Pricing
                        </FooterLink>
                      </GridItem> */}
                    </Grid>
                  </GridItem>
                </Grid>
              </GridItem>

              <GridItem lg={12}>
                <Grid>
                  <GridItem lg={6}>
                    <Grid column>
                      <GridItem>
                        <Text
                          family={"Inter"}
                          wt={700}
                          variant={8}
                          color={"white"}>
                          Soporte
                        </Text>
                      </GridItem>
                      <GridItem>
                        <FooterLink variant={8}>Live chat</FooterLink>
                      </GridItem>
                      <GridItem>
                        <FooterLink variant={8}>
                          Preguntas frecuentes
                        </FooterLink>
                      </GridItem>
                      <GridItem>
                        <FooterLink variant={8}>Centro de ayuda</FooterLink>
                      </GridItem>
                      <GridItem>
                        <FooterLink variant={8}>Reporta un bug</FooterLink>
                      </GridItem>
                      <GridItem>
                        <FooterLink variant={8}>
                          Email: hey@escribelo.ai
                        </FooterLink>
                      </GridItem>
                    </Grid>
                  </GridItem>
                  <GridItem lg={6}>
                    <Grid column>
                      <GridItem>
                        <Text
                          family={"Inter"}
                          wt={700}
                          variant={8}
                          color={"white"}>
                          Compañía
                        </Text>
                      </GridItem>
                      <GridItem>
                        <FooterLink variant={8}>
                          Programa de Afiliados
                        </FooterLink>
                      </GridItem>
                      <GridItem>
                        <FooterLink variant={8}>Sobre nosotros</FooterLink>
                      </GridItem>
                      <GridItem>
                        <FooterLink variant={8}>Prensa & Media KIT</FooterLink>
                      </GridItem>
                      {/* <GridItem>
                        <FooterLink variant={8}>Boss Mode Features</FooterLink>
                      </GridItem>
                      <GridItem>
                        <FooterLink variant={8}>
                          25+ Languages Pricing
                        </FooterLink>
                      </GridItem> */}
                    </Grid>
                  </GridItem>
                </Grid>
              </GridItem>
            </Grid>
          </GridItem>

          <GridItem lg={4} md={4}>
            <ContactWrapper>
              <Text color={"#FFF"} variant={8}>
                Subscribe
              </Text>

              <CustomInputContainer>
                <input placeholder={"Go to facebook group"} />
                <div>
                  <ArrowForwardIcon />
                </div>
              </CustomInputContainer>
              <Text color={"#FFF"} variant={9} style={{ opacity: 0.5 }}>
                {
                  "Hi, I am Escribelo. Your AI writer. Join our facebook group and become a part of our community"
                }
              </Text>
            </ContactWrapper>
          </GridItem>

          <GridItem
            lg={12}
            style={{
              borderTop: "1px solid rgba(255, 255, 255, 0.2)",
              paddingTop: "30px",
              marginTop: "30px",
            }}>
            <Grid aCenter jSpaceBetween>
              <GridItem>
                <Text color={"#FFF"} variant={8} style={{ cursor: "pointer" }}>
                  Copyright © Copyright 2021
                </Text>
              </GridItem>
              <GridItem>
                <Grid gap={20}>
                  <GridItem>
                    <SocialIconWrapper
                      style={{
                        height: "35px",
                        width: "35px",
                        padding: "0.2em",
                      }}>
                      <SocialIcon>
                        <YoutubeIcon />
                      </SocialIcon>
                    </SocialIconWrapper>
                  </GridItem>

                  <GridItem>
                    <SocialIconWrapper
                      style={{
                        height: "35px",
                        width: "35px",
                        padding: "0.2em",
                      }}>
                      <SocialIcon>
                        <InstaIcon />
                      </SocialIcon>
                    </SocialIconWrapper>
                  </GridItem>

                  <GridItem>
                    <SocialIconWrapper
                      style={{
                        height: "35px",
                        width: "35px",
                        padding: "0.2em",
                      }}>
                      <SocialIcon>
                        <TwitterIcon />
                      </SocialIcon>
                    </SocialIconWrapper>
                  </GridItem>

                  <GridItem>
                    <SocialIconWrapper
                      style={{
                        height: "35px",
                        width: "35px",
                        padding: "0.2em",
                      }}>
                      <SocialIcon>
                        <FacebookIcon />
                      </SocialIcon>
                    </SocialIconWrapper>
                  </GridItem>

                  <GridItem>
                    <SocialIconWrapper
                      style={{
                        height: "35px",
                        width: "35px",
                        padding: "0.2em",
                      }}>
                      <SocialIcon>
                        <RedditIcon />
                      </SocialIcon>
                    </SocialIconWrapper>
                  </GridItem>

                  <GridItem>
                    <SocialIconWrapper
                      style={{
                        height: "35px",
                        width: "35px",
                        padding: "0.2em",
                      }}>
                      <SocialIcon>
                        <MailIcon />
                      </SocialIcon>
                    </SocialIconWrapper>
                  </GridItem>
                </Grid>
              </GridItem>
              <GridItem lg={4}>
                <Grid gap={25} jCenter aCenter>
                  <GridItem>
                    <Text
                      color={"#FFF"}
                      variant={8}
                      style={{ cursor: "pointer" }}>
                      Terms
                    </Text>
                  </GridItem>
                  <GridItem>
                    <Text
                      color={"#FFF"}
                      variant={8}
                      style={{ cursor: "pointer" }}>
                      Privacy
                    </Text>
                  </GridItem>
                </Grid>
              </GridItem>
            </Grid>
          </GridItem>
        </FooterMainGrid>
      </FooterWrapper>
    </>
  );
};

export default FooterDesktop;

const FooterWrapper = styled.div`
  background-color: #16657c;
  width: 100%;
  padding: 20px 0px;
`;

const FooterMainGrid = styled(Grid)`
  width: 80%;
  margin: 40px auto;
  padding-bottom: 30px;
  /* border-bottom: 1px solid rgba(255, 255, 255, 0.2); */
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const LogoImage = styled.img`
  width: 80px;
  height: auto;
  object-fit: contain;
`;

export const FooterLink = styled(Text)`
  text-align: left;
  margin: 2px 0;
  color: white;
  font-weight: 400;
  cursor: pointer;
  font-size: 1rem;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const ContactWrapper = styled.div`
  background-color: #1e7489;
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 350px;
  gap: 10px;
  h3 {
    font-size: 1.1rem;
  }
`;

const CustomInputContainer = styled.div`
  display: flex;

  input {
    width: 200px;
    padding: 5px;
    height: 50px;
    font-size: 1rem;
  }
  div {
    width: 40px;
    height: 50px;
    padding: 5px;
    background-color: #00657c;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      color: white;
      width: 20px;
      height: 20px;
      right: 0;
    }
    &:hover {
      svg {
        position: relative;
        right: -7px;
        transition: right 500ms linear;
      }
    }
  }
`;

const SocialIconWrapper = styled.div`
  width: 25px;
  height: 25px;
  border: 1px solid white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

const SocialIcon = styled.div`
  width: 15px;
  height: 15px;
  margin: 2px 0px 5px -1px;
  &:hover {
    svg {
      path {
        fill: #19b6f0;
      }
    }
  }
`;
