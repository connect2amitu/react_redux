import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
          <li>
            <NavLink to="/">Home</NavLink>&nbsp;
            <NavLink to="/user">User</NavLink>&nbsp;
          </li>
        </ul>
      </nav>
    )
  }
}
