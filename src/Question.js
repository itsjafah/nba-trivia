import React, { Component } from 'react';
import AnswerChoices from './AnswerChoices';

const Question = () => {

  return (
    <div className="question-div">
      <div className="question">
        This is where the question will go
        <AnswerChoices />
      </div>
    </div>
  )

}

export default Question
