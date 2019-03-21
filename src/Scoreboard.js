import React, { Component } from 'react';

const Scoreboard = ( {correctAnswers} ) => {

  return (
    <div className="scoreboard-div">
      <div className="your-score-header">Your Score</div>
        <div className="your-score">{correctAnswers}</div>
    </div>
  )

}

export default Scoreboard
