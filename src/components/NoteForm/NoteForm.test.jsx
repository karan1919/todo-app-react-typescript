import React from "react";
import { shallow } from "enzyme";
import NoteForm from "./NoteForm";
import Input from "../common/Input/Input";
import { Button, Card, Form } from "react-bootstrap";

const submitButton = (wrapper) => wrapper.find(Button).first();

const cancelButton = (wrapper) => wrapper.find(Button).at(1);

describe("NoteForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NoteForm />);
  });

  it("should render NoteForm", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("should render `Card`", () => {
    expect(wrapper.containsMatchingElement(Card)).toEqual(true);
  });

  it("should render `Form`", () => {
    expect(wrapper.containsMatchingElement(Form)).toEqual(true);
  });

  it("should render `Input`", () => {
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
      expect(submitBtn.text()).toEqual("Create");
    });
  });

  describe("Cancel button", () => {
    it("should contain a cancel button with text `Cancel`", () => {
      const cancelBtn = cancelButton(wrapper);
      expect(cancelBtn.text()).toEqual("Cancel");
    });
  });
});
