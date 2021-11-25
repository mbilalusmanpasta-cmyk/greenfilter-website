import React from "react";
import styled from "styled-components";
import bgImg from "../../assets/green-gradient-blue.png";
import filter0 from "../../assets/cleaner-p-800.png";
import Button1 from "../../components/Button1";
const CCElement1 = () => {
  return (
    <CCElement1Wrapper bgImg={bgImg}>
      <div className="cleaner w-container">
        <div className="main-vehicle-row w-row">
          <div className="column-4 w-col w-col-6">
            <img
              src={filter0}
              width="403"
              sizes="(max-width: 479px) 86vw, (max-width: 767px) 403px, (max-width: 991px) 43vw, 403px"
              alt=""
            />
          </div>
          <div className="column-6 w-col w-col-6">
            <div className="column-div left">
              <h1 className="product-header">Green Filter Cleaner</h1>
              <h1 className="product-descr">Green Filter - Part 2000</h1>
              <p className="large-paragraph gray left">
                Keep your Green High Performance Air Filter in perfect condition
                with our specially formulated Recharge Oil (8 oz.) and Cleaner
                Spray (12 oz.).&nbsp; Our Recharge Oil is designed to not damage
                any vehicle sensors and ensure that your Green Filter can trap
                the smallest dirt particles before they reach your engine.
              </p>
              <div
                className="shopify-buy-frame--product"
                style={{ maxWidth: 120 }}
              >
                <div className="price-text">
                  <span className="discounted-price">$17.99</span>
                  <span className="actual-price">$21.03</span>
                </div>
                <Button1 text="ADD TO CART" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="titles-div">
        <h1 className="main-header">Green Filter Cleaning Instructions</h1>
        <p class="large-paragraph gray reviews">
          We recommend that you visually inspect your Green High Performance Air
          Filter at every oil change. As a general rule, a Green High
          Performance Air Filter should be cleaned at every 30,000 miles;
          however, this interval can be greatly influenced by your environment
          and driving conditions. In dusty areas, you may need to clean the
          filter more often.
        </p>
        <div style={{ marginTop: 20 }}>
          <Button1 text="Download Cleaning Instructions" />
        </div>
      </div>
      <div className="div-block-3">
        <div
          style={{ paddingTop: "56.17021276595745%" }}
          className="video w-video w-embed"
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/d7rETWxgZ8U"
            title="YouTube video player"
            frameborder="0"
            allow="autoplay; encrypted-media;"
            allowfullscreen
          ></iframe>
        </div>
        <div className="titles-div top">
          <h1 class="heading-2">Watch A Green Filter Cleaning Demo</h1>
          <p class="large-paragraph w-hidden-main w-hidden-medium w-hidden-small w-hidden-tiny">
            Watch President
          </p>
          <div class="gradient"></div>
        </div>
      </div>
      <div className="main-vehicle-row w-row">
        <div className="c1 w-col w-col-6">
          <div>
            <div className="column-div">
              <h1 className="white left">1. PRE-CLEANING</h1>
              <p className="large-paragraph gray left">
                Tap the filter to remove excess dirt.
              </p>
            </div>
            <div className="column-div">
              <h1 className="white left">2. APPLY CLEANER</h1>
              <p className="large-paragraph gray left">
                Spray the filter with Green Filter Cleaner and allow the
                solution to soak in for about 15 minutes.
              </p>
              <div className="tiny-text">
                * Never use strong detergents, high pressure water, or gasoline.
              </div>
            </div>
            <div className="column-div">
              <h1 className="white left">3. RINSE</h1>
              <p className="large-paragraph gray left">
                Rinse the filter with warm water, clean side to dirty side to
                flush out the dirt. Do NOT use extreme high pressure.
              </p>
            </div>
          </div>
        </div>
        <div class="c2 w-col w-col-6">
          <div>
            <div class="column-div">
              <h1 class="white left">4. DRYING</h1>
              <p class="large-paragraph gray left">
                Allow the filter to dry naturally. Try to avoid heat because it
                might shrink the cotton.
              </p>
            </div>
            <div className="column-div">
              <h1 className="white left">5. APPLY OIL</h1>
              <p className="large-paragraph gray left">
                Re-oil the filter using&nbsp;Green Filter Oil&nbsp;by using 1
                spray per 2 square inches of filter. Take care to not over-oil
                your filter.
              </p>
              <div className="tiny-text">
                * Never use motor oil, transmission fluid, WD-40®, or any other
                brand of filter oil as these may damage your Green Filter. Use
                only genuine Green Filter Oil.
              </div>
            </div>
          </div>
        </div>
      </div>
    </CCElement1Wrapper>
  );
};

export default CCElement1;

const CCElement1Wrapper = styled.div`
  position: relative;
  margin-top: 0%;
  padding: 5% 5% 20%;
  background-color: #fff;
  background-image: url(${(props) => props.bgImg});
  background-position: 50% 100%;
  background-size: contain;
  background-repeat: no-repeat;
  text-align: center;

  .cleaner {
    margin-top: 50px;
    margin-bottom: 100px;
    margin-left: auto;
    margin-right: auto;
    max-width: 940px;
  }

  .product-header {
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 24px;
    line-height: 24px;
    font-weight: 400;
  }
  .product-descr {
    display: inline-block;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #999;
    font-size: 20px;
    line-height: 20px;
  }

  .shopify-buy-frame--product {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .price-text {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .discounted-price {
    font-size: 15px;
    color: #4a4a4a;
    display: inline-block;
  }
  .actual-price {
    font-size: 13px;
    color: #4a4a4a;
    display: inline-block;
    tetx-decoration: line-through;
    padding-left: 7px;
    opacity: 0.76;
  }
  .shopify-buy-frame--product button {
    padding: 7px !important;
    font-size: 13px;
    margin-top: 20px;
    transition: background-color 200ms ease;
  }
  .shopify-buy-frame--product button:hover {
    background-color: #003ead !important;
  }

  .div-block-3 {
    position: relative;
    height: auto;
    margin-top: 50px;
  }
  .video {
    height: 250px;
  }
  .w-video {
    width: 100%;
    position: relative;
    padding: 0;
  }

  .w-video iframe,
  .w-video object,
  .w-video embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .heading-2 {
    position: relative;
    z-index: 999;
    color: #fff;
    font-weight: 300;
  }
  .w-hidden-main {
    display: none !important;
  }

  .gradient {
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    width: auto;
    height: 135%;
    background-image: -webkit-linear-gradient(
      270deg,
      rgba(0, 0, 0, 0.89) 32%,
      transparent
    );
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.89) 32%,
      transparent
    );
  }
`;
