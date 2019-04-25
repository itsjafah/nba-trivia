import React, { Component } from 'react';
import Question from './Question.js'
import AnswerChoice from './AnswerChoice';

const QuestionModal = ( {questions, answers, activeQuestionIndex, incrementQuestionIndex, handleSelectedAnswer, selectedAnswer, questionTimerOn} ) => {

  const filteredAnswers = answers.answers.filter(answer => {
    return answer.question_id === questions[activeQuestionIndex].id
  })

  const answerChoice = filteredAnswers.map(answerChoice => {
    return <AnswerChoice
      answerChoice={answerChoice}
      incrementQuestionIndex={incrementQuestionIndex}
      handleSelectedAnswer={handleSelectedAnswer}
      selectedAnswer={selectedAnswer}
      questionTimerOn={questionTimerOn}/>
  })

  const question = questions[activeQuestionIndex]


    return (
      <div className="question-modal-wrapper">
          <Question question={question}/>
        <div className="answer-choices-div">
          {answerChoice}
        </div>
      </div>
    )

}

export default QuestionModal
