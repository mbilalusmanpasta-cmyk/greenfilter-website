import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import bgImg from "../../assets/green-gradient-blue.png";
import img0 from "../../assets/privateLabels/custom_triangle_s.jpg";
import img1 from "../../assets/privateLabels/custom_long_cone_s.jpg";
import img2 from "../../assets/privateLabels/custom_screen_s.jpg";
import img3 from "../../assets/privateLabels/custom_threaded_insert_s.jpg";
import img4 from "../../assets/privateLabels/custom_colors_s.jpg";
import img5 from "../../assets/privateLabels/custom_end_cap_s.jpg";
import img6 from "../../assets/privateLabels/custom_text_s.jpg";
import img7 from "../../assets/privateLabels/custom_2_inlet_s.jpg";
import img8 from "../../assets/privateLabels/custom_3_hole_angled_inlet_s.jpg";
import img9 from "../../assets/privateLabels/custom_dry_flow_s.jpg";
import { Link } from "react-router-dom";
const customLabels = [
  {
    label: "Offset Inlets",
    imgSrc: img0,
  },
  {
    label: "Non-Standard Shapes",
    imgSrc: img1,
  },
  {
    label: "Heavy Duty Mesh",
    imgSrc: img2,
  },
  {
    label: "Threaded Inserts",
    imgSrc: img3,
  },
  {
    label: "Custom Colors",
    imgSrc: img4,
  },
  {
    label: "Personalized End Caps",
    imgSrc: img5,
  },
  {
    label: "Customized Text",
    imgSrc: img6,
  },
  {
    label: "Multiple Inlets",
    imgSrc: img7,
  },
  {
    label: "Angled Inlet",
    imgSrc: img8,
  },
  {
    label: "Dry Flow Oil-Free Filter",
    imgSrc: img9,
  },
];
const PLElement1 = () => {
  return (
    <>
      <PLElement1Wrapper bgImg={bgImg}>
        <div className="cleaner w-container">
          <div className="main-vehicle-row w-row">
            <Grid container justifyContent="center">
              <h1 className="main-header">Private Label.</h1>
              <Grid item xs={12}>
                <h1>CUSTOM &amp; PRIVATE LABEL FILTERS</h1>
                <p>
                  At Green Filter USA, we strive to fill all your filtration
                  needs. We have the ability to make custom filters to fit your
                  specifications.
                </p>
                <Grid container>
                  {customLabels.map((label, id) => (
                    <Grid item md={4} key={id}>
                      <a
                        href="https://greenfilter.com/images/framework/custom-private-label/custom_triangle.jpg"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={label.imgSrc} alt="custom" />
                        <h2>{label.label}</h2>
                      </a>
                    </Grid>
                  ))}
                </Grid>
                <p>
                  Cost, setup, and delivery will vary based on the complexity
                  and size of the order.{" "}
                  <Link to="/contact-us" style={{ color: "green" }}>
                    {" "}
                    Contact us
                  </Link>{" "}
                  today and we will be happy to discuss your needs!
                </p>
              </Grid>
            </Grid>
          </div>
        </div>
      </PLElement1Wrapper>
    </>
  );
};

export default PLElement1;

const PLElement1Wrapper = styled.div`
  position: relative;
  margin-top: 0%;
  padding: 0% 5% 20%;
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
