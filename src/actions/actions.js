import * as types from "../constants/ActionTypes";
import * as config from "../constants/config";

export const requestLocation = coords => ({
  type: types.REQUEST,
  coords
});

export const receiveLocation = (coords, json) => ({
  type: types.RECEIVE,
  location: json.data.location,
  regions: json.data.regions
});

export const requestListingData = () => ({
  type: types.REQUEST_LISTING_DATA
});

export const receiveListingData = listing => ({
  type: types.RECEIVE_LISTING_DATA,
  listing
});

export const error = e => ({
  type: types.ERROR,
  error: e,
  message: "Oops something went wrong"
});

export const locate = coords => async dispatch => {
  const params = [
    `include${encodeURIComponent("[]")}=regions.listings`,
    `latlng=${encodeURIComponent(`${coords.latitude},${coords.longitude}`)}`
  ];
  const url = `https://${config.API_HOST}/discovery/v1/location?${params.join(
    "&"
  )}`;

  const options = {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  };

  try {
    dispatch(requestLocation(coords));
    const response = await fetch(url, options);
    const data = await response.json();
    dispatch(receiveLocation(coords, data));
  } catch (e) {
    dispatch(error(e));
  }
};

export const fetchListing = wmid => async dispatch => {
  const url = `https://${config.API_HOST}/discovery/v1/listings/${wmid}`;
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  };

  try {
    dispatch(requestListingData());
    const response = await fetch(url, options);
    const {
      data: { listing }
    } = await response.json();

    dispatch(receiveListingData(listing));
  } catch (e) {
    dispatch(error(e));
  }
};

export const shutterListingData = () => dispatch => {
  dispatch({ type: types.SHUTTER_LISTING_DATA });
};
