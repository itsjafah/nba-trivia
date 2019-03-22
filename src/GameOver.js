import React, { Component } from 'react';

const GameOver = ({correctAnswers}) => {

  return (
    <div className="game-over-div">
      <div className="game-over-header">
        You scored {correctAnswers}/5!
      </div>
    </div>
  )

}

export default GameOver
