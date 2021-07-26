import React from "react";
import { shallow } from "enzyme";
import TodoDashboard from "./components/TodoDashboard/TodoDashboard";
import App from "./App";

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should render TodoDashboard", () => {
    expect(wrapper.find(".App")).toHaveLength(1);
  });

  it("should render TodoDashboard", () => {
    expect(wrapper.contains(<TodoDashboard />)).toBe(true);
  });
});
