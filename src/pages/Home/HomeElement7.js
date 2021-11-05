import React from "react";
import styled from "styled-components";
import icon0 from "../../assets/products/2007-228x228.png";
import icon1 from "../../assets/products/2012-228x228.png";
import icon2 from "../../assets/products/cleaner_box-500x500.jpg";
import { Link } from "react-router-dom";
import Button1 from "../../components/Button1";
const HomeElement7 = () => {
  return (
    <>
      <HomeElement7Wrapper>
        <div className="container-4 w-container">
          <h1 class="heading-11">
            Green Filter Products Outperform The Competition
          </h1>
          <div className="main-vehicle-row w-row">
            <div className="w-col w-col-4">
              <Link to="/" className="link-block">
                <div className="column-div">
                  <h4>Cone Filters</h4>
                  <img
                    alt="product"
                    src={icon0}
                    className="product-image"
                  ></img>
                </div>
              </Link>
            </div>
            <div className="w-col w-col-4">
              <Link to="/" className="link-block">
                <div className="column-div">
                  <h4>Round Filters</h4>
                  <img
                    alt="product"
                    src={icon1}
                    className="product-image"
                  ></img>
                </div>
              </Link>
            </div>
            <div className="w-col w-col-4">
              <Link to="/" className="link-block">
                <div className="column-div">
                  <h4>Filter Cleaning & Care</h4>
                  <img
                    alt="product"
                    src={icon2}
                    className="product-image"
                  ></img>
                </div>
              </Link>
            </div>
          </div>
          <div className="titles-div">
            <Button1 text="Search for Your Perfect Green Filter" />
          </div>
        </div>
      </HomeElement7Wrapper>
    </>
  );
};

export default HomeElement7;

const HomeElement7Wrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  background-image: none;
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
  .titles-div {
    position: relative;
    left: 0%;
    display: block;
    width: 60%;
    margin-right: auto;
    margin-bottom: 50px;
    margin-left: auto;
    text-align: center;
    text-transform: none;
  }

  .heading-11 {
    margin-bottom: 50px;
    font-weight: 400;
    text-align: center;
  }

  .main-vehicle-row {
    margin-top: 25px;
    margin-bottom: 0px;
    margin-left: -10px;
    margin-right: -10px;
  }

  .w-row:before,
  .w-row:after {
    content: " ";
    display: table;
  }

  .w-col-4 {
    width: 33.33333333%;
  }
  .w-col {
    position: relative;
    min-height: 1px;
    padding-left: 10px;
    padding-right: 10px;
    display: inline-flex;
    justify-content: center;
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

  .product-image {
    width: 200px;
  }

  .titles-div > button {
    margin-top: 20px;
  }
`;
