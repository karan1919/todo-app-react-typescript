import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";

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
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => onDelete(todo.id, task.id)}
                  >
                    Delete
                  </Button>
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
