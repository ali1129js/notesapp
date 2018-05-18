/**
 * @Author: Ali
 * @Date:   2018-05-18T13:13:25+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-05-18T13:39:25+02:00
 */
import React, { Component } from 'react'
import Single from './Single'
export default class Grid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      }
  }
  renderItems(){
    return this.props.notes.map(item =>
    <Single
      key={item.id}
      note={item}
    />
    )
  }
  render() {
    return (
      <div className="f">{this.renderItems()}</div>
    )
  }
}
