/**
 * @Author: Ali
 * @Date:   2018-05-17T17:18:03+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-05-18T13:26:44+02:00
 */
import React, { Component } from 'react'
import Grid from './Components/Grid'
import './App.css'

class App extends Component {
constructor(){
  super()
  this.state = {
    notes: [
      {
      id:1,
      title:'note1',
      details:'....note1'},
      {
      id:2,
      title:'note2',
      details:'....note2'},
      {
      id:3,
      title:'note3',
      details:'....note3'}
    ]
  }
}
  render() {
    return (
      <div className="App">
        <Grid notes={this.state.notes}/>
      </div>
    )
  }
}
export default App
