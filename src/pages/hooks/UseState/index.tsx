import { useState } from 'react';
import { useImmer } from 'use-immer';
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export default function BucketList() {
  console.log('初始化或更新运行两次demo')
  const [list, updateList] = useImmer<ArtworkType[]>(initialList);
  const [demo, setDemo] = useState(() => {
    console.log('初始化或更新运行两次object')
    return 'demo'
  });


  function handleToggle(artworkId: number, nextSeen: boolean) {
    updateList(draft => {
      const artwork = draft.find(a =>
        a.id === artworkId
      );
      artwork && (artwork.seen = nextSeen)
    });
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList
        artworks={list}
        onToggle={handleToggle} />
    </>
  );
}
type ArtworkType = {
  id: number,
  title: string,
  seen: boolean
}

function ItemList({ artworks, onToggle }: { artworks: ArtworkType[], onToggle: (artworkId: number, nextSeen: boolean) => void }) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(
                  artwork.id,
                  e.target.checked
                );
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
