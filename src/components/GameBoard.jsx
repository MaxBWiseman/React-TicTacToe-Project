import { useState } from "react";
import React from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
// The game board is a 3x3 grid represented as a 2D array.
// Each cell can be null (empty), 'X', or 'O'.
// The initial state of the game board is set to all null values.
// This means that the game board is empty at the start of the game.

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleMove(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      // Remeber when updating state with a function, that react will
      // pass the previous state as an argument to the function. You must
      // add a variable to hold the new state, in this case prevGameBoard
      const updatedGameBoard = prevGameBoard.map((row, rIdx) =>
        // The .map() function iterates over an array and applies a
        // callback function to each element. The callback function receives:
        // 1 . The current element being processed.
        // 2 . The index of the current element. In this case, it is used to
        // create a new game board with the updated cell value (X or O).
        // React works with the concept of immutability, meaning that it does not
        // modify the original array but creates a new one with the updated values.
        // This is important for React to detect changes and re-render the component.
        // row: Represents the current row being processed in the gameBoard array.
        // Each row is itself an array of cells (e.g., [null, null, null]).
        // rIdx (Row Index):
        // Represents the index of the current row in the gameBoard array.
        // This is useful for identifying which row is being processed,
        // especially when you need to update a specific cell in that row.
        row.map((cell, cIdx) =>
          // The inner map function is used to create a new row by applying
          // a function to each cell of the original row. It checks if the
          // current cell is the one that was clicked (rIdx === rowIndex && cIdx === colIndex)
          // and if it is null (empty). If both conditions are true, it updates
          // the cell to 'X'. Otherwise, it keeps the original cell value.
          // This ensures that the game board is updated correctly
          // when a player makes a move.
          rIdx === rowIndex && cIdx === colIndex && cell === null ? activePlayerSymbol : cell
        )
      );
      return updatedGameBoard;
    });
    onSelectSquare();
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleMove(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
