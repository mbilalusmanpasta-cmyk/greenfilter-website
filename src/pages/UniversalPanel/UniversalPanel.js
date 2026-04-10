import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import UPElement1 from "./UPElement1";
import Footer from "../../components/Footer";
import StructuredData from "../../components/StructuredData";
import { universalPanelSEO } from "../../utils/seoData";

const UniversalPanel = (props) => {
  return (
    <>
      <Helmet>
        <title>{universalPanelSEO.title}</title>
        <meta name="description" content={universalPanelSEO.description} />
        <meta name="keywords" content={universalPanelSEO.keywords} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://greenfilter.com/universal-panel" />
        <meta property="og:title" content={universalPanelSEO.title} />
        <meta property="og:description" content={universalPanelSEO.description} />
        <meta property="og:image" content={universalPanelSEO.ogImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://greenfilter.com/universal-panel" />
        <meta name="twitter:title" content={universalPanelSEO.title} />
        <meta name="twitter:description" content={universalPanelSEO.description} />
        <meta name="twitter:image" content={universalPanelSEO.ogImage} />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://greenfilter.com/universal-panel" />
      </Helmet>

      {universalPanelSEO.structuredData && (
        <StructuredData data={universalPanelSEO.structuredData} />
      )}

      <Header
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />
      <div className="container-0">
        <UPElement1 />
      </div>
      <Footer />
    </>
  );
};

export default UniversalPanel;
