import React from "react";
import { shallow } from "enzyme";
import ListingCards from "./ListingCards";

describe("ListingCards", () => {
  const defaultProps = {
    listing: [{}],
    fetchListing: jest.fn(),
    history: {
      push: jest.fn(),
      location: {
        search: ""
      }
    }
  };

  it("should render", () => {
    const wrapper = shallow(<ListingCards {...defaultProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should fire fetchListing and history.push", () => {
    const wrapper = shallow(<ListingCards {...defaultProps} />);

    wrapper.find('[data-testid="singleListingCard"]').simulate("click");

    expect(defaultProps.fetchListing).toHaveBeenCalled();
    expect(defaultProps.history.push).toHaveBeenCalled();
  });
});
