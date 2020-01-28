import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import { findByTestAttr } from "../utils";

const setUpTest = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("TS1: Testing the header component", () => {
  let component;
  beforeEach(() => {
    component = setUpTest();
  });
  it("TC1: Should render without errors", () => {
    const wrapper = findByTestAttr(component, ".img-weather");
    expect(wrapper.length).toBe(1);
  });

  it("TC2: Should render a logo", () => {
    const logo = findByTestAttr(component, ".logo-header");
    expect(logo.length).toBe(1);
  });

  it("TC3: Check if image exist", () => {
    const logo = findByTestAttr(component, "img");
    expect(logo.length).toBe(1);
  });

  it("TC4: Check if header exist", () => {
    const logo = findByTestAttr(component, "h1");
    expect(logo.length).toBe(1);
  });
});
