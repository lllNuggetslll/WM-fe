import React from "react";
import { shallow } from "enzyme";
import CardDetails from "./CardDetails";

describe("CardDetails", () => {
  it("should render", () => {
    const listing = {
      city: "city",
      distance: 1,
      name: "name",
      rating: 1
    };
    const wrapper = shallow(<CardDetails {...{ listing }} />);

    expect(wrapper).toMatchSnapshot();
  });
});
