import React, { useEffect } from "react";

function Popup({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) {
  let finalMessage = "";
  let finalMessageReveal = "";
  let playable = true;

  function checkWin(correct, wrong, word) {
    let status = "win";

    word.split("").forEach((letter) => {
      if (!correct.includes(letter)) {
        status = "";
      }
    });

    if (wrong.length === 6) {
      status = "lose";
    }

    return status;
  }

  if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
    finalMessage = "YOU WIN!";
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === "lose") {
    finalMessage = "YOU LOSE!";
    finalMessageReveal = `The word was ${selectedWord}`;
    playable = false;
  }

  useEffect(() => setPlayable(playable))

  return (
    <div className="popup-container" stye={finalMessage !== '' ? {display: 'flex'} : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageReveal}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
}

export default Popup;
