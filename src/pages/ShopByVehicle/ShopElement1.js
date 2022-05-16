import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { brandDetails } from "../../data/cars";
import getMultipleCollections from "../../data/getMultipleCollections";
import { getMakeCollection } from "../../data/store";
import { getMakesFromCollection } from "../../data/firebaseHelper";

const ShopElement1 = (props) => {

  const [categories,setCategories] = React.useState([]);


  useEffect( async()=>
  {
    let collections = await getCategories();
    getMultipleCollectionsMakes(collections);
  },[])


  const getMultipleCollectionsMakes = (collections) =>
  {
    let allCategories = [];
    collections.forEach((collection)=>{
      allCategories.push( getMakesDetail(collection));
    })

    Promise.all(allCategories).then((res)=>{
      setCategories(res)
    });
  }

  const getCategories = async () =>
  {
    let collections = await getMultipleCollections(getMakeCollection().name)
    return collections;
  }

  const getMakesDetail = async(collection) =>
  {
    let allMakes = await getMakesFromCollection(collection);
    collection.makes = allMakes;
    return collection;
  }

  return (
    <>
      <ShopElement1Wrapper>
        {categories.map((category) => (
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
        ))}
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
