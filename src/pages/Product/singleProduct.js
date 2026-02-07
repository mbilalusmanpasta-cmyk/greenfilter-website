import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import VehicleTable from "../../components/VehicleTable";
import { statics } from "../../data/store";
import { GetData } from "../../helper/request";
import styled from "styled-components";
import AddToCart from "../../components/AddToCart";
import ProductInformationTable from "../../components/ProductInformationTable";
import CircleLoader from "react-spinners/CircleLoader";
import ProductShopifyImage from "../../components/ProductImage";


import { Helmet } from "react-helmet";
import img0 from "../../assets/gallery/img0.jpeg";

const SingleProduct = () => {

    const [tableData, setTableData] = React.useState([])
    const [productData, setProductData] = React.useState({})
    const [loading, setLoading] = React.useState(false)


    useEffect(() => {
        getProductData();
    }, [window.location.pathname])

    const getProductData = async () => {
        setLoading(true)
        const queryParams = new URLSearchParams(window.location.search)
        let gfu_part_num = queryParams.get("gfu_part_num")
        const product_id = queryParams.get("product_id")

        if (!gfu_part_num && !product_id) {
            if (window.location.pathname.includes("/store/filter/")) {
                gfu_part_num = window.location.pathname.split('/')[3];
            }
        }

        let response = null;
        if (gfu_part_num) {
            response = await GetData(statics.BaseUrl + `/product?gfu_part_num=${gfu_part_num}`, 200, null)
        }

        else {
            response = await GetData(statics.BaseUrl + `/product?product_id=${product_id}`, 200, null)
        }

        let productDataT = {};
        if (response.ResponseCode === "Success") {
            productDataT = response?.data?.rows?.[0];
        }

        setProductData(productDataT);
        setLoading(false)

    }

    // const getTableData = async () =>
    // {
    //     const product_type_id = 8;
    //     let tableDataT = [];
    //     let response  =  await GetData(statics.BaseUrl + `/product?product_type_id=${product_type_id}&pageNo=1&pageSize=200`,200,null)
    //     if(response.ResponseCode === "Success")
    //     {
    //     tableDataT = response?.data?.rows;
    //     }
    //     setTableData(tableDataT);
    // }

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


            {
                !loading &&
                <Helmet>
                    <title>{productData?.title} | {productData?.gfu_part_num} | Green Filter</title>
                    <meta name="description" content={"Green Filter outperforms the competition, discover why we've secretly been the favorite air filter to some of the world's biggest racing brands and enthusiasts."} />
                    <meta property="og:title" content={productData?.title + productData?.gfu_part_num + "| Green Filter"} />
                    <meta property="og:description" content={"Green Filter outperforms the competition, discover why we've secretly been the favorite air filter to some of the world's biggest racing brands and enthusiasts."} />
                    <meta property="og:image" content={img0} />
                    <meta property="og:type" content="website" />
                    <meta name="robots" content="index, follow" />
                    <link rel="canonical" href={`https://greenfilter.com/store/filter/${productData.gfu_part_num}`} />
                </Helmet>
            }
            <SingleProductWrapper >
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={4} lg={6} xl={4} >
                        <div>
                            <div style={{ marginBottom: "140px" }}>
                                <h1> {productData?.title} </h1>
                            </div>
                            {/* <img src={productData?.variants?.[0]?.images?.[0]?.link} /> */}

                            <ProductShopifyImage buyButtonId={productData?.buy_url} id={productData?.id} />

                            <div>
                                <h3 style={{ marginTop: "-20px" }}>Use cleaner kit <a style={{ color: "green" }} onClick={() => window.location.href = "/store/filter/2000"} >#2000</a></h3>
                                <a href="https://www.p65warnings.ca.gov/"><img width="300px" src="/images/Prop65.jpg" /></a>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={6} xl={8}>
                        <div className="table-head-info">
                            <Grid container spacing={4}>
                                <Grid item xs={12} sm={6} md={6} lg={6} xl={8}>
                                    {
                                        productData?.models?.length > 0 &&

                                        <div className="part-number">
                                            Part #{productData?.name?.split("#")?.[1]} fits the following vehicle(s):
                                        </div>
                                    }

                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={6} xl={4}>
                                    <div className="add-to-cart-wrapper">
                                        {/* <div className="price-text">
                                        <span className="discounted-price">{productData?.compare_at_price} </span>
                                        <span className="actual-price">{productData?.price}</span>
                                    </div> */}
                                        <AddToCart text="ADD TO CART" buyButtonId={productData?.buy_url} id={productData?.id} />
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                        {
                            productData?.models?.length > 0 &&

                            <div className="table-wrapper" >
                                <VehicleTable tableData={productData} />
                            </div>
                        }
                        <div className="table-wrapper" >
                            <ProductInformationTable tableData={productData} />
                        </div>
                        <p style={{ color: "red" }}><b>*all measurements are in inches unless otherwise stated</b></p>
                    </Grid>

                </Grid>

            </SingleProductWrapper>
        </>
    );
};

export default SingleProduct;

const SingleProductWrapper = styled.div`
    position: relative;
    margin-top: 50px;
    padding: 0% 5% 20%;
    background-color: #fff;
    text-align: center;

    h1{
        margin: 5px;
        font-family: Lato, sans-serif;
        color: #313131;
        font-size: 38px;
        line-height: 44px;
        font-weight: bold;
        
    }

    .table-wrapper
    {
        // padding-left:5px;
    }

    .table-head-info{
        margin-top:60px;
        margin-bottom:60px;
    }

    .part-number
    {
        margin-bottom: 10px;
        font-family: Lato, sans-serif;
        color: #757575;
        font-weight: bold;
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
        text-decoration: line-through;
        padding-left: 7px;
        opacity: 0.76;
      }
  
    
  `;
