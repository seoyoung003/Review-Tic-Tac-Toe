import { useState } from "react";

export default function Player({playerName, symbol, isActive}) {
  const [selected, setSelected] = useState(false);
  const [initialPlayerName, setInitialPlayerName] =  useState(playerName);

  

  function handlePlayerName(event) {
    setInitialPlayerName(event.target.value);
  }


  function isSeleted() {
    setSelected((selected) => !selected);
  }

  let editablePlayerName = <span className="player-name">{initialPlayerName}</span>

  if(selected) {
    editablePlayerName = (
      <input type="text"  required value={initialPlayerName} onChange={handlePlayerName}/>
    );

  }
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={isSeleted} required >{selected ? 'Save' : 'Edit'}</button>
    </li>
  );
}
