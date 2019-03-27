import React, { Component } from 'react';

const QuestionCounter = ( { activeQuestionIndex, questions} ) => {

  return (
    <div className="question-counter">
      {activeQuestionIndex + 1} / {questions.length}
    </div>
  )

}

export default QuestionCounter
