import React, { Fragment } from "react";
import { object, func } from "prop-types";
import ListingCards from "./../listing_cards";
import styled from "styled-components";
import get from "lodash.get";
import { backgroundGray, labelGray } from "./../../constants/colors";

export const AppContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${backgroundGray};
  padding-bottom: 20px;
`;

export const ListingGroups = styled.div`
  margin-top: 30px;
  h2 {
    text-align: left;
  }
`;

export const Label = styled.div`
  color: ${labelGray};
`;

const regionTypes = ["dispensary", "delivery", "doctor"];
const regionLabels = {
  delivery: {
    label: "Delivery Services",
    icon: "fas fa-car"
  },
  dispensary: {
    label: "Dispensary Storefronts",
    icon: "fas fa-cannabis"
  },
  doctor: {
    label: "Doctors",
    icon: "fas fa-stethoscope"
  }
};

const Content = ({ error, regions, fetchListing }) => {
  const getLabel = (listings, { label, icon }) => {
    if (get(listings, "listings").length) {
      return (
        <Label key={label}>
          <i className={icon} />
          <strong> {label} </strong>
        </Label>
      );
    }
    return <div />;
  };

  return (
    <AppContent>
      {error && <div> {error.message} </div>}
      {regions && (
        <Fragment>
          {regionTypes.map(regionType => (
            <ListingGroups key={regionType}>
              <h2>{getLabel(regions[regionType], regionLabels[regionType])}</h2>
              <ListingCards
                fetchListing={fetchListing}
                listings={get(regions[regionType], "listings")}
              />
            </ListingGroups>
          ))}
        </Fragment>
      )}
    </AppContent>
  );
};

Content.defaultProps = {
  regions: {}
};

Content.propTypes = {
  error: object.isRequired,
  regions: object,
  fetchListing: func.isRequired
};

export default Content;
