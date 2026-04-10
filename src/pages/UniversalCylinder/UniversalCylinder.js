import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import UCElement1 from "./UCElement1";
import Footer from "../../components/Footer";
import StructuredData from "../../components/StructuredData";
import { universalCylinderSEO } from "../../utils/seoData";

const UniversalCylinder = (props) => {
  return (
    <>
      <Helmet>
        <title>{universalCylinderSEO.title}</title>
        <meta name="description" content={universalCylinderSEO.description} />
        <meta name="keywords" content={universalCylinderSEO.keywords} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://greenfilter.com/universal-cylinder" />
        <meta property="og:title" content={universalCylinderSEO.title} />
        <meta property="og:description" content={universalCylinderSEO.description} />
        <meta property="og:image" content={universalCylinderSEO.ogImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://greenfilter.com/universal-cylinder" />
        <meta name="twitter:title" content={universalCylinderSEO.title} />
        <meta name="twitter:description" content={universalCylinderSEO.description} />
        <meta name="twitter:image" content={universalCylinderSEO.ogImage} />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://greenfilter.com/universal-cylinder" />
      </Helmet>

      {universalCylinderSEO.structuredData && (
        <StructuredData data={universalCylinderSEO.structuredData} />
      )}

      <Header
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />
      <div className="container-0">
        <UCElement1 />
      </div>
      <Footer />
    </>
  );
};

export default UniversalCylinder;
