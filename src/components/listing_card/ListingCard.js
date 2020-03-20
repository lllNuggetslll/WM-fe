import React from "react";
import { object, func } from "prop-types";
import Avatar from "../avatar";
import styled from "styled-components";
import get from "lodash.get";
import CardDetails from "./../card_details";
import { mobileBreakPoint } from "./../../constants/breakPoints";

const CardWrapper = styled.div`
  background: white;
  width: 100%;
  height: 66px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  width: 700px;
  padding: 20px;
  box-shadow: 1px 1px 5px -1px rgba(120, 120, 120, 1);
  border-radius: 3px 3px 0 0;
  cursor: pointer;

  &:hover {
    box-shadow: 1px 1px 5px 1px rgba(120, 120, 120, 1);
  }

  @media only screen and (max-width: ${mobileBreakPoint}) {
    width: 380px;
    flex-direction: row-reverse;
    justify-content: space-between;
    border-radius: 3px;
    align-items: initial;
    height: 100px;
  }
`;

const ListingCard = ({ listing, onClick }) => (
  <CardWrapper data-testid="CardWrapper" onClick={onClick}>
    <Avatar img={`${get(listing, "avatar_image.small_url")}`} />
    <CardDetails {...{ listing }} />
  </CardWrapper>
);

ListingCard.propTypes = {
  listing: object.isRequired,
  onClick: func.isRequired
};

export default ListingCard;
