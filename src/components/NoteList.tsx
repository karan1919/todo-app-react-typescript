import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Note from "./Note";

type Todos = {
  id: string;
  title: string;
  tasks: Tasks;
}[];

type Todo = {
  id: string;
  title: string;
  tasks: Tasks;
};

type Tasks = {
  id: string;
  task_name: string;
}[];

type Props = {
  todos: Todos;
  onDelete: (todoId: string, taskId: string) => void;
  onFormSubmit: (todoId: string, task: {}) => void;
  onDeleteNote: (todoId: string) => void;
}

class NoteList extends Component<Props> {
  render() {
    const { todos, onDelete, onFormSubmit, onDeleteNote } = this.props;
    return (
      <Container fluid={true}>
        <div className="d-flex flex-row flex-nowrap overflow-auto">
          {todos.map((todo: Todo) => (
            <div className="p-3" key={todo.id}>
              <Note
                key={todo.id}
                todo={todo}
                onDelete={onDelete}
                onFormSubmit={onFormSubmit}
                onDeleteNote={onDeleteNote}
              />
            </div>
          ))}
        </div>
      </Container>
    );
  }
}

export default NoteList;
