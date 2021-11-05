import React from "react";
import styled from "styled-components";
import bgImg from "../assets/milky-way-background.jpg";
import logo from "../assets/ecogflogo-p-500.png";
import { Link } from "react-router-dom";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
const Footer = () => {
  return (
    <>
      <FooterWrapper bgImg={bgImg}>
        <div className="w-container">
          <img
            alt="logo"
            src={logo}
            width="239"
            sizes="(max-width: 479px) 100vw, 239px"
            className="image-9"
          />
        </div>
        <div className="footer-container w-container">
          <div className="w-row">
            <div className="w-col w-col-2">
              <div className="column-div">
                <h4 class="footer-h1">Navigate</h4>
                <ul className="unordered-list">
                  <li>
                    <Link to="/" className="link">
                      Shop by Vehicle
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="link">
                      Why Go Green?
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="link">
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-col w-col-2">
              <div className="column-div">
                <h4 class="footer-h1">Guarantee</h4>
                <ul className="unordered-list">
                  <li>
                    <Link to="/" className="link">
                      Warranty Info
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="link">
                      Returns
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="link">
                      Cleaner & Care
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-col w-col-2">
              <div className="column-div">
                <h4 class="footer-h1">Resources</h4>
                <ul className="unordered-list">
                  <li>
                    <Link to="/" className="link">
                      Private Label
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="link">
                      How to Measure Filter
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="link">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-col w-col-3">
              <div className="column-div">
                <h4 class="footer-h1">Contact Us</h4>
                <ul className="unordered-list">
                  <li>+1 724.430.2050</li>
                  <li>
                    <a href="mailto:csr@greenfilter.com">csr@greenfilter.com</a>
                  </li>
                </ul>
              </div>
              <div>
                <a href="https://www.facebook.com/GreenFilterUSA/">
                  <img src={facebook} alt="social" className="image-2" />
                </a>
                <a href="https://www.instagram.com/greenfilterusa/">
                  <img src={instagram} alt="social" className="image-2" />
                </a>
                <a href="https://www.youtube.com/c/GreenFilter">
                  <img src={youtube} alt="social" className="image-2" />
                </a>
              </div>
            </div>
            <div className="w-col w-col-3">
              <div className="column-div">
                <h4 class="footer-h1">Join Our Mailing List</h4>
                <div className="form-block w-form">
                  <form id="email-form" name="email-form" className="form">
                    <input
                      type="text"
                      className="w-input"
                      maxlength="256"
                      name="email-2"
                      placeholder="Email Address"
                      id="email-2"
                      required=""
                    />
                    <input
                      type="submit"
                      value="Submit"
                      className="submit-button green w-button"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FooterWrapper>
    </>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  position: relative;
  margin-bottom: 0px;
  padding-top: 50px;
  padding-bottom: 0px;
  background-color: #000a1d;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)
    ),
    url(${(props) => props.bgImg});
  background-position: 0px 0px, 50% 50%, 0px 0px;
  background-size: auto, cover, 125px;

  .w-container {
    margin-left: auto;
    margin-right: auto;
    max-width: 940px;
  }
  .w-container:before,
  .w-container:after {
    content: " ";
    display: table;
  }
  .image-9 {
    text-align: center;
  }

  .footer-container {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .w-container .w-row {
    margin-left: -10px;
    margin-right: -10px;
  }
  .w-row:before,
  .w-row:after {
    content: " ";
    display: table;
  }
  .w-col-2 {
    width: 16.66666667%;
  }
  .w-col-3 {
    width: 25%;
  }
  .w-col {
    position: relative;
    min-height: 1px;
    padding-left: 10px;
    padding-right: 10px;
    display: inline-flex;
    flex-direction: column;
  }
  .column-div {
    padding-right: 0px;
    padding-left: 0px;
    text-align: center;
  }
  .footer-h1 {
    display: block;
    margin-bottom: 20px;
    color: #fff;
    text-align: left;
  }
  .unordered-list {
    color: #dcc3c3;
    text-align: left;
    padding-left: 0;
    list-style: none;
    margin-top: 0px;
    margin-bottom: 10px;
  }
  li {
    margin-bottom: 10px;
  }
  .link {
    font-family: Lato, sans-serif;
    color: #00ad23;
    font-weight: 400;
  }
  .image-2 {
    width: 35px;
    margin-right: 10px;
  }

  .form-block {
    margin-bottom: 25px;
  }
  .form {
    margin-bottom: 15px;
    text-align: left;
  }
  .w-input,
  .w-select {
    display: block;
    width: 100%;
    height: 38px;
    padding: 8px 12px;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 1.428571429;
    color: #333333;
    vertical-align: middle;
    background-color: #ffffff;
    border: 1px solid #cccccc;
  }
  .submit-button.green {
    background-color: #00ad23;
    background-image: linear-gradient(
      180deg,
      rgba(245, 255, 1, 0.65),
      transparent
    );
    border-radius: 5px;
    -webkit-appearance: button;
  }

  .w-button {
    display: inline-block;
    padding: 9px 15px;
    background-color: #3898ec;
    color: white;
    border: 0;
    line-height: inherit;
    text-decoration: none;
    cursor: pointer;
    border-radius: 0;
  }
`;
