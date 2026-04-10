import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CRFElement1 from "./CRFElement1";
import StructuredData from "../../components/StructuredData";
import { crossReferenceSEO } from "../../utils/seoData";

const CrossReferenceFilter = (props) => {
  return (
    <>
      <Helmet>
        <title>{crossReferenceSEO.title}</title>
        <meta name="description" content={crossReferenceSEO.description} />
        <meta name="keywords" content={crossReferenceSEO.keywords} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://greenfilter.com/cross-reference-filters" />
        <meta property="og:title" content={crossReferenceSEO.title} />
        <meta property="og:description" content={crossReferenceSEO.description} />
        <meta property="og:image" content={crossReferenceSEO.ogImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://greenfilter.com/cross-reference-filters" />
        <meta name="twitter:title" content={crossReferenceSEO.title} />
        <meta name="twitter:description" content={crossReferenceSEO.description} />
        <meta name="twitter:image" content={crossReferenceSEO.ogImage} />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://greenfilter.com/cross-reference-filters" />
      </Helmet>

      {crossReferenceSEO.structuredData && (
        <StructuredData data={crossReferenceSEO.structuredData} />
      )}

      <Header
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />
      <div className="container-0">
        <CRFElement1 />
      </div>
      <Footer />
    </>
  );
};

export default CrossReferenceFilter;
