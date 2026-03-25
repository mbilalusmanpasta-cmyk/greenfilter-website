import React, { useEffect } from "react";
import Header from "../../components/Header";
import Gallery from "./Gallery";
import HeroWireframe from "./HeroWireframe";
import PerfectFilter from "./PerfectFilter";
import VideoSection from "./VideoSection";
import ConfidencePanel from "./ConfidencePanel";
import ChosenByBest from "./ChosenByBest";
import HomeElement1 from "./HomeElement1";
import HomeElement3 from "./HomeElement3";
import HomeElement4 from "./HomeElement4";
import HomeElement5 from "./HomeElement5";
import HomeElement6 from "./HomeElement6";
import HomeElement7 from "./HomeElement7";
import Footer from "../../components/Footer";
import styled from "styled-components";
import HomeElement2 from "./HomeElement2";
import { Helmet } from "react-helmet";
import { galleryImages } from "../../data/galleryImages";
import img0 from "../../assets/gallery/img0.jpeg";

const Home = (props) => {

  const gallery = galleryImages;
  
 


  useEffect(() => {
    props.handleClickIndex(-1);
  }, [props]);

  return (
    <HomeWrapper>

      <Helmet>
        <title>{"Green Filter - High Performance Air Filters"} </title>
        <meta name="description" content={"Green Filter outperforms the competition, discover why we've secretly been the favorite air filter to some of the world's biggest racing brands and enthusiasts."} />
        <meta property="og:title" content={"Green Filter - High Performance Air Filters"} />
        <meta property="og:description" content={"Green Filter outperforms the competition, discover why we've secretly been the favorite air filter to some of the world's biggest racing brands and enthusiasts."} />
        <meta property="og:image" content={img0} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://greenfilter.com/" />
      </Helmet>
      
      <div className="container-0">
        <div className="home-edge-to-edge">
          <Header
            clickedIndex={props.clickedIndex}
            handleClickIndex={props.handleClickIndex}
          />
          <HeroWireframe />
        </div>

        <FilterSection id="filter-results">
          <PerfectFilter />
        </FilterSection>

        <HomeElement7 />

        <ChosenByBest />
        <ConfidencePanel />

        <HomeElement1 handleClickIndex={props.handleClickIndex} />
        <VideoSection />
        <HomeElement2 />
        <HomeElement3 />
        <HomeElement4 text="It's not just about immediate gains, but the  long term ones as well." />
        <HomeElement5 />
        <HomeElement6 />
        <Gallery gallery={gallery} />
      </div>
      <Footer />
    </HomeWrapper>
  );
};

export default Home;


const HomeWrapper = styled.div`
  background-color: #fafafa;
`;

const FilterSection = styled.section`
  padding: 0 24px 48px;
  max-width: 960px;
  margin: -120px auto 0;
  position: relative;
  z-index: 4;
  @media (max-width: 767px) {
    padding: 0 16px 32px;
    margin-top: -92px;
  }
`;
