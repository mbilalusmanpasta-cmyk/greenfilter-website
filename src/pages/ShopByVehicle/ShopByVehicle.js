import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import ShopElement1 from "./ShopElement1";
import Footer from "../../components/Footer";
import Gallery from "../Home/Gallery";
import PerfectFilter from "../Home/PerfectFilter";
import styled from "styled-components";
import { galleryImages } from "../../data/galleryImages";
import StructuredData from "../../components/StructuredData";
import { enhancedShopByVehicleSEO } from "../../utils/seoData";

const ShopByVehicle = (props) => {
  const gallery = galleryImages;
  return (
    <>
      <Helmet>
        <title>{enhancedShopByVehicleSEO.title}</title>
        <meta name="description" content={enhancedShopByVehicleSEO.description} />
        <meta name="keywords" content={enhancedShopByVehicleSEO.keywords} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://greenfilter.com/shop-by-vehicle" />
        <meta property="og:title" content={enhancedShopByVehicleSEO.title} />
        <meta property="og:description" content={enhancedShopByVehicleSEO.description} />
        <meta property="og:image" content={enhancedShopByVehicleSEO.ogImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://greenfilter.com/shop-by-vehicle" />
        <meta name="twitter:title" content={enhancedShopByVehicleSEO.title} />
        <meta name="twitter:description" content={enhancedShopByVehicleSEO.description} />
        <meta name="twitter:image" content={enhancedShopByVehicleSEO.ogImage} />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://greenfilter.com/shop-by-vehicle" />
      </Helmet>

      {enhancedShopByVehicleSEO.structuredData && (
        <StructuredData data={enhancedShopByVehicleSEO.structuredData} />
      )}

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
