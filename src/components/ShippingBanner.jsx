import React from "react";
import styled from "styled-components";

const ShippingBanner = () => {
  return (
    <BannerWrapper>
      <BannerContent>
        <BannerText>
          <MainText>
            <strong>Free Shipping</strong> on Orders $100+
          </MainText>
          <Separator>|</Separator>
          <CodeText>
            Use Code <CodeHighlight>FREESHIPPING2025</CodeHighlight>
          </CodeText>
        </BannerText>
      </BannerContent>
    </BannerWrapper>
  );
};

export default ShippingBanner;

const BannerWrapper = styled.div`
  background: #1a1a1a;
  color: #fff;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 173, 35, 0.3);
  animation: slideDown 0.4s ease-out;

  @keyframes slideDown {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const BannerContent = styled.div`
  padding: 10px 10%;
  text-align: center;

  @media (max-width: 767px) {
    padding: 8px 10%;
  }
`;

const BannerText = styled.div`
  font-family: Lato, sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.3px;
  line-height: 1.4;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;

  strong {
    font-weight: 600;
    color: #00ad23;
  }

  @media (max-width: 767px) {
    font-size: 13px;
    gap: 6px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const MainText = styled.span`
  white-space: nowrap;
`;

const Separator = styled.span`
  opacity: 0.5;
  margin: 0 4px;
  font-weight: 300;

  @media (max-width: 600px) {
    display: none;
  }
`;

const CodeText = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;

  @media (max-width: 600px) {
    width: 100%;
    justify-content: center;
    margin-top: 4px;
  }
`;

const CodeHighlight = styled.span`
  background-color: rgba(0, 173, 35, 0.12);
  padding: 3px 10px;
  border: 1px solid #00ad23;
  border-radius: 4px;
  font-weight: 700;
  letter-spacing: 0.5px;
  font-size: 13px;
  color: #00ad23;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(0, 173, 35, 0.2);
  }

  @media (max-width: 767px) {
    font-size: 12px;
    padding: 2px 8px;
  }
`;
