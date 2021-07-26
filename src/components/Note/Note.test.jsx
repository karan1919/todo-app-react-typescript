import React from "react";
import { shallow } from "enzyme";
import Note from "./Note";
import Delete from "../common/Delete/Delete";
import Tasks from "../Tasks/Tasks";
import ToggleableForm from "../ToggleableForm/ToggleableForm";
import { Card } from "react-bootstrap";

describe("Note", () => {
  let wrapper;

  const fakeTodo = {
    id: "1",
    title: "Sample Note",
    tasks: [
      {
        id: "1",
        taskname: "Sample Task",
      },
    ],
  };

  beforeEach(() => {
    const props = {
      todo: fakeTodo,
    };

    wrapper = shallow(<Note {...props} />);
  });

  it("should render `Note`", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should render correct `Card.Title`", () => {
    const cardTitle = wrapper.find(Card.Title).first();
    expect(cardTitle.text()).toEqual(fakeTodo.title);
  });

  it("should render `Delete`", () => {
    expect(wrapper.find(Delete).first()).toBeTruthy();
  });

  it("should render `Tasks`", () => {
    expect(wrapper.find(Tasks).first()).toBeTruthy();
  });

  it("should render `ToggleableForm`", () => {
    expect(wrapper.find(ToggleableForm).first()).toBeTruthy();
  });

  describe("user deletes a `Note`", () => {
    let wrapper;

    const fakeTodo = {
      id: "1",
      title: "Sample Note",
      tasks: [
        {
          id: "1",
          taskname: "Sample Task",
        },
      ],
    };

    const onDeleteNote = jest.fn();

    beforeEach(() => {
      const props = {
        todo: fakeTodo,
        onDeleteNote: onDeleteNote,
      };

      wrapper = shallow(<Note {...props} />);

      wrapper.find(Delete).first().simulate("click");
    });

    afterEach(() => {
      onDeleteNote.mockClear();
    });

    it("should call prop `onDeleteNote` with proper id", () => {
      expect(onDeleteNote.mock.calls[0]).toEqual([fakeTodo.id]);
    });
  });
});
