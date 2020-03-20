import {
  REQUEST,
  RECEIVE,
  ERROR,
  REQUEST_LISTING_DATA,
  RECEIVE_LISTING_DATA,
  SHUTTER_LISTING_DATA
} from "../constants/ActionTypes";

const initialState = {
  isLocating: false,
  location: null,
  regions: null,
  listing: null,
  isLoadingListing: false
};

const locationListing = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        isLocating: true
      };
    case RECEIVE:
      return {
        ...state,
        isLocating: false,
        location: action.location,
        regions: action.regions
      };
    case ERROR:
      return {
        ...state,
        isLocating: false,
        error: action.error
      };
    case REQUEST_LISTING_DATA:
      return {
        ...state,
        isLoadingListing: true
      };
    case RECEIVE_LISTING_DATA:
      return {
        ...state,
        listing: action.listing,
        isLoadingListing: false
      };
    case SHUTTER_LISTING_DATA:
      return {
        ...state,
        listing: null
      };

    default:
      return state;
  }
};

export default locationListing;
