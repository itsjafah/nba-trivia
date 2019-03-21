import React, { Component } from 'react';

const AnswerChoice = ( {answerChoice, incrementQuestionIndex} ) => {

    return (
      <div className="answer-choices-div">
        <button className="answer-choice-button" onClick={incrementQuestionIndex}>{answerChoice.answer}</button>
      </div>
    )

}

export default AnswerChoice
