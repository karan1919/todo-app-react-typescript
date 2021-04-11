import React, { Component } from "react";
import NoteList from "./NoteList";
import ToggleableNoteForm from "./ToggleableNoteForm";
import helper from "../helper";

type State = {
  todos: Todos;
}

type Todos = {
  id: string;
  title: string;
  tasks: Tasks;
}[];

type Tasks = {
  id: string;
  task_name: string;
}[];
class TodoDashboard extends Component<State> {
  state: State = {
    todos: [
      {
        id: "1",
        title: "Note 1",
        tasks: [
          { id: "11", task_name: "task" },
        ],
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
      {
        id: "3",
        title: "Note 3",
        tasks: [{ id: "31", task_name: "task" }],
      },
    ],
  };

  createNote = (note: {}): void => {
    const newNote = helper.newNote(note);
    const todos = this.state.todos.concat(newNote);
    this.setState({ todos });
  };

  createTask = (todoId: string, task: {}): void => {
    const todos = [...this.state.todos];
    const newTask = helper.newTask(task);
    const todoIndex = helper.findIdOfTask(todos, todoId);
    todos[todoIndex].tasks = todos[todoIndex].tasks.concat(newTask);
    this.setState({ todos });
  };

  deleteNote = (todoId: string): void => {
    const todos = [...this.state.todos];
    const newTodos = todos.filter((t) => t.id !== todoId);
    this.setState({ todos: newTodos });
  };

  deleteTask = (todoId: string, taskId: string): void => {
    const todos = [...this.state.todos];
    const todoIndex = helper.findIdOfTask(todos, todoId);
    todos[todoIndex].tasks = todos[todoIndex].tasks.filter(
      (task) => task.id !== taskId
    );
    this.setState({ todos });
  };

  handleCreateNoteSubmit = (note: {}): void => {
    this.createNote(note);
  };

  handleAddTaskSubmit = (todoId: string, task: {}): void => {
    this.createTask(todoId, task);
  };

  handleNoteDelete = (todoId: string): void => {
    this.deleteNote(todoId);
  };

  handleTaskDelete = (todoId: string, taskId: string): void => {
    this.deleteTask(todoId, taskId);
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        {todos.length === 0 ? <h3>{`No tasks to complete!`}</h3>
          : <NoteList
            todos={this.state.todos}
            onDelete={this.handleTaskDelete}
            onFormSubmit={this.handleAddTaskSubmit}
            onDeleteNote={this.handleNoteDelete}
          />}

        <div className="m-5">
          <ToggleableNoteForm
            onFormSubmit={this.handleCreateNoteSubmit}
          />
        </div>
      </>
    );
  }
}

export default TodoDashboard;
