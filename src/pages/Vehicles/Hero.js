import React from "react";
import styled from "styled-components";
import Button1 from "../../components/Button1";
import { Carousel } from "antd";
import VehicleElement3 from "./VehicleElement3";

const  HeroImage = ({image}) =>
{
  return(
    <HeroWrapper bgImg={image.imgSrc}>
      <div className="hero-text">
        <h1 className="hero-heading-1 left">
          {/* Groundbreaking air filters - engineered to enhance any{" "}
          {make.name}'s performance */}
          {image.text}
        </h1>
        {/* <Button1 text="Prove It!" /> */}
      </div>
    </HeroWrapper>
  )
}

const Hero = ({make}) => {
  return (
    <>
      <Carousel autoplay dots={false}>
        {
          make && make.imageGallery?.map((image)=>
          {
            <HeroImage image={image} />
          })
        }
        
        {/* <VehicleElement3 vehicle={props.vehicle} /> */}
      </Carousel>
    </>
  );
};

export default Hero;

const HeroWrapper = styled.div`
  position: relative;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  height: calc(500px + 167px);
  margin-top: 0px;
  padding-top: 0px;
  background-image: linear-gradient(180deg, #000, transparent 64%),
    url(${(props) => props.bgImg});
  background-size: auto, cover;
  background-position: 0px 0px, 50% 50%;

  .hero-text {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    margin-right: 10%;
    margin-bottom: 2%;
    margin-left: 5%;
    text-align: left;
  }

  .hero-heading-1.left {
    margin-bottom: 15px;
    text-align: left;
    text-shadow: 1px 1px 6px rgb(0 0 0 / 24%);
  }

  .hero-heading-1 {
    margin-bottom: 0px;
    font-family: Lato, sans-serif;
    color: #fff;
    font-size: 36px;
    font-weight: 400;
    text-align: center;
    letter-spacing: 0.75px;
  }
`;
