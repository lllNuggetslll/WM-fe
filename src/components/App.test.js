import React from "react";
import { shallow } from "enzyme";
import { TestApp as App } from "./App";

const defaultProps = {
  isLocating: false,
  location: {},
  regions: {},
  error: {},
  locate: () => {},
  fetchListing: () => {},
  history: {
    push: () => {},
    location: {
      search:
        "?location=34.035243900000005%2C-118.25220709999999&listing=335715637"
    }
  },
  getParams: () => {}
};

describe("<App/>", () => {
  it("should render App", () => {
    const wrapper = shallow(<App {...defaultProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  describe("componentDidMount", () => {
    it("should fire getParams twice", () => {
      const getParams = jest.fn();
      shallow(<App {...defaultProps} {...{ getParams }} />);

      expect(getParams.mock.calls.length).toEqual(2);
    });

    it("should fire locate if there is a location query in the url", () => {
      const locate = jest.fn();
      const getParams = () => "lat,lng";
      shallow(<App {...defaultProps} {...{ locate, getParams }} />);

      expect(locate).toHaveBeenCalled();
      expect(locate).toHaveBeenCalledWith({
        latitude: "lat",
        longitude: "lng"
      });
    });

    it("should fire fetchListing if there is a listing query in the url", () => {
      const fetchListing = jest.fn();
      const getParams = () => "listingQuery";
      shallow(<App {...defaultProps} {...{ fetchListing, getParams }} />);

      expect(fetchListing).toHaveBeenCalled();
      expect(fetchListing).toHaveBeenCalledWith(getParams());
    });
  });

  describe("locateMe", () => {
    it("should fire navigator, setParams, locate, and history.push ", () => {
      const setParams = jest.fn();
      const locate = jest.fn();
      const history = {
        push: jest.fn(),
        location: {
          search: ""
        }
      };
      const wrapper = shallow(
        <App {...defaultProps} {...{ setParams, locate, history }} />
      );

      wrapper.instance().locateMe();

      expect(
        global.navigator.geolocation.getCurrentPosition
      ).toHaveBeenCalled();
      expect(setParams).toHaveBeenCalled();
      expect(locate).toHaveBeenCalled();
      expect(history.push).toHaveBeenCalled();
    });
  });
});
