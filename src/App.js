/**
 * @Author: Ali
 * @Date:   2018-05-17T17:18:03+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-05-20T11:34:07+02:00
 */
import React, { Component } from 'react'
import Grid from './Components/Grid'
import Form from './Components/Form'
import './App.css'
const styles = {
  textAlign:'center',
  margin:0,
  padding:0
}
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
    ],
    name:'Al',
    currentTitle:'',
    currentDetails:''
  }
}
  componentDidMount(){
    const config = {
    apiKey: "AIzaSyCHDXe2kFe5ArTbhj-h_2KuoMOhqD6TRmQ",
    authDomain: "noteapp-6e899.firebaseapp.com",
    databaseURL: "https://noteapp-6e899.firebaseio.com",
    projectId: "noteapp-6e899",
    storageBucket: "",
    messagingSenderId: "997200143821"
  };
  firebase.initializeApp(config);
  }
  handleChange(e) {
    const name= e.target.name
    const value = e.target.value
    this.setState({
      [name]:value
    })
  }
  handleSubmit(e){
    e.preventDefault()
    console.log('submit')
    const data = {
      title:this.state.currentTitle
    }
  }
  render() {
    return (
      <div className="App">
        <Form
          currentTitle={this.state.currentTitle}
          currentDetails={this.state.currentDetails}
          handleChange={this.handleChange.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
        />
        <Grid notes={this.state.notes} />
      </div>
    )
  }
}
export default App
