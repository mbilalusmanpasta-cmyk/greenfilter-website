import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import bgImg from "../../assets/green-gradient-blue.png";
import link from "../../assets/GREENAPP.jpg";
const CareerElement1 = () => {
  return (
    <>
      <CareerElement1Wrapper bgImg={bgImg}>
        <div className="cleaner w-container">
          <div className="main-vehicle-row w-row">
            <Grid container>
              <Grid item xs={12}>
                <h1 className="main-header">
                  Green Filter is an equal opportunity employer.
                </h1>
                <p className="large-paragraph gray reviews">
                  We are looking for team players who work well with others and
                  are open to learning new skills.
                </p>
                <p className="large-paragraph gray reviews">
                  If you think you have what it takes to join our team of
                  dedicated support and production staff we would love to hear
                  from you!
                </p>
                <br />
                <p className="large-paragraph gray reviews">
                  Please download and fill out the application below, then email
                  the completed application to accounting@greenfilterusa.com{" "}
                </p>

                {/* <Button1 isLink text="Warranty Return Form" to="/documents/gfu_warranty_return.pdf" target="_blank"/> */}
                <a href="/documents/GreenFilter_APP.doc"  target="_blank">
                  <img src={link} alt="documents" />
                </a>
              </Grid>
            </Grid>
          </div>
        </div>
      </CareerElement1Wrapper>
    </>
  );
};

export default CareerElement1;

const CareerElement1Wrapper = styled.div`
  position: relative;
  margin-top: 0%;
  padding: 0 5% 20%;
  background-color: #fff;
  background-image: url(${(props) => props.bgImg});
  background-position: 50% 100%;
  background-size: contain;
  background-repeat: no-repeat;
  text-align: center;

  .cleaner {
    margin-top: 50px;
    margin-bottom: 100px;
  }
`;
