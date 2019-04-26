import React, { Component } from 'react';
import Sound from 'react-sound'

class SoundEffect extends Component {

  url = () => {
    if (this.props.playClicked === false && this.props.gameOver === false) {
      return "welcome-crowd.mp3"
    } else if (this.props.playClicked === true && this.props.selectedAnswer === null){
      return null
    } else if (this.props.selectedAnswer.correct === true && this.props.gameOver === false){
      return "Swish.mp3"
    } else if (this.props.selectedAnswer.correct === false && this.props.gameOver === false){
      return "Backboard.mp3"
    } else if (this.props.gameOver === true && this.props.correctAnswers > 5){
      return "cheer-game-over.mp3"
    } else if (this.props.gameOver === true && this.props.correctAnswers <= 5){
      return "boo-game-over.mp3"
    }
  }

  render(){

    return (
      <Sound
        url={this.url()}
        playStatus={Sound.status.PLAYING}
        playFromPosition={0 /* in milliseconds */}
        volume={50}
        playbackRate={1}
      />
    )

  }

}

export default SoundEffect
