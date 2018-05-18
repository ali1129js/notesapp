/**
 * @Author: Ali
 * @Date:   2018-05-18T13:13:17+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-05-18T14:05:52+02:00
 */
import React, { Component } from 'react'
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
        <button type='submit'> Add note </button>
      </form>
    )
  }
}
