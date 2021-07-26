import React from "react";
import { shallow } from "enzyme";
import Input from "./Input";
import { Form } from "react-bootstrap";

describe("Input", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Input />);
  });

  it("should render `Form.Control`", () => {
    const FormControl = wrapper.find(Form.Control).first();
    expect(FormControl.exists()).toBe(true);
  });

  it("should not display an error", () => {
    expect(wrapper.find("span").length).toBe(0);
  });

  describe("Receives an `error` prop", () => {
    const errors = "Field Required";

    beforeEach(() => {
      wrapper = shallow(<Input errors={errors} />);
    });

    it("should render span", () => {
      const span = wrapper.find("span").first();
      expect(span.exists()).toBe(true);
    });

    it("should render span with error message", () => {
      const spanError = wrapper.find("span").first();
      expect(spanError.text()).toEqual(errors);
    });
  });
});
