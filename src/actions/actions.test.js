import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import "isomorphic-fetch";
import * as actions from "./actions";
import * as types from "../constants/ActionTypes";
import * as config from "../constants/config";
import mockLocationResponse from "../__test__/mocks/location-mock.json";
import mockListingResponse from "../__test__/mocks/listing_mock.json";
import defaultTestCoords from "../__test__/mocks/coord-mock.json";

const mockStore = configureMockStore([thunk]);

describe("actions", () => {
  describe("request", () => {
    it("should create action for requesting locations", () => {
      const testAction = {
        type: types.REQUEST,
        coords: mockLocationResponse
      };

      expect(actions.requestLocation(mockLocationResponse)).toEqual(testAction);
    });
  });

  describe("recieve", () => {
    it("should create action for receiving locations", () => {
      const testAction = {
        type: types.RECEIVE,
        location: mockLocationResponse.data.location,
        regions: mockLocationResponse.data.regions
      };

      expect(
        actions.receiveLocation(defaultTestCoords, mockLocationResponse)
      ).toEqual(testAction);
    });
  });

  describe("locate", () => {
    afterEach(() => {
      fetchMock.reset();
      fetchMock.restore();
    });
    it("dispatches Receive when fetch is complete", () => {
      const store = mockStore();
      fetchMock.get(
        `https://${
          config.API_HOST
        }/discovery/v1/location?include%5B%5D=regions.listings&latlng=33.666614%2C-117.756295`,
        mockLocationResponse
      );

      store.dispatch(actions.locate(defaultTestCoords)).then(() => {
        expect(store.getActions()).toEqual([
          {
            type: types.REQUEST,
            coords: defaultTestCoords
          },
          {
            type: types.RECEIVE,
            location: mockLocationResponse.data.location,
            regions: mockLocationResponse.data.regions
          }
        ]);
      });
    });
  });

  describe("requestListingData", () => {
    it("should create an action to request listing data", () => {
      const testAction = {
        type: types.REQUEST_LISTING_DATA
      };

      expect(actions.requestListingData()).toEqual(testAction);
    });
  });

  describe("receiveListingData", () => {
    it("it should create an action for receiving a listing", () => {
      const testAction = {
        type: types.RECEIVE_LISTING_DATA,
        listing: mockListingResponse.data.listing
      };

      expect(
        actions.receiveListingData(mockListingResponse.data.listing)
      ).toEqual(testAction);
    });
  });

  describe("fetchListing", () => {
    afterEach(() => {
      fetchMock.reset();
      fetchMock.restore();
    });

    it("dispatches requestListingData when fetch is complete", () => {
      const store = mockStore();
      fetchMock.get(
        `https://${config.API_HOST}/discovery/v1/listings/sdfsd`,
        mockListingResponse
      );

      store.dispatch(actions.fetchListing()).then(() => {
        expect(store.getActions()).toEqual([
          {
            type: types.REQUEST_LISTING_DATA
          },
          {
            type: types.RECEIVE_LISTING_DATA,
            listing: mockListingResponse
          }
        ]);
      });
    });
  });

  describe("shutterListingData", () => {
    it("should create an action to shutter listing data", () => {
      const testAction = {
        type: types.SHUTTER_LISTING_DATA
      };

      expect(actions.shutterListingData()).toEqual(testAction);
    });
  });

  describe("error", () => {
    it("should create an action for errors", () => {
      const error = "something broke, fix it";
      const testError = {
        type: types.ERROR,
        error,
        message: "Oops something went wrong"
      };

      expect(actions.error(error)).toEqual(testError);
    });
  });
});
