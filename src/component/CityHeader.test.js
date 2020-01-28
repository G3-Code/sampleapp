import React from "react";
import { shallow } from "enzyme";
import CityHeader from "./CityHeader";
import { findByTestAttr } from "../utils";
import checkPropTypes from "check-prop-types";

const setUpTest = (props = {}) => {
  const component = shallow(<CityHeader {...props} />);
  return component;
};

describe("TS1: Testing the City Header component", () => {
  let component;
  let props = {
    city: "Chennai",
    cities: ["Chennai", "Dallas", "Austin", "London"]
  };
  beforeEach(() => {
    component = setUpTest(props);
  });
  it("TC1: Should render without errors", () => {
    const wrapper = findByTestAttr(component, ".city-header");
    expect(wrapper.length).toBe(1);
  });

  it("TC2: Check if select exists", () => {
    const logo = findByTestAttr(component, "select");
    expect(logo.length).toBe(1);
  });
});

describe("TS2: Checking prop types", () => {
  it("TC!: Should not throw any warnings", () => {
    const expectedProps = {
      city: "Chennai",
      cities: ["Dallas", "Chennai", "Austin", "London"]
    };

    const propsErr = checkPropTypes(
      CityHeader.propTypes,
      expectedProps,
      "props",
      CityHeader.name
    );
    expect(propsErr).toBeUndefined();
  });
});
