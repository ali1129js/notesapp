/**
 * @Author: Ali
 * @Date:   2018-05-17T17:18:03+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-05-17T17:18:41+02:00
 */
import React, { Component } from 'react'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
