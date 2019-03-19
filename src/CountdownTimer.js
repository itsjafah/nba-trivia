import React, { Component } from 'react';

class CountdownTimer extends Component {

  componentDidMount(){
    this.props.decrementCountdownTimer()
  }

  render(){

    const { countdownTimer, countdownTimerOn } = this.props

    return (
      <div className="countdown-timer-div">
        { countdownTimerOn
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
