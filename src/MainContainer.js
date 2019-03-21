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
    activeQuestionIndex: 0
  }

  componentDidMount(){
    this.fetchQuestions()
    this.fetchAnswers()
  }

  fetchQuestions = () => {
    fetch(QUESTIONS_API)
      .then(r => r.json())
      .then(questions => {this.selectRandomQuestions(questions.questions, 2)})
  }

  fetchAnswers = () => {
    fetch(ANSWERS_API)
      .then(r => r.json())
      .then(answers => {
        this.setState({
          answers: answers
        }, () => console.log(this.state.answers))
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
      return <QuestionModal questions={this.state.questions} answers={this.state.answers} activeQuestionIndex={this.state.activeQuestionIndex} incrementQuestionIndex={this.incrementQuestionIndex}/>
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

  selectRandomQuestions = (arr, n) => {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    this.setState({questions: result})
    return result;
  }

  incrementQuestionIndex = () => {
    if (this.state.activeQuestionIndex < 9){
      this.setState(prevState => ({
        activeQuestionIndex: prevState.activeQuestionIndex+1
      }))
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
