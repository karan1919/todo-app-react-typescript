import React from "react";
import { shallow } from "enzyme";
import NoteList from "./NoteList";
import Note from "../Note/Note";
import { Container } from "react-bootstrap";

describe("NoteList", () => {
  describe("Empty list of todos", () => {
    let wrapper;

    beforeEach(() => {
      const fakeTodos = [];

      const props = {
        todos: fakeTodos,
      };

      wrapper = shallow(<NoteList {...props} />);
    });

    it("should render a `Container`", () => {
      expect(wrapper.find(Container).exists()).toBe(true);
    });

    it("should not render `Note`", () => {
      expect(wrapper.find(Note).exists()).toBe(false);
    });
  });

  describe("Filled list of todos", () => {
    let wrapper;

    beforeEach(() => {
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

      const props = {
        todos: fakeTodos,
      };

      wrapper = shallow(<NoteList {...props} />);
    });

    it("should render a `Container`", () => {
      expect(wrapper.find(Container).exists()).toBe(true);
    });

    it("should render `Note`", () => {
      expect(wrapper.find(Note)).toHaveLength(2);
    });
  });
});
