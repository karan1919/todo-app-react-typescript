import React from "react";
import { shallow } from "enzyme";
import Delete from "./Delete";
import { Button } from "react-bootstrap";

const getButton = (wrapper) => wrapper.find(Button).first();

describe("Delete", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Delete />);
  });

  it("should render Delete", () => {
    const button = getButton(wrapper);
    expect(button.exists()).toBe(true);
  });

  it("should render the text Delete", () => {
    const button = getButton(wrapper);
    expect(button.text()).toEqual("Delete");
  });
});
