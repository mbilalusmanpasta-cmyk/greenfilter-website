import React from "react";
import styled from "styled-components";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import star from "../../assets/fiveStar.png";
import profile0 from "../../assets/profiles/profile0.jpg";
import profile1 from "../../assets/profiles/profile1.jpg";
import profile2 from "../../assets/profiles/profile2.jpg";
import profile3 from "../../assets/profiles/profile3.jpg";
import Button1 from "../../components/Button1";
const HomeElement2 = () => {
  const testimonials = [
    {
      id: 0,
      reviews: [
        {
          id: 0,
          title: "Amazing Perfect Fit!",
          description:
            "Item looks great to say the least. The filter was an amazingly perfect fit for my vehicle. I drive a 2012 Ford Focus 2.0l and it changed out with the old stock filter in literally seconds. No having to wiggle it to fit and literally slid on the intake like butter. Tighten down the flat head bolt to hold it on tight and you're good to go! Great product!!",
          author: "Z. Wilford",
          location: "Charlotte, NC",
          imgSrc: profile0,
        },
        {
          id: 1,
          title: "The Filter Sounds Fantastic.",
          description:
            "This filter sounds fantastic, fits in the stock airbox iwth the cover on or off, and isn't terribly expensive. I really enjoy hearing the turbo spool and blowoff through the new filter. Others online have said they've experienced marginally better fuel economy but its too early to say for me. If it is true, its another added bonus.",
          author: "Bob Smith",
          location: "Pittsburgh, PA",
          imgSrc: profile1,
        },
        {
          id: 2,
          title: "Awesome & Re-usable",
          description:
            "Car can breathe! No but it really can now, the old paper filter is terrible. Replaced it with this one on my 2014 Ford Focus st and car even sounds better now. Can actually hear the intake induction sounds etc a lot more. You can also clean and re oil the filter to use it over and over. What a great bargain for a reusable filter.",
          author: "Alex Palmas",
          location: "Miami, FL",
          imgSrc: profile2,
        },
        {
          id: 3,
          title: "Modern, Advanced Designs",
          description:
            "Green Filter USA may be a relative newcomer to the world of performance filters, but their products are truly making a splash. Green Air Filters feature modern, advanced designs and materials to provide not only unmatched flow, but also easy maintenance and a super long lifespan. What you get with Green is improved horsepower, awesome torque, and an air filter that truly pays for itself.",
          author: "Jim Crawford",
          location: "Sacramento, CA",
          imgSrc: profile3,
        },
      ],
    },
    {
      id: 0,
      reviews: [
        {
          id: 0,
          title: "Amazing Perfect Fit!",
          description:
            "Item looks great to say the least. The filter was an amazingly perfect fit for my vehicle. I drive a 2012 Ford Focus 2.0l and it changed out with the old stock filter in literally seconds. No having to wiggle it to fit and literally slid on the intake like butter. Tighten down the flat head bolt to hold it on tight and you're good to go! Great product!!",
          author: "Z. Wilford",
          location: "Charlotte, NC",
          imgSrc: profile0,
        },
        {
          id: 1,
          title: "The Filter Sounds Fantastic.",
          description:
            "This filter sounds fantastic, fits in the stock airbox iwth the cover on or off, and isn't terribly expensive. I really enjoy hearing the turbo spool and blowoff through the new filter. Others online have said they've experienced marginally better fuel economy but its too early to say for me. If it is true, its another added bonus.",
          author: "Bob Smith",
          location: "Pittsburgh, PA",
          imgSrc: profile1,
        },
        {
          id: 2,
          title: "Awesome & Re-usable",
          description:
            "Car can breathe! No but it really can now, the old paper filter is terrible. Replaced it with this one on my 2014 Ford Focus st and car even sounds better now. Can actually hear the intake induction sounds etc a lot more. You can also clean and re oil the filter to use it over and over. What a great bargain for a reusable filter.",
          author: "Alex Palmas",
          location: "Miami, FL",
          imgSrc: profile2,
        },
        {
          id: 3,
          title: "Modern, Advanced Designs",
          description:
            "Green Filter USA may be a relative newcomer to the world of performance filters, but their products are truly making a splash. Green Air Filters feature modern, advanced designs and materials to provide not only unmatched flow, but also easy maintenance and a super long lifespan. What you get with Green is improved horsepower, awesome torque, and an air filter that truly pays for itself.",
          author: "Jim Crawford",
          location: "Sacramento, CA",
          imgSrc: profile3,
        },
      ],
    },
  ];
  return (
    <>
      <HomeElement2Wrapper>
        <div class="titles-div">
          <h1 class="main-header">Don't Take Our Word For It</h1>
          <p class="large-paragraph gray reviews">
            There are thousands of 5 star reviews from extremely happy customers
            that have experienced the Green Filter difference.
          </p>
        </div>
        <Carousel autoplay dots={false}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="main-vehicle-row w-row">
              {testimonial.reviews.map((review) => (
                <div key={review.id} className="w-col w-col-3">
                  <Link to="/" className="link-block white w-inline-block">
                    <img
                      alt="stars"
                      src={star}
                      width="124"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 124px, (max-width: 991px) 15vw, 124px"
                      className="image"
                    />
                    <h4 className="testimonial-heading">{review.title}</h4>
                    <p className="testimonial-paragraph">
                      {review.description}
                    </p>
                    <div className="column-div">
                      <div
                        className="person"
                        style={{ backgroundImage: `url(${review.imgSrc})` }}
                      />
                      <h6>{review.author}</h6>
                      <p class="tiny">{review.location}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </Carousel>
        <Button1 text="Find Your Greeen Filter" />
      </HomeElement2Wrapper>
    </>
  );
};

export default HomeElement2;
const HomeElement2Wrapper = styled.div`
  padding-top: 75px;
  padding-bottom: 100px;
  background-color: #f3f3f3;
  text-align: center;
  position: relative;

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
  .main-header {
    font-weight: 400;
  }
  .large-paragraph.gray.reviews {
    margin-bottom: 0px;
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
  .slick-slide > div {
    min-height: 700px;
  }
  .review-container {
    position: relative;
    background-repeat: no-repeat;
  }
  .main-vehicle-row {
    margin-top: 25px;
    margin-bottom: 0px;
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
    float: left;
    min-height: 1px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .link-block.white {
    display: block;
    width: auto;
    padding: 35px 30px;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 0 13px 0 rgb(0 0 0 / 12%);
    -webkit-transition: margin 500ms ease;
    transition: margin 500ms ease !important;
  }
  .link-block.white:hover {
    margin-top: -5px;
    margin-bottom: 0px;
  }
  .white {
    color: #fff;
    font-weight: 400;
    text-align: center;
  }
  .w-inline-block {
    max-width: 100%;
  }
  .image {
    display: block;
    margin-right: auto;
    margin-bottom: 15px;
    margin-left: auto;
    background-color: #00ad23;
  }
  .testimonial-heading {
    font-size: 18px;
    line-height: 23px;
    font-weight: 400;
  }
  .testimonial-paragraph {
    margin-top: 0px;
    padding-top: 3px;
    font-size: 14.6px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.25px;
  }
  .column-div {
    padding-right: 0px;
    padding-left: 0px;
    text-align: center;
  }
  .person {
    display: block;
    width: 60px;
    height: 60px;
    margin-top: 30px;
    margin-right: auto;
    margin-left: auto;
    border-radius: 500px;
    background-position: 50% -1px;
    background-size: cover;
  }
  h6 {
    margin-top: 10px;
    margin-bottom: 0px;
    font-family: Lato, sans-serif;
    color: #525252;
    font-size: 15px;
    line-height: 22px;
    font-weight: 400;
  }
  .tiny {
    margin-top: 2px;
    margin-bottom: 0px;
    font-size: 12px;
    line-height: 19px;
  }
`;
