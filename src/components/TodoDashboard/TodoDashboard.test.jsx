import React from "react";
import { shallow } from "enzyme";
import NoteList from "../NoteList/NoteList";
import ToggleableForm from "../ToggleableForm/ToggleableForm";
import TodoDashboard from "./TodoDashboard";

describe("TodoDashboard", () => {
  describe("Empty list of todos", () => {
    let wrapper;

    const fakeTodos = [];

    beforeEach(() => {
      wrapper = shallow(<TodoDashboard />);
      wrapper.setState({ todos: fakeTodos });
    });

    it("should display a h3 element", () => {
      expect(wrapper.contains(<h3>No tasks to complete!</h3>)).toBe(true);
    });

    it("should not render `NoteList`", () => {
      expect(wrapper.find(NoteList).first().exists()).toBe(false);
    });

    it("should render `ToggleableForm`", () => {
      expect(wrapper.find(ToggleableForm).first().exists()).toBe(true);
    });
  });

  describe("Filled list of todos", () => {
    let wrapper;

    const fakeTodos = [
      {
        id: "1",
        title: "Note 1",
        tasks: [{ id: "11", task_name: "task" }],
      },
      {
        id: "2",
        title: "Note 2",
        tasks: [
          { id: "21", task_name: "task 1" },
          { id: "22", task_name: "task 2" },
          { id: "23", task_name: "task 3" },
        ],
      },
    ];

    beforeEach(() => {
      wrapper = shallow(<TodoDashboard />);
      wrapper.setState({ todos: fakeTodos });
    });

    it("should not display a h3 element", () => {
      expect(wrapper.contains(<h3>No tasks to complete!</h3>)).toBe(false);
    });

    it("should render `NoteList`", () => {
      expect(wrapper.find(NoteList).first().exists()).toBe(true);
    });

    it("should render `ToggleableForm`", () => {
      expect(wrapper.find(ToggleableForm).first().exists()).toBe(true);
    });
  });
});
