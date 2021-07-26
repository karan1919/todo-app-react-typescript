import { TasksType } from "./Task";

export type TodoType = { 
  id: string;
  title: string;
  tasks: TasksType;
}

export type TodosType = TodoType[];