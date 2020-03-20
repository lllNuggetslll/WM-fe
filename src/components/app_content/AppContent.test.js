import React from "react";
import { shallow } from "enzyme";

import AppContent from "./AppContent";

describe("AppContent", () => {
  const defaultProps = {
    error: {},
    regions: {
      dispensary: {
        listings: [{}]
      },
      delivery: {
        listings: [{}]
      },
      doctor: {
        listings: [{}]
      }
    },
    fetchListing: () => {}
  };

  it("should render", () => {
    const wrapper = shallow(<AppContent {...defaultProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
