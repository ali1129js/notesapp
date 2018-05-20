/**
 * @Author: Ali
 * @Date:   2018-05-17T17:18:03+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-05-20T12:21:56+02:00
 */
import React, { Component } from 'react'
import firebase from 'firebase/app';
import 'firebase/database';
import _ from 'lodash'
import Grid from './Components/Grid'
import Form from './Components/Form'

class App extends Component {
constructor(){
  super()
  this.state = {
    notes: [],
    name:'Al',
    currentTitle:'',
    currentDetails:''
  }
}
  componentDidMount(){
  firebase.initializeApp({
  apiKey: "AIzaSyCHDXe2kFe5ArTbhj-h_2KuoMOhqD6TRmQ",
  authDomain: "noteapp-6e899.firebaseapp.com",
  databaseURL: "https://noteapp-6e899.firebaseio.com",
  projectId: "noteapp-6e899",
  storageBucket: "",
  messagingSenderId: "997200143821"
  });
    console.log('Firebase success')
    firebase.database().ref('/notes')
    .on('value', snapshot => {
      const fbstore = snapshot.val()
      const store = _.map(fbstore, (value,id) => {
        return {
          id:id,
          title:value.title,
          details: value.details}
        })
      this.setState({
        notes:store,
      })
    })
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
      title:this.state.currentTitle,
      details:this.state.currentDetails
    }
    firebase.database().ref('/notes').push(data)
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
