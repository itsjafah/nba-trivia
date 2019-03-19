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
        <h1>{countdownTimer}</h1>
          :
        <h1>Jump Ball!</h1>
        }
      </div>
    )
  }


}

export default CountdownTimer
