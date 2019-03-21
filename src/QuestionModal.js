import React, { Component } from 'react';
import Question from './Question.js'
import AnswerChoice from './AnswerChoice';

const QuestionModal = ( {questions, answers} ) => {

  console.log(questions);

  const filteredAnswers = answers.answers.filter(answer => {
    return answer.question_id === questions.questions.id
  })

  const answerChoice = filteredAnswers.map(answerChoice => {
    return <AnswerChoice answerChoice={answerChoice}/>
  })

  const question = questions.map(question => {
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
