import React from "react";
import Header from "../../components/Header";
import ShopElement1 from "./ShopElement1";
import Footer from "../../components/Footer";
import Gallery from "../Home/Gallery";
import { Helmet } from "react-helmet-async";
import PerfectFilter from "../Home/PerfectFilter";
import styled from "styled-components";
import { galleryImages } from "../../data/galleryImages";
import img0 from "../../assets/gallery/img0.jpeg";

const ShopByVehicle = (props) => {
  const gallery = galleryImages;
  return (
    <>
      <Helmet>
        <title>Engine Air Filters - Shop Popular Brands</title>
        <meta name="description" content="Upgrade your engine's performance with Green Filter! Browse our selection of engine air filters for popular trucks, sports cars, and luxury vehicles." />
        <meta property="og:title" content="Engine Air Filters - Shop Popular Brands" />
        <meta property="og:description" content="Upgrade your engine's performance with Green Filter! Browse our selection of engine air filters for popular trucks, sports cars, and luxury vehicles." />
        <meta property="og:image" content={img0} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://greenfilter.com/shop-by-vehicle`} />

      </Helmet>


      <Header
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />

      <FilterSection>
        <PerfectFilter />
      </FilterSection>

      <div className="container-0">
        <ShopElement1 handleVehicleRoute={props.handleVehicleRoute} />
        <Gallery gallery={gallery} />
      </div>
      <Footer />
    </>
  );
};

export default ShopByVehicle;

const FilterSection = styled.section`
  padding: 24px 24px 0;
  max-width: 960px;
  margin: 140px auto -24px;
  position: relative;
  z-index: 4;
  @media (max-width: 767px) {
    padding: 16px 16px 0;
    margin-top: 120px;
    margin-bottom: -16px;
  }
`;
