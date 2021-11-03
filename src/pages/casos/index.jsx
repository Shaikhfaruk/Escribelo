import React from "react";
import Footer from "../../components/Footer";

import SliderTemplate from "../../views/slider-component";
import CardSectionCasos from "./sections/cards";
import CasosHomePage from "./sections/Hero";

const CasosPage = ({match}) => {
  return (
    <>
      <CasosHomePage match={match}/>
      <CardSectionCasos />
      <Footer />
    </>
  );
};

export default CasosPage;
