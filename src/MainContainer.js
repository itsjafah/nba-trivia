import React, { Component } from 'react';
import NbaLogo from './NbaLogo'
import PlayButton from './PlayButton'
import CountdownTimer from './CountdownTimer'
import court from './basketball-court-copy-2.png';
import logo from './nba-logo-vector-01.png';
const NBA = require("nba");

class MainContainer extends Component {

  state = {
    playClicked: false,
    countdownTimerOn: false,
    countdownTimer: 3,
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
    } else if (this.state.playClicked === true) {
      return <CountdownTimer decrementCountdownTimer={this.decrementCountdownTimer} countdownTimer={this.state.countdownTimer}
      countdownTimerOn={this.state.countdownTimerOn}/>
    }
  }

  handleCountdownTimer = () => {
    if (this.state.countdownTimer > 1) {
      this.setState({
        countdownTimer: this.state.countdownTimer - 1
      })
    } else {
      console.log('hitting countdowntimer !> 1?');
      this.setState({
        countdownTimerOn: false
      }, console.log(this.state.countdownTimer))
    }
  }

  decrementCountdownTimer = () => {
    if (this.state.countdownTimer > 1) {
      setInterval(()=>{this.handleCountdownTimer()},1000);
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
