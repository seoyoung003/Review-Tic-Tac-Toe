import { useState } from "react";

const initialgameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];



export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState(gameBoard);

    function handleChange(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const upadatedGameBoard = [...prevGameBoard].map((innerArray) => [...innerArray]);
            upadatedGameBoard [rowIndex] [colIndex] = 'X';
            return upadatedGameBoard;
        });
    } 
    
    return(
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => 
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => 
                    <li key={colIndex}>
                        <button onClick={(rowIndex, colIndex) => handleChange()}>{playerSymbol}</button>
                    </li>) }
                </ol>
            </li>)}
        </ol>
    );
    
}

