import React, { Component } from 'react';
import Question from './Question.js'
import AnswerChoice from './AnswerChoice';

const QuestionModal = ( {questions, answers} ) => {

  console.log(questions.questions.forEach(question => console.log(question)));

  const filteredAnswers = answers.answers.filter(answer => {
    return answer.question_id === questions.questions[0].id
  })

  const answerChoice = filteredAnswers.map(answerChoice => {
    return <AnswerChoice answerChoice={answerChoice}/>
  })

  const question = questions.questions.map(question => {
    return <Question question={question}/>
  })

    return (
      <div className="question-modal-wrapper">
        {question}
        {answerChoice}
      </div>
    )

}

export default QuestionModal
