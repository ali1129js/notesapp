/**
 * @Author: Ali
 * @Date:   2018-05-18T13:13:25+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-05-21T09:16:08+02:00
 */
import React, { Component } from 'react'
import {Col, Row} from 'react-materialize'

import Single from './Single'
export default class Grid extends Component {
  deleteNote(id){
    this.props.deleteNote(id)
  }
  renderItems(){
    return this.props.notes.map(item =>
    <Single
      key={item.id}
      note={item}
      deleteNote={this.deleteNote.bind(this)}
      />
    )
  }
  render() {
    return (
      <Row>
        <Col>{this.renderItems()}</Col>
      </Row>
      )
  }
}
