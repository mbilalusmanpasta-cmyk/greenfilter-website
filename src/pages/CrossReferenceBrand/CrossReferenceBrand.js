import React from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CFBElement1 from "./CFBElement1";
import StructuredData from "../../components/StructuredData";
import { crossReferenceSEO } from "../../utils/seoData";

const CrossReferenceBrand = (props) => {
  return (
    <>
      <Helmet>
        <title>{crossReferenceSEO.title}</title>
        <meta name="description" content={crossReferenceSEO.description} />
        <meta name="keywords" content={crossReferenceSEO.keywords} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://greenfilter.com/cross-reference-brand" />
        <meta property="og:title" content={crossReferenceSEO.title} />
        <meta property="og:description" content={crossReferenceSEO.description} />
        <meta property="og:image" content={crossReferenceSEO.ogImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://greenfilter.com/cross-reference-brand" />
        <meta name="twitter:title" content={crossReferenceSEO.title} />
        <meta name="twitter:description" content={crossReferenceSEO.description} />
        <meta name="twitter:image" content={crossReferenceSEO.ogImage} />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://greenfilter.com/cross-reference-brand" />
      </Helmet>

      {crossReferenceSEO.structuredData && (
        <StructuredData data={crossReferenceSEO.structuredData} />
      )}

      <Header
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />
      <div className="container-0">
        <CFBElement1 />
      </div>
      <Footer />
    </>
  );
};

export default CrossReferenceBrand;
