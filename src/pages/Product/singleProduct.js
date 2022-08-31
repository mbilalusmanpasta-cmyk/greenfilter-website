import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import VehicleTable from "../../components/VehicleTable";
import { statics } from "../../data/store";
import { GetData } from "../../helper/request";
import styled from "styled-components";
import AddToCart from "../../components/AddToCart";
import ProductInformationTable from "../../components/ProductInformationTable";


const SingleProduct = () => {

    const [tableData,setTableData] = React.useState([])
    const [productData,setProductData] = React.useState({})


    useEffect(()=>{
        getProductData();
    },[])

    const getProductData = async () =>
    {
        const queryParams = new URLSearchParams(window.location.search)
        const product_id = queryParams.get("product_id")
        let response  =  await GetData(statics.BaseUrl + `/product?id=${product_id}`,200,null)
        let productDataT = {};
        if(response.ResponseCode === "Success")
        {
            productDataT = response?.data?.rows?.[0];
        }

        setProductData(productDataT);
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
        <SingleProductWrapper >
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={4} lg={6} xl={4} >
                    <div>
                        <div style={{marginBottom:"140px"}}>
                            <h1> {productData?.title} </h1>
                        </div>
                        <img src={productData?.variants?.[0]?.images?.[0]?.link} />
                        <div>
                            <h3 style={{marginTop:"-20px"}}>Use cleaner kit <a style={{color:"green"}} href="/store/1989">#2000</a></h3>
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
                            <Grid  item xs={12} sm={6} md={6} lg={6} xl={4}> 
                                <div className="add-to-cart-wrapper">
                                    {/* <div className="price-text">
                                        <span className="discounted-price">{productData?.compare_at_price} </span>
                                        <span className="actual-price">{productData?.price}</span>
                                    </div> */}
                                    <AddToCart text="ADD TO CART" buyButtonId={productData?.buy_url}  id={productData?.id} />
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
                    <p style={{color: "red"}}><b>*all measurements are in inches unless otherwise stated</b></p>
                </Grid>

            </Grid>

        </SingleProductWrapper>
      </>
    );
  };
  
  export default SingleProduct;
  
  const SingleProductWrapper = styled.div`
    position: relative;
    margin-top: 100px;
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
  