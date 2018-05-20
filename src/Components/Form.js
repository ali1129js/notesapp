/**
 * @Author: Ali
 * @Date:   2018-05-18T13:13:17+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-05-20T16:43:22+02:00
 */
import React, { Component } from 'react'
import {Button} from 'react-materialize'
export default class Form extends Component {
  handleChange(e){
    this.props.handleChange(e)
  }
  handleSubmit(e) {
    this.props.handleSubmit(e)
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>Title:
          <input
            name="currentTitle"
            type="text"
            value={this.props.currentTitle}
            onChange={this.props.handleChange}
          />
        </label>
        <textarea
          name="currentDetails"
          type="text"
          value={this.props.currentDetails}
          onChange={this.props.handleChange}
        />
        <Button floating large className='red' waves='light' icon='add' />
      </form>
    )
  }
}
