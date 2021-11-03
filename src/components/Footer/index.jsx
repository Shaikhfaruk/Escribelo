import React from "react";
import styled from "styled-components";
import FooterDesktop from "./footer-desktop";
import FooterMobile from "./footer-mobile";
const Footer = () => {
  return (
    <>
      <FooterMobileWrapper>
        <FooterMobile />
      </FooterMobileWrapper>
      <FooterDesktopWrapper>
        <FooterDesktop />
      </FooterDesktopWrapper>
    </>
  );
};

export default Footer;


const FooterMobileWrapper = styled.div`
  width : 100%;
  display: none;
  @media screen and (max-width : 768px){
    display: flex;
  }
`

const FooterDesktopWrapper = styled.div`
  width: 100%;
  display: flex;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

