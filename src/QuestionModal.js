import React, { Component } from 'react';
import Question from './Question.js'
import AnswerChoice from './AnswerChoice';

const QuestionModal = ( {questions, answers, activeQuestionIndex, incrementQuestionIndex} ) => {

  console.log(questions);

  const filteredAnswers = answers.answers.filter(answer => {
    return answer.question_id === questions[activeQuestionIndex].id
  })

  const answerChoice = filteredAnswers.map(answerChoice => {
    return <AnswerChoice answerChoice={answerChoice} incrementQuestionIndex={incrementQuestionIndex}/>
  })

  // const question = questions.map(question => {
  //   return <Question question={question}/>
  // })

  const question = questions[activeQuestionIndex]


    return (
      <div className="question-modal-wrapper">
        <Question question={question}/>
        {answerChoice}
      </div>
    )

}

export default QuestionModal
