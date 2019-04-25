import React, { Component } from 'react';

class QuestionTimer extends Component {

  state = {
    questionTimer: 10
  }

  intervalID = 0;

  componentDidMount(){
    this.intervalID = setInterval(this.handleQuestionTimer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  handleQuestionTimer = () => {
    if (this.state.questionTimer > 0 && this.props.selectedAnswer === null) {
      this.props.resetQuestionTimer()
      this.setState(prevState => ({
        questionTimer: prevState.questionTimer - 1,
      }))
    } else if (this.state.questionTimer > 0 && this.props.selectedAnswer !== null){
      this.props.resetQuestionTimer()
      this.setState({
        questionTimer: 10
      })
    }
    else if (this.state.questionTimer === 0){
      this.props.killQuestionTimer()
      this.props.handleSelectedAnswer(null)
      this.setState({
        questionTimer: 10
      })
    }
  }

  render(){

    console.log(this.props);

    const className = () => {
      if (this.state.questionTimer <= 5) {
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
          {this.state.questionTimer}
        </div>
      </div>
    )
  }


}

export default QuestionTimer
