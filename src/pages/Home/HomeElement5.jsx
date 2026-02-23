import React from "react";
import styled from "styled-components";
import youtube from "../../assets/yt.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
            showDots={true}
          >
            <div className="carousel-item">
              <VideoCard>
                <iframe
                  width="100%"
                  height="220"
                  src="https://www.youtube.com/embed/GT9H2omp1WE"
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
            {/* <div className="carousel-item">
              <iframe
                // width="460"
                width="100%"
                height="250"
                src="https://www.youtube.com/embed/k5NcFQDlZ4g"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div> */}
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
    margin-bottom: 36px;
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
    font-size: 22px;
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

  @media (max-width: 767px) {
    padding: 0 8px;
  }
`;

const HomeElement5Wrapper = styled.section`
  background: transparent;
  padding: 72px 24px 96px;

  @media (max-width: 1024px) {
    padding: 56px 24px 80px;
  }

  @media (max-width: 767px) {
    padding: 48px 0 64px;
  }

  .carousel-item {
    padding: 0 16px 24px;
    height: auto;
    width: 100%;
  }

  .react-multi-carousel-item {
    display: flex;
    justify-content: center;
    align-items: stretch;
  }

  .react-multiple-carousel__arrow {
    display: none;
  }

  .react-multi-carousel-dot--active button {
    background: #00ad23 !important;
    transform: scale(1.2);
  }

  .react-multi-carousel-dot button {
    width: 10px;
    height: 10px;
    margin: 0 6px;
    background: #d0d0d0;
    border: none;
    border-radius: 50%;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      background: #00ad23;
      opacity: 0.7;
    }
  }

  .react-multi-carousel-dot-list {
    margin-top: 48px;
    padding-bottom: 0;
    bottom: 0;
  }
`;
