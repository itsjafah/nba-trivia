import React, { Component } from 'react';
import NbaLogo from './NbaLogo'
import PlayButton from './PlayButton'
import CountdownTimer from './CountdownTimer'
import QuestionModal from './QuestionModal'
import Scoreboard from './Scoreboard'
import QuestionTimer from './QuestionTimer'
import GameOver from './GameOver'
import QuestionCounter from './QuestionCounter'
import SoundEffect from './SoundEffect';
import logo from './nba-logo-vector-01.png';


// const QUESTIONS_API = `https://whispering-reef-74520.herokuapp.com/questions`
// const ANSWERS_API = `https://whispering-reef-74520.herokuapp.com/answers`


const QUESTIONS_API = `http://localhost:3000/questions`
const ANSWERS_API = `http://localhost:3000/answers`

class MainContainer extends Component {

  state = {
    playClicked: false,
    countdownTimerOn: false,
    countdownTimer: 3,
    questions: [],
    answers: [],
    activeQuestionIndex: 0,
    correctAnswers: 0,
    selectedAnswer: null,
    questionTimerOn: null,
    gameOver: false
  }

  fetchQuestions = () => {
    fetch(QUESTIONS_API)
      .then(r => r.json())
      .then(questions => {this.selectRandomQuestions(questions.questions, 10)})
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
    this.fetchQuestions()
    this.fetchAnswers()
    this.setState({
      playClicked: true,
      countdownTimerOn: true,
      countdownTimer: 3,
      gameOver: false,
      activeQuestionIndex: 0,
      correctAnswers: 0,
      selectedAnswer: null
    })
  }

  handleCountdownTimer = () => {
    if (this.state.countdownTimer > 0) {
      this.setState(prevState => ({
        countdownTimer: prevState.countdownTimer - 1
      }))
    } else {
      this.setState({
        countdownTimerOn: false,
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
        activeQuestionIndex: prevState.activeQuestionIndex+1,
        selectedAnswer: null,
        // questionTimerOn: null
      }))
    } else if (this.state.activeQuestionIndex >= 9){
      this.setState({
        gameOver: true
      })
    }
  }


  handleSelectedAnswer = (selectedAnswer) => {
    console.log("hello");
    if (selectedAnswer === null){
      this.incrementQuestionIndex()
    } else if (selectedAnswer.correct === true && this.state.activeQuestionIndex < 9) {
      this.setState(prevState => ({
        correctAnswers: prevState.correctAnswers+1,
        selectedAnswer: selectedAnswer,
        questionTimerOn: null
      }))
    } else {
      this.setState({
        selectedAnswer: selectedAnswer
      })
    }
  }

  killQuestionTimer = () => {
    this.setState({questionTimerOn: false})
  }

  resetQuestionTimer = () => {
    this.setState({questionTimerOn: null})
  }


  renderContent = () => {
    if (this.state.playClicked === false) {
      return <>
        <NbaLogo playClicked={this.state.playClicked}/>
        <PlayButton handlePlayClick={this.handlePlayClick}/>
      </>
    } else if (this.state.playClicked === true && this.state.countdownTimerOn === true) {
      return <CountdownTimer
        handleCountdownTimer={this.handleCountdownTimer}
        countdownTimer={this.state.countdownTimer}
        countdownTimerOn={this.state.countdownTimerOn}/>
    } else if (this.state.countdownTimerOn === false && this.state.gameOver === false) {
      return <>
        <Scoreboard correctAnswers={this.state.correctAnswers}/>
        <QuestionTimer
          selectedAnswer={this.state.selectedAnswer}
          incrementQuestionIndex={this.incrementQuestionIndex}
          handleSelectedAnswer={this.handleSelectedAnswer}
          killQuestionTimer={this.killQuestionTimer}
          resetQuestionTimer={this.resetQuestionTimer}/>
        <QuestionModal
          questions={this.state.questions}
          answers={this.state.answers}
          activeQuestionIndex={this.state.activeQuestionIndex}
          incrementQuestionIndex={this.incrementQuestionIndex}
          handleSelectedAnswer={this.handleSelectedAnswer}
          selectedAnswer={this.state.selectedAnswer}
          questionTimerOn={this.state.questionTimerOn}/>
        <QuestionCounter activeQuestionIndex={this.state.activeQuestionIndex} questions={this.state.questions}/>
      </>
    } else if (this.state.gameOver === true) {
      return <GameOver correctAnswers={this.state.correctAnswers} handlePlayClick={this.handlePlayClick}/>
    }
  }


  render(){
    console.log("main container rendering");
    return (
      <div className="main-container-div">
        {this.renderContent()}
        <SoundEffect selectedAnswer={this.state.selectedAnswer} playClicked={this.state.playClicked}/>
      </div>
    )
  }


}

export default MainContainer
