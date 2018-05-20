/**
 * @Author: Ali
 * @Date:   2018-05-18T13:13:17+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-05-20T20:08:04+02:00
 */
import React, { Component } from 'react'
import {Button,Input,Modal } from 'react-materialize'

export default class Form extends Component {
  handleChange(e){
    this.props.handleChange(e)
  }
  handleSubmit(e) {
    this.props.handleSubmit(e)
  }
  render() {
    return (
      <div className="form-inline">
        <Modal
          header='Add New Note'
          trigger={<Button floating large className='red' waves='light' icon='add' />}>
          <form onSubmit={this.props.handleSubmit}>
            <Input
              s={6}
              label="New Title"
              name="currentTitle"
              type="text"
              value={this.props.currentTitle}
              onChange={this.props.handleChange}
            />
            <Input
              s={6}
              label="New Note"
              name="currentDetails"
              type='textarea'
              value={this.props.currentDetails}
              onChange={this.props.handleChange}
            />
            <Button type='submit' onClick={() =>{ }}>Save</Button>
          </form>
        </Modal>
      </div>
    )
  }
}
