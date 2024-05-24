import { useRef, useState } from 'react';

export default function Form() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showInput, setShowInput] = useState(false)

  function handleClick() {
    inputRef.current?.focus();
  }
  console.dir(inputRef.current)

  return (
    <>
      {showInput && <input ref={inputRef} />}
      <button onClick={handleClick}>
        聚焦输入框
      </button>
      <button onClick={() => {
        setShowInput(!showInput)
      }
      }>{showInput ? "隐藏" : "显示"}</button>
    </>
  );
}
