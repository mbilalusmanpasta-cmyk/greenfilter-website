import React from "react";
import styled from "styled-components";

const BRAND_GREEN = "#00ad23";

const VideoSection = () => {
  const videos = [
    {
      id: 1,
      url: "https://www.youtube.com/embed/45hb89IYyGA",
      title: "Green Filter Performance Video"
    },
    {
      id: 2,
      url: "https://www.youtube.com/embed/kGtcBCMH2oo",
      title: "Green Filter Installation Guide"
    }
  ];

  return (
    <VideoSectionWrapper>
      <Container>
        <HeadingBlock>
          <Headline>More Green Filter Videos</Headline>
          <Accent />
          <Subtitle>
            Explore installation guides, performance comparisons, and real-world testing results.
          </Subtitle>
        </HeadingBlock>

        <VideosGrid>
          {videos.map((video) => (
            <VideoCard key={video.id}>
              <VideoWrapper>
                <iframe
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </VideoWrapper>
            </VideoCard>
          ))}
        </VideosGrid>
      </Container>
    </VideoSectionWrapper>
  );
};

export default VideoSection;

const VideoSectionWrapper = styled.section`
  background: #fafafa;
  padding: 80px 24px;
  position: relative;

  @media (max-width: 1024px) {
    padding: 64px 24px;
  }

  @media (max-width: 767px) {
    padding: 48px 16px;
  }
`;

const Container = styled.div`
  max-width: 940px;
  margin: 0 auto;
`;

const HeadingBlock = styled.div`
  max-width: 720px;
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
  margin: 0 0 14px;
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
  margin: 0 auto 16px;

  @media (max-width: 767px) {
    margin-bottom: 12px;
  }
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

const VideosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const VideoCard = styled.div`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  background: #000;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;
