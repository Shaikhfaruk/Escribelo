import React from "react";
import Footer from "../../components/Footer";
import SliderTemplate from "../../views/slider-component";
import HeroPartnersPage from "./sections/Hero";
import PartnerSectionOne from "./sections/section-1";
import PartnerSectionTwo from "./sections/section-2";
import PartnersSectionThree from "./sections/section-3";
import Expandable from "./../../views/expandable";

import VideoPartners from "./sections/Video";
import PartnerSectionFour from "./sections/section-4";

const PartnersPage = ({match}) => {
  return (
    <>
      <HeroPartnersPage match={match}/>
      <VideoPartners />
      <PartnerSectionOne />
      <PartnerSectionTwo />
      <PartnersSectionThree />
      <Expandable />
      <PartnerSectionFour />
      <Footer />
    </>
  );
};

export default PartnersPage;
