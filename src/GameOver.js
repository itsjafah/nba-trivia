import React, { Component } from 'react';

const GameOver = ({ correctAnswers, handlePlayClick }) => {

  return (
    <div className="game-over-div">
      <div className="game-over-header">
        You shot {(correctAnswers/5) * 100}%!
      </div>
      <div className="play-again-div">
        <button className="play-again-button" onClick={handlePlayClick}>Play Again?</button>
      </div>
    </div>
  )

}

export default GameOver
