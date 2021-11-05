import React from "react";
import styled from "styled-components";
import icon0 from "../../assets/icons8-wheel-100_1icons8-wheel-100.png";
import icon1 from "../../assets/icons8-free-shipping-100_1icons8-free-shipping-100.png";
import icon2 from "../../assets/icons8-communication-100_1icons8-communication-100.png";
import { Link } from "react-router-dom";
const HomeElement6 = () => {
  return (
    <>
      <HomeElement6Wrapper>
        <div className="w-container">
          <div className="titles-div">
            <h1 className="heading-10">The Green Filter Guarantee</h1>
            <p className="large-paragraph gray">
              As the leading American Made Manufacturer of Green Filters, we
              pride ourselves on our work ethic &amp; customer service.
            </p>
          </div>
          <div className="main-vehicle-row w-row">
            <div className="w-col w-col-4">
              <Link to="/" className="link-block">
                <img alt="icon" src={icon0} className="icon-2 medium" />
                <div class="column-div">
                  <h4 class="blue simple">100% Guaranteed</h4>
                  <p>
                    All Green High Filters are designed to last for the lifetime
                    of your vehicle and are covered by our&nbsp;Limited Lifetime
                    Warranty.
                  </p>
                </div>
              </Link>
            </div>
            <div className="w-col w-col-4">
              <Link to="/" className="link-block">
                <img alt="icon" src={icon1} className="icon-2 medium" />
                <div class="column-div">
                  <h4 class="blue simple">Shipping & Returns</h4>
                  <p>
                    We stand by our product and offer fast shipping along with
                    returns or exchanges, no questions asked.
                  </p>
                </div>
              </Link>
            </div>
            <div className="w-col w-col-4">
              <Link to="/" className="link-block">
                <img alt="icon" src={icon2} className="icon-2 medium" />
                <div class="column-div">
                  <h4 class="blue simple">Instant customer service</h4>
                  <p>
                    We're available through email and you can call us during our
                    normal business hours found on our contact page.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </HomeElement6Wrapper>
    </>
  );
};

export default HomeElement6;

const HomeElement6Wrapper = styled.div`
  padding-top: 75px;
  padding-bottom: 100px;
  background-color: #f3f3f3;
  text-align: center;
  position: relative;

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
  .titles-div {
    position: relative;
    left: 0%;
    display: block;
    width: 60%;
    margin-right: auto;
    margin-bottom: 50px;
    margin-left: auto;
    text-align: center;
    text-transform: none;
  }
  .heading-10 {
    font-weight: 400;
  }
  .large-paragraph.gray {
    color: #757575;
    text-align: center;
  }
  .large-paragraph {
    font-family: Lato, sans-serif;
    font-size: 18px;
    line-height: 28px;
    font-weight: 300;
  }

  .main-vehicle-row {
    margin-top: 25px;
    margin-bottom: 0px;
    margin-left: -10px;
    margin-right: -10px;
  }

  .w-row:before,
  .w-row:after {
    content: " ";
    display: table;
  }

  .w-col-4 {
    width: 33.33333333%;
  }
  .w-col {
    position: relative;
    min-height: 1px;
    padding-left: 10px;
    padding-right: 10px;
    display: inline-flex;
  }
  .link-block {
    width: auto;
    margin-bottom: 0px;
    padding: 0px;
    text-align: center;
    text-decoration: none;
    max-width: 100%;
    display: inline-block;
    opacity: 1;
    transform: translateX(0px) translateY(0px) translateZ(0px) scaleX(1)
      scaleY(1) scaleZ(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skewX(0deg)
      skewY(0deg);
  }

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
  .column-div {
    padding-right: 0px;
    padding-left: 0px;
    text-align: center;
  }
  .blue.simple {
    color: #000;
  }
`;
