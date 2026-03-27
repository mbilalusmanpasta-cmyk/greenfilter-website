import React from "react";
import styled from "styled-components";
import youtube from "../../assets/yt.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HomeElement5 = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1230 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1230, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <HomeElement5Wrapper>
        <HeadingBlock>
          <TitleRow>
            <Headline>Featured Videos</Headline>
            <YouTubeBadge src={youtube} alt="YouTube" />
          </TitleRow>
          <Accent />
          <Subtitle>
            See Green Filter in action with real customer reviews, installation
            guides, and performance demonstrations.
          </Subtitle>
        </HeadingBlock>

        <CarouselWrapper>
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={false}
            arrows={true}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
          >
            <div className="carousel-item">
              <VideoCard>
                <iframe
                  width="100%"
                  height="220"
                  src="https://www.youtube.com/embed/qciHtf43Jhg"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </VideoCard>
            </div>
            <div className="carousel-item">
              <VideoCard>
                <iframe
                  width="100%"
                  height="220"
                  src="https://www.youtube.com/embed/om0RyH2ZXr8"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </VideoCard>
            </div>
            <div className="carousel-item">
              <VideoCard>
                <iframe
                  width="100%"
                  height="220"
                  src="https://www.youtube.com/embed/LOgLMW-Bdh4"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </VideoCard>
            </div>
            <div className="carousel-item">
              <VideoCard>
                <iframe
                  width="100%"
                  height="220"
                  src="https://www.youtube.com/embed/d7rETWxgZ8U"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </VideoCard>
            </div>
          </Carousel>
        </CarouselWrapper>
      </HomeElement5Wrapper>
    </>
  );
};

export default HomeElement5;

// Styled Components
const HeadingBlock = styled.div`
  max-width: 640px;
  margin: 0 auto 56px;
  text-align: center;

  @media (max-width: 767px) {
    margin-bottom: 40px;
    padding: 0 16px;
  }
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  @media (max-width: 479px) {
    flex-direction: column;
    gap: 8px;
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

const YouTubeBadge = styled.img`
  height: 32px;
  width: auto;
  opacity: 0.9;

  @media (max-width: 767px) {
    height: 24px;
  }
`;

const Accent = styled.div`
  width: 56px;
  height: 3px;
  background: #00ad23;
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

const VideoCard = styled.div`
  transition: transform 0.3s ease;
  overflow: hidden;
  height: 100%;
  width: 100%;

  &:hover {
    transform: translateY(-5px);
  }

  iframe {
    border-radius: 12px;
    display: block;
    width: 100%;
    border: none;
  }
`;

const CarouselWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 12px;
  position: relative;
  overflow: visible;

  @media (max-width: 767px) {
    padding: 0 8px;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #fff;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: #00ad23;
    border-color: #00ad23;
    box-shadow: 0 4px 12px rgba(0, 173, 35, 0.2);

    svg {
      color: #fff;
    }
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }

  svg {
    font-size: 20px;
    color: #1a1a1a;
    transition: color 0.3s ease;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;

    svg {
      font-size: 16px;
    }
  }
`;

const LeftArrow = styled(ArrowButton)`
  left: 16px;
`;

const RightArrow = styled(ArrowButton)`
  right: 16px;
`;

const CustomLeftArrow = ({ onClick }) => (
  <LeftArrow onClick={onClick} aria-label="Previous videos">
    <FaChevronLeft />
  </LeftArrow>
);

const CustomRightArrow = ({ onClick }) => (
  <RightArrow onClick={onClick} aria-label="Next videos">
    <FaChevronRight />
  </RightArrow>
);

const HomeElement5Wrapper = styled.section`
  background: transparent;
  padding: 80px 24px;

  @media (max-width: 1024px) {
    padding: 64px 24px;
  }

  @media (max-width: 767px) {
    padding: 48px 16px;
  }

  .carousel-item {
    padding: 0 16px;
    height: auto;
    width: 100%;
  }

  .react-multi-carousel-item {
    display: flex;
    justify-content: center;
    align-items: stretch;
  }
`;
