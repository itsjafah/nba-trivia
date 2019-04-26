import React, { Component } from 'react';

class PlayButton extends Component {

  render(){

    const { handlePlayClick } = this.props

    return (
      <div className="play-button-div">
        <button className="play-button" onClick={handlePlayClick}>
          Let's Play!
        </button>
      </div>
    )
  }


}

export default PlayButton
