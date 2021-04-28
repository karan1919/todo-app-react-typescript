import React, { Component } from "react";
import { Table } from "react-bootstrap";
import Delete from "./common/Delete";

type todo = {
  id: string;
  title: string;
  tasks: tasks;
};

type tasks = {
  id: string;
  task_name: string;
}[];

type task = {
  id: string;
  task_name: string;
}

type Props = {
  onDelete: (todoId: string, taskId: string) => void;
  todo: todo;
}

class Tasks extends Component<Props> {
  render() {
    const { todo, onDelete } = this.props;
    return (
      <>
        <Table borderless>
          <tbody>
            {todo.tasks.map((task: task) => (
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
    );
  }
}

export default Tasks;
