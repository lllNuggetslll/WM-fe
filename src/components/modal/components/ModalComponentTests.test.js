import React from "react";
import { shallow } from "enzyme";
import { BusinessAddress, BusinessHours, ModalHeader } from "./";

describe("Modal components", () => {
  const listing = {
    address: "address",
    state: "state",
    zip_code: 1,
    city: "city",
    phone_number: 1
  };

  describe("BusinessAddress", () => {
    it("should render", () => {
      const wrapper = shallow(<BusinessAddress {...{ listing }} />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("BusinessHours", () => {
    it("should render", () => {
      const hours = {
        sat: {
          open: " 6am",
          close: "8pm"
        }
      };
      const wrapper = shallow(<BusinessHours {...{ hours }} />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("ModalHeader", () => {
    it("should render", () => {
      const onCloseModal = () => {};
      const wrapper = shallow(<ModalHeader {...{ listing, onCloseModal }} />);

      expect(wrapper).toMatchSnapshot();
    });

    it("should fire onClick on click", () => {
      const onCloseModal = jest.fn();
      const wrapper = shallow(<ModalHeader {...{ listing, onCloseModal }} />);

      wrapper.find('[data-testid="xIcon"]').simulate("click");

      expect(onCloseModal).toHaveBeenCalled();
    });
  });
});
