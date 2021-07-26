import React from "react";
import Tasks from "../Tasks/Tasks";
import Delete from "../common/Delete/Delete"
import ToggleableForm from "../ToggleableForm/ToggleableForm";
import { Card } from "react-bootstrap";
import { TodoType } from "../../types/Todo"

type Props = {
  key: string;
  todo: TodoType;
  onDelete: (todoId: string, taskId: string) => void;
  onFormSubmit: (todoId: string, task: {}) => void;
  onDeleteNote: (todoId: string) => void;
}

const Note: React.FC<Props> = ({ todo, onDelete, onFormSubmit, onDeleteNote }) => {
  const handleAddTask = (todoId: string, task: {}) => {
    onFormSubmit(todoId, task);
  };

  const handleDeleteNote = (todoId: string) => {
    onDeleteNote(todoId);
  };

  return (
    <Card key={todo.id} className="mt-4 shadow" style={{ width: "18rem" }}>
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title className="text-break">{todo.title}</Card.Title>
          <Delete onClick={() => handleDeleteNote(todo.id)} />
        </div>
        <hr />
        <Tasks todo={todo} onDelete={onDelete} />
        <ToggleableForm
          onFormSubmit={(task: {}) => handleAddTask(todo.id, task)}
          formType={"TaskForm"}
          buttonText={"Add Task"}
        />
      </Card.Body>
    </Card>
  )
}

export default Note;
