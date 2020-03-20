import React, { Fragment } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import { withRouter } from "react-router";
import styled from "styled-components";
import Loader from "./../loader";
import Map from "./../map";
import { ModalHeader, BusinessHours, BusinessAddress } from "./components";

import { shutterListingData } from "./../../actions/actions";
import { deleteParams } from "./../../utils/urlUtils";

const BusinessDetailsContainer = styled.div`
  min-width: 450px;
  max-width: 700px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

const DisplayModal = ({
  isLoadingListing,
  listing,
  history,
  shutterListingData
}) => {
  const onCloseModal = () => {
    const url = deleteParams({
      param: "listing",
      location: history.location.search
    });

    shutterListingData();

    history.push(`?${url}`);
  };

  return (
    <Modal
      isOpen={isLoadingListing || listing}
      onAfterOpen={() => {}}
      onRequestClose={onCloseModal}
      contentLabel="Example Modal"
      style={{ maxWidth: 700 }}
    >
      <Loader isLoaded={!isLoadingListing} />
      {!isLoadingListing &&
        listing && (
          <Fragment>
            <ModalHeader {...{ listing, onCloseModal }} />
            <BusinessDetailsContainer>
              <BusinessAddress {...{ listing }} />
              <BusinessHours hours={listing.business_hours} />
            </BusinessDetailsContainer>
            <Map latitude={listing.latitude} longitude={listing.longitude} />
          </Fragment>
        )}
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    isLoadingListing: state.location.isLoadingListing,
    listing: state.location.listing
  };
};

export default connect(
  mapStateToProps,
  {
    shutterListingData
  }
)(withRouter(DisplayModal));
