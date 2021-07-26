import React from "react";
import { shallow } from "enzyme";
import ToggleableForm from "./ToggleableForm";
import NoteForm from "../NoteForm/NoteForm";
import TaskForm from "../TaskForm/TaskForm";
import { Button } from "react-bootstrap";

describe("ToggleableForm", () => {
  let wrapper;

  describe("receives prop `formType=NoteForm`", () => {
    beforeEach(() => {
      const props = {
        formType: "NoteForm",
        buttonText: "Create Note",
      };

      wrapper = shallow(<ToggleableForm {...props} />);
    });

    it("should render Create Note button", () => {
      const buttonText = wrapper.props().children;
      expect(wrapper.find(Button).first().text()).toEqual(buttonText);
    });

    it("should not render NoteForm", () => {
      expect(wrapper.find(NoteForm).first().exists()).toBe(false);
    });

    describe("user clicks the Create Note button", () => {
      beforeEach(() => {
        wrapper.find(Button).first().simulate("click");
      });

      it("should render NoteForm", () => {
        expect(wrapper.find(NoteForm).first().exists()).toBe(true);
      });

      it("should not render Create Note button", () => {
        expect(wrapper.find(Button).first().exists()).toBe(false);
      });
    });
  });

  describe("receives prop `formType=TaskForm`", () => {
    beforeEach(() => {
      const props = {
        formType: "TaskForm",
        buttonText: "Add",
      };

      wrapper = shallow(<ToggleableForm {...props} />);
    });

    it("should render Add button", () => {
      const buttonText = wrapper.props().children;
      expect(wrapper.find(Button).first().text()).toEqual(buttonText);
    });

    it("should not render TaskForm", () => {
      expect(wrapper.find(TaskForm).first().exists()).toBe(false);
    });

    describe("user clicks the Add button", () => {
      beforeEach(() => {
        wrapper.find(Button).first().simulate("click");
      });

      it("should render TaskForm", () => {
        expect(wrapper.find(TaskForm).first().exists()).toBe(true);
      });

      it("should not render Add button", () => {
        expect(wrapper.find(Button).first().exists()).toBe(false);
      });
    });
  });
});
