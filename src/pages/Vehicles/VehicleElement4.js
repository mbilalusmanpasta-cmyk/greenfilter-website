import React from "react";
import styled from "styled-components";
import tableImg from "../../assets/bmw-m3.jpg";
import filterImg from "../../assets/7157_v1_500.jpg";
import cleaner from "../../assets/2000_v1_500.jpg";
import { Link } from "react-router-dom";
import Button1 from "../../components/Button1";
import AddToCart from "../../components/AddToCart";
const VehicleElement4 = ({ models,make,cleaningKit }) => {
  return (
    <>
      <VehicleElement4Wrapper>
        <div className="titles-div">
          <h1 className="main-header">
            Popular {make?.title} Models Use Green Filter
          </h1>
          <p className="large-paragraph gray reviews">
            Below are the {make?.title} models that support the
            application of Green Filter.
          </p>
        </div>
        {models && models.map((model,key) => ( 
          <div className="container-6 w-container" key={key}>
            <div className="main-vehicle-row w-row">
              <div className="column-4 w-col w-col-6">
                <img
                  src={model?.images?.[0]?.link}
                  alt="car"
                  style={{ maxWidth: "100%", verticalAlign: "middle", display: "inline-block"}}
                  width={"384px"}
                />
              </div>
              <div className="column-6 w-col w-col-6">
                <div className="column-div left">
                  <h1 className="product-header">
                    {model.title} High Performance Air Filter
                  </h1>
                  <h1 className="product-descr">
                    Green Filter - Part{" "}
                    <Link to={`/store?product_id=${model?.products?.[0]?.id}`} style={{ color: "green" }}>#{model?.products?.[0]?.gfu_part_num}</Link>
                  </h1>
                </div>
                <img src={model?.products?.[0]?.images?.[0]?.link} alt="filter" className="product" />
              </div>
            </div>
            <div className="product-row top w-row">
              <div className="w-col w-col-2 w-col-small-2 w-col-tiny-2">
                <div className="white-div gray">
                  <h1 className="table-header">Year</h1>
                </div>
              </div>
              <div className="w-col w-col-2 w-col-small-2 w-col-tiny-2">
                <div className="white-div gray">
                  <h1 className="table-header">Disp</h1>
                </div>
              </div>
              <div className="w-col w-col-2 w-col-small-2 w-col-tiny-2">
                <div className="white-div gray">
                  <h1 className="table-header">Engine Size</h1>
                </div>
              </div>
              <div className="w-col w-col-2 w-col-small-2 w-col-tiny-2">
                <div className="white-div gray">
                  <h1 className="table-header">Intake</h1>
                </div>
              </div>
              <div className="w-col w-col-4 w-col-small-4 w-col-tiny-2">
                <div className="white-div gray">
                  <h1 className="table-header">Purchase</h1>
                </div>
              </div>
            </div>
            {model?.products?.map((product) => (
              <div className="product-row w-row" key={product.id}>
                <div className="w-col w-col-2 w-col-small-2 w-col-tiny-2">
                  <div className="white-div ctr">
                    <div class="product-table-text">
                      {product.start_year} - {product.end_year}
                      <br />
                      <Link style={{ color: "green" }} to={`/store?product_id=${product.id}`}>
                        #{product?.gfu_part_num}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-col w-col-2 w-col-small-2 w-col-tiny-2">
                  <div className="white-div ctr">
                    <div class="product-table-text">{product.displacement}</div>
                  </div>
                </div>
                <div className="w-col w-col-2 w-col-small-2 w-col-tiny-2">
                  <div className="white-div ctr">
                    <div class="product-table-text">{product.engine}</div>
                  </div>
                </div>
                <div className="w-col w-col-2 w-col-small-2 w-col-tiny-2">
                  <div className="white-div ctr">
                    <div class="product-table-text">{product.intake}</div>
                  </div>
                </div>
                <div className="w-col w-col-4 w-col-small-4 w-col-tiny-4">
                  <div className="white-div ctr">
                    <div style={{ float: "left", paddingBottom: "5px" }}>
                      <div  className="shopify-buy-frame--product-cus"
                        style={{ maxWidth: 120 }}>
                         <AddToCart text="ADD TO CART"  buyButtonId={product?.buy_url}  id={product.id}/>
                      </div>
                     

                    </div>
                    <img
                      src={product?.images?.[0]?.link}
                      alt="filter"
                      className="filter-table-thumb right"
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className="product-row w-row">
              <div className="w-col w-col-8 w-col-small-8 w-col-tiny-8">
                <div className="white-div">
                  <div class="product-table-text">
                    <h4 style={{ textAlign: "left" }}>
                      {cleaningKit.product_type_name} #{cleaningKit.gfu_part_num || 2000}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="w-col w-col-4 w-col-small-4 w-col-tiny-4">
                <div className="white-div ctr">
                <div style={{ float: "left", paddingBottom: "5px" }}>
                      <div  className="shopify-buy-frame--product-cus"
                        style={{ maxWidth: 120 }}>
                  <AddToCart text="ADD TO CART"  buyButtonId={cleaningKit?.buy_url}  id={model.id.toString() + cleaningKit?.id?.toString()}/>
                </div>
                </div>
                  <img
                    src={cleaner}
                    alt="filter"
                    className="filter-table-thumb right"
                  />
                </div>
              </div>
            </div>
            <div className="white-div ctr">
              <div className="product-table-text">
                <h1 className="product-header">
                  Don't see a compatible filter here? Check "Find a Filter" at
                  the top of the page.
                </h1>
              </div>
            </div>
          </div>
         
        ))}
      </VehicleElement4Wrapper>
    </>
  );
};

export default VehicleElement4;

const VehicleElement4Wrapper = styled.div`
  position: relative;
  padding-top: 75px;
  padding-bottom: 75px;
  background-color: #fff;

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
  .main-header {
    font-weight: 400;
  }
  .large-paragraph.gray.reviews {
    margin-bottom: 0px;
  }
  .large-paragraph.gray {
    color: #757575;
    text-align: center;
  }
  .large-paragraph {
    font-family: Lato, sans-serif;
    font-size: 18px;
    line-height: 28px;
    font-weight: 300;
  }

  .container-6 {
    padding-top: 170px;
    border-bottom: 1px solid #000;
    margin-left: auto;
    margin-right: auto;
    max-width: 940px;
  }

  .w-container:before,
  .w-container:after {
    content: " ";
    display: table;
  }

  .main-vehicle-row {
    margin-top: 25px;
    margin-bottom: 0px;
    display: flex;
    flex-wrap: wrap;
  }

  .w-row:before,
  .w-row:after {
    content: " ";
    display: table;
  }

  .column-4 {
    padding-right: 2%;
  }

 

  

  .w-col {
    // position: relative;
    // width: 100%;
    // min-height: 1px;
    // padding-left: 10px;
    // padding-right: 10px;

    position: relative;
    float: left;
    width: 100%;
    min-height: 1px;
    padding-left: 10px;
    padding-right: 10px;

  }

  .w-col-6 {
    width: 50%;
  }

  .column-6 {
    padding-left: 0%;
  }

  img {
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
  }

  .column-div.left {
    text-align: left;
  }

  .column-div {
    padding-right: 0px;
    padding-left: 0px;
    text-align: center;
  }

  .product-header {
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 24px;
    line-height: 24px;
    font-weight: 400;
  }

  .product-descr {
    display: inline-block;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #999;
    font-size: 20px;
    line-height: 20px;
  }

  .product {
    width: 200px;
  }

  .product-row.top {
    background-color: hsla(0, 0%, 60%, 0.07);
  }

  .product-row {
    display: flex;
    border-bottom: 1px solid darkgrey;
  }
  .w-row:before,
  .w-row:after {
    content: " ";
    display: table;
  }

  .w-col-2 {
    width: 16.66666667% !important;
  }
  .w-col-4 {
    width: 33.33333333% !important;
  }
  .w-col-8 {
    width: 66.66666667% !important;
  }

  .white-div.gray {
    background-color: #f8f8f8;
  }
  .white-div {
    height: auto;
    padding: 15px;
    background-color: #fff;
  }
  .table-header {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 16px;
    line-height: 15px;
    font-weight: 700;
    text-align: center;
  }

  .white-div.ctr {
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
  }
  .white-div {
    height: auto;
    padding: 15px;
    background-color: #fff;
  }
  .product-table-text {
    position: static;
    font-family: Lato, sans-serif;
    line-height: 18px;
  }
  .shopify-buy-frame--product-cus {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width:150px;
  }
  .price-text {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .discounted-price {
    font-size: 15px;
    color: #4a4a4a;
    display: inline-block;
  }
  .actual-price {
    font-size: 13px;
    color: #4a4a4a;
    display: inline-block;
    tetx-decoration: line-through;
    padding-left: 7px;
    opacity: 0.76;
  }
  .shopify-buy-frame--product-cus button {
    padding: 7px !important;
    font-size: 13px;
    margin-top: 20px;
    transition: background-color 200ms ease;
  }
  .shopify-buy-frame--product-cus button:hover {
    background-color: #003ead !important;
  }

  .filter-table-thumb.right {
    float: left;
    width: 60px;
    height: 60px;
    min-width: 60px;
    min-height: 60px;
    margin-left: 45px;
    transform-origin: bottom right;
    transition: border-color 0.25s ease-in-out;
    transition: transform 0.25s ease-in-out;
    border: 1px solid white;
    border-radius: 5%;
  }
  .filter-table-thumb.right:hover {
    transform: scale(6);
    transform-origin: bottom right;
    transition-delay: 0.2s;
    border: 1px solid grey;
  }

  .product-header {
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 24px;
    line-height: 24px;
    font-weight: 400;
  }

  @media screen and (max-width: 767px) {
    .w-col-6 {
      width: 100% !important;
    }
    .column-6 {
      padding-left: 10px !important;
    }

    .titles-div {
      width: 90%;
    }
  }
`;
