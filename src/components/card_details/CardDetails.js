import React from "react";
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

const CardDetails = ({ listing }) => {
  return (
    <CardInfoWrapper>
      <div style={{ opacity: 0.4, display: "flex" }}>
        {listing.city} <hr style={{ margin: "0 5px" }} />{" "}
        {Math.round(listing.distance)}
        mi
      </div>
      <div style={{ fontWeight: "bold", opacity: 0.6 }}>{listing.name}</div>
      <StarRating rating={listing.rating} />
    </CardInfoWrapper>
  );
};

export default CardDetails;
