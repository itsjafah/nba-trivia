import React, { Component } from 'react';
import logo from './nba-logo-vector-01.png';
import './App.css';
const NBA = require("nba");

class MainContainer extends Component {

  render(){
    return (
      <div className="App">
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

export default MainContainer
