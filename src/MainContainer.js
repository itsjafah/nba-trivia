import React, { Component } from 'react';
import NbaLogo from './NbaLogo'
import court from './basketball-court-copy-2.png';
const NBA = require("nba");

class MainContainer extends Component {

  render(){
    return (
      <div className="main-container-div">
        <div className='court-image-div'>
          <img src={court} className='court-image'/>
        </div>
        <NbaLogo />
        <div className="play-button-div">
          <button className="play-button">
            Let's Play!
          </button>
        </div>
      </div>
    )
  }


}

export default MainContainer
