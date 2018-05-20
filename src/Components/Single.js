/**
 * @Author: Ali
 * @Date:   2018-05-18T13:19:08+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-05-20T17:14:43+02:00
 */
import React from 'react'
import {Card, Col} from 'react-materialize'
const Single = props => {
  return (
    <Col
      m={6}
      s={12}>
      <Card className='blue-grey darken-1' textClassName='white-text' title={props.note.title}>
        {props.note.details}
      </Card>
    </Col>
  )
}
export default Single
