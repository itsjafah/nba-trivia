import React, { Component } from 'react';
import NbaLogo from './NbaLogo'
import PlayButton from './PlayButton'
import court from './basketball-court-copy-2.png';
import logo from './nba-logo-vector-01.png';
const NBA = require("nba");

class MainContainer extends Component {

  state = {
    playClicked: false
  }

  handlePlayClick = () => {
    this.setState({
      playClicked: true
    }, console.log(this.state.playClicked))
  }

  renderContent = () => {
    if (this.state.playClicked === false) {
      return <>
              <NbaLogo playClicked={this.state.playClicked}/>
              <PlayButton handlePlayClick={this.handlePlayClick}/>
            </>
          }
  }

  render(){
    console.log(this.state.playClicked);
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
