import React from "react";
import styled from "styled-components";
import { Box, Grid, GridItem } from "../../../styled-component/container";
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

const FooterMobile = () => {
  return (
    <>
      <FooterWrapper>
        <Box mt={"30px"}>
          <Grid jCenter column aCenter>
            <GridItem>
              <Grid jSpaceAround aCenter gap={40}>
                <GridItem
                  onClick={() => {
                    window.location.href = "/";
                  }}>
                  <LogoImage src={Logo} alt={""} />
                </GridItem>

                <GridItem>
                  <Grid gap={10}>
                    <GridItem>
                      <SocialIconWrapper
                        style={{ height: "40px", width: "40px" }}>
                        <SocialIcon>
                          <YoutubeIcon />
                        </SocialIcon>
                      </SocialIconWrapper>
                    </GridItem>

                    <GridItem>
                      <SocialIconWrapper>
                        <SocialIcon>
                          <InstaIcon />
                        </SocialIcon>
                      </SocialIconWrapper>
                    </GridItem>

                    <GridItem>
                      <SocialIconWrapper>
                        <SocialIcon>
                          <TwitterIcon />
                        </SocialIcon>
                      </SocialIconWrapper>
                    </GridItem>

                    <GridItem>
                      <SocialIconWrapper>
                        <SocialIcon>
                          <FacebookIcon />
                        </SocialIcon>
                      </SocialIconWrapper>
                    </GridItem>

                    <GridItem>
                      <SocialIconWrapper>
                        <SocialIcon>
                          <RedditIcon />
                        </SocialIcon>
                      </SocialIconWrapper>
                    </GridItem>

                    <GridItem>
                      <SocialIconWrapper>
                        <SocialIcon>
                          <MailIcon />
                        </SocialIcon>
                      </SocialIconWrapper>
                    </GridItem>
                  </Grid>
                </GridItem>
              </Grid>
            </GridItem>

            <Box mt={"30px"}>
              <GridItem>
                <Grid column gap={30}>
                  <GridItem lg={12}>
                    <Grid gap={40} jSpaceAround>
                      <GridItem lg={6}>
                        <Grid column>
                          <GridItem>
                            <FooterHeading
                              family={"Inter"}
                              wt={700}
                              variant={7}
                              color={"white"}>
                              Producto
                            </FooterHeading>
                          </GridItem>
                          <GridItem>
                            <FooterLink variant={8}>Precio</FooterLink>
                          </GridItem>
                          <GridItem>
                            <FooterLink variant={8}>
                              Acceso a usuarios
                            </FooterLink>
                          </GridItem>
                          <GridItem>
                            <FooterLink variant={8}>
                              Acceso a partners
                            </FooterLink>
                          </GridItem>
                        </Grid>
                      </GridItem>
                      <GridItem lg={6}>
                        <Grid column>
                          <GridItem>
                            <FooterHeading
                              family={"Inter"}
                              wt={700}
                              variant={7}
                              color={"white"}>
                              Recursos
                            </FooterHeading>
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
                        </Grid>
                      </GridItem>
                    </Grid>
                  </GridItem>

                  <GridItem lg={12}>
                    <Grid gap={40}>
                      <GridItem lg={6}>
                        <Grid column>
                          <GridItem>
                            <FooterHeading
                              family={"Inter"}
                              wt={700}
                              variant={7}
                              color={"white"}>
                              Soporte
                            </FooterHeading>
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
                            <FooterHeading
                              family={"Inter"}
                              wt={700}
                              variant={7}
                              color={"white"}>
                              Compañía
                            </FooterHeading>
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
                            <FooterLink variant={8}>
                              Prensa & Media KIT
                            </FooterLink>
                          </GridItem>
                        </Grid>
                      </GridItem>
                    </Grid>
                  </GridItem>
                </Grid>
              </GridItem>
            </Box>

            <Box mt={"30px"}>
              <GridItem>
                <Grid jCenter aCenter>
                  {/* <GridItem>
                    <LogoImage src={Logo} alt={""} />
                  </GridItem> */}

                  <GridItem>
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
                </Grid>
              </GridItem>
            </Box>

            <CopyRightBox mt={"40px"}>
              <Grid jSpaceAround>
                <GridItem>
                  <Text
                    color={"#FFF"}
                    variant={8}
                    style={{ cursor: "pointer" }}>
                    Copyright © Copyright 2021
                  </Text>
                </GridItem>

                <GridItem>
                  <Grid gap={10}>
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
            </CopyRightBox>
          </Grid>
        </Box>
      </FooterWrapper>
    </>
  );
};

export default FooterMobile;

const FooterWrapper = styled.div`
  background-color: #16657c;
  width: 100%;
  padding: 20px 0px 60px 0px;
  position: relative;
`;

export const FooterLink = styled(Text)`
  text-align: left;
  margin: 2px 0;
  color: white;
  font-weight: 400;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 0.7rem;
  }
`;

export const FooterHeading = styled(Text)`
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 0.8rem;
  }
`;

const LogoImage = styled.img`
  width: 60px;
  height: auto;
  object-fit: contain;
`;

export const ContactWrapper = styled.div`
  background-color: #1e7489;
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 300px;
  gap: 10px;
  h3 {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 400px) {
    width: 250px;
    h3 {
      font-size: 0.7rem;
    }
  }
`;

const CustomInputContainer = styled.div`
  display: flex;
  input {
    width: 180px;
    padding: 5px;
    height: 40px;
  }
  div {
    width: 40px;
    height: 40px;
    padding: 5px;
    background-color: #00657c;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      color: white;
      width: 20px;
      height: 20px;
    }
  }

  @media screen and (max-width: 400px) {
    input {
      width: 150px;
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
  &:hover {
    svg {
      path {
        fill: #19b6f0;
      }
    }
  }
`;

const CopyRightBox = styled(Box)`
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top: 0.1px solid rgba(255, 255, 255, 0.8);
  padding: 5px 0px;
`;
