import React from "react";
import { string, number, shape } from "prop-types";
import styled from "styled-components";
import { StarRating } from "./../star_rating";

const CardInfoWrapper = styled.div`
  text-align: left;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  height: 64px;
  justify-content: space-between;

  @media only screen and (max-width: 750px) {
    margin-left: 0;
  }
`;

const Name = styled.div`
  font-weight: bold;
  opacity: 0.6;
  white-space: nowrap;
`;

const CardDetails = ({ listing }) => {
  return (
    <CardInfoWrapper>
      <div style={{ opacity: 0.4, display: "flex" }}>
        {listing.city} <hr style={{ margin: "0 5px" }} />{" "}
        {Math.round(listing.distance)}
        mi
      </div>
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
