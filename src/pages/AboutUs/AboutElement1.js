import React from "react";
import styled from "styled-components";
import bgImg from "../../assets/green-gradient-blue.webp";

const AboutElement1 = () => {
  return (
    <>
      <AboutElement1Wrapper bgImg={bgImg}>
        <div className="container-4 w-container">
          <div className="heading-11 vh-brand-main-header">
            Industry Leading Performance and Quality
          </div>
          <p className="large-paragraph gray left">
            Green Filter has earned a reputation as being a leading manufacturer
            of world-class filters used by many of the world renowned racing
            engineers, engine builders, drivers and enthusiasts that regularly
            "win on Sunday".
          </p>
          <br />
          <p className="large-paragraph gray left">
            <b>
              <i>
                “…We are proud to be the 2017 &amp; 18 back-to-back winner of
                the Rolex 24 Hours at Daytona and count on Green Filter to be
                included in our winning FORD ENGINES…” – Chip Ganassi.
              </i>
            </b>
          </p>
          <br />
          <p className="large-paragraph gray left">
            “Green Filter USA traces its roots to 2001 when it’s Founder Mark
            German utilized his racing experience, parts manufacturing
            expertise, and genuine passion for improving vehicle performance to
            bring easy to capture “horsepower” to the engine performance
            community by offering an air filter that outperformed those
            available. His goal was to provide a performance filter that would
            become highly accepted and sought after by racing professionals and
            leading engine performance engineers and builders of high
            performance vehicles.
          </p>
          <br />
          <p className="large-paragraph gray left">
            Mark grew up racing and knew there were opportunities to provide a
            filter that would allow higher airflow to generate “easy to produce”
            horsepower than those prevalent in the racing community while
            capturing the necessary standards for particulates over the many
            rugged and demanding dirt, sand and pavement race environments
            throughout the world.
          </p>
          <br />
          <p className="large-paragraph gray left">
            The Green Filter team listened to the racing professionals and
            leading engine performance manufacturers and utilized proprietary
            methods and components to engineer a performance filter designed to
            meet the industry’s very high standards for construction quality,
            durability, airflow, particulate capture, and reusability while
            being compatible with the new monitoring technologies included on
            today’s highly engineered engines.
          </p>
          <br />
          <p className="large-paragraph gray left">
            Green Filter is very proud to have accomplished our initial goal of
            becoming widely accepted within the racing community and
            manufacturer markets throughout the world! We have been lucky enough
            to be included in many of the racing teams engines that win on
            Sunday and are now ready to accomplish our biggest and most exciting
            goal of bringing this same expertise and winning tradition to the
            very serious and also demanding retail consumer. Whether you are
            looking for increased fuel mileage, a car performance enthusiast, a
            non-professional racer, or one of the many thousands that meet on
            the weekend to show off their cars and/or compare race times from
            weekend trips to the tracks throughout the world, Green Filter is
            working hard to offer you the same high performance filter for your
            specific needs.
          </p>
          <br />
          <p className="large-paragraph gray left">
            We are very excited to build you a leading high performance filter
            that:
          </p>
          <ul className="large-paragraph gray left">
            <li>Adds Horsepower in a simple installation process</li>
            <li>Increases mileage efficiency saving money at the pump</li>
            <li>
              Provides the high quality our racing and manufacturing teams
              demand
            </li>
            <li>Makes maintenance and cleaning easy</li>
            <li>
              Looks great when we open our engine covers and see that familiar
              Green Filter
            </li>
            <li>Does not interfere with engine monitoring systems</li>
          </ul>
          <br />
          <p className="large-paragraph gray left">
            We appreciate your patience as we extend our product line and learn
            what make and models our car enthusiast friends are looking to
            upgrade with Green Filter. We are constantly listening to your
            feedback and working hard to bring popular models and hopefully your
            specific filter need to market. If you do not see your specific make
            or model currently available, please drop us a note to let us know
            what you are looking for.
          </p>
          <br />
          <p class="large-paragraph gray left">
            The Green Filter Family members are extreme car enthusiasts. We
            appreciate and look forward to receiving your vehicle photos and
            hearing about your experiences with Green Filter. Let us know your
            horsepower gains, miles per gallon increases or just how your Green
            Filter looks in your vehicle. Whatever your passion is, we look
            forward to hearing about it. We will post many of the photos
            received so please take good pics! Go Green!{" "}
          </p>
          <br />
          <p class="large-paragraph gray left">
            Please say hello as you see our team out visiting with fellow
            enthusiasts and taking pictures at many of the race and vehicle
            gathering events.
          </p>
        </div>
      </AboutElement1Wrapper>
    </>
  );
};

export default AboutElement1;

const AboutElement1Wrapper = styled.div`
  position: relative;
  margin-top: 0%;
  padding: 5% 5% 15%;
  background-color: #fff;
  background-image: url(${(props) => props.bgImg});
  background-position: 50% 100%;
  background-size: contain;
  background-repeat: no-repeat;
  text-align: center;

  li {
    margin-bottom: 10px;
  }
`;
