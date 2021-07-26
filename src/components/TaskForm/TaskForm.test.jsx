import React from "react";
import { shallow } from "enzyme";
import TaskForm from "./TaskForm";
import Input from "../common/Input/Input";
import { Button, Card, Form } from "react-bootstrap";

const submitButton = (wrapper) => wrapper.find(Button).first();

const cancelButton = (wrapper) => wrapper.find(Button).at(1);

describe("TaskForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TaskForm />);
  });

  it("should render TaskForm", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("should contain `Card`", () => {
    expect(wrapper.containsMatchingElement(Card)).toEqual(true);
  });

  it("should contain `Form`", () => {
    expect(wrapper.containsMatchingElement(Form)).toEqual(true);
  });

  it("should contain `Input`", () => {
    expect(wrapper.containsMatchingElement(Input)).toEqual(true);
  });

  describe("Submit button", () => {
    it("should contain a submit button", () => {
      const submitBtn = submitButton(wrapper);
      expect(submitBtn.exists()).toBe(true);
    });

    it("should be disabled", () => {
      const submitBtn = submitButton(wrapper);
      expect(submitBtn.prop("disabled")).toBe(true);
    });

    it("should contain type=submit", () => {
      const submitBtn = submitButton(wrapper);
      expect(submitBtn.prop("type")).toEqual("submit");
    });

    it("should display with text `Create`", () => {
      const submitBtn = submitButton(wrapper);
      expect(submitBtn.text()).toEqual("Add");
    });
  });

  describe("Cancel button", () => {
    it("should contain a cancel button with text `Cancel`", () => {
      const cancelBtn = cancelButton(wrapper);
      expect(cancelBtn.text()).toEqual("Cancel");
    });
  });
});
