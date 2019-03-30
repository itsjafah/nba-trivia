import React, { Component } from 'react';

const AnswerChoice = ( {answerChoice, incrementQuestionIndex, handleSelectedAnswer, selectedAnswer} ) => {

  console.log("answer choice is", answerChoice, "selectedAnswer is:", selectedAnswer);

  const className = () => {
    if (selectedAnswer === null || (selectedAnswer.id !== answerChoice.id && answerChoice.correct === false)) {
      return "answer-choice-button"
    } else if (selectedAnswer && answerChoice.correct === true) {
      return "correct-answer-choice-button"
    } else if (selectedAnswer.correct === false) {
      return "incorrect-answer-choice-button"
    }
  }

    return (
        <button
          className={className()}
          onClick={() => {setTimeout(function(){incrementQuestionIndex()}, 2500); handleSelectedAnswer(answerChoice)}}>{answerChoice.answer}
        </button>
    )

}

export default AnswerChoice
