import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import logo from "../assets/gflogo.png";
import paypal from "../assets/payments/paypal.png";
import visa from "../assets/payments/visa.png";
import mastercard from "../assets/payments/master.png";
import amex from "../assets/payments/express.png";
const Footer = () => {
  return (
    <>
      <FooterWrapper>
        {/* <div className="w-container" style={{ padding: "0 20px" }}>
          <img
            alt="logo"
            src={logo}
            width="239"
            sizes="(max-width: 479px) 100vw, 239px"
            className="image-9"
          />
        </div> */}
        <div className="footer-container w-container">
          <div className="w-row">
            <div className="w-col w-col-2">
              <div className="column-div">
                <h4 class="footer-h1">Navigate</h4>
                <ul className="unordered-list">
                  <li>
                    <Link to="/shop-by-vehicle" className="link">
                      Shop by Vehicle
                    </Link>
                  </li>
                  <li>
                    <Link to="/why-go-green" className="link">
                      Why Go Green?
                    </Link>
                  </li>
                  <li>
                    <Link to="/about-us" className="link">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/faqs" className="link">
                      FAQs
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
                    <Link to="/our-guarantee" className="link">
                      Warranty Info
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-guarantee" className="link">
                      Returns
                    </Link>
                  </li>
                  <li>
                    <Link to="/cleaner-care" className="link">
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
                    <Link to="/private-label" className="link">
                      Private Label
                    </Link>
                  </li>
                  <li>
                    <Link to="/measure-filter" className="link">
                      How to Measure Filter
                    </Link>
                  </li>
                  <li>
                    <Link to="/careers" className="link">
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
        <div className="credit-sec">
          <div className="footer-bottom-left">
            <img src={logo} alt="Green Filter Logo" className="footer-logo" />
            <span className="copyright">Copyright © 2025 Green Filter USA. All Rights Reserved.</span>
            <Link to="/privacy-policy" className="link _15 grey">
              Privacy Policy
            </Link>
            <Link to="/sitemap" className="link _15 grey">
              Sitemap
            </Link>
          </div>
          <div className="footer-bottom-right">
            <div className="payment-icons">
              <img
                src={paypal}
                alt="PayPal"
                className="payment-icon"
              />
              <img
                src={visa}
                alt="Visa"
                className="payment-icon"
              />
              <img
                src={mastercard}
                alt="Mastercard"
                className="payment-icon"
              />
              <img
                src={amex}
                alt="American Express"
                className="payment-icon"
              />
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
  padding: 60px 10% 0;
  background-color: #1a1a1a;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  .w-container {
    margin-left: auto;
    margin-right: auto;
    max-width: 1280px;
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
    padding-top: 0;
    padding-bottom: 0;
  }

  // .w-container .w-row {
  //   margin-left: -10px;
  //   margin-right: -10px;
  // }
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
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 0;
    display: inline-flex;
    flex-direction: column;
  }
  .column-div {
    padding-right: 0px;
    padding-left: 0px;
    padding-bottom: 0px;
    text-align: left;
  }
  .footer-h1 {
    display: block;
    margin-bottom: 18px;
    margin-top: 0;
    color: #fff;
    text-align: left;
    font-family: Lato, sans-serif;
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 0.8px;
    text-transform: uppercase;
  }
  .unordered-list {
    color: #999;
    text-align: left;
    padding-left: 0;
    list-style: none;
    margin-top: 0px;
    margin-bottom: 0;
    line-height: 1.8;
  }
  li {
    margin-bottom: 10px;
  }

  .unordered-list a {
    color: #999;
    font-family: Lato, sans-serif;
  }

  .unordered-list a:hover {
    color: #00ad23;
  }
  .link {
    font-family: Lato, sans-serif;
    color: #999;
    font-weight: 400;
    font-size: 14px;
    text-decoration: none;
    transition: color 0.2s ease;
  }
  .image-2 {
    width: 32px;
    height: 32px;
    margin-right: 16px;
    margin-top: 12px;
    opacity: 0.6;
    transition: all 0.3s ease;
  }

  .image-2:hover {
    opacity: 1;
    transform: translateY(-2px);
  }

  .form-block {
    margin-bottom: 0;
  }
  .form {
    margin-bottom: 0;
    text-align: left;
  }
  .w-input,
  .w-select {
    display: block;
    width: 100%;
    padding: 12px 16px;
    margin-bottom: 10px;
    font-size: 14px;
    font-family: Lato, sans-serif;
    line-height: 1.428571429;
    color: #fff;
    vertical-align: middle;
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
  }

  .w-input::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  .w-input:focus,
  .w-select:focus {
    border-color: rgba(0, 173, 35, 0.6);
    background-color: rgba(255, 255, 255, 0.08);
    outline: none;
  }
  .submit-button.green {
    background-color: #00ad23;
    background-image: none;
    border-radius: 4px;
    -webkit-appearance: button;
    padding: 12px 24px;
    font-weight: 600;
    font-family: Lato, sans-serif;
    font-size: 14px;
    width: 100%;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
  }

  .submit-button.green:hover {
    background-color: #00c428;
    transform: translateY(-1px);
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

  .credit-sec {
    width: 100%;
    padding: 24px 10%;
    margin-top: 50px;
    background-color: rgba(0, 0, 0, 0.4);
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }

  .footer-bottom-left {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  .footer-bottom-right {
    display: flex;
    align-items: center;
  }

  .footer-logo {
    height: 35px;
    width: auto;
  }

  .payment-icons {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .payment-icon {
    height: 36px;
    width: auto;
    background: #fff;
    padding: 8px 14px;
    border-radius: 4px;
    object-fit: contain;
  }

  .copyright {
    color: #999;
    font-size: 14px;
    font-family: Lato, sans-serif;
    font-weight: 400;
    white-space: nowrap;
  }

  .link._15.grey {
    color: #999;
    font-size: 14px;
    font-family: Lato, sans-serif;
    font-weight: 400;
    white-space: nowrap;
    text-decoration: none;
  }

  .link._15.grey:hover {
    color: #fff;
    text-decoration: underline;
  }

  .link:hover {
    color: #00ad23;
    text-decoration: none;
  }

  @media screen and (max-width: 767px) {
    padding: 40px 5% 0;

    .w-row {
      display: flex;
      flex-direction: column;
    }

    .w-col-2,
    .w-col-3 {
      width: 100%;
      margin-bottom: 28px;
      padding-left: 0;
      padding-right: 0;
    }

    .column-div {
      text-align: left;
    }

    .footer-h1 {
      text-align: left;
      margin-bottom: 16px;
    }

    .unordered-list {
      text-align: left;
      margin-bottom: 0;
    }

    .credit-sec {
      padding: 24px 5%;
      margin-top: 24px;
      flex-direction: column;
      gap: 20px;
    }

    .footer-bottom-left {
      flex-direction: column;
      text-align: center;
      gap: 12px;
    }

    .footer-bottom-right {
      width: 100%;
      justify-content: center;
    }

    .payment-icons {
      flex-wrap: wrap;
      justify-content: center;
      gap: 8px;
    }

    .payment-icon {
      height: 30px;
      padding: 6px 12px;
    }

    .footer-logo {
      height: 40px;
    }

    .link._15.grey {
      font-size: 13px;
      color: #999;
    }

    .copyright {
      font-size: 13px;
      color: #999;
      white-space: normal;
      text-align: center;
    }

    .image-2 {
      margin-right: 12px;
      margin-left: 0;
      margin-top: 16px;
    }
  }

  @media screen and (max-width: 991px) {
    .w-container {
      max-width: 100%;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    .w-col-2,
    .w-col-3 {
      width: 50%;
      margin-bottom: 30px;
    }
  }
`;
