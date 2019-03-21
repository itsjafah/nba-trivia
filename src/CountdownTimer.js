import React, { Component } from 'react';

class CountdownTimer extends Component {

  intervalID = 0;

  componentDidMount(){
    this.intervalID = setInterval(this.props.handleCountdownTimer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render(){

    const { countdownTimer, countdownTimerOn } = this.props

    return (
      <div className="countdown-timer-div">
        { countdownTimer > 0 
          ?
        <div className="countdown-timer">{countdownTimer}</div>
          :
        <div className="jump-ball">Jump Ball!</div>
        }
      </div>
    )
  }


}

export default CountdownTimer
