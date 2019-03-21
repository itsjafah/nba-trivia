import React, { Component } from 'react';

const Question = ( {question} ) => {

  return (
    <div className="question-div">
      <div className="question">
        {question.question}
      </div>
    </div>
  )

}

export default Question
