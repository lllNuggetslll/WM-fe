import React from "react";
import { shallow } from "enzyme";

import HeroSection from "./HeroSection";

describe("HeroSection", () => {
  const defaultProps = {
    location: {},
    isLocating: false,
    locateMe: jest.fn()
  };

  it("should render", () => {
    const wrapper = shallow(<HeroSection {...defaultProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should fire locateMe when clicking the locate button", () => {
    const wrapper = shallow(<HeroSection {...defaultProps} />);

    wrapper.find('[data-testid="locateButton"]').simulate("click");

    expect(defaultProps.locateMe).toHaveBeenCalled();
  });
});
