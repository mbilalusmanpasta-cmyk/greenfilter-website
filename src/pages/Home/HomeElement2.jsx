import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import profile0 from "../../assets/profiles/profile0.jpg";
import profile1 from "../../assets/profiles/profile1.jpg";
import profile2 from "../../assets/profiles/profile2.jpg";
import profile3 from "../../assets/profiles/profile3.jpg";
import Button1 from "../../components/Button1";
import { useHistory } from "react-router-dom";

const BRAND_GREEN = "#00ad23";

const REVIEWS = [
  {
    id: 0,
    title: "Amazing Perfect Fit!",
    text: "Item looks great to say the least. The filter was an amazingly perfect fit for my vehicle. I drive a 2012 Ford Focus 2.0l and it changed out with the old stock filter in literally seconds. No having to wiggle it to fit and literally slid on the intake like butter. Tighten down the flat head bolt to hold it on tight and you're good to go! Great product!!",
    author: "Z. Wilford",
    location: "Charlotte, NC",
    profile: profile0,
  },
  {
    id: 1,
    title: "The Filter Sounds Fantastic.",
    text: "This filter sounds fantastic, fits in the stock airbox with the cover on or off, and isn't terribly expensive. I really enjoy hearing the turbo spool and blowoff through the new filter. Others online have said they've experienced marginally better fuel economy but it's too early to say for me. If it is true, it's another added bonus.",
    author: "Bob Smith",
    location: "Pittsburgh, PA",
    profile: profile1,
  },
  {
    id: 2,
    title: "Awesome & Re-usable",
    text: "Car can breathe! No but it really can now, the old paper filter is terrible. Replaced it with this one on my 2014 Ford Focus ST and car even sounds better now. Can actually hear the intake induction sounds a lot more. You can also clean and re-oil the filter to use it over and over. What a great bargain for a reusable filter.",
    author: "Alex Palmas",
    location: "Miami, FL",
    profile: profile2,
  },
  {
    id: 3,
    title: "Modern, Advanced Designs",
    text: "Green Filter USA may be a relative newcomer to the world of performance filters, but their products are truly making a splash. Green Air Filters feature modern, advanced designs and materials to provide not only unmatched flow, but also easy maintenance and a super long lifespan. What you get with Green is improved horsepower, awesome torque, and an air filter that truly pays for itself.",
    author: "Jim Crawford",
    location: "Sacramento, CA",
    profile: profile3,
  },
];

const Section = styled.section`
  background: #fff;
  padding: 80px 24px;
  @media (max-width: 767px) {
    padding: 48px 0;
  }
`;

const HeadingBlock = styled.div`
  max-width: 640px;
  margin: 0 auto 56px;
  text-align: center;
  @media (max-width: 767px) {
    margin-bottom: 40px;
    padding: 0 16px;
  }
`;

const Headline = styled.h2`
  font-family: Lato, sans-serif;
  font-size: 32px;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.2;
  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

const Accent = styled.div`
  width: 56px;
  height: 3px;
  background: ${BRAND_GREEN};
  border-radius: 2px;
  margin: 14px auto 16px;
`;

const Subtitle = styled.p`
  font-family: Lato, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #666;
  margin: 0;
  line-height: 1.6;
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

const Grid = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  @media (max-width: 767px) {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    gap: 16px;
    padding: 0 16px 16px;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Card = styled.div`
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 12px;
  padding: 28px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.11);
  }
  @media (max-width: 767px) {
    flex: 0 0 85vw;
    max-width: 340px;
    scroll-snap-align: start;
  }
`;

const StarsRow = styled.div`
  display: flex;
  gap: 3px;
  color: ${BRAND_GREEN};
  font-size: 15px;
  margin-bottom: 14px;
`;

const ReviewTitle = styled.h3`
  font-family: Lato, sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 10px;
  line-height: 1.3;
  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

const ReviewText = styled.p`
  font-family: Lato, sans-serif;
  font-size: 14px;
  color: #555;
  line-height: 1.65;
  margin: 0 0 20px;
  flex: 1;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #f0f0f0;
  margin: 0 0 18px;
`;

const ProfileRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ProfileImg = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.span`
  font-family: Lato, sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #1a1a1a;
`;

const AuthorLocation = styled.span`
  font-family: Lato, sans-serif;
  font-size: 12px;
  color: #888;
  margin-top: 2px;
`;

const CTAWrapper = styled.div`
  margin-top: 48px;
  text-align: center;
  @media (max-width: 767px) {
    padding: 0 16px;
  }
`;

const HomeElement2 = () => {
  const history = useHistory();

  return (
    <Section>
      <HeadingBlock>
        <Headline>Don't Take Our Word For It</Headline>
        <Accent />
        <Subtitle>
          Thousands of 5-star reviews from extremely happy customers that have
          experienced the Green Filter difference.
        </Subtitle>
      </HeadingBlock>

      <Grid>
        {REVIEWS.map((review) => (
          <Card key={review.id}>
            <StarsRow aria-label="5 star review">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </StarsRow>
            <ReviewTitle>{review.title}</ReviewTitle>
            <ReviewText>{review.text}</ReviewText>
            <Divider />
            <ProfileRow>
              <ProfileImg src={review.profile} alt={review.author} />
              <ProfileInfo>
                <AuthorName>{review.author}</AuthorName>
                <AuthorLocation>{review.location}</AuthorLocation>
              </ProfileInfo>
            </ProfileRow>
          </Card>
        ))}
      </Grid>

      <CTAWrapper>
        <Button1
          text="Find Your Green Filter"
          isLink={true}
          handleClick={() => history.push("/shop-by-vehicle")}
        />
      </CTAWrapper>
    </Section>
  );
};

export default HomeElement2;
