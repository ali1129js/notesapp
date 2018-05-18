/**
 * @Author: Ali
 * @Date:   2018-05-18T13:19:08+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-05-18T13:39:06+02:00
 */
import React from 'react'

const Single = props => {
  return (
    <div>
      <h3> {props.note.title} </h3>
      <div> {props.note.details} </div>
    </div>
  )
}
export default Single
