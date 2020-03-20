import React from "react";
import { shallow } from "enzyme";
import StarRating from "./StarRating";

describe("StarRatings", () => {
  it("should render all the stars", () => {
    [1, 2, 3, 4, 5].forEach(num => {
      const wrapper = shallow(<StarRating rating={num} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  it("should render half stars", () => {
    const rating = 4.5;

    const wrapper = shallow(<StarRating {...{ rating }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
