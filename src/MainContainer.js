import React, { Component } from 'react';
import NbaLogo from './NbaLogo'
import PlayButton from './PlayButton'
import CountdownTimer from './CountdownTimer'
import QuestionModal from './QuestionModal'
import court from './basketball-court-copy-2.png';
import logo from './nba-logo-vector-01.png';
const NBA = require("nba");

const QUESTIONS_API = `http://localhost:3000/questions`
const ANSWERS_API = `http://localhost:3000/answers`

class MainContainer extends Component {

  state = {
    playClicked: false,
    countdownTimerOn: false,
    countdownTimer: 3,
    questions: [],
    answers: [],
    activeQuestion: {}
  }

  componentDidMount(){
    this.fetchQuestions()
    this.fetchAnswers()
  }

  fetchQuestions = () => {
    fetch(QUESTIONS_API)
      .then(r => r.json())
      .then(questions => {
        this.setState({
          questions: questions
        })
      })
  }

  fetchAnswers = () => {
    fetch(ANSWERS_API)
      .then(r => r.json())
      .then(answers => {
        this.setState({
          answers: answers
        })
      })
  }

  handlePlayClick = () => {
    this.setState({
      playClicked: true,
      countdownTimerOn: true
    })
  }

  renderContent = () => {
    if (this.state.playClicked === false) {
      return <>
        <NbaLogo playClicked={this.state.playClicked}/>
        <PlayButton handlePlayClick={this.handlePlayClick}/>
      </>
    } else if (this.state.playClicked === true && this.state.countdownTimerOn === true) {
      return <CountdownTimer
                decrementCountdownTimer={this.decrementCountdownTimer} countdownTimer={this.state.countdownTimer}
                countdownTimerOn={this.state.countdownTimerOn}/>
    } else if (this.state.countdownTimer === 0) {
      return <QuestionModal questions={this.state.questions} answers={this.state.answers}/>
    }
  }

  handleCountdownTimer = () => {
    if (this.state.countdownTimer > 1) {
      this.setState({
        countdownTimer: this.state.countdownTimer - 1
      })
    } else {
      this.setState({
        countdownTimerOn: false,
        countdownTimer: 0
      })
      return
    }
  }

  decrementCountdownTimer = () => {
    if (this.state.countdownTimer > 1) {
      setInterval(()=>this.handleCountdownTimer(), 1000);
    } else {
      this.setState({
        countdownTimerOn: false,
        countdownTimer: 0
      })
    }
  }


  render(){
    return (
      <div className="main-container-div">
        <div className='court-image-div'>
          <img src={court} className='court-image'/>
        </div>
        {this.renderContent()}
      </div>
    )
  }


}

export default MainContainer
