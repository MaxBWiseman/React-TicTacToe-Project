import React from "react";
import FeedbackForm from "./components/FeedbackForm.jsx";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  // The activePlayer state variable is used to keep track of the current player
  
  function handleTurn() {
    setActivePlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
    // The handleTurn function is used to switch the active player
    // between "X" and "O". It uses the setActivePlayer function to update
    // the state. The function takes the previous state (prevPlayer).
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={handleTurn} activePlayerSymbol={activePlayer} />
      </div>
      <FeedbackForm />
    </main>
  );
}

export default App;
