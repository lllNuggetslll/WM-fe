import React from "react";
import { array, func, object } from "prop-types";
import { withRouter } from "react-router";
import { ListingCard } from "../listing_card";
import { setParams } from "./../../utils/urlUtils";

const ListingCards = ({ listings, fetchListing, history }) => {
  const onFetchListing = listing => {
    const url = setParams({
      param: "listing",
      query: listing.wmid,
      location: history.location.search
    });

    fetchListing(listing.wmid);

    history.push(`?${url}`);
  };

  return (
    <React.Fragment>
      {listings.map(listing => (
        <ListingCard
          data-testid="singleListingCard"
          onClick={() => onFetchListing(listing)}
          listing={listing}
          key={listing.id}
        />
      ))}
    </React.Fragment>
  );
};

ListingCards.defaultProps = {
  listings: []
};

ListingCards.propTypes = {
  listings: array,
  fetchListing: func.isRequired,
  history: object.isRequired
};

export default withRouter(ListingCards);
