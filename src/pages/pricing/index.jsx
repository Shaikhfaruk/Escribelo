import React from "react";
import Footer from "../../components/Footer";
import HeroPricingPage from "./sections/Hero";
import PriceCard from "./sections/price-card";
import PricingSectionOne from "./sections/section-1";
import PricingSectionTwo from "./sections/section-2";
import CustomGrid from "../../views/custom-grid";
import SliderTemplate from "../../views/slider-component";


const PricingPage = ({match}) => {
  return (
    <>
      <HeroPricingPage match={match}/>
      <PriceCard />
      <PricingSectionOne />
      <PricingSectionTwo />
      <CustomGrid />
      <SliderTemplate />
      <Footer />
    </>
  );
};

export default PricingPage;
