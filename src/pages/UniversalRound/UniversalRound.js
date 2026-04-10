import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import URElement1 from "./URElement1";
import Footer from "../../components/Footer";
import StructuredData from "../../components/StructuredData";
import { universalRoundSEO } from "../../utils/seoData";

const UniversalRound = (props) => {
  return (
    <>
      <Helmet>
        <title>{universalRoundSEO.title}</title>
        <meta name="description" content={universalRoundSEO.description} />
        <meta name="keywords" content={universalRoundSEO.keywords} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://greenfilter.com/universal-round" />
        <meta property="og:title" content={universalRoundSEO.title} />
        <meta property="og:description" content={universalRoundSEO.description} />
        <meta property="og:image" content={universalRoundSEO.ogImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://greenfilter.com/universal-round" />
        <meta name="twitter:title" content={universalRoundSEO.title} />
        <meta name="twitter:description" content={universalRoundSEO.description} />
        <meta name="twitter:image" content={universalRoundSEO.ogImage} />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://greenfilter.com/universal-round" />
      </Helmet>

      {universalRoundSEO.structuredData && (
        <StructuredData data={universalRoundSEO.structuredData} />
      )}

      <Header
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />
      <div className="container-0">
        <URElement1 />
      </div>
      <Footer />
    </>
  );
};

export default UniversalRound;
