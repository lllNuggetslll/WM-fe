import React, { Fragment } from "react";
import ListingCards from "./../listing_cards";
import styled from "styled-components";
import get from "lodash.get";

export const AppContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f2f5f5;
  padding-bottom: 20px;
`;

export const ListingGroups = styled.div`
  margin-top: 30px;
  h2 {
    text-align: left;
  }
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
        <div style={{ color: "#7E7979" }} key={label}>
          <i class={icon} />
          <strong> {label} </strong>
        </div>
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

export default Content;
