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

import img10 from "../../assets/privateLabels/custom_triangle.jpg";
import img11 from "../../assets/privateLabels/custom_long_cone.jpg";
import img12 from "../../assets/privateLabels/custom_screen.jpg";
import img13 from "../../assets/privateLabels/custom_threaded_insert.jpg";
import img14 from "../../assets/privateLabels/custom_colors.jpg";
import img15 from "../../assets/privateLabels/custom_end_cap.jpg";
import img16 from "../../assets/privateLabels/custom_text.jpg";
import img17 from "../../assets/privateLabels/custom_2_inlet.jpg";
import img18 from "../../assets/privateLabels/custom_3_hole_angled_inlet.jpg";
import img19 from "../../assets/privateLabels/custom_dry_flow.jpg";

import { Link } from "react-router-dom";
import ZoomBox from "../../components/ZoomBox";
const customLabels = [
  {
    label: "Offset Inlets",
    imgSrc: img0,
    image: img10,

  },
  {
    label: "Non-Standard Shapes",
    imgSrc: img1,
    image: img11,

  },
  {
    label: "Heavy Duty Mesh",
    image: img12,
    imgSrc: img2,
  },
  {
    label: "Threaded Inserts",
    imgSrc: img3,
    image: img13,

  },
  {
    label: "Custom Colors",
    imgSrc: img4,
    image: img14,

  },
  {
    label: "Personalized End Caps",
    imgSrc: img5,
    image: img15,

  },
  {
    label: "Customized Text",
    imgSrc: img6,
    image: img16,

  },
  {
    label: "Multiple Inlets",
    imgSrc: img7,
    image: img17,

  },
  {
    label: "Angled Inlet",
    imgSrc: img8,
    image: img18,

  },
  {
    label: "Dry Flow Oil-Free Filter",
    imgSrc: img9,
    image: img19,

  },
];
const PLElement1 = () => {

  const [toggle, setToggle] =  React.useState(false);
	const [sIndex, setSIndex] =  React.useState(0);

  const  ZoomBoxHandler  = (state, sIndex) => {
		setToggle(state);
		setSIndex(sIndex);
	};

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
                    <Grid item xs={12} sm={6} md={4} key={id} >

                      <div  onClick={() => { ZoomBoxHandler(true, id); }}>
                        <img src={label.imgSrc} alt="custom" />
                        <h2>{label.label}</h2>
                      </div>
                     
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

        <ZoomBox 
          // image={}
          event={ZoomBoxHandler}
          imageVar={"image"}
          data={customLabels}
          imageIndex={sIndex}
          setImageIndex={setSIndex}
          state={toggle}
          zoom={1}
        />

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
