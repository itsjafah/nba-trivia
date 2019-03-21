import React, { Component } from 'react';

const AnswerChoice = ( {answerChoice, incrementQuestionIndex, handleSelectedAnswer, selectedAnswer} ) => {

  console.log("answer choice is", answerChoice, "selectedAnswer is:", selectedAnswer);

  const className = () => {
    if (selectedAnswer === null || selectedAnswer.id !== answerChoice.id) {
      return "answer-choice-button"
    } if (selectedAnswer.id !== answerChoice.id && answerChoice.correct === true) {
      return "correct-answer-choice-button"
    } if (selectedAnswer && answerChoice.correct === true) {
      return "correct-answer-choice-button"
    } if (selectedAnswer.correct === false) {
      return "incorrect-answer-choice-button"
    }
  }
  //
  // const className = () => {
  //   if (selectedAnswer === null || ) {
  //     return "answer-choice-button"
  //   } if (answerChoice.correct === true) {
  //     return "correct-answer-choice-button"
  //   } if (selectedAnswer.correct === false) {
  //     return "incorrect-answer-choice-button"
  //   }
  // }

  // console.log(className);

    return (
      <div className="answer-choices-div">
        <button
          className={className()}
          onClick={() => {setTimeout(function(){incrementQuestionIndex()}, 2500); handleSelectedAnswer(answerChoice)}}>{answerChoice.answer}
        </button>
      </div>
    )

}

export default AnswerChoice
