import React, { Component } from 'react';
import NbaLogo from './NbaLogo'
import logo from './nba-logo-vector-01.png';
import court from './basketball-court.jpg';
const NBA = require("nba");

class MainContainer extends Component {

  render(){
    return (
      <div className="App">
        <div className='court-image-div'>
          <img src={court} className='court-image'/>
        </div>
      </div>
    )
  }


}

export default MainContainer
