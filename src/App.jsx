import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function onSelectSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ?  'O' : 'X');
  }
  
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player 
            playerName="Player1" 
            symbol="X"
            isActive={activePlayer === 'X'} 
            
          />
          <Player 
            playerName="Player2" 
            symbol="O"
            isActive={activePlayer === 'O'} 
           
          />
        </ol>
        <GameBoard onSelectPlayer = {onSelectSquare} nowPlayer={activePlayer}/>
      </div>
    </main>
  );
}

export default App;
