import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HFElement1 from "./HFElement1";
import StructuredData from "../../components/StructuredData";
import { enhancedHarleyFilterSEO } from "../../utils/seoData";

const HarleyFilter = (props) => {
  return (
    <>
      <Helmet>
        <title>{enhancedHarleyFilterSEO.title}</title>
        <meta name="description" content={enhancedHarleyFilterSEO.description} />
        <meta name="keywords" content={enhancedHarleyFilterSEO.keywords} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://greenfilter.com/harley-filter" />
        <meta property="og:title" content={enhancedHarleyFilterSEO.title} />
        <meta property="og:description" content={enhancedHarleyFilterSEO.description} />
        <meta property="og:image" content={enhancedHarleyFilterSEO.ogImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://greenfilter.com/harley-filter" />
        <meta name="twitter:title" content={enhancedHarleyFilterSEO.title} />
        <meta name="twitter:description" content={enhancedHarleyFilterSEO.description} />
        <meta name="twitter:image" content={enhancedHarleyFilterSEO.ogImage} />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://greenfilter.com/harley-filter" />
      </Helmet>

      {enhancedHarleyFilterSEO.structuredData && (
        <StructuredData data={enhancedHarleyFilterSEO.structuredData} />
      )}

      <Header
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />
      <div className="container-0">
        <HFElement1 />
      </div>
      <Footer />
    </>
  );
};

export default HarleyFilter;
