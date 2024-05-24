import React, {
  Dispatch,
  createContext,
  useContext,
  useReducer,
} from "react";

export interface TaskType {
  id: number;
  text: string;
  done: boolean;
}
export interface TaskAction {
  type: string;
  task: TaskType;
  id?: TaskType["id"];
}

export const tasks = createContext<TaskType[]>([]);

export const taskDispatch = createContext<Dispatch<TaskAction> | null>(null);

export const useTasks = () => useContext(tasks);
export const useTaskDispatch = () => useContext(taskDispatch);

export default function TaskProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(taskReducer, initialTasks);

  return (
    <tasks.Provider value={state}>
      <taskDispatch.Provider value={dispatch}>{children}</taskDispatch.Provider>
    </tasks.Provider>
  );
}

function taskReducer(state: TaskType[], action: TaskAction) {
  switch (action.type) {
    case "added":
      return [...state, action.task];
    case "changed":
      return state.map((item) =>
        item.id === action?.task?.id ? action.task : item
      );
    case "delete":
      return state.filter((item) => item.id !== action.task.id);
    default:
      throw new TypeError(`unknown type ${action.type}`);
  }
}

const initialTasks = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];
