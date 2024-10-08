import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player 
            playerName="Player1" 
            symbol="X" 
            
          />
          <Player 
            playerName="Player2" 
            symbol="O"
           
          />
        </ol>
        <GameBoard/>
      </div>
    </main>
  );
}

export default App;
