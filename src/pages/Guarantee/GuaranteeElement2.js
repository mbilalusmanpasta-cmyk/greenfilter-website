import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Button1 from "../../components/Button1";
const GuaranteeElement2 = () => {
  return (
    <>
      <GuaranteeElement2Wrapper>
        <div className="container-5 w-container">
          <div className="titles-div less-padding">
            <h1 className="main-header">Warranty Information</h1>
            <p class="large-paragraph gray reviews">
              All Green High Performance Air Filters are designed to last for
              the lifetime of your vehicle and are covered by our&nbsp;Limited
              Lifetime Warranty.
              <br />
              <br />A warranty card is included with every Green High
              Performance Air Filter purchased, and you have 30 days from the
              date of purchase to return it. If this card was lost or if you did
              not receive one you can&nbsp;download it here.
              <br />
              <br />
              If you should need to make a warranty claim, please&nbsp;download
              the Warranty Return form here. The form provides instructions for
              returning a filter to us.
            </p>
            <Grid container style={{ margin: "15px 0 15px 0" }}>
              <Grid item xs={12} sm={12} md={6}>
                <Button1 isLink text="Warranty Return Form" to="/documents/gfu_warranty_return.pdf" target="_blank"/>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Button1 isLink text="Warranty Card" to="/documents/gfu_warranty_card.pdf" target="_blank" />
              </Grid>
            </Grid>
            <div className="tiny-text">
              * Never use motor oil, transmission fluid, WD-40®, or any other
              brand of filter oil as these may damage your Green Filter. Use
              only genuine Green Filter Oil.
            </div>
          </div>
        </div>
        <div className="titles-div less-padding">
          <h1 className="main-header">Return or Exchange a Filter</h1>
          <p className="large-paragraph gray reviews">
            If you need to return or exchange a filter, please&nbsp;download and
            complete the Filter Return form. Once you have completed the form,
            send it along with the filter to the address listed on the form.
          </p>
        </div>
        <div className="titles-div">
          <div className="large-paragraph gray reviews">
            *NOTE: YOU MUST CALL US FOR AN RGA NUMBER BEFORE SENDING ANY FILTER
            TO US.&nbsp;Any filter sent to us without an RGA number may not be
            exchanged. Please read the form carefully and make sure that all
            steps are followed to ensure a quick refund or exchange of your
            filter.
          </div>
        </div>
        <div className="titles-div less-padding">
          <p className="large-paragraph gray reviews">
            There is a 25% restocking fee on all returns for credit.
          </p>
        </div>
        <div class="titles-div less-padding"></div>
        <Button1 isLink text="Filter Return Form" marginTop={20} to="/documents/gfu_filter_credit_return.pdf" target="_blank" /> 
      </GuaranteeElement2Wrapper>
    </>
  );
};

export default GuaranteeElement2;

const GuaranteeElement2Wrapper = styled.div`
  padding-bottom: 125px;
  padding-top: 75px;
  background-color: #f3f3f3;
  text-align: center;
  position: relative;

  .MuiGrid-root button {
    margin-top: 20px;
  }
`;
