import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import gradient from "../../assets/Asset-3blue.png";
import bgImg from "../../assets/milky-way-background.jpg";
import feature0 from "../../assets/features/img0.png";
import feature1 from "../../assets/features/img1.png";
import feature2 from "../../assets/features/img2.png";
import feature3 from "../../assets/features/img3.png";
import feature4 from "../../assets/features/img4.png";
import feature5 from "../../assets/features/img5.png";
const HomeElement3 = () => {
  const features = [
    {
      id: 0,
      qualities: [
        {
          id: 0,
          title: "Woven Cotton",
          description:
            "Deep pleats in the double-layered cotton create a 10-15% increase in filtration surface. This increase allows a greater volume of air to move more freely into your engine cylinders while maintaining superior filtration. Our specially designed cotton filter traps particles as small as 5 microns.",
          imgSrc: feature0,
        },
        {
          id: 1,
          title: "Steel Mesh",
          description:
            "Steel wire mesh encases the cotton filter, providing strength and dent resistance so you can be sure your Green High Performance Air Filter will work under the toughest conditions.",
          imgSrc: feature1,
        },
        {
          id: 2,
          title: "Proprietary Lubricant",
          description:
            "This oil creates a positive (+) magnetic charge, or ionic bond, with the filter's stainless steel mesh. The positive charge attracts the negatively (-) charged dust particles entering the filter, causing them to cling to the steel mesh and allowing the cotton to remain clear for maximum air flow.",
          imgSrc: feature2,
        },
      ],
    },
    {
      id: 1,
      qualities: [
        {
          id: 0,
          title: "Low Pressure Molding",
          description:
            "Other filters use a simple pressure-molded injection process to bond the perimeter rubber to the interior components. That method saves manufacturing time, but in the process, a considerable amount of rubber can seep onto the filtering surface. While it may not look like much, that spill-over rubber can restrict as much as 25% of the intended air flow. We use a four-step production process which virtually eliminates rubber seepage and maintains maximum air flow through the filter.",
          imgSrc: feature3,
        },
        {
          id: 1,
          title: "Custom Molds",
          description:
            "Our hand-molded, flexible rubber base offers an airtight seal and absorbs vibration. Our filter molds are created from an extensive on-site library of factory air boxes, with each part custom made on CNC machines. We don't reuse elements between filters or make universal molds, which means that when you buy a Green High Performance Air Filter you can be sure it will fit just like the one from the factory, with no modifications necessary.",
          imgSrc: feature4,
        },
        {
          id: 2,
          title: "In House Technology",
          description:
            "Long before we were manufacturing a single air filter for your street-legal machine, we produced hundreds for the international motorsports industry. Our production technology is always improving with the most cutting edge processes and equipment. Also being committed to serving you, our product line is ever expanding to cover all of your needs. We stand by our guarantee of providing customers with what we think is the best filtering technology available.",
          imgSrc: feature5,
        },
      ],
    },
  ];
  return (
    <>
      <HomeElement3Wrapper gradient={gradient} bgImg={bgImg}>
        <div className="tech w-container">
          <div className="titles-div">
            <h1 className="whtie">
              Green Filter's Technology Makes All The Difference
            </h1>
          </div>
          {features.map((feature) => (
            <div key={feature.id} className="main-vehicle-row w-row">
              {feature.qualities.map((quality) => (
                <div key={quality.id} className="w-col w-col-4">
                  <Link to="/" className="link-block w-inline-block">
                    <img
                      alt="feature"
                      src={quality.imgSrc}
                      className="icon-2"
                    />
                    <div className="column-div">
                      <h4 className="white">{quality.title}</h4>
                      <p className="white space">{quality.description}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </HomeElement3Wrapper>
    </>
  );
};

export default HomeElement3;

const HomeElement3Wrapper = styled.div`
  position: relative;
  margin-bottom: 1px;
  padding-top: 200px;
  padding-bottom: 100px;
  background-color: transparent;
  background-image: url(${(props) => props.gradient}),
    linear-gradient(180deg, rgba(0, 0, 0, 0.83), rgba(0, 0, 0, 0.83)),
    url(${(props) => props.bgImg});
  background-position: 0px -1px, 0px 0px, 50% 50%;
  background-size: 101%, auto, cover;
  background-repeat: no-repeat, repeat, repeat;

  .tech {
    margin-top: 100px;
    margin-bottom: 50px;
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
  .main-vehicle-row {
    margin-left: -10px;
    margin-right: -10px;
    margin-top: 25px;
    margin-bottom: 0px;
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
  }
  .w-inline-block {
    max-width: 100%;
    display: inline-block;
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
  .white {
    color: #fff;
    font-weight: 400;
    text-align: center;
  }
  .white.space {
    padding-right: 25px;
    padding-left: 25px;
    text-align: center;
  }
`;
