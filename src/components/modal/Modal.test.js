import React from "react";
import { shallow } from "enzyme";
import { Modal } from "./Modal";

describe("Modal", () => {
  const defaultProps = {
    isLoadingListing: false,
    listing: {},
    history: {},
    shutterListingData: jest.fn()
  };

  it("should render", () => {
    const wrapper = shallow(<Modal {...defaultProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should not render", () => {
    const closedProps = {
      ...defaultProps,
      isLoadingListing: false,
      listing: null
    };
    const wrapper = shallow(<Modal {...closedProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
