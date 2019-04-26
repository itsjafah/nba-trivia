import React, { Component } from 'react';
import '../Styling/App.css';
import logo from '../Images/nba-logo-vector-01.png';

class NbaLogo extends Component {

  render(){
    return (
      <div className='nba-logo-container'>
        <div>
          <img src={logo} className="nba-logo"/>
        </div>
        <div className="welcome-message">
          Welcome to NBA Trivia!
        </div>
      </div>
    )
  }


}

export default NbaLogo
