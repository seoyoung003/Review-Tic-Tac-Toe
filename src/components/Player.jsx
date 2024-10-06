import { useState } from "react";

export default function Player({playerName, symbol}) {
  const [selected, setSelected] = useState(false);
  const [initialPlayerName, setInitialPlayerName] =  useState(playerName);

  

  function handlePlayerName(event) {
    setInitialPlayerName(event.target.value);
  }


  function isSeleted() {
    setSelected((selected) => !selected)
  }

  let editablePlayerName = <span className="player-name">{initialPlayerName}</span>

  if(selected) {
    editablePlayerName = (
      <input type="text" value={initialPlayerName} onChange={handlePlayerName}/>
    );

  }
  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={isSeleted} required >{selected ? 'Save' : 'Edit'}</button>
    </li>
  );
}
