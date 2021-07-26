import React from "react";
import { Table } from "react-bootstrap";
import Delete from "../common/Delete/Delete";
import { TodoType } from "../../types/Todo"
import { TaskType } from "../../types/Task"

type Props = {
  onDelete: (todoId: string, taskId: string) => void;
  todo: TodoType;
}

const Tasks: React.FC<Props> = ({ todo, onDelete }) => {
  return (
    <>
      <Table borderless>
        <tbody>
          {todo.tasks.map((task: TaskType) => (
            <tr key={task.id}>
              <td className="text-break">{task.task_name}</td>
              <td>
                <Delete onClick={() => onDelete(todo.id, task.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default Tasks;
