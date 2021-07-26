import React from "react";
import { Container } from "react-bootstrap";
import Note from "../Note/Note";
import { TodosType, TodoType } from "../../types/Todo"

type Props = {
  todos: TodosType;
  onDelete: (todoId: string, taskId: string) => void;
  onFormSubmit: (todoId: string, task: {}) => void;
  onDeleteNote: (todoId: string) => void;
}

const NoteList: React.FC<Props> = ({ todos, onDelete, onFormSubmit, onDeleteNote }) => {
  return (
    <Container fluid={true}>
      <div className="d-flex flex-row flex-nowrap overflow-auto">
        {todos.map((todo: TodoType) => (
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
  )
}

export default NoteList;
