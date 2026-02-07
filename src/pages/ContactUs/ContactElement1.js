import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import styled from "styled-components";
import gradient from "../../assets/green-gradient-blue.png";
import { getForm2 } from "../../data/store";
import Button1 from "../../components/Button1";
const ContactElement1 = () => {
  const formData = getForm2();


  useEffect(() => {
    // Step 1: Queue function if not defined
    if (!window.Nutsheller) {
      window.Nutsheller = function () {
        (window.Nutsheller.q = window.Nutsheller.q || []).push(arguments);
      };
    }

    // Step 2: Call initForm
    window.Nutsheller("initForm", {
      form: "qJ5jY8",
      instance: "377407",
      authToken: "",
      target: "nutshell-form-qJ5jY8",
    });

    // Step 3: Load the actual Nutsheller script
    const script = document.createElement("script");
    script.src = "https://loader.nutshell.com/nutsheller.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
          {/* {formData.map((field) => (
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
          ))} */}
          {/* <div id="nutshell-form-qJ5jY8">Loading contact form...</div> */}
          <div id="nutshell-form-qJ5jY8" />

        </Grid>
        {/*   */}
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
