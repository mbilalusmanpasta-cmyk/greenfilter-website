import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img0_0 from "../../assets/gear-wheel-3109067.png";
import img0_1 from "../../assets/gear-wheel-310906.png";
import img1_0 from "../../assets/Asset-1goshadowicon.png";
import img1_1 from "../../assets/fuel-160535.png";
import img2_0 from "../../assets/usa-1177272.png";
import img3_0 from "../../assets/green-filter-icon.png";
const HomeElement4 = () => {
  return (
    <>
      <HomeElement4Wrapper
        img0_0={img0_0}
        img0_1={img0_1}
        img1_0={img1_0}
        img1_1={img1_1}
        img2_0={img2_0}
        img3_0={img3_0}
      >
        <div className="center airflow w-container">
          <div className="titles-div">
            <h1 className="heading-9">It's not just better airflow</h1>
            <p className="large-paragraph gray center">
              It's not just about immediate gains, but the&nbsp; long term ones
              as well.
            </p>
          </div>
          <div className="main-vehicle-row w-row">
            <div className="w-col w-col-3">
              <Link to="/" className="link-block _01">
                <div className="column-div">
                  <h1 className="white left">
                    Better
                    <br />
                    Performance
                  </h1>
                  <p className="large-paragraph gray left">
                    Dynamometer bench testing on an 1800cc 4-cylinder engine
                    showed that a Green High Performance Air Filter provided a
                    6.7% increase in horsepower over the same vehicle with a
                    stock paper air filter.
                  </p>
                </div>
              </Link>
            </div>
            <div className="w-col w-col-3">
              <Link to="/" className="link-block _02">
                <div className="column-div">
                  <h1 className="white left">
                    Fuel
                    <br />
                    Efficiency
                  </h1>
                  <p className="large-paragraph gray left">
                    In an independent test performed on a 2008 Chevy, a 5.6%
                    increase in fuel mileage was shown over the same vehicle
                    with a stock paper air filter. This is the same test that
                    manufacturers perform to estimate fuel economy on new
                    vehicles.
                  </p>
                </div>
              </Link>
            </div>
            <div className="w-col w-col-3">
              <Link to="/" className="link-block _03">
                <div className="column-div">
                  <h1 className="white left">
                    Made
                    <br />
                    In The USA
                  </h1>
                  <p className="large-paragraph gray left">
                    All Green Filters are made by hand in our Uniontown,
                    Pennsylvania facility with materials manufactured in the
                    USA.
                  </p>
                </div>
              </Link>
            </div>
            <div className="w-col w-col-3">
              <Link to="/" className="link-block _04">
                <div className="column-div">
                  <h1 className="white left">
                    Lasts a
                    <br />
                    Lifetime
                  </h1>
                  <p className="large-paragraph gray left">
                    Our filters are designed to be cleaned (with our
                    biodegradable cleaner and synthetic oil) and reused. Not
                    only will you notice a difference in your wallet, but you'll
                    be helping the environment as well.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </HomeElement4Wrapper>
    </>
  );
};

export default HomeElement4;

const HomeElement4Wrapper = styled.div`
  padding-top: 75px;
  padding-bottom: 100px;
  background-color: #f3f3f3;
  text-align: center;
  position: relative;

  .center.airflow {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .center {
    text-align: center;
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

  .heading-9 {
    font-weight: 400;
  }

  .large-paragraph.gray.center {
    text-align: center;
  }
  .large-paragraph.gray {
    color: #757575;
    text-align: center;
  }
  .large-paragraph {
    font-family: Lato, sans-serif;
    color: #fff;
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
  .w-col-3 {
    width: 25%;
  }
  .w-col {
    position: relative;
    min-height: 1px;
    padding-left: 10px;
    padding-right: 10px;
    display: inline-flex;
  }
  .link-block {
    opacity: 1;
    transform: translateX(0px) translateY(0px) translateZ(0px) scaleX(1)
      scaleY(1) scaleZ(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skewX(0deg)
      skewY(0deg);
    border-radius: 5px;
    display: flex;
    height: auto;
    padding: 150px 20px 5px;
    -webkit-box-align: end;
    align-items: flex-end;
    background-color: #fff;
    width: auto;
    box-shadow: 0 0 13px 0 rgb(0 0 0 / 12%);
    transition: transform 500ms ease !important;
  }
  a:hover {
    transform: translateY(-5px);
  }
  ._01 {
    background-image: url(${(props) => props.img0_0}),
      linear-gradient(180deg, hsla(0, 0%, 100%, 0.83), hsla(0, 0%, 100%, 0.83)),
      url(${(props) => props.img0_1});
    background-position: 0px 17%, 0px 0px, -19px -90px;
    background-size: 175px, auto, 300px;
    background-repeat: no-repeat, repeat, no-repeat;
  }
  ._02 {
    background-image: url(${(props) => props.img1_0}),
      linear-gradient(180deg, hsla(0, 0%, 100%, 0.83), hsla(0, 0%, 100%, 0.83)),
      url(${(props) => props.img1_1});
    background-position: 0px 14px, 0px 0px, 49px -41px;
    background-size: 225px, auto, 300px;
    background-repeat: no-repeat, repeat, no-repeat;
    color: #00ad23;
  }
  ._03 {
    background-color: #fff;
    background-image: url(${(props) => props.img2_0});
    background-position: -47% -12px;
    background-size: 250px;
    background-repeat: no-repeat;
  }
  ._04 {
    background-image: url(${(props) => props.img3_0}),
      linear-gradient(180deg, hsla(0, 0%, 100%, 0.81), hsla(0, 0%, 100%, 0.81)),
      linear-gradient(180deg, transparent, transparent);
    background-position: 163% -28px, 0px 0px, 0px 0px;
    background-size: 200px, auto, auto;
    background-repeat: no-repeat, repeat, repeat;
  }
  .column-div {
    padding-right: 0px;
    padding-left: 0px;
    text-align: center;
  }
  .white.left {
    color: #000a1d;
    font-size: 24px;
    line-height: 30px;
    font-weight: 400;
    text-align: left;
  }
  .large-paragraph.gray.left {
    font-size: 16px;
    line-height: 26px;
    text-align: left;
  }
  .large-paragraph.gray {
    color: #757575;
    text-align: center;
  }
  .large-paragraph {
    font-family: Lato, sans-serif;
  }
`;
