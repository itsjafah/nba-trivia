import React, { Component } from 'react';
import Sound from 'react-sound'

class SoundEffect extends Component {

  url = () => {
    if (this.props.playClicked === false) {
      return "welcome-crowd.mp3"
    } else if (this.props.playClicked === true && this.props.selectedAnswer === null){
      return null
    } else if (this.props.selectedAnswer.correct === true){
      return "cheers-correct-answer.mp3"
    }
  }

  render(){
    console.log(this.props);

    return (
      <Sound
        url={this.url()}
        playStatus={Sound.status.PLAYING}
        playFromPosition={0 /* in milliseconds */}
        volume={50}
        playbackRate={2}
      />
    )

  }

}

export default SoundEffect
