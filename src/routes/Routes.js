import React, { useEffect, useState, Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { getGlobalData } from "../helper/util/getGlobalData";
import CircleLoader from "react-spinners/CircleLoader";

import './routes.css';

// Eager load critical pages (Home, Product)
import Home from "../pages/Home/Home.jsx";
import Product from "../pages/Product";
import ShippingBanner from "../components/ShippingBanner.jsx";

// Lazy load all other pages for code splitting
const ShopByVehicle = lazy(() => import("../pages/ShopByVehicle/ShopByVehicle"));
const Vehicles = lazy(() => import("../pages/Vehicles/Vehicles"));
const MeasureFilter = lazy(() => import("../pages/MeasureFilter/MeasureFilter"));
const CleanerCare = lazy(() => import("../pages/CleanerCare/CleanerCare"));
const UniversalCylinder = lazy(() => import("../pages/UniversalCylinder/UniversalCylinder"));
const UniversalRound = lazy(() => import("../pages/UniversalRound/UniversalRound"));
const AirCleaner = lazy(() => import("../pages/AirCleaner/AirCleaner"));
const AboutUs = lazy(() => import("../pages/AboutUs/AboutUs"));
const Guarantee = lazy(() => import("../pages/Guarantee/Guarantee"));
const WhyGoGreen = lazy(() => import("../pages/WhyGoGreen/WhyGoGreen"));
const Contact = lazy(() => import("../pages/ContactUs/Contact"));
const Career = lazy(() => import("../pages/Careers/Career"));
const PrivateLabel = lazy(() => import("../pages/PrivateLabel/PrivateLabel"));
const HarleyFilter = lazy(() => import("../pages/HarleyFilter/HarleyFilter"));
const CrossReferenceBrand = lazy(() => import("../pages/CrossReferenceBrand/CrossReferenceBrand"));
const CrossReferenceFilter = lazy(() => import("../pages/CrossReferenceFilter/CrossReferenceFilter"));
const FAQs = lazy(() => import("../pages/FAQs/FAQs"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("../pages/TermsAndConditions/TermsAndConditions"));
const Clearance = lazy(() => import("../pages/Clearance/Clearance.jsx"));
const UniversalPanel = lazy(() => import("../pages/UniversalPanel/UniversalPanel"));
const NotFound = lazy(() => import("../pages/NotFound/index.jsx"));
const Sitemap = lazy(() => import("../pages/Sitemap/Sitemap.jsx"));

// Loading component
const PageLoader = () => (
  <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "60vh",
    width: "100%"
  }}>
    <CircleLoader color={"#00ad23"} loading={true} size={60} />
  </div>
);

