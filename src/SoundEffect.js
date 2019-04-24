import React, { Component } from 'react';

class SoundEffect extends Component {

  renderContent = () => {
    if ()
    <Sound
       url="cool_sound.mp3"
       playStatus={Sound.status.PLAYING}
       playFromPosition={300 /* in milliseconds */}
       onLoading={this.handleSongLoading}
       onPlaying={this.handleSongPlaying}
       onFinishedPlaying={this.handleSongFinishedPlaying}
    />
  }

  render(){
    return (
      {this.renderContent()}
    )

  }

}

export default SoundEffect
