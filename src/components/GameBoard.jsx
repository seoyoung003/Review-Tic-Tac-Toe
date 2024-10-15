import { useState } from "react";

const initialgameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];



export default function GameBoard({onSelectSquare, turns}) {
    let gameBoard = initialgameBoard;

    for (const turn of turns) {
        const {square, player} = turn;
        const {row, col} = square;
        gameBoard [row] [col] = player;
    }
//     const [gameBoard, setGameBoard] = useState(initialgameBoard);

//     function handleChange(rowIndex, colIndex) {
//         setGameBoard((prevGameBoard) => {
//             const updatedGameBoard = [...prevGameBoard].map((innerArray) => [...innerArray]);
//             updatedGameBoard [rowIndex] [colIndex] = nowPlayer;
//             return updatedGameBoard;
//         });
//         onSelectPlayer();
//     } 
    
    return(
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => 
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => 
                    <li key={colIndex}>
                        <button onClick={()=> onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                    </li>) }
                </ol>
            </li>)}
        </ol>
    );
    
}

