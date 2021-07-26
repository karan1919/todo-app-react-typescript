var uuid = require("uuid");

const newNote = (note = {}) => {
  return {
    id: uuid.v4(),
    title: note.title,
    tasks: [],
  };
};

const newTask = (task = {}) => {
  return {
    id: uuid.v4(),
    task_name: task.title,
  };
};

const findIdOfNote = (todos, todoId) => {
  return todos.findIndex((todo) => todo.id === todoId);
};

//eslint-disable-next-line
export default {
  newNote,
  newTask,
  findIdOfNote,
};
