import { useRef, useState } from "react";

export default function CatFriends() {
  const itemsRef = useRef<Map<string, HTMLElement | null>>(new Map());
  const [catList, setCatList] = useState(setupCatList);

  function scrollToCat(cat: string) {
    const map = getMap();
    const node = map.get(cat);
    node?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function getMap() {
    // if (!itemsRef.current) {
    //   // 首次运行时初始化 Map。
    //   itemsRef.current = new Map<string, HTMLElement>();
    // }
    return itemsRef.current;
  }

  return (
    <>
      <nav>
        <button onClick={() => scrollToCat(catList[0])}>Tom</button>
        <button onClick={() => scrollToCat(catList[5])}>Maru</button>
        <button onClick={() => scrollToCat(catList[9])}>Jellylorum</button>
      </nav>
      <div>
        <ul>
          {catList.map((cat) => (
            <li
              key={cat}
              ref={(node) => {
                //在渲染得时候就会运行这个函数，导致了map的初始化
                //更新得时候会先传递null，再传递dom元素
                console.log(node)
                const map = getMap();
                if (node) {
                  map.set(cat, node);
                } else {
                  map.delete(cat);
                }
                // const map = getMap();
                // // Add to the Map
                // map.set(cat, node);

                // return () => {
                //   // Remove from the Map
                //   map.delete(cat);
                // };
              }}
            >
              <img src={cat} alt="cat" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function setupCatList() {
  const catList = [];
  for (let i = 0; i < 10; i++) {
    catList.push("https://loremflickr.com/320/240/cat?lock=" + i);
  }

  return catList;
}
