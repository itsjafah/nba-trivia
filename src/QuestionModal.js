import React, { Component } from 'react';
import Question from './Question.js'
import AnswerChoice from './AnswerChoice';

const QuestionModal = ( {questions, answers, activeQuestionIndex, incrementQuestionIndex, handleSelectedAnswer, selectedAnswer} ) => {

  const filteredAnswers = answers.answers.filter(answer => {
    return answer.question_id === questions[activeQuestionIndex].id
  })

  const answerChoice = filteredAnswers.map(answerChoice => {
    return <AnswerChoice
      answerChoice={answerChoice}
      incrementQuestionIndex={incrementQuestionIndex}
      handleSelectedAnswer={handleSelectedAnswer}
      selectedAnswer={selectedAnswer}/>
  })

  const question = questions[activeQuestionIndex]


    return (
      <div className="question-modal-wrapper">
        <div className="question-div">
          <Question question={question}/>
        </div>
        <div className="answer-choices-div">
          {answerChoice}
        </div>
      </div>
    )

}

export default QuestionModal
