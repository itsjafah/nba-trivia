import React, { Component } from 'react';

const AnswerChoice = ( {answerChoice, incrementQuestionIndex, handleSelectedAnswer, selectedAnswer} ) => {

  console.log(selectedAnswer);

  // const className = () => {
  //   if (selectedAnswer === null) {
  //     return "answer-choice-button"
  //   } else if (selectedAnswer.correct === true) {
  //     return "correct-answer-choice-button"
  //   } else if (selectedAnswer.correct === false) {
  //     return "incorrect-answer-choice-button"
  //   }
  // }

  // console.log(className);

    return (
      <div className="answer-choices-div">
        <button
          className="answer-choice-button"
          onClick={() => {setTimeout(function(){incrementQuestionIndex()}, 2500); handleSelectedAnswer(answerChoice)}}>{answerChoice.answer}
        </button>
      </div>
    )

}

export default AnswerChoice
