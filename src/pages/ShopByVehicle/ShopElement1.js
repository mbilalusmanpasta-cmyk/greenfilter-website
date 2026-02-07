import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { brandDetails } from "../../data/cars";
import getMultipleCollections from "../../data/getMultipleCollections";
import { getMakeCollection, statics } from "../../data/store";
import { getMakesFromCollection } from "../../data/firebaseHelper";
import { GetData } from "../../helper/request";

import BeatLoader from "react-spinners/BeatLoader";

const ShopElement1 = (props) => {
  const [categories, setCategories] = React.useState([]);
  const [highPerformanceCollection, setHighPerformanceCollection] =
    React.useState([]);
  const [popularPickupTrucksCollection, setPopularPickupTrucksCollection] =
    React.useState([]);
  const [popularBrandsCollection, setPopularBrandsCollection] = React.useState(
    []
  );
  const [insaneSupercarsCollection, setInsaneSupercarsCollection] =
    React.useState([]);

  const [
    highPerformanceCollectionLoading,
    setHighPerformanceCollectionLoading,
  ] = React.useState(false);
  const [
    popularPickupTrucksCollectionLoading,
    setPopularPickupTrucksCollectionLoading,
  ] = React.useState(false);
  const [popularBrandsCollectionLoading, setPopularBrandsCollectionLoading] =
    React.useState(false);
  const [
    insaneSupercarsCollectionLoading,
    setInsaneSupercarsCollectionLoading,
  ] = React.useState(false);

  useEffect(async () => {
    // let collections = await getCategories();
    getMultipleCollectionsMakes();
  }, []);

  const getMultipleCollectionsMakes = (collections) => {
    getHighPerformanceCollection();
    getPopularPickupTrucksCollection();
    getPopularBrandsCollection();
    getInsaneSupercarsCollection();
  };

  const getHighPerformanceCollection = async () => {
    setHighPerformanceCollectionLoading(true);
    const HighPerformanceCollectionId = 1;
    let collectionT = {};
    let response = await GetData(
      statics.BaseUrl + `/collection?id=${HighPerformanceCollectionId}`,
      200,
      null
    );
    if (response.ResponseCode === "Success") {
      collectionT = response?.data?.rows?.[0];
    }
    setHighPerformanceCollection(collectionT);
    setHighPerformanceCollectionLoading(false);
  };

  const getPopularPickupTrucksCollection = async () => {
    setPopularPickupTrucksCollectionLoading(true);
    const PopularPickupTrucksCollectionId = 2;
    let collectionT = {};
    let response = await GetData(
      statics.BaseUrl + `/collection?id=${PopularPickupTrucksCollectionId}`,
      200,
      null
    );
    if (response.ResponseCode === "Success") {
      collectionT = response?.data?.rows?.[0];
    }
    setPopularPickupTrucksCollection(collectionT);
    setPopularPickupTrucksCollectionLoading(false);
  };

  const getPopularBrandsCollection = async () => {
    setPopularBrandsCollectionLoading(true);
    const PopularBrandsCollectionId = 5;
    let collectionT = {};
    let response = await GetData(
      statics.BaseUrl + `/collection?id=${PopularBrandsCollectionId}`,
      200,
      null
    );
    if (response.ResponseCode === "Success") {
      collectionT = response?.data?.rows?.[0];
    }
    setPopularBrandsCollection(collectionT);
    setPopularBrandsCollectionLoading(false);
  };

  const getInsaneSupercarsCollection = async () => {
    setInsaneSupercarsCollectionLoading(true);
    const InsaneSupercarsCollectionId = 4;
    let collectionT = {};
    let response = await GetData(
      statics.BaseUrl + `/collection?id=${InsaneSupercarsCollectionId}`,
      200,
      null
    );
    if (response.ResponseCode === "Success") {
      collectionT = response?.data?.rows?.[0];
    }
    setInsaneSupercarsCollection(collectionT);
    setInsaneSupercarsCollectionLoading(false);
  };

  return (
    <>
      <ShopElement1Wrapper>
        <div className="container-4 w-container">
          {/* <h1 className="heading-11">{"High Performance Cars"}</h1> */}
          {/* <h1 className="heading-11">{"Engine Air Filters by Brand"}</h1> */}


          <div className="static-mfx-div" style={{ marginTop: "0px" }}>
            <h1 className="heading-11">{"Engine Air Filter Replacement"}</h1>

            <h2>
              Engine Air Filter Replacement
            </h2>
            <div className="static-mfx-text-div">
              The engine air filter prevents dust, dirt and other small debris from entering and settling in your
              engine's intake system. Removing contaminants supports efficient fuel combustion and optimal
              engine performance.
            </div>
            <div className="static-mfx-text-div">
              Green Filter is a leading manufacturer of premium-quality filters for a wide range of car makes
              and models. Trusted by industry experts, drivers and enthusiasts, our U.S.A.-made filters are
              reusable and long-lasting.
            </div>

            <h3>
              The Green Filter Guarantee
            </h3>
            <div className="static-mfx-text-div">
              Green Filter products stand out from the rest of our competitors through the many benefits they
              offer, such as:
            </div>

            <div className="static-mfx-text-div">
              <div>
                <b>Efficiency:</b> Our filters effectively trap particles as small as 5 microns, which is the OEM standard
                for engine filtration.
              </div>
              <div>
                <b>Increased air flow:</b> Our filters promote increased air flow for efficient fuel combustion and
                lower emissions.
              </div>
              <div>
                <b>Ease of use:</b> Green Filter products are easy to install, clean and maintain, delivering excellent
                performance even after multiple uses.
              </div>
              <div>
                <b>Increased horsepower and greater torque:</b> Our performance air filter effectively allows more
                air into the engine for better acceleration without overworking the vehicle.
              </div>
              <div>
                <b>Better fuel mileage:</b> A dirt-free engine from a high-performing air filter achieves better fuel
                economy, enabling drivers to use less fuel while maintaining vehicle performance.
              </div>
              <div>
                <b>Improved throttle response:</b> Our high-flow air filter helps make your throttle more responsive
                and acceleration easier.
              </div>
            </div>

          </div>



          <div className="shop-vehicle-row w-row">
            {highPerformanceCollectionLoading ? (
              <div className="loader-wrapper">
                <BeatLoader color={"green"} loading={true} />
              </div>
            ) : (
              highPerformanceCollection?.makes?.map((make) => (
                <div className="shop-vehicle-make w-col w-col-2" key={make.id}>
                  <Link
                    className="link-block"
                    to={`/brand/${make?.slug}`}
                  // onClick={() => {
                  //   props.handleVehicleRoute(make);
                  // }}
                  >
                    <div className="column-div custom-button-temp">
                      {/* <div className="make-image">
                      <img
                        src={make?.images?.[0]?.link}
                        className="product-image"
                        alt="car"
                      />
                    </div> */}
                      <div className="text-block car-carousel">
                        {make?.title}
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="container-4 w-container">
          <h1 className="heading-11">{"Popular Pickup Trucks"}</h1>
          <div className="shop-vehicle-row w-row">
            {popularPickupTrucksCollectionLoading ? (
              <div className="loader-wrapper">
                <BeatLoader color={"green"} loading={true} />
              </div>
            ) : (
              popularPickupTrucksCollection?.makes?.map((make) => (
                <div className="shop-vehicle-make w-col w-col-2" key={make?.id}>
                  <Link
                    className="link-block"
                    to={`/brand/${make?.slug}`}
                  // onClick={() => {
                  //   props.handleVehicleRoute(make);
                  // }}
                  >
                    <div className="column-div custom-button-temp">
                      {/* <div className="make-image">
                        <img
                          src={make.images?.[0]?.link}
                          className="product-image"
                          alt="car"
                        />
                      </div> */}
                      <div className="text-block car-carousel">
                        {make.title}
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="container-4 w-container">
          <h1 className="heading-11">{"Popular Brands"}</h1>
          <div className="shop-vehicle-row w-row">
            {popularBrandsCollectionLoading ? (
              <div className="loader-wrapper">
                <BeatLoader color={"green"} loading={true} />
              </div>
            ) : (
              popularBrandsCollection?.makes?.map((make) => (
                <div className="shop-vehicle-make w-col w-col-2" key={make?.id}>
                  <Link
                    className="link-block"
                    to={`/brand/${make?.slug}`}
                  // onClick={() => {
                  //   props.handleVehicleRoute(make);
                  // }}
                  >
                    <div className="column-div custom-button-temp">
                      {/* <div className="make-image">
                        <img
                          src={make.images?.[0]?.link}
                          className="product-image"
                          alt="car"
                        />
                      </div> */}
                      <div className="text-block car-carousel">
                        {make.title}
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="container-4 w-container">
          <h1></h1>
          <h1 className="heading-11">{"Insane Supercars"}</h1>
          <div className="shop-vehicle-row w-row">
            {insaneSupercarsCollectionLoading ? (
              <div className="loader-wrapper">
                <BeatLoader color={"green"} loading={true} />
              </div>
            ) : (
              insaneSupercarsCollection?.makes?.map((make) => (
                <div className="shop-vehicle-make w-col w-col-2" key={make?.id}>
                  <Link
                    className="link-block"
                    to={`/brand/${make?.slug}`}
                  // onClick={() => {
                  //   props.handleVehicleRoute(make);
                  // }}
                  >
                    <div className="column-div custom-button-temp">
                      {/* <div className="make-image">
                        <img
                          src={make.images?.[0]?.link}
                          className="product-image"
                          alt="car"
                        />
                      </div> */}
                      <div className="text-block car-carousel">
                        {make.title}
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>


        <div className="static-mfx-div" style={{ marginTop: "0px" }}>
          <h3>
            The Green Filter Guarantee
          </h3>
          <div className="static-mfx-text-div">
            Green Filter products stand out from the rest of our competitors through the many benefits they
            offer, such as:
          </div>

          <div className="static-mfx-text-div">
            <div>
              Efficiency: Our filters effectively trap particles as small as 5 microns, which is the OEM standard
              for engine filtration.
            </div>
            <div>
              Increased air flow: Our filters promote increased air flow for efficient fuel combustion and
              lower emissions.
            </div>
            <div>
              Ease of use: Green Filter products are easy to install, clean and maintain, delivering excellent
              performance even after multiple uses.
            </div>
            <div>
              Increased horsepower and greater torque: Our performance air filter effectively allows more
              air into the engine for better acceleration without overworking the vehicle.
            </div>
            <div>
              Better fuel mileage: A dirt-free engine from a high-performing air filter achieves better fuel
              economy, enabling drivers to use less fuel while maintaining vehicle performance.
            </div>
            <div>
              Improved throttle response: Our high-flow air filter helps make your throttle more responsive
              and acceleration easier.
            </div>
          </div>

        </div>


        {/* {categories.map((category) => (
          <div className="container-4 w-container" key={category.id}>
            <h1>
            </h1>
            <h1 className="heading-11">{category.title}</h1>
            <div className="shop-vehicle-row w-row">
              {category?.makes?.map((make) => (
                <div
                  className="shop-vehicle-make w-col w-col-2"
                  key={make.id}
                >
                  <Link
                    className="link-block"
                    to={`/brand/${make.name}`}
                    // onClick={() => {
                    //   props.handleVehicleRoute(make);
                    // }}
                  >
                    <div className="column-div">
                      <div className="make-image">
                        <img
                          src={make.main_image?.[0]?.url}
                          className="product-image"
                          alt="car"
                        />
                      </div>
                      <div className="text-block car-carousel">
                        {make.name}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))} */}


        <div className="static-mfx-div" style={{ marginTop: "0px" }}>

          <h2>
            When to Clean or Replace Your Engine Air Filter
          </h2>
          <div className="static-mfx-text-div">
            Cleaning and replacing your air filter helps ensure optimal performance by trapping contaminants
            and preventing them from entering your intake system. We recommend a visual inspection of your Green High Performance Air Filter every time you get an oil change, which is roughly 5,000
            to 7,500 miles.
          </div>
          <div className="static-mfx-text-div">
            Every 30,000 miles, your engine air filter must be cleaned to remove all traces of dirt, dust and
            debris buildup. However, it's important to note that this largely depends on your driving style and
            road conditions — primarily driving on dirt roads may require more frequent cleaning or
            replacement.
          </div>
          <div className="static-mfx-text-div">
            The Green High Performance Air Filter is designed to last a lifetime, but these are signs you
            might be due for a cleaning or engine air filter replacement:
          </div>
          <div className="static-mfx-text-div">
            <div>
              Excessive dirt or debris
            </div>
            <div>
              Decreased engine power
            </div>
            <div>
              Reduced fuel efficiency
            </div>
            <div>
              Illuminated engine light
            </div>
            <div>
              Black smoke from the exhaust
            </div>
            <div>
              Sluggish acceleration or rough idling
            </div>
          </div>

          <h2>
            Choose Green Filter for Superior Engine Performance
          </h2>
          <div className="static-mfx-text-div">
            Green Filter is your trusted provider of high-quality engine air filters for a wide range of trucks
            and cars from leading brands. Our Green High Performance Air Filter was designed using our
            proprietary lubricating technology to trap dirt while allowing for increased air flow. This
            improves fuel efficiency and engine performance.
          </div>
          <div className="static-mfx-text-div">
            Go further with a reliable engine air filter from Green Filter. Shop engine filter by vehicle or <a className="mfx-static-text-a" href="http://greenfilter.com/contact-us" target="_blank" >contact us today</a> and experience how we outperform the competition.
          </div>



        </div>
      </ShopElement1Wrapper>
    </>
  );
};

export default ShopElement1;

const ShopElement1Wrapper = styled.div`
  position: relative;
  padding-top: 75px;
  padding-bottom: 75px;
  background-color: #fff;

  .loader-wrapper {
    text-align: center;
    width: 100%;
  }

  .container-4 {
    padding-top: 50px;
    padding-bottom: 50px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 940px;
  }

  .w-container:before,
  .w-container:after {
    content: " ";
    display: table;
  }

  .w-row:before,
  .w-row:after {
    content: " ";
    display: table;
  }

  .heading-11 {
    margin-bottom: 50px;
    font-weight: 400;
    text-align: center;
  }

  .w-col-2 {
    width: 16.66666667%;
  }
  .w-col {
    position: relative;
    // float: left;
    min-height: 1px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .link-block {
    width: auto;
    margin-bottom: 0px;
    padding: 0px;
    text-align: center;
    text-decoration: none;
    max-width: 100%;
    display: inline-block;
  }

  .column-div {
    padding-right: 0px;
    padding-left: 0px;
    text-align: center;
  }

  .make-image {
    height: 100px;
    display: table-cell;
    vertical-align: bottom;
  }
  .product-image {
    width: 200px;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    border: 0;
  }

  @media screen and (max-width: 767px) {
    .w-col-2 {
      width: 33.33% !important;
    }
  }

  @media screen and (max-width: 479px) {
    .w-col-2 {
      width: 50% !important;
    }
  }
`;
