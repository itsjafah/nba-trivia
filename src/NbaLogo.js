import React, { Component } from 'react';
import './App.css';
import logo from './nba-logo-vector-01.png';

class NbaLogo extends Component {

  render(){
    return (
      <div className='nba-logo-container'>
        <div>
          <img src={logo} className="nba-logo"/>
        </div>
        <div className="welcome-message">
          Welcome to the NBA Trivia App!
        </div>
      </div>
    )
  }


}

export default NbaLogo
