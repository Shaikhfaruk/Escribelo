import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/header'
import SliderTemplate from '../../views/slider-component'
import HeroHomePage from './sections/Hero'
import HomeSectionOne from './sections/section-1'
import HomeSectionTwo from './sections/section-2'
import VideoHome from './sections/Video'

const HomePage = ({match}) => {
    return (
      <>
        <HeroHomePage match={match}/>
        <VideoHome />
        <HomeSectionOne />
        <HomeSectionTwo />
        <SliderTemplate />

        <Footer />
      </>
    );
}

export default HomePage
