import * as types from "../constants/ActionTypes";
import mockLocationResponse from "../__test__/mocks/location-mock.json";
import mockListingResponse from "../__test__/mocks/listing_mock.json";
import locationReducer, { initialState } from "./location";

const newReducer = action => locationReducer(initialState, action);
const newTestState = state => ({ ...initialState, ...state });

describe("location reducer", () => {
  it("should return the initialState", () => {
    expect(newReducer({ type: null })).toEqual(initialState);
  });

  it("should return a payload for REQUEST", () => {
    const testAction = {
      type: types.REQUEST
    };
    const testState = newTestState({
      isLocating: true
    });

    expect(newReducer(testAction)).toEqual(testState);
  });

  it("should return a payload for RECEIVE", () => {
    const testAction = {
      type: types.RECEIVE,
      location: mockLocationResponse.location,
      regions: mockLocationResponse.regions
    };
    const testState = newTestState({
      isLocating: false,
      location: mockLocationResponse.location,
      regions: mockLocationResponse.regions
    });

    expect(newReducer(testAction)).toEqual(testState);
  });

  it("should return a payload for ERROR", () => {
    const error = "error";
    const testAction = {
      type: types.ERROR,
      error: error
    };
    const testState = newTestState({
      isLocating: false,
      error: error
    });

    expect(newReducer(testAction)).toEqual(testState);
  });

  it("should return a payload for REQUEST_LISTING_DATA", () => {
    const testAction = {
      type: types.REQUEST_LISTING_DATA
    };
    const testState = newTestState({
      isLoadingListing: true
    });

    expect(newReducer(testAction)).toEqual(testState);
  });

  it("should return a payload for RECEIVE_LISTING_DATA", () => {
    const testAction = {
      type: types.RECEIVE_LISTING_DATA,
      listing: mockListingResponse.data.listing
    };
    const testState = newTestState({
      listing: mockListingResponse.data.listing,
      isLoadingListing: false
    });

    expect(newReducer(testAction)).toEqual(testState);
  });

  it("should return a payload for SHUTTER_LISTING_DATA", () => {
    const testAction = {
      type: types.SHUTTER_LISTING_DATA
    };
    const testState = newTestState({ listing: null });

    expect(newReducer(testAction)).toEqual(testState);
  });
});
