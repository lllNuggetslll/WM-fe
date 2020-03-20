import React from "react";
import { shallow } from "enzyme";
import ListingCard from "./ListingCard";

describe("ListingCard", () => {
  const listing = {
    city: "city",
    distance: 1,
    name: "name",
    rating: 1
  };
  const onClick = jest.fn();

  it("should render", () => {
    const wrapper = shallow(<ListingCard {...{ listing, onClick }} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should fire onClick when clicked", () => {
    const wrapper = shallow(<ListingCard {...{ listing, onClick }} />);

    wrapper.find('[data-testid="CardWrapper"]').simulate("click");

    expect(onClick).toHaveBeenCalled();
  });
});
