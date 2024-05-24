import React ,{ useState } from 'react';

export default function App() {
  const [isFancy, setIsFancy] = useState(false);
    return (
      <div>
        {/* 这两种写法不一样，三元不会重置 Counter组件的状态，后面会重置（即销毁又创建） */}
        {
          isFancy ? <Counter isFancy={isFancy} />
          :
          <Counter isFancy={isFancy} />
        }
        {
          isFancy && <Counter isFancy={isFancy} />
        }
        {
          !isFancy && <Counter isFancy={isFancy} />
        }
        <label>
          <input
            type="checkbox"
            checked={isFancy}
            onChange={e => {
              setIsFancy(e.target.checked)
            }}
          />
          Use fancy styling
        </label>
      </div>
    );
}

function Counter({ isFancy }:{ isFancy:boolean}) {
  console.log(isFancy)
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }
  if (isFancy) {
    className += ' fancy';
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}
