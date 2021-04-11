import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import TodoDashboard from "./components/TodoDashboard";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should render TodoDashboard", () => {
    expect(wrapper.contains(<TodoDashboard />)).toEqual(true);
  });
});
