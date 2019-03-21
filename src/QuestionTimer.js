import React, { Component } from 'react';

class QuestionTimer extends Component {

  intervalID = 0;

  componentDidMount(){
    this.intervalID = setInterval(this.props.handleQuestionTimer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render(){

    const { questionTimer, questionTimerOn } = this.props

    const className = () => {
      if (questionTimer <= 5) {
        return "question-timer-low"
      } else {
        return "question-timer"
      }
    }

    return (
      <div className="question-timer-div">
        <div className="question-timer-header">
          Shot Clock
        </div>
        <div className={className()}>
          {questionTimer}
        </div>
      </div>
    )
  }


}

export default QuestionTimer
