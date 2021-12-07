import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import gradient from "../../assets/green-gradient-blue.png";
import { getForm2 } from "../../data/store";
import Button1 from "../../components/Button1";
const ContactElement1 = () => {
  const formData = getForm2();
  return (
    <>
      <ContactElement1Wrapper gradient={gradient}>
        <div className="titles-div">
          <h1 className="main-header">Contact Us</h1>
          <p className="large-paragraph gray reviews">
            Need help with your green filter? Need a specific one for your make
            and model? We're here to help.
          </p>
        </div>
        <Grid container>
          {formData.map((field) => (
            <Grid item xs={12} key={field.id}>
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
        <div>
          <Button1 text="Submit" />
        </div>
      </ContactElement1Wrapper>
    </>
  );
};

export default ContactElement1;

const ContactElement1Wrapper = styled.div`
  position: relative;
  margin-top: 0%;
  padding: 5% 5% 20%;
  background-color: #fff;
  background-image: url(${(props) => props.gradient});
  background-position: 50% 100%;
  background-size: contain;
  background-repeat: no-repeat;
  text-align: center;
`;
