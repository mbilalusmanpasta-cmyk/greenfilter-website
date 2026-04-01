import React, { useEffect } from "react";
import styled from "styled-components";
import img0 from "../../assets/icons8-wheel-100_1icons8-wheel-100.png";
import img1 from "../../assets/icons8-gphone-100-3.png";
import { trackContactFormSubmit } from "../../utils/analytics";

const ContactElement2 = () => {
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.type = 'text/javascript';
  //   script.src = 'https://secure.wufoo.com/scripts/embed/form.js';
  //   script.async = true;
  //   script.onload = script.onreadystatechange = () => {
  //     const rs = script.readyState;
  //     if (rs && rs !== 'complete' && rs !== 'loaded') return;
  //     try {
  //       const mlxmwl41vsidqt = new window.WufooForm();
  //       mlxmwl41vsidqt.initialize({
  //         userName: 'bbai',
  //         formHash: 'mlxmwl41vsidqt',
  //         autoResize: true,
  //         height: '519',
  //         async: true,
  //         host: 'wufoo.com',
  //         header: 'show',
  //         ssl: true
  //       });
  //       mlxmwl41vsidqt.display();
  //     } catch (e) {}
  //   };

  //   document.body.appendChild(script);

  //   return () => {
  //     // Cleanup code
  //     document.body.removeChild(script);
  //   };
  // }, []);



  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://loader.nutshell.com/nutsheller.js";
    script.async = true;

    script.onload = () => {
      if (window.Nutsheller) {
        window.Nutsheller("initForm", {
          form: "qJ5jY8",
          instance: "377407",
          authToken: "",
          target: "nutshell-form-qJ5jY8",
        });

        // Track form submission when Nutshell form is submitted
        // Listen for Nutshell form success event
        setTimeout(() => {
          const formElement = document.querySelector('#nutshell-form-qJ5jY8 form');
          if (formElement) {
            formElement.addEventListener('submit', () => {
              trackContactFormSubmit();
            });
          }
        }, 1000);
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);



  return (
    <>
      <ContactElement2Wrapper>
        {/* <div className="w-container">
          <div className="titles-div">
            <h1 className="heading-10">Other Ways to Contact Us</h1>
            <p class="large-paragraph gray">
              Shoot us an email or give us a call.
            </p>
          </div>
          <div className="main-vehicle-row w-row">
            <div className="w-col w-col-6">
              <a
                href="mailto:csr@greenfilter.com?subject=Green%20Filter%20Support"
                className="link-block w-inline-block"
                style={{
                  opacity: 1,
                  transform:
                    "translateX(0px) translateY(0px) translateZ(0px) scaleX(1) scaleY(1) scaleZ(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skewX(0deg) skewY(0deg)",
                }}
              >
                <img src={img0} alt="img" className="icon-2 medium" />
                <div className="column-div">
                  <h4 className="blue simple">Email</h4>
                  <p>csr@greenfilter.com</p>
                </div>
              </a>
            </div>
            <div className="w-col w-col-6">
              <a
                href="tel:724-430-2050"
                className="link-block w-inline-block"
                style={{
                  opacity: 1,
                  transform:
                    "translateX(0px) translateY(0px) translateZ(0px) scaleX(1) scaleY(1) scaleZ(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skewX(0deg) skewY(0deg)",
                }}
              >
                <img src={img1} alt="img" className="icon-2 medium" />
                <div className="column-div">
                  <h4 className="blue simple">Phone</h4>
                  <p>724.430.2050</p>
                </div>
              </a>
            </div>
          </div>
        </div> */}

        {/* Nutshell Form Embed */}
        {/* <div id="nutshell-form-qJ5jY8">Loading contact form...</div> */}
        {/* <div id="wufoo-mlxmwl41vsidqt"> Fill out my <a href="https://bbai.wufoo.com/forms/mlxmwl41vsidqt" >online form</a>. </div> */}
      </ContactElement2Wrapper>
    </>
  );
};

export default ContactElement2;

const ContactElement2Wrapper = styled.div`
  padding-bottom: 125px;
  padding-top: 75px;
  background-color: #f3f3f3;
  text-align: center;
  position: relative;

  .icon-2.medium {
    width: 100px;
  }

  .icon-2 {
    display: block;
    width: 150px;
    margin-right: auto;
    margin-bottom: 0px;
    margin-left: auto;
    border: 0px none #fff;
    border-radius: 0px;
  }
`;
