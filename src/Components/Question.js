import React, { Component } from 'react';

const Question = ( {question} ) => {

  return (
    <div className="question">
      {question.question}
    </div>
  )

}

export default Question
