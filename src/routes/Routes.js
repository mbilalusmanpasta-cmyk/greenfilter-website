import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import ShopByVehicle from "../pages/ShopByVehicle/ShopByVehicle";
import Vehicles from "../pages/Vehicles/Vehicles";
import MeasureFilter from "../pages/MeasureFilter/MeasureFilter";
import CleanerCare from "../pages/CleanerCare/CleanerCare";
import UniversalCylinder from "../pages/UniversalCylinder/UniversalCylinder";
import UniversalRound from "../pages/UniversalRound/UniversalRound";
import AirCleaner from "../pages/AirCleaner/AirCleaner";
import AboutUs from "../pages/AboutUs/AboutUs";
import Guarantee from "../pages/Guarantee/Guarantee";
import WhyGoGreen from "../pages/WhyGoGreen/WhyGoGreen";
import Contact from "../pages/ContactUs/Contact";
import Career from "../pages/Careers/Career";
import PrivateLabel from "../pages/PrivateLabel/PrivateLabel";
import HarleyFilter from "../pages/HarleyFilter/HarleyFilter";
import CrossReferenceBrand from "../pages/CrossReferenceBrand/CrossReferenceBrand";
import CrossReferenceFilter from "../pages/CrossReferenceFilter/CrossReferenceFilter";
import FAQs from "../pages/FAQs/FAQs";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions/TermsAndConditions";
import Clearance from "../pages/Clearance/Clearance.jsx";

import UniversalPanel from "../pages/UniversalPanel/UniversalPanel";
import Product from "../pages/Product";
import Home from "../pages/Home/Home.jsx";
import { getGlobalData } from "../helper/util/getGlobalData";

import './routes.css';
import NotFound from "../pages/NotFound/index.jsx";
import Sitemap from "../pages/Sitemap/Sitemap.jsx";
import ShippingBanner from "../components/ShippingBanner.jsx";

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
    </>
  );
};

export default Routes;
