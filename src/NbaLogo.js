import React, { Component } from 'react';
import './App.css';
import logo from './nba-logo-vector-01.png';

class NbaLogo extends Component {

  render(){
    return (
      <div >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="welcome-message">
          Welcome to the NBA Trivia App!
        </div>
      </div>
    )
  }


}

export default NbaLogo
