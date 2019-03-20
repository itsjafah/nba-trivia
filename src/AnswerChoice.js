import React, { Component } from 'react';

const AnswerChoice = ({answerChoice}) => {

    return (
      <div className="answer-choices-div">
        <button className="answer-choice-button">{answerChoice.answer}</button>
      </div>
    )

}

export default AnswerChoice