const Routes = () => {
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [vehicle, setVehicle] = useState({});
  const [globalData, setGlobalData] = useState({});

  useEffect(() => {
    _loadData();
  }, [])

  const handleClickIndex = (value) => {
    setClickedIndex(value);
  };
  const handleVehicleRoute = (value) => {
    setVehicle(value);
  };

  const _loadData = async () => {
    let res = await getGlobalData();
    console.log('res', res)
    setGlobalData(res);
  }


  const banner = globalData?.fields?.banner || null;
  const bannerAdditionalText = globalData?.fields?.['banner-additional-text'] || null;




  return (
    <>

      {
        banner &&
        <div className="top-banner">
          <div className="top-banner-content">
            <h4 className="title" >{banner}</h4>
            {
              bannerAdditionalText && <p>{bannerAdditionalText}</p>
            }
          </div>
        </div>
      }

      <ShippingBanner />

      <Suspense fallback={<PageLoader />}>
        <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Home
              clickedIndex={clickedIndex}
              handleClickIndex={handleClickIndex}
            />
          )}
        />
        <Route
          exact
          path="/shop-by-vehicle"
          component={() => (
            <ShopByVehicle
              clickedIndex={clickedIndex}
              handleClickIndex={handleClickIndex}
              handleVehicleRoute={handleVehicleRoute}
            />
          )}
        />
        <Route
          exact
          path="/store"
          component={() => (
            <Product
              clickedIndex={clickedIndex}
              handleClickIndex={handleClickIndex}
              handleVehicleRoute={handleVehicleRoute}
            />
          )}
        />

        <Route
          exact
          path="/store/filter/:id"
          component={() => (
            <Product
              clickedIndex={clickedIndex}
              handleClickIndex={handleClickIndex}
              handleVehicleRoute={handleVehicleRoute}
            />
          )}
        />

        <Route
          exact
          path="/brand/:name"
          component={() => (
            <Vehicles
              vehicle={vehicle}
              handleClickIndex={handleClickIndex}
              handleVehicleRoute={handleVehicleRoute}
            />
          )}
        />
        <Route
          exact
          path="/measure-filter"
          component={() => (
            <MeasureFilter
              clickedIndex={clickedIndex}
              handleClickIndex={handleClickIndex}
              handleVehicleRoute={handleVehicleRoute}
            />
          )}
        />
        <Route
          exact
          path="/cleaner-care"
          component={() => (
            <CleanerCare
              clickedIndex={clickedIndex}
              handleClickIndex={handleClickIndex}
              handleVehicleRoute={handleVehicleRoute}
            />
          )}
        />
        <Route
          exact
          path="/universal-cylinder"
          component={() => (
            <UniversalCylinder
              clickedIndex={clickedIndex}
              handleClickIndex={handleClickIndex}
              handleVehicleRoute={handleVehicleRoute}
            />
          )}
        />
        <Route
          exact
          path="/universal-round"
          component={() => (
            <UniversalRound
              clickedIndex={clickedIndex}
              handleClickIndex={handleClickIndex}
              handleVehicleRoute={handleVehicleRoute}
            />
          )}
        />
        <Route
          exact
          path="/air-cleaner"
          component={() => (
            <AirCleaner
              clickedIndex={clickedIndex}
              handleClickIndex={handleClickIndex}
              handleVehicleRoute={handleVehicleRoute}
            />
          )}
        />
        <Route
          exact
          path="/about-us"
          component={() => (
            <AboutUs
              clickedIndex={clickedIndex}
              handleClickIndex={handleClickIndex}
              handleVehicleRoute={handleVehicleRoute}
            />
          )}
        />
        <Route
          exact
          path="/our-guarantee"
          component={() => (
            <Guarantee
              clickedIndex={clickedIndex}
              handleClickIndex={handleClickIndex}
              handleVehicleRoute={handleVehicleRoute}
            />
          )}
        />
        <Route
          exact
          path="/why-go-green"
          component={() => (
            <WhyGoGreen
              clickedIndex={clickedIndex}
              handleClickIndex={handleClickIndex}
              handleVehicleRoute={handleVehicleRoute}
            />
          )}
        />
        <Route
          exact
          path="/contact-us"
          component={() => (
            <Contact
              clickedIndex={clickedIndex}
              handleClickIndex={handleClickIndex}
              handleVehicleRoute={handleVehicleRoute}
            />
          )}
        />
        <Route
          exact
          path="/careers"
          component={() => (
            <Career
              clickedIndex={clickedIndex}
              handleClickIndex={handleClickIndex}
              handleVehicleRoute={handleVehicleRoute}
            />
          )}
        />
        <Route
          exact
          path="/private-label"
          component={() => (
            <PrivateLabel
              clickedIndex={clickedIndex}
              handleClickIndex={handleClickIndex}
              handleVehicleRoute={handleVehicleRoute}
            />
          )}
        />
        <Route
          exact
          path="/harley-filter"
          component={() => (
            <HarleyFilter
              clickedIndex={clickedIndex}
              handleClickIndex={handleClickIndex}
              handleVehicleRoute={handleVehicleRoute}
            />
          )}
        />
        <Route
          exact
          path="/cross-reference-brand"
          component={() => (
            <CrossReferenceBrand
              clickedIndex={clickedIndex}
              handleClickIndex={handleClickIndex}
              handleVehicleRoute={handleVehicleRoute}
            />
          )}
        />
        <Route
          exact
          path="/cross-reference-filters"
          component={() => (
            <CrossReferenceFilter
              clickedIndex={clickedIndex}
              handleClickIndex={handleClickIndex}
              handleVehicleRoute={handleVehicleRoute}
            />
          )}
        />
        <Route
          exact
          path="/faqs"
          component={() => (
            <FAQs
              clickedIndex={clickedIndex}
              handleClickIndex={handleClickIndex}
              handleVehicleRoute={handleVehicleRoute}
            />
          )}
        />
        <Route
          exact
          path="/privacy-policy"
          component={() => (
            <PrivacyPolicy
              clickedIndex={clickedIndex}
              handleClickIndex={handleClickIndex}
              handleVehicleRoute={handleVehicleRoute}
            />
          )}
        />

        <Route
          exact
          path="/terms-of-service"
          component={() => (
            <TermsAndConditions
              clickedIndex={clickedIndex}
              handleClickIndex={handleClickIndex}
              handleVehicleRoute={handleVehicleRoute}
            />
          )}
        />
        <Route
          exact
          path="/universal-panel"
          component={() => (
            <UniversalPanel
              clickedIndex={clickedIndex}
              handleClickIndex={handleClickIndex}
              handleVehicleRoute={handleVehicleRoute}
            />
          )}
        />

        <Route
          exact
          path="/sitemap"
          component={() => (
            <Sitemap
              clickedIndex={clickedIndex}
              handleClickIndex={handleClickIndex}
              handleVehicleRoute={handleVehicleRoute}
            />
          )}
        />

        <Route
          exact
          path="/clearance"
          component={() => (
            <Clearance
              clickedIndex={clickedIndex}
              handleClickIndex={handleClickIndex}
              handleVehicleRoute={handleVehicleRoute}
            />
          )}
        />

        <Route component={NotFound} />

      </Switch>
      </Suspense>
    </>
  );
};

export default Routes;
