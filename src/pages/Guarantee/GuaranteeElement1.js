import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Button1 from "../../components/Button1";
import { getForm1 } from "../../data/store";
import bgImg from "../../assets/green-gradient-blue.png";

const GuaranteeElement1 = () => {
  const formData = getForm1();
  return (
    <>
      <GuaranteeElement1Wrapper bgImg={bgImg}>
        <div className="titles-div">
          <h1 className="main-header">
            We Stand By Our Filters
            <br />
            Straight From Our Plant in the USA
          </h1>
          <p className="large-paragraph gray reviews">
            All Green High Performance Air Filters are designed to last for the
            lifetime of your vehicle and are covered by our&nbsp;
            <a href="#warranty" className="gray-link">
              Limited Lifetime Warranty
            </a>
            . To register your Green Filter USA product please complete and mail
            the warranty card packaged with the product or fill out the form on
            this page and submit within 30 days of purchase.
          </p>
        </div>
        <div className="w-form">
          <form>
            <div className="row-5 w-row">
              <Grid container columnSpacing={3} rowSpacing={1}>
                {formData.map((field) => (
                  <Grid item sm={12} xs={12} md={6} key={field.id}>
                    <div>
                      <div style={{ textAlign: "left" }}>
                        <label className="label">{field.label}:</label>
                      </div>
                      <div>
                        <input
                          type={field.type}
                          className="w-input"
                          name={field.name}
                        />
                      </div>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </div>
            <div>
              <Button1 text="Submit" />
            </div>
          </form>
        </div>
      </GuaranteeElement1Wrapper>
    </>
  );
};

export default GuaranteeElement1;

const GuaranteeElement1Wrapper = styled.div`
  position: relative;
  margin-top: 0%;
  padding: 5% 0 20%;
  background-color: #fff;
  background-image: url(${(props) => props.bgImg});
  background-position: 50% 100%;
  background-size: contain;
  background-repeat: no-repeat;
  text-align: center;

  input[type="text"] {
    width: 100%;
  }

  @media screen and (max-width: 767px) {
    padding: 5% 5% 20%;
  }
`;
