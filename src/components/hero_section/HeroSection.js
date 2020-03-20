import React from "react";
import MapPin from "./../../icons/map-pin";
import Locate from "./../../icons/locate";
import styled from "styled-components";

export const HeroSection = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  border-bottom: 1px solid #e5e4e4;
  padding: 0 0 16px;

  h2 {
    font-weight: 300;
    color: #a4a2a2;
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
    }
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 16px;
`;

export const LocationSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  height: 80px;
`;

export const TextContent = styled.div`
  width: 100%;
  max-width: 1100px;
  height: auto;
  text-align: left;
  color: #a4a2a2;
  line-height: 25px;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 300;
`;

export const LocateButton = styled.a`
  width: 105px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: start;
  border: 1px solid #c2baba;
  color: #7e7979;
  border-radius: 3px;
  padding: 5px;
  font-size: 12px;
  cursor: pointer;
  text-transform: uppercase;

  svg {
    margin-right: 5px;
  }
`;

const Hero = ({ location, isLocating, locateMe }) => {
  return (
    <HeroSection>
      <ContentContainer>
        <LocationSection>
          <h2>
            <MapPin fill={"#7e7979"} width={"60px"} height={"40px"} />
            <span> {location ? location.name : ""} </span>
            <span> {isLocating && !location ? "...locating" : ""} </span>
          </h2>
          <LocateButton onClick={locateMe}>
            <Locate fill={"#7e7979"} />
            <span> Locate Me </span>
          </LocateButton>
        </LocationSection>
        <TextContent>
          Lorem Ipsum dolor sit amet, consectetur adispiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aligqua. Ut enim
          ad minim veniam, quis.
        </TextContent>
      </ContentContainer>
    </HeroSection>
  );
};

export default Hero;
