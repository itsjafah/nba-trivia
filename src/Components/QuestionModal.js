import React, { Component } from 'react';
import Question from './Question.js'
import AnswerChoice from './AnswerChoice';
import Radium, { StyleRoot } from 'radium';
import { bounceInDown } from 'react-animations'

const styles = {
  bounceInDown: {
    animation: '1.5s',
    animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
  }
}

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
      <StyleRoot>
        <div className="question-modal-wrapper" style={styles.bounceInDown}>
            <Question question={question}/>
          <div className="answer-choices-div">
            {answerChoice}
          </div>
        </div>
      </StyleRoot>
    )

}

export default QuestionModal
