import React, { Fragment } from "react";
import { connect } from "react-redux";
import { bool, object, func } from "prop-types";
import Modal from "react-modal";
import { withRouter } from "react-router";
import styled from "styled-components";
import Loader from "./../loader";
import Map from "./../map";
import { ModalHeader, BusinessHours, BusinessAddress } from "./components";
import { mobileBreakPoint } from "./../../constants/breakPoints";

import { shutterListingData } from "./../../actions/actions";
import { deleteParams } from "./../../utils/urlUtils";

const BusinessDetailsContainer = styled.div`
  margin-top: 15px;
  min-width: 450px;
  max-width: 700px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: ${mobileBreakPoint}) {
    flex-direction: column;
  }
`;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 800,
    minWidth: 450
  }
};

const DisplayModal = ({
  isLoadingListing,
  listing,
  history,
  shutterListingData,
  deleteParams
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
      isOpen={!!(isLoadingListing || listing)}
      onRequestClose={onCloseModal}
      style={customStyles}
    >
      <Loader isLoaded={!isLoadingListing} />
      {!isLoadingListing && listing && (
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

DisplayModal.defaultProps = {
  deleteParams,
  listing: null
};

DisplayModal.propTypes = {
  isLoadingListing: bool.isRequired,
  listing: object,
  history: object.isRequired,
  shutterListingData: func.isRequired,
  deleteParams: func.isRequired
};

const mapStateToProps = state => {
  return {
    isLoadingListing: state.location.isLoadingListing,
    listing: state.location.listing
  };
};

export { DisplayModal as Modal };

export default connect(mapStateToProps, {
  shutterListingData
})(withRouter(DisplayModal));
