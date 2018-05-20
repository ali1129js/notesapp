/**
 * @Author: Ali
 * @Date:   2018-05-18T13:13:07+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-05-20T17:21:38+02:00
 */
import React from 'react'
import { Navbar, NavItem } from 'react-materialize'
 const Header = props => {
   return (
     <Navbar brand={props.name} right>
       <NavItem>Getting started</NavItem>
       <NavItem href='https://github.com/ali1129js'>Components</NavItem>
     </Navbar>
   )
 }
export default Header
