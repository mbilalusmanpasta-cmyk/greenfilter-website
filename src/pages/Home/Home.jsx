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
import { Helmet } from "react-helmet-async";
import { galleryImages } from "../../data/galleryImages";
import img0 from "../../assets/gallery/img0.jpeg";
import StructuredData from "../../components/StructuredData";
import { homeSEO } from "../../utils/seoData";

const Home = (props) => {

  const gallery = galleryImages;
  
 


  useEffect(() => {
    props.handleClickIndex(-1);
  }, [props]);

  return (
    <HomeWrapper>

      <Helmet>
        <title>{homeSEO.title}</title>
        <meta name="description" content={homeSEO.description} />
        <meta name="keywords" content={homeSEO.keywords} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://greenfilter.com/" />
        <meta property="og:title" content={homeSEO.title} />
        <meta property="og:description" content={homeSEO.description} />
        <meta property="og:image" content={`https://greenfilter.com${img0}`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://greenfilter.com/" />
        <meta name="twitter:title" content={homeSEO.title} />
        <meta name="twitter:description" content={homeSEO.description} />
        <meta name="twitter:image" content={`https://greenfilter.com${img0}`} />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://greenfilter.com/" />
      </Helmet>

      <StructuredData data={homeSEO.structuredData} />
      
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
