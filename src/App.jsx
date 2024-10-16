import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combination";


function Helper(gameTurns) {
  
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
      currentPlayer = 'O';
  }
  return currentPlayer;
}



function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState('X');

    
  const activePlayer = Helper(gameTurns);
  

  function handleSelectSquare(rowIndex, colIndex) {
    
    setGameTurns(prevTurns => {
      
      const currentPlayer = Helper(prevTurns);

      const updatedTurns = [ {square: {row: rowIndex, col: colIndex}, player: currentPlayer} , ...prevTurns]
      
      return updatedTurns;
    });
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
        <GameBoard 
          onSelectSquare = {handleSelectSquare} 
          turns={gameTurns}
        />
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
