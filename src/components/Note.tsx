import React, { Component } from "react";
import Tasks from "./Tasks";
import Delete from "./common/Delete"
import ExtendedForm from './ExtendedForm'
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

type Todo = {
  id: string;
  title: string;
  tasks: TasksArray;
};

type TasksArray = {
  id: string;
  task_name: string;
}[];

type Props = {
  key: string;
  todo: Todo;
  onDelete: (todoId: string, taskId: string) => void;
  onFormSubmit: (todoId: string, task: {}) => void;
  onDeleteNote: (todoId: string) => void;
}

type State = {
  toggleForm: boolean;
}


class Note extends Component<Props, State> {
  state: State = { toggleForm: false };

  closeForm = (): void => {
    this.setState({ toggleForm: false });
  };

  openForm = (): void => {
    this.setState({ toggleForm: true });
  };

  handleCloseForm = (): void => {
    this.closeForm();
  };

  handleOpenForm = (): void => {
    this.openForm();
  };

  handleAddTaskToggle = (todoId: string, task: {}) => {
    this.props.onFormSubmit(todoId, task);
    this.handleCloseForm();
  };

  handleDeleteNote = (todoId: string) => {
    this.props.onDeleteNote(todoId);
  };

  render() {
    const { toggleForm } = this.state;
    const { todo, onDelete } = this.props;

    return (
      <Card key={todo.id} className="mt-4 shadow" style={{ width: "18rem" }}>
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title className="text-break">{todo.title}</Card.Title>
            <Delete onClick={() => this.handleDeleteNote(todo.id)} />
          </div>
          <hr />
          <Tasks todo={todo} onDelete={onDelete} />
          {toggleForm ? (
            <ExtendedForm
              onFormSubmit={(task: {}) =>
                this.handleAddTaskToggle(todo.id, task)
              }
              onFormClose={this.handleCloseForm}
            />
          ) : (
            <Button
              size="sm"
              variant="outline-primary"
              onClick={this.handleOpenForm}
            >
              Add task
            </Button>
          )}
        </Card.Body>
      </Card>
    );
  }
}

export default Note;
