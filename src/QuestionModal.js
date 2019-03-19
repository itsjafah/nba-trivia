import React, { Component } from 'react';
import Question from './Question.js'
import AnswerChoices from './AnswerChoices';

const QuestionModal = () => {


    return (
      <div className="question-modal-wrapper">
        <Question />
        <AnswerChoices />
      </div>
    )



}

export default QuestionModal
