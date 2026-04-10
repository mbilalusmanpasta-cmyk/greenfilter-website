import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import ACElement1 from "./ACElement1";
import Footer from "../../components/Footer";
import StructuredData from "../../components/StructuredData";
import { airCleanerSEO } from "../../utils/seoData";

const AirCleaner = (props) => {
  return (
    <>
      <Helmet>
        <title>{airCleanerSEO.title}</title>
        <meta name="description" content={airCleanerSEO.description} />
        <meta name="keywords" content={airCleanerSEO.keywords} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://greenfilter.com/air-cleaner" />
        <meta property="og:title" content={airCleanerSEO.title} />
        <meta property="og:description" content={airCleanerSEO.description} />
        <meta property="og:image" content={airCleanerSEO.ogImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://greenfilter.com/air-cleaner" />
        <meta name="twitter:title" content={airCleanerSEO.title} />
        <meta name="twitter:description" content={airCleanerSEO.description} />
        <meta name="twitter:image" content={airCleanerSEO.ogImage} />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://greenfilter.com/air-cleaner" />
      </Helmet>

      {airCleanerSEO.structuredData && (
        <StructuredData data={airCleanerSEO.structuredData} />
      )}

      <Header
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />
      <div className="container-0">
        <ACElement1 />
      </div>
      <Footer />
    </>
  );
};

export default AirCleaner;
