import React from "react";
import { shallow } from "enzyme";
import Tasks from "./Tasks";
import Delete from "../common/Delete/Delete";
import { Table } from "react-bootstrap";

describe("Tasks", () => {
  describe("Receives empty task", () => {
    let wrapper;

    const fakeTodo = {
      id: "1",
      title: "Note 1",
      tasks: [],
    };

    beforeEach(() => {
      const props = {
        todo: fakeTodo,
      };

      wrapper = shallow(<Tasks {...props} />);
    });

    it("should render a Table", () => {
      expect(wrapper.find(Table).exists()).toBe(true);
    });

    it("should not render tasks", () => {
      expect(wrapper.find("tr")).toHaveLength(0);
    });

    it("should not render `Delete` btn", () => {
      expect(wrapper.find(Delete)).toHaveLength(0);
    });
  });

  describe("Receives 3 tasks", () => {
    let wrapper;

    const fakeTodo = {
      id: "1",
      title: "Note 1",
      tasks: [
        { id: "11", task_name: "task 1" },
        { id: "12", task_name: "task 2" },
        { id: "13", task_name: "task 3" },
      ],
    };

    beforeEach(() => {
      const props = {
        todo: fakeTodo,
      };

      wrapper = shallow(<Tasks {...props} />);
    });

    it("should render a Table", () => {
      expect(wrapper.find(Table).exists()).toBe(true);
    });

    it("should render tasks", () => {
      expect(wrapper.find("tr")).toHaveLength(3);
    });

    it("should render proper task name", () => {
      expect(wrapper.find("tr td").first().text()).toEqual(
        fakeTodo.tasks[0].task_name
      );

      expect(wrapper.find("tr td").at(2).text()).toEqual(
        fakeTodo.tasks[1].task_name
      );
    });

    it("should render `Delete` btn beside task", () => {
      expect(wrapper.find(Delete)).toHaveLength(3);
    });

    describe("user deletes a task", () => {
      let wrapper;

      const onDelete = jest.fn();

      const fakeTodo = {
        id: "1",
        title: "Note 1",
        tasks: [
          { id: "11", task_name: "task 1" },
          { id: "12", task_name: "task 2" },
          { id: "13", task_name: "task 3" },
        ],
      };

      beforeEach(() => {
        const props = {
          todo: fakeTodo,
          onDelete: onDelete,
        };

        wrapper = shallow(<Tasks {...props} />);

        wrapper.find(Delete).first().simulate("click");
      });

      afterEach(() => {
        onDelete.mockClear();
      });

      it("should call prop `onDelete` with proper id", () => {
        const task = fakeTodo.tasks[0];
        expect(onDelete.mock.calls[0]).toEqual([fakeTodo.id, task.id]);
      });
    });
  });
});
