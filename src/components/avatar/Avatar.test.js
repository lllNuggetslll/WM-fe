import React from "react";
import { shallow } from "enzyme";
import Avatar from "./Avatar";

describe("Avatar", () => {
  it("should render an avatar", () => {
    const imgSrc = "imgSrc";
    const wrapper = shallow(<Avatar img={imgSrc} />);

    expect(wrapper).toMatchSnapshot();
  });
});
