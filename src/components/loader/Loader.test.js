import React from "react";
import { shallow } from "enzyme";
import Loader from "./Loader";

describe("Loader", () => {
  it("should render", () => {
    const isLoaded = false;
    const wrapper = shallow(<Loader {...{ isLoaded }} />);

    expect(wrapper).toMatchSnapshot();
  });
});
