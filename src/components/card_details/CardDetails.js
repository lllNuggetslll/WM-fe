import React from "react";
import { string, number, shape } from "prop-types";
import styled from "styled-components";
import { StarRating } from "./../star_rating";
import { mobileBreakPoint } from "./../../constants/breakPoints";

const CardInfoWrapper = styled.div`
  text-align: left;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  height: 75px;
  justify-content: space-between;

  @media only screen and (max-width: ${mobileBreakPoint}) {
    margin-left: 0;
  }
`;

const Name = styled.div`
  font-weight: bold;
  opacity: 0.6;


  @media only screen and (max-width: ${mobileBreakPoint}) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 279px;
  }
}
`;

const LocationAndDistance = styled.div`
  opacity: 0.4;
  display: flex;
`;

const CardDetails = ({ listing }) => {
  return (
    <CardInfoWrapper>
      <LocationAndDistance>
        {listing.city} <hr style={{ margin: "0 5px" }} />{" "}
        {Math.round(listing.distance)}
        mi
      </LocationAndDistance>
      <Name>{listing.name}</Name>
      <StarRating rating={listing.rating} />
    </CardInfoWrapper>
  );
};

CardDetails.propTypes = {
  listing: shape({
    city: string.isRequired,
    distance: number.isRequired,
    name: string.isRequired,
    rating: number.isRequired
  }).isRequired
};

export default CardDetails;
