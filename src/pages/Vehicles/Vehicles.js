import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "./Hero";
import VehicleElement1 from "./VehicleElement1";
import Gallery from "../Home/Gallery";
import VehicleElement2 from "./VehicleElement2";
import VehicleElement3 from "./VehicleElement3";
import VehicleElement4 from "./VehicleElement4";
import { brandDetails } from "../../data/cars";
import VehicleElement5 from "./VehicleElement5";
import HomeElement5 from "../Home/HomeElement5.jsx";
import VehicleElement12 from "./VehicleElement12";
import { collection, query, where, getDocs, startAt, endAt, collectionGroup, getDoc } from "firebase/firestore";
import { db } from '../../helper/firebase';
import capitalizeFirstLetter from "../../util/capitalizeFirstLetter";
import { GetData } from "../../helper/request";
import { statics } from "../../data/store";
import CircleLoader from "react-spinners/CircleLoader";
import StructuredData from "../../components/StructuredData";
import {
  mustangSEO,
  corvetteSEO,
  toyotaSEO,
  hondaSEO,
  bmwSEO,
  subaruSEO,
  jeepSEO,
  chevroletSEO,
  dodgeSEO,
  fordSEO,
  nissanSEO,
  mazdaSEO,
  volkswagenSEO,
  audiSEO,
  mercedesSEO,
  ramSEO,
  gmcSEO,
  cadillacSEO
} from "../../utils/seoData";

const Vehicles = (props) => {

  const [make, setMake] = React.useState('')
  const [cleaningKit, setCleaningKit] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  useEffect(() => {

    const url = window.location.pathname;
    const brand = url.split('/')[2];
    getMake(brand);
    getCleaningKit();
  }, [])


  const getMake = async (brand) => {
    setLoading(true)

    let makeT = {};
    let response = await GetData(statics.BaseUrl + `/make?slug=${brand}`)
    if (response.ResponseCode === "Success") {
      makeT = response?.data;
    }
    setMake(makeT);
    setLoading(false)

  }

  const getCleaningKit = async () => {
    const cleaningKitGFU = 2000;
    let cleaningKitT = {};
    let response = await GetData(statics.BaseUrl + `/product?gfu_part_num=${cleaningKitGFU}`)
    if (response.ResponseCode === "Success") {
      cleaningKitT = response?.data?.rows?.[0];
    }
    setCleaningKit(cleaningKitT);
  }


  // Map brand slugs to SEO data from centralized seoData.js
  const getBrandSEO = (brandSlug) => {
    const seoMap = {
      'mustang': mustangSEO,
      'corvette': corvetteSEO,
      'toyota': toyotaSEO,
      'honda': hondaSEO,
      'bmw': bmwSEO,
      'subaru': subaruSEO,
      'jeep': jeepSEO,
      'chevrolet': chevroletSEO,
      'chevy': chevroletSEO,
      'dodge': dodgeSEO,
      'ford': fordSEO,
      'nissan': nissanSEO,
      'mazda': mazdaSEO,
      'volkswagen': volkswagenSEO,
      'vw': volkswagenSEO,
      'audi': audiSEO,
      'mercedes': mercedesSEO,
      'mercedes-benz': mercedesSEO,
      'ram': ramSEO,
      'gmc': gmcSEO,
      'cadillac': cadillacSEO,
    };

    // Return mapped SEO or fallback
    if (seoMap[brandSlug?.toLowerCase()]) {
      return seoMap[brandSlug.toLowerCase()];
    }

    // Fallback for brands not in seoData.js
    return {
      title: `${make?.title || capitalizeFirstLetter(brandSlug) || ""} Air Filters | High Performance Engine Filters | Green Filter`,
      description: make?.hero_text || `Premium washable air filters for ${capitalizeFirstLetter(brandSlug) || "your vehicle"}. Increase horsepower and improve performance. Reusable, lifetime warranty. Made in USA.`,
      keywords: `${brandSlug} air filter, ${brandSlug} performance filter, ${brandSlug} engine filter, washable air filter, reusable filter`,
      ogImage: null,
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: `${capitalizeFirstLetter(brandSlug)} Performance Air Filter`,
        brand: {
          '@type': 'Brand',
          name: 'Green Filter',
        },
        description: `High-performance washable air filters for ${capitalizeFirstLetter(brandSlug)} vehicles`,
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '850',
        },
      },
    };
  };

  const url = window.location.pathname;
  const brandSlug = url.split('/')[2];
  const seo = getBrandSEO(brandSlug)
  const canonicalUrlClean = window.location.href.split(/[/]]/)[0]; // removes ?utm= or #hash
  const canonicalUrlArr = canonicalUrlClean.split("/"); // removes ?utm= or #hash

  const canonicalUrlLastObj = canonicalUrlArr[canonicalUrlArr.length - 1]; // removes ?utm= or #hash

  return (
    <>



      {
        loading &&
        <React.Fragment>
          <div style={{ top: "0px", left: "0px", position: "fixed", width: "100vw", height: "100vh", backgroundColor: "rgb(64 57 57 / 20%)", backdropFilter: "blur(3px)", zIndex: 9999 }}> </div>
          <div style={{
            display: "block",
            margin: "0 auto",
            borderColor: "red",
            zIndex: "9999",
            position: "absolute",
            top: "calc(50vh - 75px)",
            left: "calc(50% - 75px)"
          }}>
            <CircleLoader color={"white"} loading={true} size={150} id="custom-loader-el" />
          </div>
        </React.Fragment>
      }


      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://greenfilter.com/brand/${canonicalUrlLastObj}`} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        {seo.ogImage && <meta property="og:image" content={seo.ogImage} />}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`https://greenfilter.com/brand/${canonicalUrlLastObj}`} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        {seo.ogImage && <meta name="twitter:image" content={seo.ogImage} />}

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://greenfilter.com/brand/${canonicalUrlLastObj}`} />
      </Helmet>

      {seo.structuredData && <StructuredData data={seo.structuredData} />}

      <Header
        isVehicle={true}
        make={make}
        models={make?.models}
        clickedIndex={props.clickedIndex}
        handleClickIndex={props.handleClickIndex}
      />

      <div className="container-0">
        <Hero categories={make?.models} make={make} />
        <VehicleElement12 vehicle={make} />
        {/* <VehicleElement1 /> */}
        <Gallery gallery={make?.images} />
        {/* <VehicleElement2 vehicle={vehicle} /> */}
        <VehicleElement4 models={make?.models} make={make} cleaningKit={cleaningKit} />
        <VehicleElement5 />
        <HomeElement5 />
      </div>
      <Footer />
    </>
  );
};

export default Vehicles;
