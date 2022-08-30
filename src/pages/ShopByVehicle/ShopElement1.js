import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { brandDetails } from "../../data/cars";
import getMultipleCollections from "../../data/getMultipleCollections";
import { getMakeCollection, statics } from "../../data/store";
import { getMakesFromCollection } from "../../data/firebaseHelper";
import { GetData } from "../../helper/request";

const ShopElement1 = (props) => {

  const [categories,setCategories] = React.useState([]);
  const [highPerformanceCollection,setHighPerformanceCollection] = React.useState([]);
  const [popularPickupTrucksCollection,setPopularPickupTrucksCollection] = React.useState([]);
  const [popularBrandsCollection,setPopularBrandsCollection] = React.useState([]);
  const [insaneSupercarsCollection,setInsaneSupercarsCollection] = React.useState([]);



  useEffect( async()=>
  {
    // let collections = await getCategories();
    getMultipleCollectionsMakes();
  },[])


  const getMultipleCollectionsMakes = (collections) =>
  {

    getHighPerformanceCollection();
    getPopularPickupTrucksCollection();
    getPopularBrandsCollection();
    getInsaneSupercarsCollection();
  }

  const getHighPerformanceCollection = async () => {
    const HighPerformanceCollectionId = 1;
    let collectionT = {};
    let response = await GetData(statics.BaseUrl+`/collection?id=${HighPerformanceCollectionId}`,200,null);
    if(response.ResponseCode === "Success")
    {
      collectionT = response?.data?.rows?.[0];
    }
    setHighPerformanceCollection(collectionT);

  }

  const getPopularPickupTrucksCollection = async () => {
    const PopularPickupTrucksCollectionId = 2;
    let collectionT = {};
    let response = await GetData(statics.BaseUrl+`/collection?id=${PopularPickupTrucksCollectionId}`,200,null);
    if(response.ResponseCode === "Success")
    {
      collectionT = response?.data?.rows?.[0];
    }
    setPopularPickupTrucksCollection(collectionT);

  }

  const getPopularBrandsCollection = async () => {
    const PopularBrandsCollectionId = 5;
    let collectionT = {};
    let response = await GetData(statics.BaseUrl+`/collection?id=${PopularBrandsCollectionId}`,200,null);
    if(response.ResponseCode === "Success")
    {
      collectionT = response?.data?.rows?.[0];
    }
    setPopularBrandsCollection(collectionT);

  }

  const getInsaneSupercarsCollection = async () => {
    const InsaneSupercarsCollectionId = 4;
    let collectionT = {};
    let response = await GetData(statics.BaseUrl+`/collection?id=${InsaneSupercarsCollectionId}`,200,null);
    if(response.ResponseCode === "Success")
    {
      collectionT = response?.data?.rows?.[0];
    }
    setInsaneSupercarsCollection(collectionT);
  }
  
  return (
    <>
      <ShopElement1Wrapper>

        <div className="container-4 w-container">
          <h1>
          </h1>
          <h1 className="heading-11">{"High Performance Cars"}</h1>
          <div className="shop-vehicle-row w-row">
            {highPerformanceCollection?.makes?.map((make) => (
              <div
                className="shop-vehicle-make w-col w-col-2"
                key={make.id}
              >
                <Link
                  className="link-block"
                  to={`/brand/${make?.slug}`}
                  // onClick={() => {
                  //   props.handleVehicleRoute(make);
                  // }}
                >
                  <div className="column-div">
                    <div className="make-image">
                      <img
                        src={make?.images?.[0]?.link}
                        className="product-image"
                        alt="car"
                      />
                    </div>
                    <div className="text-block car-carousel">
                      {make?.title}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>          

        <div className="container-4 w-container">
          <h1>
          </h1>
          <h1 className="heading-11">{"Popular Pickup Trucks"}</h1>
          <div className="shop-vehicle-row w-row">
            {popularPickupTrucksCollection?.makes?.map((make) => (
              <div
                className="shop-vehicle-make w-col w-col-2"
                key={make?.id}
              >
                <Link
                  className="link-block"
                  to={`/brand/${make?.slug}`}
                  // onClick={() => {
                  //   props.handleVehicleRoute(make);
                  // }}
                >
                  <div className="column-div">
                    <div className="make-image">
                      <img
                        src={make.images?.[0]?.link}
                        className="product-image"
                        alt="car"
                      />
                    </div>
                    <div className="text-block car-carousel">
                      {make.title}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="container-4 w-container">
          <h1>
          </h1>
          <h1 className="heading-11">{"Popular Brands"}</h1>
          <div className="shop-vehicle-row w-row">
            {popularBrandsCollection?.makes?.map((make) => (
              <div
                className="shop-vehicle-make w-col w-col-2"
                key={make?.id}
              >
                <Link
                  className="link-block"
                  to={`/brand/${make?.slug}`}
                  // onClick={() => {
                  //   props.handleVehicleRoute(make);
                  // }}
                >
                  <div className="column-div">
                    <div className="make-image">
                      <img
                        src={make.images?.[0]?.link}
                        className="product-image"
                        alt="car"
                      />
                    </div>
                    <div className="text-block car-carousel">
                      {make.title}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="container-4 w-container">
          <h1>
          </h1>
          <h1 className="heading-11">{"Insane Supercars"}</h1>
          <div className="shop-vehicle-row w-row">
            {insaneSupercarsCollection?.makes?.map((make) => (
              <div
                className="shop-vehicle-make w-col w-col-2"
                key={make?.id}
              >
                <Link
                  className="link-block"
                  to={`/brand/${make?.slug}`}
                  // onClick={() => {
                  //   props.handleVehicleRoute(make);
                  // }}
                >
                  <div className="column-div">
                    <div className="make-image">
                      <img
                        src={make.images?.[0]?.link}
                        className="product-image"
                        alt="car"
                      />
                    </div>
                    <div className="text-block car-carousel">
                      {make.title}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
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
        <div></div>
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
  .shop-vehicle-row {
    display: flex;
    flex-wrap: wrap;
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

  .text-block.car-carousel {
    margin-top: 10px;
    color: #757575;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
  }
  .text-block {
    font-family: Lato, sans-serif;
    color: #525252;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
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
