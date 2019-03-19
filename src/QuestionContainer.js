import React, { Component } from 'react';
import Question from './Question.js'

const QuestionContainer = () => {


    return (
      <div className="question-container-div">
        <div className="question-modal">
          <Question />
        </div>
      </div>
    )



}

export default QuestionContainer
