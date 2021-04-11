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

const findIdOfTask = (todos, todoId) => {
  return todos.indexOf(todos.find((item) => item.id === todoId));
};

//eslint-disable-next-line
export default {
  newNote: newNote,
  newTask: newTask,
  findIdOfTask: findIdOfTask,
};
