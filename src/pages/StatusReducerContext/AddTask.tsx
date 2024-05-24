import { useState, useEffect, useRef } from "react";
import { useTaskDispatch } from "./taskContext";

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useTaskDispatch();
  const handleClick = () => {
    //TODO：如何去除?.
    setText("")
    dispatch?.({
      type: "added",
      task: {
        id: new Date().getTime(),
        text,
        done: false,
      },
    });
  };

  return (
    <div className="add-task">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleClick}>添加</button>
    </div>
  );
}
