import React, { Component } from 'react';

const AnswerChoice = ( {answerChoice, incrementQuestionIndex, handleSelectedAnswer, selectedAnswer} ) => {

  const className = () => {
    if (selectedAnswer === null || (selectedAnswer.id !== answerChoice.id && answerChoice.correct === false)) {
      return "answer-choice-button"
    } else if (selectedAnswer.id === answerChoice.id && selectedAnswer.correct === true) {
      return "correct-answer-choice-button-selected"
    } else if (selectedAnswer && answerChoice.correct === true) {
      return "correct-answer-choice-button"
    } else if (selectedAnswer.correct === false) {
      return "incorrect-answer-choice-button"
    }
  }

    return (
        <button
          className={className()}
          onClick={ selectedAnswer === null ? () => {setTimeout(function(){incrementQuestionIndex()}, 2500); handleSelectedAnswer(answerChoice)} : null}>{answerChoice.answer}
        </button>
    )

}

export default AnswerChoice
