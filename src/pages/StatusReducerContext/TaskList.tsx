import { useState } from "react";
import { TaskType, useTaskDispatch, useTasks } from "./taskContext";

export default function TaskList() {
  const tasks = useTasks();


  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id}>
          <Task key={task.id} task={task}></Task>
        </li>
      ))}
    </ul>
  );
}

function Task({ task }: { task: TaskType }) {
  const dispatch = useTaskDispatch()
  const [idEdit, setIsEdit] = useState(false)
  const [text, setText] = useState("")

  const handleChange = (type: string, task?: TaskType) => {
    switch (type) {
      case "save": {
        text && task && dispatch?.({
          type: "changed",
          task: {
            ...task,
            text
          }
        })
        setIsEdit(false)
        setText("")
        break;
      }
      case "edit":
        setIsEdit(true)
        break;
      case "delete": {
        task && dispatch?.({
          type: "delete",
          task
        })
        setIsEdit(false)
        setText("")
        break;
      }
      case "checked": {
        task && dispatch?.({
          type: "changed",
          task
        })
        break;
      }
      default:
        break;
    }
  }
  return (
    <>
      <input type="checkbox" checked={task.done} onChange={(e) => {
        handleChange("checked", { ...task, done: e.target.checked })
      }} />
      {idEdit ?
        <>
          <input type="text" defaultValue={task.text} onChange={(e) => setText(e.target.value)} />
          <button onClick={() => handleChange("save", task)}>保存</button>
        </>
        : <>
          <span>{task.text}</span>
          <button onClick={() => handleChange("edit")}>编辑</button>
        </>
      }
      <button onClick={() => handleChange("delete", task)}>删除</button>
    </>
  )
}
